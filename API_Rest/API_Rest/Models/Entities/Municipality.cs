
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API_Rest.Models.Entities
{
    [Table("Municipality", Schema = "dbo")]
    public class Municipality
    {
        public int Id { get; set; }
        [Key]
        public string Code { get; set; }

        public string Name { get; set; }

        public bool State { get; set; }
    }
}
