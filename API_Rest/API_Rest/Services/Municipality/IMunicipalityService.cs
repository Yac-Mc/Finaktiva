using API_Rest.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API_Rest.Services.Municipality
{
    public interface IMunicipalityService
    {
        Task<GenericResponse<IEnumerable<Models.Entities.Municipality>>> GetAllMunicipalities();
        Task<GenericResponse<bool>> InsertAsync(Models.Entities.Municipality municipality);
        Task<GenericResponse<bool>> DeleteRegisterAsync(int id);
        Task<GenericResponse<bool>> EditAsync(int id, Models.Entities.Municipality municipality);
    }
}
