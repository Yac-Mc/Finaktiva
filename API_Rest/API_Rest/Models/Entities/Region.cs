using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API_Rest.Models.Entities
{
    [Table("Region", Schema = "dbo")]
    public class Region
    {
        [Key]
        public int Code { get; set; }

        public string Name { get; set; }
    }
}
