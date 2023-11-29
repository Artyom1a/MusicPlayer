using MySql.Data.MySqlClient;

namespace ServerApp.Repositories
{

    public abstract class BaseRepository
    {
        protected readonly MySqlConnection m_Connection;

        public BaseRepository(MySqlConnection connection)
        {
            m_Connection = connection;
        }
    }

}
