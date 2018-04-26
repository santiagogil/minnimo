#!/usr/bin/env node

var concat = require('concat-stream')
var xtend = require('xtend')
var modularScale = require('modular-scale')
var Mustache = require('mustache')
var template = require('./main.js')()
var yaml = require('js-yaml')

process.stdin.pipe(concat(modscale))

function modscale (data) {
  var state = yaml.load(data)
  var ms = modularScale({ratio: state.sizes.ratio, base: state.sizes.base})
  var parsed = {
    imgheight: 960 * ms(-1, true),
    fullimgheight: 100 * ms(-1, true),
    xxs: ms(-3, true),
    xs: ms(-2, true),
    s: ms(-1, true),
    m: ms(0, true),
    l: ms(1, true),
    xl: ms(2, true),
    xxl: ms(3, true)
  }
  var sizes = xtend(state.sizes, parsed)
  var newstate = state
  newstate.sizes = sizes
  process.stdout.write(Mustache.render(template, newstate))
}
