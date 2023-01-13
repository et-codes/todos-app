using Core.Common.Exceptions;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;

namespace Core.Common.Extensions
{
    public static class DbContextExtensions
    {
        public static async Task<T> FindAsyncOrThrowNotFound<T>(this DbSet<T> set, Guid id) where T: class
        {
            var entity = await set.FindAsync(id);

            if (entity == null) 
            {
                throw new NotFoundException($"{typeof(T).Name} {id} not found.");
            }

            return entity;
        }
    }
}
