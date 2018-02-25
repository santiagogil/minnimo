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
  var ms = modularScale({ratios: [state.sizes.ratio], bases: [state.sizes.base]})
  var parsed = {
    imgheight: 960 * ms(-1),
    xxs: ms(-3),
    xs: ms(-2),
    s: ms(-1),
    m: ms(0),
    l: ms(1),
    xl: ms(2),
    xxl: ms(3)
  }
  var sizes = xtend(state.sizes, parsed)
  var newstate = state
  newstate.sizes = sizes
  process.stdout.write(Mustache.render(template, newstate))
}
