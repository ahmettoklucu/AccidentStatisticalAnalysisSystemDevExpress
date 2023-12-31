using AccidentStatisticalAnalysisSystemDevExpress.Models.ResponseModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Net.Http;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using static DevExpress.Xpo.Helpers.AssociatedCollectionCriteriaHelper;

namespace AccidentStatisticalAnalysisSystemDevExpress.Controllers
{
    public class AdminUserController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public AdminUserController(IHttpClientFactory httpClientFactory)
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
        public async Task<JsonResult> GetAll()
        {
            string cookieName = "JWTToken";
            string cookieValue = HttpContext.Request.Cookies[cookieName];
            cookieValue = cookieValue.Replace("\\", "");
            cookieValue = cookieValue.Replace("\"", "");
            var client1 = _httpClientFactory.CreateClient();
            client1.DefaultRequestHeaders.Add("Authorization", $"Bearer {cookieValue}");
            var response1 = await client1.GetAsync("http://localhost:5056/api/User/GetAll");
            if (response1.IsSuccessStatusCode)
            {
                var jsonResponse1 = await response1.Content.ReadAsStringAsync();
                List<GetAllUserResponse> result = JsonConvert.DeserializeObject<List<GetAllUserResponse>>(jsonResponse1);
                
 
                return Json(result);
            }
            else
            {
                return Json(null);
            }
        }
      

    }
}
