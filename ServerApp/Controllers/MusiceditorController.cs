using Microsoft.AspNetCore.Mvc;

namespace ServerApp.Controllers
{
    public class MusiceditorController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
