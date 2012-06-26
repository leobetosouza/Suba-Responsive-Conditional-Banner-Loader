(function(window, $) {

	"use strict";

	$(function() {
		var sidebarBannerLoader = {};

		var $window = $(window);
		var	$content = $('#content');
		var	baseWidth = 1200;
		var	bannerClass = 'contentExtend';
		var	bannerLoaded = false;
		var	isCallable = true;
		var	hasBannerClass = $content.hasClass(bannerClass);
		var	showBanners = function() {
			if ($content.outerWidth() >= baseWidth) {
				loadBanners();
			} else {
				removeBannerClass();
			}
		};
		var	loadBanners = function() {
			if (!bannerLoaded) {
				//ajax: to call banners
				
				//success:
				addBannerClass();
				bannerLoaded = true;

				//var	$bSide = $content.find('.bannerSide');
			
				//fail:
				//clearInterval(tInterval);
				//$window.unbind('resize', isCallableFunc);

			} else {
				addBannerClass();
			}
		};
		var	isCallableFunc = function() {
			isCallable = true;
		};
		var	addBannerClass = function() {
			if (!hasBannerClass) {
				$content.addClass(bannerClass);
				hasBannerClass = true;
			}
		};
		var	removeBannerClass = function() {
			if (hasBannerClass) {
				$content.removeClass(bannerClass);
				hasBannerClass = false;
			}
		};

		var	tInterval = setInterval(function() {
			if (isCallable) {
				showBanners();
				isCallable = false;
			}
		}, 500);

		$window.resize(isCallableFunc);

	});
})(this, jQuery);