import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import enLocale from './en'
import zhLocale from './zh'
debugger
const messages = {
  en: Object.assign(enLocale, elementEnLocale),
  zh: Object.assign(zhLocale, elementZhLocale)
}
Vue.use(VueI18n)
debugger
const i18n = new VueI18n({
    locale: localStorage.getItem('locale') || 'zh',
    messages
})
console.log(i18n.locale)
export default i18n