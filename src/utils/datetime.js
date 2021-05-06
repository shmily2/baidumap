/**
 * 时间日期相关操作
 */


/**
 * 时间格式化
 * 将 2018-09-23T11:54:16.000+0000 格式化成 2018/09/23 11:54:16
 * @param dateline 国际化日期格式
 */
 export function format(dateline) {
  return formatWithSeparator(dateline, "/", ":");
}

/**
 * 时间格式化
 * 将 2018-09-23T11:54:16.000+0000 格式化成类似 2018/09/23 11:54:16
 * 可以指定日期和时间分隔符
 * @param  国际化日期格式
 */
export function formatWithSeparator(dateline, dateSeparator, timeSeparator, type) {
  if (dateline != null) {
    const dateMat = new Date(dateline);
    const year = dateMat.getFullYear();
    const month =dateMat.getMonth() + 1 < 10 ? "0" + (dateMat.getMonth() + 1): dateMat.getMonth() + 1;
    const day = dateMat.getDate() < 10 ?"0"+(dateMat.getDate()) :dateMat.getDate();
    const hh = dateMat.getHours()< 10 ? "0" +(dateMat.getHours()) :dateMat.getHours();
    const mm = dateMat.getMinutes()< 10 ? "0" +(dateMat.getMinutes()) : dateMat.getMinutes();
    const ss = dateMat.getSeconds()< 10 ? "0" +(dateMat.getSeconds()) :dateMat.getSeconds();
    let timeFormat = year + dateSeparator + month + dateSeparator + day;
    if (timeSeparator) {
      timeFormat = timeFormat + " " + hh + timeSeparator + mm + timeSeparator + ss;
    }
    if (type == "year") {
      return year;
    } else if (type == "month") {
      return year + dateSeparator + month;
    }
    return timeFormat;
  }
}