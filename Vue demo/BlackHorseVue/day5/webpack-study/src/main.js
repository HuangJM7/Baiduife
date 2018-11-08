import $ from 'jquery'

import './css/index.css'
import './css/index.less'
import './css/index.scss'

// $(function () {
//     $('li:even').css('backgroudColor', 'blue');
//     $('li:odd').css('backgroudColor', 'red')
// })


$(function () {
    $('li:odd').css('backgroundColor', 'red')
    $('li:even').css('backgroundColor', function () {
      return '#' + 'D97634'
    })
  })