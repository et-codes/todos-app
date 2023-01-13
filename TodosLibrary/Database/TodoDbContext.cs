using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Core.Database
{
    public class TodoDbContext : DbContext
    {
        public TodoDbContext(DbContextOptions<TodoDbContext> options)
            : base(options)
        {
        }

        public DbSet<TodoEntity> Todos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TodoEntity>()
                .Property(t => t.IsComplete)
                .HasDefaultValue(false);

            modelBuilder.Entity<TodoEntity>()
                .Property(t => t.CreatedOn)
                .HasDefaultValueSql("now()");
        }
    }
}
