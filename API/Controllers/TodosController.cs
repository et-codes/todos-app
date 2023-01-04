using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodosLibrary;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodosController : ControllerBase
    {
        private readonly TodoDbContext _context;

        public TodosController(TodoDbContext context) 
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Todo>> Get()
        {
            return await _context.Todos.ToListAsync();
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(Todo), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetById(Guid id)
        {
            var todo = await _context.Todos.FindAsync(id);
            return todo == null ? NotFound() : Ok(todo);
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<IActionResult> Create(Todo todo)
        {
            await _context.Todos.AddAsync(todo);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new {id = todo.Id}, todo);
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Update(Guid id, Todo todo)
        {
            if (id != todo.Id)
            {
                return BadRequest();
            }
            else
            {
                _context.Entry(todo).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                return NoContent();
            }
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Delete(Guid id)
        {
            var todoToDelete = await _context.Todos.FindAsync(id);

            if (todoToDelete == null)
            {
                return NotFound();
            }
            else
            {
                _context.Todos.Remove(todoToDelete);
                await _context.SaveChangesAsync();

                return NoContent();
            }
        }
    }
}
