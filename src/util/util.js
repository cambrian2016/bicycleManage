export default {
    formatDate(time) {
        if (!time) {
            return ""
        }

        let date = new Date(time);
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    },

    pagination(data,callback){
        let page={
            onChange:(current)=>{
                callback(current)
            },
            current:data.page,
            pageSize:data.pageSize,
            total:data.totalCount,
            showTotal:()=>{
                return "一共"+data.totalCount+"条";
            },
            // showQuickJumper:true
        };

        return page;
    }
}