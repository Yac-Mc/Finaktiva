using API_Rest.Models;
using API_Rest.Models.Queries;
using API_Rest.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_Rest.Services.Municipality
{
    public class MunicipalityService : IMunicipalityService
    {
        private readonly IGenericRepository<Models.Entities.Municipality> _municipality;
        private readonly IGenericRepository<Models.Entities.Region> _region;
        public MunicipalityService(IGenericRepository<Models.Entities.Municipality> municipality, IGenericRepository<Models.Entities.Region> region)
        {
            _municipality = municipality;
            _region = region;
        }

        public async Task<GenericResponse<IEnumerable<Models.Entities.Municipality>>> GetAllMunicipalities()
        {
            GenericResponse<IEnumerable<Models.Entities.Municipality>> result = new GenericResponse<IEnumerable<Models.Entities.Municipality>>()
            {
                Result = await _municipality.GetAllAsync()
            };

            return result;
        }

        public async Task<GenericResponse<bool>> InsertAsync(Models.Entities.Municipality municipality)
        {
            municipality.State = (municipality.RegionCode == null && municipality.State) ? false : municipality.State;
            bool exists = ValidateMunicipalityInRegion(municipality);

            if (!ValidateMunicipalityInRegion(municipality))
                await _municipality.InsertAsync(municipality);

            GenericResponse<bool> result = new GenericResponse<bool>()
            {
                Message = exists ? "La región especificada ya tiene asiganado el municipio" : "Municipio agregado con éxito",
                Result = exists
            };

            return result;
        }

        private bool ValidateMunicipalityInRegion(Models.Entities.Municipality municipality)
        {
            if (municipality.RegionCode != null)
            {
                List<Filter> listFilters = new List<Filter>
                {
                    new Filter() { Order = 1, Column = "RegionCode", Operator = "=", Value = municipality.RegionCode.ToString(), Condition = "AND" },
                    new Filter() { Order = 2, Column = "Code", Operator = "=", Value = municipality.Code }
                };

                return _municipality.GetAllByFilterAsync(listFilters).Result.Any();
            }

            return false;
        }
    }
}
