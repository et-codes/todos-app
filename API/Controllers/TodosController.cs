using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Core.Entities;
using Core.Database;
using API.Services;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodosController : ControllerBase
    {
        private readonly TodoDbContext _context;
        private readonly ITodoQueryService _todoQueryService;
        private readonly ITodoCreationService _todoCreationService;
        private readonly ITodoUpdateService _todoUpdateService;
        private readonly ITodoDeleteService _todoDeleteService;

        public TodosController(
            TodoDbContext context, 
            ITodoQueryService todoQueryService, 
            ITodoCreationService todoCreationService, 
            ITodoUpdateService todoUpdateService, 
            ITodoDeleteService todoDeleteService
        )
        {
            _context = context;
            _todoQueryService = todoQueryService;
            _todoCreationService = todoCreationService;
            _todoUpdateService = todoUpdateService;
            _todoDeleteService = todoDeleteService;
        }

        [HttpGet]
        public async Task<IEnumerable<TodoEntity>> GetAll()
        {
            return await _todoQueryService.GetAll();
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(TodoEntity), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetById(Guid id)
        {
            var todo = await _todoQueryService.GetById(id);
            return Ok(todo);
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<IActionResult> Create(TodoEntity todoEntity)
        {
            var newTodo = await _todoCreationService.Create(todoEntity);
            return CreatedAtAction(nameof(GetById), new {id = newTodo.Id}, newTodo);
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Update(Guid id, TodoEntity todo)
        {
            await _todoUpdateService.Update(id, todo);
            return NoContent();
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Delete(Guid id)
        {
            await _todoDeleteService.Delete(id);
            return NoContent();
        }
    }
}
