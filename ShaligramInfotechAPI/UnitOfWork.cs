using ShaligramInfotechAPI.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Linq;
using System.Web;

namespace ShaligramInfotechAPI
{
    public class UnitOfWork
    {
        /// <summary>
        /// The _context
        /// </summary>
        public ShaligramInfotechEntities _context = null;
        /// <summary>
        /// Initializes a new instance of the <see cref="UnitOfWork"/> class.
        /// </summary>
        public UnitOfWork()
        {
            _context = new ShaligramInfotechEntities();
        }


        #region Public member methods...

        /// <summary>
        /// SQLs the query.
        /// </summary>
        /// <typeparam name="TEntity">The type of the entity.</typeparam>
        /// <param name="sql">The SQL.</param>
        /// <param name="parameters">The parameters.</param>
        /// <returns>TEntity</returns>
        public IEnumerable<TEntity> SQLQuery<TEntity>(string sql, params object[] parameters) where TEntity : class
        {
            return _context.Database.SqlQuery<TEntity>(sql, parameters);
        }

        /// <summary>
        /// SQLs the query.
        /// </summary>
        /// <typeparam name="TEntity">The type of the entity.</typeparam>
        /// <param name="sql">The SQL.</param>
        /// <param name="parameters">The parameters.</param>
        /// <returns>TEntity</returns>
        public int SQLNonQuery(string sql, params object[] parameters)
        {
            return _context.Database.SqlQuery<int>(sql, parameters).FirstOrDefault();
        }

        public string SQLStringReturn(string sql, params object[] parameters)
        {
            return _context.Database.SqlQuery<string>(sql, parameters).FirstOrDefault();
        }



        /// <summary>
        /// Save method.
        /// </summary>
        public void Save()
        {
            try
            {

                _context.SaveChanges();


            }
            catch (DbEntityValidationException e)
            {
                var outputLines = new List<string>();
                foreach (var eve in e.EntityValidationErrors)
                {
                    outputLines.Add(string.Format("{0}: Entity of type \"{1}\" in state \"{2}\" has the following validation errors:", DateTime.Now, eve.Entry.Entity.GetType().Name, eve.Entry.State));
                    foreach (var ve in eve.ValidationErrors)
                    {
                        outputLines.Add(string.Format("- Property: \"{0}\", Error: \"{1}\"", ve.PropertyName, ve.ErrorMessage));
                    }
                }

                //System.IO.File.AppendAllLines(@"C:\errors.txt", outputLines);
                throw e;
            }
        }

        #endregion

        #region private dispose variable declaration...
        /// <summary>
        /// The _disposed
        /// </summary>
        private bool _disposed = false;
        #endregion


        #region Implementing IDiosposable...

        /// <summary>
        /// Dispose method
        /// </summary>
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        #endregion

        /// <summary>
        /// Protected Virtual Dispose method
        /// </summary>
        /// <param name="disposing"><c>true</c> to release both managed and unmanaged resources; <c>false</c> to release only unmanaged resources.</param>
        protected virtual void Dispose(bool disposing)
        {
            if (!this._disposed)
            {
                if (disposing)
                {
                    // Debug.WriteLine("UnitOfWork is being disposed");
                    _context.Dispose();
                }
            }

            this._disposed = true;
        }
    }
}