using API_Rest.Models;
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
        public RegionService(IGenericRepository<Models.Entities.Region> region)
        {
            _region = region;
        }

        public async Task<GenericResponse<IEnumerable<Models.Entities.Region>>> GetAllRegions()
        {
            GenericResponse<IEnumerable<Models.Entities.Region>> result = new GenericResponse<IEnumerable<Models.Entities.Region>>()
            {
                Result = await _region.GetAllAsync()
            };
            return result;
        }
    }
}
