using API_Rest.Models;
using API_Rest.Services.Region;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API_Rest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegionController : ControllerBase
    {
        private readonly IRegionService _regionService;

        public RegionController(IRegionService regionService)
        {
            _regionService = regionService;
        }

        // GET: api/<RegionController>
        [HttpGet]
        public async Task<GenericResponse<IEnumerable<Models.Entities.Region>>> Get()
        {
            return await _regionService.GetAllRegions();
        }

        // POST api/<RegionController>
        [HttpPost("insert")]
        public async Task<GenericResponse<bool>> PostInsert(Models.Entities.Region region)
        {
            return await _regionService.InsertAsync(region);
        }

        // PUT api/<RegionController>/5
        [HttpPut("{id}")]
        public async Task<GenericResponse<bool>> Put(int id, Models.Entities.Region region)
        {
            return await _regionService.EditAsync(id, region);
        }

        // DELETE api/<RegionController>/5
        [HttpDelete("{id}")]
        public async Task<GenericResponse<bool>> Delete(int id)
        {
            return await _regionService.DeleteRegisterAsync(id);
        }
    }
}
