import Mock from "mockjs"

export default Mock.mock("/orderListMock", "get", {

    "success": true,
    "data": {
        "orderList|10": [
            {
                "id|+1": 1,
                "orderSn": /T180[0-9]{6}/,
                "bikeSn": "800116090",
                "userId": 908352,
                "userName": "@cname",
                "mobile": /1[0-9]{10}/,
                "distance": 2000,
                "totalTime": 4000,
                "status|1-2": 1,
                "startTime": "@datetime",
                "endTime": "@datetime",
                "totalFee": 1000,
                "userPay": 300
            }
        ],
        "page|1-9": 1,
        "pageSize": 10,
        "totalCount": 85,
        "pageCount": 9
    },
    "message": "返回成功"
});