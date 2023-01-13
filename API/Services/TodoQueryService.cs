using Core.Common.Exceptions;
using Core.Common.Extensions;
using Core.Database;
using Core.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Services
{
    public interface ITodoQueryService
    {
        Task<IEnumerable<TodoEntity>> GetAll();
        Task<TodoEntity> GetById(Guid id);
    }

    public class TodoQueryService : ITodoQueryService
    {
        private readonly TodoDbContext _context;

        public TodoQueryService(TodoDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<TodoEntity>> GetAll()
        {
            return await _context.Todos.OrderBy(todo => todo.CreatedOn).ToListAsync();
        }

        public async Task<TodoEntity> GetById(Guid id)
        {
            return await _context.Todos.FindAsyncOrThrowNotFound(id);
        }
    }
}
