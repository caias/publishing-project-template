/**
 * 광주 C-ITS
 * @author caias
 * @since 2020.06.26 - draft
 */
'use strict';

const test = require('./module/test');

/**
 * data-attribute 모음
 */
const dataAttrs = {
  container: 'data-container',
  button: 'data-button',
};

$(document).ready(function () {
  init();
});

function init() {
  test();
};