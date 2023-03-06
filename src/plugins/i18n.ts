import { en as en$ } from 'vuetify/locale'
import {createI18n} from 'vue-i18n';

const en = {
  $vuetify: { ...en$ },
  titles: {
    sources: 'Sources'
  },
  sources: 'no sources | one source | {count} sources'
}

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  legacy: false,
  messages: { en }
})
