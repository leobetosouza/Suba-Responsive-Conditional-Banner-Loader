/*
 * suba-csbl * Conditional Sidebar Banners Loader
 * https://github.com/leobetosouza/suba-csbl
 *
 * Copyright (c) 2012 Leonardo Alberto Souza
 * Licensed under the MIT license.
 */

;(function(window, $) {

  "use strict";

  var pluginName = 'subaCSBL',
    document = window.document,
    defaults = {
      bannerClass : 'contentExtend',
      baseWidth : 1200
    };

  function BannerLoader( element, options ) {
      this.element = element;
      this.options = $.extend( {}, defaults, options) ;
      
      this._defaults = defaults;
      this._name = pluginName;
      
      this.init();
  }

  BannerLoader.prototype.init = function () {
    
  };

  if( typeof Object.create !== 'function' ) {
    Object.create = function( o ) {
      function F() {}
      F.prototype = o;
      return new F();
    };
  }

  // Collection method.
  $.fn[pluginName] = function ( options ) {
      return this.each(function () {
          if (!$.data(this, 'plugin_' + pluginName)) {
              $.data(this, 'plugin_' + pluginName, new BannerLoader( this, options ));
          }
      });
  };

  // Static method.
  // $.awesome = function() {
  //   return 'awesome';
  // };

  // Custom selector.
  // $.expr[':'].awesome = function(elem) {
  //   return elem.textContent.indexOf('awesome') >= 0;
  // };

}(this, jQuery));
