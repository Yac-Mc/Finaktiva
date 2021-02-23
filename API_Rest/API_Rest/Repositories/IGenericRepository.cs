using API_Rest.Models.Queries;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API_Rest.Repositories
{
    public interface IGenericRepository<T>
    {
        Task<IEnumerable<T>> GetAllAsync(bool withColums = true);
        Task<IEnumerable<T>> GetAllByFilterAsync(List<Filter> filters, bool withColums = true);
        Task<Pagination<T>> GetAllPaginationByFilterAsync(Pagination<T> pagination, bool withColums = true);
        Task UpdateByIdAsync(T t, string id);
        Task DeleteByIdAsync(List<Filter> filters);
        Task InsertAsync(T t);
        Task<int> InsertListAsync(IEnumerable<T> list);
    }
}
