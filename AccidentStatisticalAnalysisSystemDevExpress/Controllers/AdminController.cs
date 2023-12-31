
using AccidentStatisticalAnalysisSystemDevExpress.Models.RequestModel;
using AccidentStatisticalAnalysisSystemDevExpress.Models.ResponseModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;

namespace AccidentStatisticalAnalysisSystemDevExpress.Controllers
{
    public class AdminController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public AdminController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }
        public async Task<IActionResult> Index()
        {
            string cookieName = "JWTToken";
            string cookieValue = HttpContext.Request.Cookies[cookieName];
            cookieValue = cookieValue.Replace("\\", "");
            cookieValue = cookieValue.Replace("\"", "");
            var client = _httpClientFactory.CreateClient();
            var jsonData = JsonConvert.SerializeObject(new { Token = cookieValue });
            StringContent content = new StringContent(jsonData, Encoding.UTF8, "application/json");
            client.DefaultRequestHeaders.Add("Authorization", $"Bearer {cookieValue}");
            var response = await client.PostAsync("http://localhost:5056/api/User/RenavalToken", content);

            if (response.IsSuccessStatusCode)
            {

                if (!string.IsNullOrEmpty(cookieValue))
                {
                    
                    var jsonResponse = await response.Content.ReadAsStringAsync();
                    var jsonresult = JsonConvert.SerializeObject(jsonResponse.Replace("/", ""));
                    Response.Cookies.Append(cookieName, jsonresult, new CookieOptions
                    {
                        HttpOnly = true,
                        Secure = true,
                        SameSite = SameSiteMode.Strict,
                        MaxAge = TimeSpan.FromMinutes(20)
                    });
                    return View();
                }
                else
                {
                    var errorString = "Belirtilen cookie bulunamadı.";
                    return RedirectToAction("Warning", "Home");
                }

            }

            else
            {
                var errorString = response.Content.ReadAsStringAsync();
                return RedirectToAction("Warning", "Home");

            }

        }
        public IActionResult Login()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginRequestModel login)
        {
            var client = _httpClientFactory.CreateClient();
            var jsonData = JsonConvert.SerializeObject(login);
            StringContent content = new StringContent(jsonData, Encoding.UTF8, "application/json");
            var response = await client.PostAsync("http://localhost:5056/api/User/Login", content);

            if (response.IsSuccessStatusCode)
            {
                var jsonResponse = await response.Content.ReadAsStringAsync();
                var tokenObject = JsonConvert.DeserializeObject<TokenResponseModel>(jsonResponse);
                Response.Cookies.Append("JWTToken", tokenObject.Token, new CookieOptions
                {
                    HttpOnly = true,
                    Secure = true,
                    SameSite = SameSiteMode.Strict,
                    MaxAge = TimeSpan.FromMinutes(20)
                });
                Response.Cookies.Append("RoleId", tokenObject.RoleId.ToString(), new CookieOptions
                {
                    //HttpOnly = true,
                    //Secure = true,
                    SameSite = SameSiteMode.Strict,
                    MaxAge = TimeSpan.FromMinutes(20)
                });
                return Ok(tokenObject);
            }
            else
            {
                var errorString = await response.Content.ReadAsStringAsync();
                return BadRequest(errorString);
            }
        }
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Register(UserResponseModel userResponseModele)
        {

            var client = _httpClientFactory.CreateClient();
            var jsonData = JsonConvert.SerializeObject(userResponseModele);
            StringContent content = new StringContent(jsonData, Encoding.UTF8, "application/json");
            var responseMessage = await client.PostAsJsonAsync("http://localhost:5056/api/User/Register", content);

            if (responseMessage.IsSuccessStatusCode)
            {
                return Json(responseMessage);
            }
            else
            {
                TempData["errorMessage"] = $"Bir hata ile karşılaşıldı.Hata kodu{responseMessage.StatusCode}";
                return Json(TempData);
            }

        }
        public IActionResult GetAll()
        {
            return View();
        }
    }
}
