namespace Core.Entities
{
    public class TodoEntity
    {
        public Guid Id { get; set; }
        public string Text { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime? DueDate { get; set; }
        public bool IsComplete { get; set; }
    }
}