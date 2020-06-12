import Mock from "mockjs"

export default Mock.mock("/tableListMock", "get", {

    "success": true,
    "data": {
        "tableList|5": [
            {
                "key|+1": 1,
                "userName": "@cname",
                "sex|1": ["male","female"],
                "state|1": ["0","1"],
                "hobby|1": ["唱","跳","Rap","篮球"],
                "birthday": "@date('yyyy-MM-dd')",
                "address|1": ["莫斯科","渥太华","北京","华盛顿","巴西利亚","堪培拉"],
                "time|+1": "@time('HH:mm:ss')"
            }
        ]
    },
    "message": "返回成功"
});