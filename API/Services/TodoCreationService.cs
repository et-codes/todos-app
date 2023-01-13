using Core.Database;
using Core.Entities;

namespace API.Services
{
    public interface ITodoCreationService
    {
        Task<TodoEntity> Create(TodoEntity todo);
    }

    public class TodoCreationService : ITodoCreationService
    {
        private readonly TodoDbContext _context;

        public TodoCreationService(TodoDbContext context)
        {
            _context = context;
        }

        public async Task<TodoEntity> Create(TodoEntity todo)
        {
            await _context.Todos.AddAsync(todo);
            await _context.SaveChangesAsync();

            return todo;
        }
    }
}
