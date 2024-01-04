"use strict";(self.webpackChunkpa_openapi_docs=self.webpackChunkpa_openapi_docs||[]).push([[2248],{1837:e=>{e.exports=JSON.parse('{"url":"redocusaurus/plugin-redoc-0.yaml","themeId":"theme-redoc","isSpecFile":true,"spec":{"openapi":"3.0.0","info":{"title":"Account API","version":""},"tags":[{"name":"Ad accounts"},{"name":"Manager accounts"}],"paths":{"/{version}/adAccounts":{"get":{"tags":["Ad accounts"],"summary":"List of my ad accounts","operationId":"listUsingGET","parameters":[{"name":"page","in":"query","description":"Page number (default: 0)","required":false,"schema":{"type":"string"}},{"name":"size","in":"query","description":"Page size (default: 10, max: 100)","required":false,"schema":{"type":"string"}},{"name":"version","in":"path","description":"API version","required":true,"schema":{"type":"number","format":"float","default":1}}],"responses":{"200":{"description":"OK","content":{"*/*":{"schema":{"$ref":"#/components/schemas/Page_OpenAdAccount_"}}}}},"deprecated":false}},"/{version}/adAccounts/{adAccountNo}":{"get":{"tags":["Ad accounts"],"summary":"Get an ad account","operationId":"getUsingGET","parameters":[{"name":"AccessManagerAccountNo","in":"header","description":"Manager account ID that has access to the ad account","required":false,"schema":{"type":"integer","format":"int64"}},{"name":"adAccountNo","in":"path","description":"adAccountNo","required":true,"schema":{"type":"integer","format":"int64"}},{"name":"version","in":"path","description":"API version","required":true,"schema":{"type":"number","format":"float","default":1}}],"responses":{"200":{"description":"OK","content":{"*/*":{"schema":{"$ref":"#/components/schemas/OpenAdAccount"}}}}},"deprecated":false}},"_comment":"#################### /\uad00\ub9ac\uacc4\uc815 \uad6c\ubd84\uc120 ####################","/{version}/managerAccounts/{managerAccountNo}":{"get":{"tags":["Manager accounts"],"summary":"Get a manager account","description":"Returns manager account information including its child manager accounts and ad account numbers.","operationId":"getUsingGET","parameters":[{"name":"AccessManagerAccountNo","in":"header","description":"Manager account ID that has access to the manager account","required":true,"schema":{"type":"integer","format":"int64"}},{"name":"managerAccountNo","in":"path","description":"managerAccountNo","required":true,"schema":{"type":"integer","format":"int64"}},{"name":"version","in":"path","description":"API version","required":true,"schema":{"type":"number","format":"float","default":1}}],"responses":{"200":{"description":"OK","content":{"*/*":{"schema":{"$ref":"#/components/schemas/OpenManagerAccount"}}}}},"deprecated":false}}},"servers":[{"url":"//openapi.naver.com/v1/ad-api"}],"components":{"schemas":{"OpenAdAccount":{"type":"object","properties":{"createdAt":{"type":"string","format":"date-time","description":"Creation time"},"disabled":{"type":"boolean","description":"Indicates whether the account is disabled."},"name":{"type":"string","description":"Ad account name"},"no":{"type":"integer","format":"int64","description":"Ad account ID"},"role":{"type":"string","description":"Permission level","enum":["MASTER","STANDARD","READ_ONLY","PERFORMANCE_MANAGEMENT"]},"updatedAt":{"type":"string","format":"date-time","description":"Last update time"}},"title":"OpenAdAccount"},"OpenApiPageable":{"type":"object","properties":{"page":{"type":"integer","format":"int32","description":"Page number (default: 0)"},"size":{"type":"integer","format":"int32","description":"Page size (default: 10, max: 100)"}},"title":"OpenApiPageable"},"Sort":{"type":"object","properties":{"empty":{"type":"boolean"},"sorted":{"type":"boolean"},"unsorted":{"type":"boolean"}},"title":"Sort"},"_comment":"#################### \uad11\uace0/\uad00\ub9ac\uacc4\uc815 \uad6c\ubd84\uc120 ####################","OpenManagerAccount":{"type":"object","properties":{"childAdAccountNos":{"type":"array","description":"Child ad account IDs","items":{"type":"integer","format":"int64"}},"childManagerAccounts":{"type":"array","description":"Child manager accounts","items":{"$ref":"#/components/schemas/OpenManagerAccount"}},"createdAt":{"type":"string","format":"date-time","description":"Creation time"},"disabled":{"type":"boolean","description":"Indicates whether the account is disabled."},"name":{"type":"string","description":"Manager account name"},"no":{"type":"integer","format":"int64","description":"Manager account ID"},"updatedAt":{"type":"string","format":"date-time","description":"Last update time"}},"title":"OpenManagerAccount"},"Page_OpenAdAccount_":{"type":"object","properties":{"content":{"type":"array","items":{"$ref":"#/components/schemas/OpenAdAccount"}},"empty":{"type":"boolean"},"first":{"type":"boolean"},"last":{"type":"boolean"},"number":{"type":"integer","format":"int32"},"numberOfElements":{"type":"integer","format":"int32"},"pageable":{"$ref":"#/components/schemas/OpenApiPageable"},"size":{"type":"integer","format":"int32"},"sort":{"$ref":"#/components/schemas/Sort"},"totalElements":{"type":"integer","format":"int64"},"totalPages":{"type":"integer","format":"int32"}},"title":"Page\xabOpenAdAccount\xbb"}}}}}')}}]);