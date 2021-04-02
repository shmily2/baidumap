/**
 * 时间日期相关操作
 */


/**
 * 时间格式化
 * 将 2018-09-23T11:54:16.000+0000 格式化成 2018/09/23 11:54:16
 * @param datetime 国际化日期格式
 */
export function format (datetime) {
  return formatWithSeperator(datetime, "/", ":");
}

/**
 * 时间格式化
 * 将 2018-09-23T11:54:16.000+0000 格式化成类似 2018/09/23 11:54:16
 * 可以指定日期和时间分隔符
 * @param datetime 国际化日期格式
 */
export function formatWithSeperator (datetime, dateSeprator, timeSeprator) {
  if (datetime != null) {
    const dateMat = new Date(datetime);
    const year = dateMat.getFullYear();
    const month = dateMat.getMonth() + 1 > 9 ? dateMat.getMonth()+1:"0"+(dateMat.getDate()+1);;
    const day = dateMat.getDate()>9?dateMat.getDate():"0"+dateMat.getDate();
    const hh = dateMat.getHours()>9?dateMat.getHours():"0"+dateMat.getHours();
    const mm = dateMat.getMinutes()>9?dateMat.getMinutes():"0"+dateMat.getMinutes();;
    const ss = dateMat.getSeconds()>9?dateMat.getSeconds():"0"+dateMat.getSeconds();;
    const timeFormat = year + dateSeprator + month + dateSeprator + day + " " + hh + timeSeprator + mm + timeSeprator + ss;
    return timeFormat;
  }
}
