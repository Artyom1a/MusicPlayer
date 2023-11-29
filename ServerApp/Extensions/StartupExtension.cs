using MySql.Data.MySqlClient;
using ServerApp.Repositories;
using ServerApp.Services;
using System.Configuration;

namespace ServerApp.Extensions
{

    public static class StartupExtension
    {
        public static void AddRepositories(this IServiceCollection services, string connectionString)
        {
            services.AddSingleton(_ => new MySqlConnection(connectionString));
            services.AddTransient<UserRepository>();
        }

        public static void AddServices(this IServiceCollection services)
        {

            services.AddTransient<UserServices>();
            services.AddTransient<AccountService>();
        }


    }
}