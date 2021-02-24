using API_Rest.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API_Rest.Services.Region
{
    public interface IRegionService
    {
        Task<GenericResponse<IEnumerable<Models.Entities.Region>>> GetAllRegions();
    }
}
