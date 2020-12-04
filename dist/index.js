
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./sassy-components.cjs.production.min.js')
} else {
  module.exports = require('./sassy-components.cjs.development.js')
}
