using Core.Entities;

namespace Core.Database
{
    public class Seed
    {
        public static async Task SeedData(TodoDbContext context)
        {
            if (context.Todos.Any()) return;

            var todos = new List<TodoEntity>
            {
                new TodoEntity
                {
                    Text = "Sample todo 1",
                    DueDate = DateTime.UtcNow.AddDays(1),
                },
                new TodoEntity
                {
                    Text = "Sample todo 2",
                    DueDate = DateTime.UtcNow.AddDays(2),
                },
                new TodoEntity
                {
                    Text = "Sample todo 3",
                    DueDate = DateTime.UtcNow.AddDays(3),
                },
                new TodoEntity
                {
                    Text = "Sample todo 4",
                    DueDate = DateTime.UtcNow.AddDays(4),
                },
                new TodoEntity
                {
                    Text = "Sample todo 5",
                    DueDate = DateTime.UtcNow,
                    IsComplete = true,
                },
            };

            await context.Todos.AddRangeAsync(todos);
            await context.SaveChangesAsync();
        }
    }
}