using System;

namespace AccidentStatisticalAnalysisSystemDevExpress.Models.ResponseModel
{
    public class GetAllUserResponse
    {
        public Guid Id { get; set; }
        public string Role { get; set; }
        public string Name { get; set; }
        public string SureName { get; set; }
        public string UserName { get; set; }
        public string PhoneNumber { get; set; }
        public string EMail { get; set; }
        public bool IsDelete { get; set; }
    }
}
