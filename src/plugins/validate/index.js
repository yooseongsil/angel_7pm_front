import Vue from 'vue'
import { ValidationProvider, ValidationObserver, localize } from 'vee-validate'
import './customRules.js'
import ko from 'vee-validate/dist/locale/ko.json'
localize('ko', ko)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
