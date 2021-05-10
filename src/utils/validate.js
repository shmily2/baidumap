/**
 * 邮箱
 * @param {*} s
 */
 export function isEmail(s) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}
/**
 * @param {*} s
 */
//手机号码
export function isMobile(s) {
  return /^1[3456789]\d{9}$/.test(s)
}
/**
 * 电话号码
 */
export function isPhone(s) {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}
//手机号或固定电话 例子：0512-4432145
export function fixedTelephone(str) {
  const reg = /(\d{2,5}-\d{7,8}(-\d{1,})?)|(1[3456789]\d{9})/;
  return reg.test(str)
}
/**
 */
//合法url
export function isURL(str) {
  const reg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/
  return reg.test(str)
}

//正负数保留两位小数
export function Plusminus(s) {
  return /(^(-)?[1-9](\d+)?(\.\d{1,2})?$)|(^-?(0){1}$)|(^-?\d\.\d{1,2}?$)/.test(s)
}
//保留两位小数
export function decimal(s) {
  return /(^[1-9](\d+)?(\.\d{1,2})?$)|(^(0){1}$)|(^\d\.\d{1,2}?$)/.test(s)
}
export function profit(str) {
  const reg = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/
  return reg.test(str)
}
//数字大于等于0的正整数
export function number(s) {
  return /^[0-9]+$/.test(s)
}
// 数字大于0的正整数
export function integer(s) {
  return /^\+?[1-9][0-9]*$/.test(s)
}
//数字1~9正整数
export function numberbig(s) {
  return /^[1-9]+$/.test(s)
}
//腾讯QQ号：[1-9][0-9]{4,}腾讯QQ号从10000开始
export function qq(s) {
  return /^[1-9]\d{4,9}$/.test(s)
  // return /[1-9][0-9]{4,}/.test(s)
}
//微信只能6—20个字母、数字、下划线和减号，必须以字母开头（不区分大小写），不支持设置中文
export function weixin(s) {
  return /^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/.test(s)
}
//中国邮政编码中国邮政编码为6位数字
export function Postal(s) {
  return /[1-9]\d{5}(?!\d)/.test(s)
}
//匹配身份证
export function ID(s) {
  return /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(s)
}
// 只能输入数字和英文
export function isNumOrLetter(str) {
  const reg = /^[0-9a-zA-Z]*$/g
  return reg.test(str)
}
//中文数字字母下划线
export function isvalidcode(str) {
  const reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/
  return reg.test(str)
}
//数字字母下划线点
export function isvalidPut(str) {
  const reg = /^[a-zA-Z\d_.]+$/
  return reg.test(str)
}
//中文\英文\数字\下划线\点
export function isformat(str) {
  const reg = /^[\u4E00-\u9FA5a-zA-Z0-9_\.]+$/
  return reg.test(str)
}
// 中文英文字符、数据及标点
export function isspcing(str) {
  const reg = /^[a-zA-Z0-9\u4e00-\u9fa5\,，.。！!]+$/
  return reg.test(str)
}
//传真
export function isfax(str) {
  const reg = /^(\d{3,4}-)?\d{7,8}$/
  return reg.test(str)
}
//经度-180.0～+180.0（整数部分为0～180，必须输入1到5位小数）
export function islongitude(str) {
  const reg = /^[\-\+]?(0(\.\d{1,10})?|([1-9](\d)?)(\.\d{1,10})?|1[0-7]\d{1}(\.\d{1,10})?|180\.0{1,10})$/
  return reg.test(str)
}
//纬度： -90.0～+90.0（整数部分为0～90，必须输入1到5位小数）
export function islatitude(str) {
  //const reg = /^[\-\+]?([0-8]?\d{1}\.\d{1,5}|90\.0{1,5})$/
  const reg = /^(\-|\+)?([0-8]?\d{1}\.\d{0,6}|90\.0{0,6}|[0-8]?\d{1}|90)$/
  return reg.test(str)
}
//正则表达式校验最多两位小数的实数
export function isnumber(str) {
  const reg = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/
  return reg.test(str)
}
// 只能汉字（繁简）+ 字母
export function isChineseE(str) {
  const reg = /^[a-zA-Z\u4e00-\u9fa5]+$/
  return reg.test(str)
}
// 只能汉字（繁简）+ 字母 + 数字
export function isChineseEngN(str) {
  const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+$/
  return reg.test(str)
}
//特殊字符
export function patrn(str) {
  const reg = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/im;
  return reg.test(str)
}
// 百分比
export function checkNumber(str) {
  const reg = /^(\d|[1-9]\d|100)(\.\d{1,2})?$/;
  return reg.test(str)
}
// 保留4位小数
export function checkNumberFour(str) {
  const reg = /^(([1-9][0-9]*)|([0])|(([0]\.\d{1,4}|[1-9][0-9]*\.\d{1,4})))$/;
  return reg.test(str)
}

// 保留4位小数 大于0的数字
export function checkFour(str) {
  const reg = /^(([1-9][0-9]*)|(([0]\.\d{1,4}|[1-9][0-9]*\.\d{1,4})))$/;
  return reg.test(str)
}
//固定电话
export function regxIsPhone(s) {
  return /^0[\d]{2,3}-[\d]{7,8}$/.test(s)
}
//校验手机
export function regxMobile(s) {
  return /^0?1[3|4|5|8][0-9]\d{8}$/.test(s)
}
//大于等于0的数字；最多保留2位小数（10位整数）
export function regxPlusDecimal2(str) {
  const reg = /^(([0-9]|([1-9][0-9]{0,9}))((\.[0-9]{1,2})?))$/;
  return reg.test(str)
}

//大于等于0的数字；最多保留2位小数（16位整数）
export function regxPlusDecimal(str) {
  const reg = /^(([0-9]|([1-9][0-9]{0,15}))((\.[0-9]{1,2})?))$/;
  return reg.test(str)
}
// 不能输入空格 % _
export function isNull(str){
  return /^[^%_\s]*$/.test(str)
}