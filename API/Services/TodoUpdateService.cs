using Core.Database;
using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Services
{
    public interface ITodoUpdateService
    {
        Task<TodoEntity> Update(Guid id, TodoEntity todo);
    }

    public class TodoUpdateService : ITodoUpdateService
    {
        public readonly TodoDbContext _context;

        public TodoUpdateService(TodoDbContext context)
        {
            _context = context;
        }

        public async Task<TodoEntity> Update(Guid id, TodoEntity todo)
        {
            if (id != todo.Id)
            {
                throw new BadHttpRequestException($"Parameter {id} does not match id of submitted object.");
            }

            _context.Entry(todo).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return todo;
        }
    }
}
