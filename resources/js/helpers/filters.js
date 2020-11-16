import Moment from 'moment/moment'
import Vue from 'vue'

Vue.filter('formatdate', function (value) {
  return Moment(value).format('DD-MM-YYYY')
})

Vue.filter('uppercase', function (value) {
  return value.toUpperCase()
})

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = String(value).toLowerCase()
  return value.replace(/(^|\s)\S/g, function (match) {
    return match.toUpperCase()
  })
})

Vue.filter('currency', function (value) {
  let val = parseFloat(value)
  if (isNaN(val)) {
    return null
  }
  return Intl.NumberFormat(undefined, {maximumFractionDigits: 2}).format(val)
})

Vue.filter('sizeInMB', function (value) {
  return (value / 1024 / 1024).toFixed(3) + ' MB'
})
