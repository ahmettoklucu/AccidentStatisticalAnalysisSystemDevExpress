namespace AccidentStatisticalAnalysisSystemDevExpress.Models.Helper
{
    public class HttpClientFactory : IHttpClientFactory
    {
        public HttpClient CreateClient(string name)
        {
            return new HttpClient();
        }
    }
}
