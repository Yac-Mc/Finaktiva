using API_Rest.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API_Rest.Services.Region
{
    public interface IRegionService
    {
        Task<GenericResponse<IEnumerable<Models.Entities.Region>>> GetAllRegions();
        Task<GenericResponse<bool>> InsertAsync(Models.Entities.Region region);
        Task<GenericResponse<bool>> EditAsync(int id, Models.Entities.Region region);
        Task<GenericResponse<bool>> DeleteRegisterAsync(int id);
    }
}
