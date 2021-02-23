using API_Rest.Models;
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
        public MunicipalityService(IGenericRepository<Models.Entities.Municipality> municipality)
        {
            _municipality = municipality;
        }

        public async Task<GenericResponse<IEnumerable<Models.Entities.Municipality>>> GetAllMunicipalities()
        {
            GenericResponse<IEnumerable<Models.Entities.Municipality>> result = new GenericResponse<IEnumerable<Models.Entities.Municipality>>()
            {
                Result = await _municipality.GetAllAsync()
            };
            return result;
        }
    }
}
