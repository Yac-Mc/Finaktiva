using API_Rest.Models;
using API_Rest.Models.Queries;
using API_Rest.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_Rest.Services.Region
{
    public class RegionService : IRegionService
    {
        private readonly IGenericRepository<Models.Entities.Region> _region;
        private readonly IGenericRepository<Models.Entities.Municipality> _municipality;
        public RegionService(IGenericRepository<Models.Entities.Region> region, IGenericRepository<Models.Entities.Municipality> municipality)
        {
            _region = region;
            _municipality = municipality;
        }

        public async Task<GenericResponse<IEnumerable<Models.Entities.Region>>> GetAllRegions()
        {
            GenericResponse<IEnumerable<Models.Entities.Region>> result = new GenericResponse<IEnumerable<Models.Entities.Region>>()
            {
                Result = await _region.GetAllAsync()
            };
            return result;
        }

        public async Task<GenericResponse<bool>> InsertAsync(Models.Entities.Region region)
        {
            bool exists = ValidateRegion(region);

            if (!exists)
                await _region.InsertAsync(region);

            GenericResponse<bool> result = new GenericResponse<bool>()
            {
                Message = exists ? "La región especificada ya existe" : "Región agregada con éxito",
                Result = exists
            };

            return result;
        }

        private bool ValidateRegion(Models.Entities.Region region)
        {
            List<Filter> listFilters = new List<Filter>
                {
                    new Filter() { Order = 1, Column = "Code", Operator = "=", Value = region.Code.ToString(), Condition = "OR" },
                    new Filter() { Order = 2, Column = "Name", Operator = "=", Value = region.Name }
                };

            return _region.GetAllByFilterAsync(listFilters).Result.Any();
        }

        public async Task<GenericResponse<bool>> DeleteRegisterAsync(int id)
        {
            await DeleteMunicipalitiesFromRegion(id);
            List<Filter> listFilters = new List<Filter>
            {
                new Filter() { Order = 1, Column = "Code", Operator = "=", Value = id.ToString() }
            };
            await _region.DeleteByIdAsync(listFilters);
            GenericResponse<bool> result = new GenericResponse<bool>()
            {
                Message = "El registro ha sido eliminado con éxito",
                Result = true
            };
            return result;
        }

        private async Task DeleteMunicipalitiesFromRegion(int codeRegion)
        {
            List<Filter> listFilters = new List<Filter>
            {
                new Filter() { Order = 1, Column = "RegionCode", Operator = "=", Value = codeRegion.ToString() }
            };
            await _municipality.DeleteByIdAsync(listFilters);
        }

        public async Task<GenericResponse<bool>> EditAsync(int id, Models.Entities.Region region)
        {
            await _region.UpdateByIdAsync(region, id.ToString());
            GenericResponse<bool> result = new GenericResponse<bool>()
            {
                Message = "El registro ha sido actualizado con éxito",
                Result = true
            };
            return result;
        }
    }
}
