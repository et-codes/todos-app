using Core.Common.Extensions;
using Core.Database;
using Core.Entities;

namespace API.Services
{
    public interface ITodoDeleteService
    {
        Task<TodoEntity> Delete(Guid id);
    }

    public class TodoDeleteService : ITodoDeleteService
    {
        private readonly TodoDbContext _context;

        public TodoDeleteService(TodoDbContext context)
        {
            _context = context;
        }

        public async Task<TodoEntity> Delete(Guid id)
        {
            var todoToDelete = await _context.Todos.FindAsyncOrThrowNotFound(id);

            _context.Todos.Remove(todoToDelete);
            await _context.SaveChangesAsync();

            return todoToDelete;
        }
    }
}
