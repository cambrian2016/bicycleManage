import Mock from "mockjs"

export default Mock.mock("/openCityMock", "get", {

    "success": true,
    "data": {
        "openCityList|10": [
            {
                "id|+1": 1,
                "name": "@city",
                "mode|1-2":1,
                "opMode|1-2":1,
                "franchiseeId":77,
                "franchiseeName":"松果自营",
                "cityAdmins|1-2":[{
                    "userName":"@cname",
                    "userId|+1":10001
                }],
                "openTime":"@datetime",
                "sysUserName":"@cname",
                "updateTime|+10086":1520476737000
            }
        ],
        "page":1,
        "pageSize":10,
        "totalCount":60,
        "pageCount":6
    },
    "message": "返回成功"
});