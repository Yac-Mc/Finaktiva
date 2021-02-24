using API_Rest.Models;
using API_Rest.Services.Municipality;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API_Rest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MunicipalityController : ControllerBase
    {
        private readonly IMunicipalityService _municipalityService;

        public MunicipalityController(IMunicipalityService municipalityService)
        {
            _municipalityService = municipalityService;
        }

        // GET: api/<MunicipalityController>
        [HttpGet]
        public async Task<GenericResponse<IEnumerable<Models.Entities.Municipality>>> Get()
        {
            return await _municipalityService.GetAllMunicipalities();
        }

        // GET api/<MunicipalityController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost("insert")]
        public async Task<GenericResponse<bool>> PostInsert(Models.Entities.Municipality municipality)
        {
            return await _municipalityService.InsertAsync(municipality);
        }

        // PUT api/<MunicipalityController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<MunicipalityController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
