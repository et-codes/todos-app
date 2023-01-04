using Microsoft.EntityFrameworkCore;

namespace TodosLibrary
{
    public class TodoDbContext : DbContext
    {
        public TodoDbContext(DbContextOptions<TodoDbContext> options)
            :base(options)
        {
        }

        public DbSet<Todo> Todos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Todo>()
                .Property(t => t.IsComplete)
                .HasDefaultValue(false);

            modelBuilder.Entity<Todo>()
                .Property(t => t.CreatedOn)
                .HasDefaultValueSql("now()");
        }
    }
}
