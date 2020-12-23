export function datetime() {
    var date = new Date()
    var hours = date.getHours();
    var min = date.getMinutes();
    var cnd = date.getSeconds();
    var time = fnW(hours) + ":" + fnW(min) + ":" + fnW(cnd);
    return time
}
function fnW(str) {//判断时分秒是否小于10，如过小于10，在前面加0
    var num;
    if (str >9) {
        num = str;
    }
    else {
        num = "0" + str;
    }
    return num;
}
