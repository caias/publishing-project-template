/**
 * 광주 C-ITS
 * @author caias
 * @since 2020.06.26 - draft
 */
'use strict';

const sample = require('./module/sample');

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
  sample();
};