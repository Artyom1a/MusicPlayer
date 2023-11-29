using MySql.Data.MySqlClient;
using System.Data.Common;
using System.Text;
using ServerApp.Models.Repository;

namespace ServerApp.Repositories
{
    public class UserRepository : BaseRepository
    {
        private readonly string SQL_GET_ALL = "select Id,Name,Email,Password from users;";
        private const string SQL_insertItem = "insert into Users(NAME,Email,Password,Phone) values(?, ?, ?,?);";
        private readonly string SQL_GET_ALL_By_Email = "select Id,Name,Email,Password from Users where email=@email;";
        public UserRepository(MySqlConnection connection) : base(connection)
        {

        }

        public List<User> GetAll()
        {
            try
            {
                m_Connection.Open();
                MySqlCommand command = new MySqlCommand(SQL_GET_ALL, m_Connection);
                MySqlDataReader reader = command.ExecuteReader();
                List<User> users = new List<User>();

                while (reader.Read())
                {
                    users.Add(new User()
                    {
                        Id = reader.GetInt32(0),
                        Name = reader.GetString(1),
                        Email = reader.GetString(2),
                        Password = reader.GetString(3)
                    });
                }
                return users;
            }
            catch (MySqlException ex)
            {
                Console.WriteLine(ex);
                throw ex;
            }
            finally
            {
                m_Connection.Close();
            }
        }




        private void DynamicQuery(MySqlConnection conn, string script, params object[] item)
        {
            int startIndex = 0;
            int i = 0;
            var sb = new StringBuilder();
            while (startIndex < script.Length)
            {
                var endIndex = script.IndexOf('?', startIndex);
                if (endIndex == -1)
                {
                    sb.Append(script[startIndex..]);
                    break;
                }
                sb.Append(script[startIndex..endIndex]); //sb.Append(script.Substring(startIndex, endIndex - startIndex));
                sb.Append($"@pr{i++}");
                startIndex = endIndex + 1;
            }
            MySqlCommand command = new MySqlCommand(sb.ToString(), conn);
            for (i = 0; i < item.Length; i++)
            {
                command.Parameters.AddWithValue($"@pr{i}", item[i]);
            }
            command.ExecuteNonQuery();
        }


        public User GetByEmai(string email)
        {
            try
            {
                m_Connection.Open();
                MySqlCommand command = new MySqlCommand(SQL_GET_ALL_By_Email, m_Connection);
                command.Parameters.AddWithValue("@email", email);
                MySqlDataReader reader = command.ExecuteReader();
                if (reader.Read())
                {
                    User user = new User()
                    {
                        Id = reader.GetInt32(0),
                        Name = reader.GetString(1),
                        Email = reader.GetString(2),
                        Password = reader.GetString(3)
                    };
                    return user;
                }
                return null;
            }
            catch (MySqlException ex)
            {
                Console.WriteLine(ex);
                throw ex;
            }
            finally
            {
                m_Connection.Close();
            }
        }

        public void WriteNew(User user)
        {
            try
            {
                if (user == null) throw new ArgumentNullException(nameof(user));
                m_Connection.Open();
                if (m_Connection == null) throw new Exception("connection is null");

                DynamicQuery(m_Connection, SQL_insertItem, user.Name, user.Email, user.Password, user.Phone);


                //MySqlCommand command = new MySqlCommand(string.Format(SQL_insertItem, "(@name0, @surname0,@email0,@password0)"), m_Connection);
                //command.Parameters.AddWithValue("@name0", user.Name);
                //command.Parameters.AddWithValue("@email0", user.Email);
                //command.Parameters.AddWithValue("@password0", user.Password);
                //command.ExecuteNonQuery();
            }
            catch (MySqlException ex)
            {
                Console.WriteLine(ex);
                throw ex;
            }

            finally
            {
                m_Connection.Close();
            }
        }
    }
}


