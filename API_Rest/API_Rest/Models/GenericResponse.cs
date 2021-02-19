using Newtonsoft.Json;
using System.Net;

namespace API_Rest.Models
{
    public class GenericResponse<T>
    {
        public bool IsSuccessful { get; set; }
        public int StatusCode { get; set; }
        public string Message { get; set; }
        public T Result { get; set; }
        public GenericResponse()
        {
            StatusCode = (int)HttpStatusCode.OK;
            IsSuccessful = true;
        }
        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}
