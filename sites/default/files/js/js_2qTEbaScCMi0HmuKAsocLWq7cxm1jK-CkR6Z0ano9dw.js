(function ($, Drupal, drupalSettings) {

Drupal.Nodejs = Drupal.Nodejs || {
  'contentChannelNotificationCallbacks': {},
  'presenceCallbacks': {},
  'callbacks': {},
  'socket': false,
  'connectionSetupHandlers': {}
};

Drupal.behaviors.nodejs = {
  attach: function () {
    if (!Drupal.Nodejs.socket) {
      Drupal.Nodejs.connect();
    }
  }
};

Drupal.Nodejs.runCallbacks = function (message) {
  // It's possible that this message originated from an ajax request from the
  // client associated with this socket.
  if (Drupal.Nodejs.socket.sessionid && message.clientSocketId == Drupal.Nodejs.socket.sessionid) {
    return;
  }

  if (message.callback) {
    if (typeof message.callback == 'string') {
      message.callback = [message.callback];
    }
    $.each(message.callback, function () {
      var callback = this;
      if (Drupal.Nodejs.callbacks[callback] && $.isFunction(Drupal.Nodejs.callbacks[callback].callback)) {
        try {
          Drupal.Nodejs.callbacks[callback].callback(message);
        }
        catch (exception) {}
      }
    });
  }
  else if (message.presenceNotification != undefined) {
    $.each(Drupal.Nodejs.presenceCallbacks, function () {
      if ($.isFunction(this.callback)) {
        try {
          this.callback(message);
        }
        catch (exception) {}
      }
    });
  }
  else if (message.contentChannelNotification != undefined) {
    $.each(Drupal.Nodejs.contentChannelNotificationCallbacks, function () {
      if ($.isFunction(this.callback)) {
        try {
          this.callback(message);
        }
        catch (exception) {}
      }
    });
  }
  else {
    $.each(Drupal.Nodejs.callbacks, function () {
      if ($.isFunction(this.callback)) {
        try {
          this.callback(message);
        }
        catch (exception) {}
      }
    });
  }
};

Drupal.Nodejs.runSetupHandlers = function (type) {
  $.each(Drupal.Nodejs.connectionSetupHandlers, function () {
    if ($.isFunction(this[type])) {
      try {
        this[type]();
      }
      catch (exception) {}
    }
  });
};

Drupal.Nodejs.connect = function () {
  var url = drupalSettings.nodejs.client.scheme + '://' + drupalSettings.nodejs.client.host + ':' + drupalSettings.nodejs.client.port;
  drupalSettings.nodejs.connectTimeout = drupalSettings.nodejs.connectTimeout || 5000;
  if (typeof io === 'undefined') {
     return false;
  }
  Drupal.Nodejs.socket = io.connect(url, {'connect timeout': drupalSettings.nodejs.connectTimeout});
  Drupal.Nodejs.socket.on('connect', function() {
    Drupal.Nodejs.sendAuthMessage();
    Drupal.Nodejs.runSetupHandlers('connect');
    if (Drupal.ajax != undefined) {
      // Monkey-patch Drupal.ajax.prototype.beforeSerialize to auto-magically
      // send sessionId for AJAX requests so we can exclude the current browser
      // window from resulting notifications. We do this so that modules can hook
      // in to other modules ajax requests without having to patch them.
      Drupal.Nodejs.originalBeforeSerialize = Drupal.ajax.prototype.beforeSerialize;
      Drupal.ajax.prototype.beforeSerialize = function(element_settings, options) {
        options.data['nodejs_client_socket_id'] = Drupal.Nodejs.socket.socket.sessionid;
        return Drupal.Nodejs.originalBeforeSerialize(element_settings, options);
      };
    }
  });

  Drupal.Nodejs.socket.on('message', Drupal.Nodejs.runCallbacks);

  Drupal.Nodejs.socket.on('disconnect', function() {
    Drupal.Nodejs.runSetupHandlers('disconnect');
    if (Drupal.ajax != undefined) {
      Drupal.ajax.prototype.beforeSerialize = Drupal.Nodejs.originalBeforeSerialize;
    }
  });
  setTimeout("Drupal.Nodejs.checkConnection()", drupalSettings.nodejs.connectTimeout + 250);
};

Drupal.Nodejs.checkConnection = function () {
  if (!Drupal.Nodejs.socket.connected) {
    Drupal.Nodejs.runSetupHandlers('connectionFailure');
  }
};

Drupal.Nodejs.joinTokenChannel = function (channel, contentToken) {
  var joinMessage = {
    channel: channel,
    contentToken: contentToken
  };

  // Add to the global settings so that the user is joined again when the client reconnects.
  drupalSettings.nodejs.contentTokens = drupalSettings.nodejs.contentTokens || {};
  drupalSettings.nodejs.contentTokens[channel] = contentToken;

  Drupal.Nodejs.socket.emit('join-token-channel', joinMessage);
};

Drupal.Nodejs.sendAuthMessage = function () {
  var authMessage = {
    authToken: drupalSettings.nodejs.authToken,
    contentTokens: drupalSettings.nodejs.contentTokens
  };
  Drupal.Nodejs.socket.emit('authenticate', authMessage);
};

})(jQuery, Drupal, drupalSettings);

;
(function ($, Drupal, drupalSettings) {
  
  Drupal.behaviors.nodejs_ajax = {
    attach: function () {
      Drupal.nodejs_ajax = Drupal.ajax({url: drupalSettings.path.currentPath});
      Drupal.nodejs_ajax.runCommands = function(message) {
        var response = message.commands;
        for (var i in response) {
          if (response[i]['command'] && Drupal.nodejs_ajax.commands[response[i]['command']]) {
            Drupal.nodejs_ajax.commands[response[i]['command']](Drupal.nodejs_ajax, response[i], 200);
          }
        }
      }
    }
  };

  Drupal.Nodejs.callbacks.nodejsNodeAjaxBroadcast = {
    callback: function (message) {
      switch (message.channel) {
        case 'nodejs_ajax_broadcast':
          Drupal.nodejs_ajax.runCommands(message);
          break;
      }
    }
  };

  Drupal.Nodejs.callbacks.nodejsNodeAjax = {
    callback: function (message) {
      Drupal.nodejs_ajax.runCommands(message);
    }
  };

})(jQuery, Drupal, drupalSettings);

;
/**
 * jGrowl 1.4.3
 *
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Written by Stan Lemon <stosh1985@gmail.com>
 * Last updated: 2015.02.01
 *
 * jGrowl is a jQuery plugin implementing unobtrusive userland notifications.  These
 * notifications function similarly to the Growl Framework available for
 * Mac OS X (http://growl.info).
 *
 * To Do:
 * - Move library settings to containers and allow them to be changed per container
 *
 * Changes in 1.4.3
 * - Fixed opactiy in LESS for older version of IE
 *
 * Changes in 1.4.2
 * - Added word-break to less/css
 *
 * Changes in 1.4.1
 * - Added appendTo option
 * - jQuery compatibility updates
 * - Add check for closing a notification before it opens
 *
 * Changes in 1.4.0
 * - Removed IE6 support
 * - Added LESS support
 *
 * Changes in 1.3.0
 * - Added non-vendor border-radius to stylesheet
 * - Added grunt for generating minified js and css
 * - Added npm package info
 * - Added bower package info
 * - Updates for jshint
 *
 * Changes in 1.2.13
 * - Fixed clearing interval when the container shuts down
 *
 * Changes in 1.2.12
 * - Added compressed versions using UglifyJS and Sqwish
 * - Improved README with configuration options explanation
 * - Added a source map
 *
 * Changes in 1.2.11
 * - Fix artifacts left behind by the shutdown method and text-cleanup
 *
 * Changes in 1.2.10
 * - Fix beforeClose to be called in click event
 *
 * Changes in 1.2.9
 * - Fixed BC break in jQuery 2.0 beta
 *
 * Changes in 1.2.8
 * - Fixes for jQuery 1.9 and the MSIE6 check, note that with jQuery 2.0 support
 *   jGrowl intends to drop support for IE6 altogether
 *
 * Changes in 1.2.6
 * - Fixed js error when a notification is opening and closing at the same time
 *
 * Changes in 1.2.5
 * - Changed wrapper jGrowl's options usage to "o" instead of $.jGrowl.defaults
 * - Added themeState option to control 'highlight' or 'error' for jQuery UI
 * - Ammended some CSS to provide default positioning for nested usage.
 * - Changed some CSS to be prefixed with jGrowl- to prevent namespacing issues
 * - Added two new options - openDuration and closeDuration to allow
 *   better control of notification open and close speeds, respectively
 *   Patch contributed by Jesse Vincet.
 * - Added afterOpen callback.  Patch contributed by Russel Branca.
 *
 * Changes in 1.2.4
 * - Fixed IE bug with the close-all button
 * - Fixed IE bug with the filter CSS attribute (special thanks to gotwic)
 * - Update IE opacity CSS
 * - Changed font sizes to use "em", and only set the base style
 *
 * Changes in 1.2.3
 * - The callbacks no longer use the container as context, instead they use the actual notification
 * - The callbacks now receive the container as a parameter after the options parameter
 * - beforeOpen and beforeClose now check the return value, if it's false - the notification does
 *   not continue.  The open callback will also halt execution if it returns false.
 * - Fixed bug where containers would get confused
 * - Expanded the pause functionality to pause an entire container.
 *
 * Changes in 1.2.2
 * - Notification can now be theme rolled for jQuery UI, special thanks to Jeff Chan!
 *
 * Changes in 1.2.1
 * - Fixed instance where the interval would fire the close method multiple times.
 * - Added CSS to hide from print media
 * - Fixed issue with closer button when div { position: relative } is set
 * - Fixed leaking issue with multiple containers.  Special thanks to Matthew Hanlon!
 *
 * Changes in 1.2.0
 * - Added message pooling to limit the number of messages appearing at a given time.
 * - Closing a notification is now bound to the notification object and triggered by the close button.
 *
 * Changes in 1.1.2
 * - Added iPhone styled example
 * - Fixed possible IE7 bug when determining if the ie6 class shoudl be applied.
 * - Added template for the close button, so that it's content could be customized.
 *
 * Changes in 1.1.1
 * - Fixed CSS styling bug for ie6 caused by a mispelling
 * - Changes height restriction on default notifications to min-height
 * - Added skinned examples using a variety of images
 * - Added the ability to customize the content of the [close all] box
 * - Added jTweet, an example of using jGrowl + Twitter
 *
 * Changes in 1.1.0
 * - Multiple container and instances.
 * - Standard $.jGrowl() now wraps $.fn.jGrowl() by first establishing a generic jGrowl container.
 * - Instance methods of a jGrowl container can be called by $.fn.jGrowl(methodName)
 * - Added glue preferenced, which allows notifications to be inserted before or after nodes in the container
 * - Added new log callback which is called before anything is done for the notification
 * - Corner's attribute are now applied on an individual notification basis.
 *
 * Changes in 1.0.4
 * - Various CSS fixes so that jGrowl renders correctly in IE6.
 *
 * Changes in 1.0.3
 * - Fixed bug with options persisting across notifications
 * - Fixed theme application bug
 * - Simplified some selectors and manipulations.
 * - Added beforeOpen and beforeClose callbacks
 * - Reorganized some lines of code to be more readable
 * - Removed unnecessary this.defaults context
 * - If corners plugin is present, it's now customizable.
 * - Customizable open animation.
 * - Customizable close animation.
 * - Customizable animation easing.
 * - Added customizable positioning (top-left, top-right, bottom-left, bottom-right, center)
 *
 * Changes in 1.0.2
 * - All CSS styling is now external.
 * - Added a theme parameter which specifies a secondary class for styling, such
 *   that notifications can be customized in appearance on a per message basis.
 * - Notification life span is now customizable on a per message basis.
 * - Added the ability to disable the global closer, enabled by default.
 * - Added callbacks for when a notification is opened or closed.
 * - Added callback for the global closer.
 * - Customizable animation speed.
 * - jGrowl now set itself up and tears itself down.
 *
 * Changes in 1.0.1:
 * - Removed dependency on metadata plugin in favor of .data()
 * - Namespaced all events
 */
(function($) {
	/** jGrowl Wrapper - Establish a base jGrowl Container for compatibility with older releases. **/
	$.jGrowl = function( m , o ) {
		// To maintain compatibility with older version that only supported one instance we'll create the base container.
		if ( $('#jGrowl').length === 0 )
			$('<div id="jGrowl"></div>').addClass( (o && o.position) ? o.position : $.jGrowl.defaults.position ).appendTo( (o && o.appendTo) ? o.appendTo : $.jGrowl.defaults.appendTo );

		// Create a notification on the container.
		$('#jGrowl').jGrowl(m,o);
	};


	/** Raise jGrowl Notification on a jGrowl Container **/
	$.fn.jGrowl = function( m , o ) {
		// Short hand for passing in just an object to this method
		if ( o === undefined && $.isPlainObject(m) ) {
			o = m;
			m = o.message;
		}

		if ( $.isFunction(this.each) ) {
			var args = arguments;

			return this.each(function() {
				/** Create a jGrowl Instance on the Container if it does not exist **/
				if ( $(this).data('jGrowl.instance') === undefined ) {
					$(this).data('jGrowl.instance', $.extend( new $.fn.jGrowl(), { notifications: [], element: null, interval: null } ));
					$(this).data('jGrowl.instance').startup( this );
				}

				/** Optionally call jGrowl instance methods, or just raise a normal notification **/
				if ( $.isFunction($(this).data('jGrowl.instance')[m]) ) {
					$(this).data('jGrowl.instance')[m].apply( $(this).data('jGrowl.instance') , $.makeArray(args).slice(1) );
				} else {
					$(this).data('jGrowl.instance').create( m , o );
				}
			});
		}
	};

	$.extend( $.fn.jGrowl.prototype , {

		/** Default JGrowl Settings **/
		defaults: {
			pool:				0,
			header:				'',
			group:				'',
			sticky:				false,
			position:			'top-right',
			appendTo:			'body',
			glue:				'after',
			theme:				'default',
			themeState:			'highlight',
			corners:			'10px',
			check:				250,
			life:				3000,
			closeDuration:		'normal',
			openDuration:		'normal',
			easing:				'swing',
			closer:				true,
			closeTemplate:		'&times;',
			closerTemplate:		'<div>[ close all ]</div>',
			log:				function() {},
			beforeOpen:			function() {},
			afterOpen:			function() {},
			open:				function() {},
			beforeClose:		function() {},
			close:				function() {},
			click:				function() {},
			animateOpen:		{
				opacity:		'show'
			},
			animateClose:		{
				opacity:		'hide'
			}
		},

		notifications: [],

		/** jGrowl Container Node **/
		element:				null,

		/** Interval Function **/
		interval:				null,

		/** Create a Notification **/
		create: function( message , options ) {
			var o = $.extend({}, this.defaults, options);

			/* To keep backward compatibility with 1.24 and earlier, honor 'speed' if the user has set it */
			if (typeof o.speed !== 'undefined') {
				o.openDuration = o.speed;
				o.closeDuration = o.speed;
			}

			this.notifications.push({ message: message , options: o });

			o.log.apply( this.element , [this.element,message,o] );
		},

		render: function( n ) {
			var self = this;
			var message = n.message;
			var o = n.options;

			// Support for jQuery theme-states, if this is not used it displays a widget header
			o.themeState = (o.themeState === '') ? '' : 'ui-state-' + o.themeState;

			var notification = $('<div/>')
				.addClass('jGrowl-notification alert ' + o.themeState + ' ui-corner-all' + ((o.group !== undefined && o.group !== '') ? ' ' + o.group : ''))
				.append($('<button/>').addClass('jGrowl-close').html(o.closeTemplate))
				.append($('<div/>').addClass('jGrowl-header').html(o.header))
				.append($('<div/>').addClass('jGrowl-message').html(message))
				.data("jGrowl", o).addClass(o.theme).children('.jGrowl-close').bind("click.jGrowl", function() {
					$(this).parent().trigger('jGrowl.beforeClose');
					return false;
				})
				.parent();


			/** Notification Actions **/
			$(notification).bind("mouseover.jGrowl", function() {
				$('.jGrowl-notification', self.element).data("jGrowl.pause", true);
			}).bind("mouseout.jGrowl", function() {
				$('.jGrowl-notification', self.element).data("jGrowl.pause", false);
			}).bind('jGrowl.beforeOpen', function() {
				if ( o.beforeOpen.apply( notification , [notification,message,o,self.element] ) !== false ) {
					$(this).trigger('jGrowl.open');
				}
			}).bind('jGrowl.open', function() {
				if ( o.open.apply( notification , [notification,message,o,self.element] ) !== false ) {
					if ( o.glue == 'after' ) {
						$('.jGrowl-notification:last', self.element).after(notification);
					} else {
						$('.jGrowl-notification:first', self.element).before(notification);
					}

					$(this).animate(o.animateOpen, o.openDuration, o.easing, function() {
						// Fixes some anti-aliasing issues with IE filters.
						if ($.support.opacity === false)
							this.style.removeAttribute('filter');

						if ( $(this).data("jGrowl") !== null && typeof $(this).data("jGrowl") !== 'undefined') // Happens when a notification is closing before it's open.
							$(this).data("jGrowl").created = new Date();

						$(this).trigger('jGrowl.afterOpen');
					});
				}
			}).bind('jGrowl.afterOpen', function() {
				o.afterOpen.apply( notification , [notification,message,o,self.element] );
			}).bind('click', function() {
				o.click.apply( notification, [notification.message,o,self.element] );
			}).bind('jGrowl.beforeClose', function() {
				if ( o.beforeClose.apply( notification , [notification,message,o,self.element] ) !== false )
					$(this).trigger('jGrowl.close');
			}).bind('jGrowl.close', function() {
				// Pause the notification, lest during the course of animation another close event gets called.
				$(this).data('jGrowl.pause', true);
				$(this).animate(o.animateClose, o.closeDuration, o.easing, function() {
					if ( $.isFunction(o.close) ) {
						if ( o.close.apply( notification , [notification,message,o,self.element] ) !== false )
							$(this).remove();
					} else {
						$(this).remove();
					}
				});
			}).trigger('jGrowl.beforeOpen');

			/** Optional Corners Plugin **/
			if ( o.corners !== '' && $.fn.corner !== undefined ) $(notification).corner( o.corners );

			/** Add a Global Closer if more than one notification exists **/
			if ($('.jGrowl-notification:parent', self.element).length > 1 &&
				$('.jGrowl-closer', self.element).length === 0 && this.defaults.closer !== false ) {
				$(this.defaults.closerTemplate).addClass('jGrowl-closer ' + this.defaults.themeState + ' ui-corner-all').addClass(this.defaults.theme)
					.appendTo(self.element).animate(this.defaults.animateOpen, this.defaults.speed, this.defaults.easing)
					.bind("click.jGrowl", function() {
						$(this).siblings().trigger("jGrowl.beforeClose");

						if ( $.isFunction( self.defaults.closer ) ) {
							self.defaults.closer.apply( $(this).parent()[0] , [$(this).parent()[0]] );
						}
					});
			}
		},

		/** Update the jGrowl Container, removing old jGrowl notifications **/
		update: function() {
			$(this.element).find('.jGrowl-notification:parent').each( function() {
				if ($(this).data("jGrowl") !== undefined && $(this).data("jGrowl").created !== undefined &&
					($(this).data("jGrowl").created.getTime() + parseInt($(this).data("jGrowl").life, 10))  < (new Date()).getTime() &&
					$(this).data("jGrowl").sticky !== true &&
					($(this).data("jGrowl.pause") === undefined || $(this).data("jGrowl.pause") !== true) ) {

					// Pause the notification, lest during the course of animation another close event gets called.
					$(this).trigger('jGrowl.beforeClose');
				}
			});

			if (this.notifications.length > 0 &&
				(this.defaults.pool === 0 || $(this.element).find('.jGrowl-notification:parent').length < this.defaults.pool) )
				this.render( this.notifications.shift() );

			if ($(this.element).find('.jGrowl-notification:parent').length < 2 ) {
				$(this.element).find('.jGrowl-closer').animate(this.defaults.animateClose, this.defaults.speed, this.defaults.easing, function() {
					$(this).remove();
				});
			}
		},

		/** Setup the jGrowl Notification Container **/
		startup: function(e) {
			this.element = $(e).addClass('jGrowl').append('<div class="jGrowl-notification"></div>');
			this.interval = setInterval( function() {
				// some error in chage ^^
				var instance = $(e).data('jGrowl.instance');
				if (undefined !== instance) {
					instance.update();
				}
			}, parseInt(this.defaults.check, 10));
		},

		/** Shutdown jGrowl, removing it and clearing the interval **/
		shutdown: function() {
			$(this.element).removeClass('jGrowl')
				.find('.jGrowl-notification').trigger('jGrowl.close')
				.parent().empty()
			;

			clearInterval(this.interval);
		},

		close: function() {
			$(this.element).find('.jGrowl-notification').each(function(){
				$(this).trigger('jGrowl.beforeClose');
			});
		}
	});

	/** Reference the Defaults Object for compatibility with older versions of jGrowl **/
	$.jGrowl.defaults = $.fn.jGrowl.prototype.defaults;

})(jQuery);
;
(function ($, Drupal, drupalSettings) {

  Drupal.Nodejs.callbacks.nodejsNotify = {
    callback: function (message) {
      var notifyTime = drupalSettings.nodejs_notify.notification_time;

      if (notifyTime > 0) {
        $.jGrowl(message.data.body, {header: message.data.subject, life:(notifyTime * 1000)});
      }
      else {
        $.jGrowl(message.data.body, {header: message.data.subject, sticky:true});
      }
    }
  };

})(jQuery, Drupal, drupalSettings);

;
!function(n){var t={};function r(e){if(t[e])return t[e].exports;var u=t[e]={i:e,l:!1,exports:{}};return n[e].call(u.exports,u,u.exports,r),u.l=!0,u.exports}r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var u in n)r.d(e,u,function(t){return n[t]}.bind(null,u));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=22)}({1:function(n,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(n){"object"==typeof window&&(r=window)}n.exports=r},20:function(n,t){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},21:function(n,t,r){(function(n,e){var u;
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(){var i,o=200,f="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",c="__lodash_hash_undefined__",l=500,s="__lodash_placeholder__",h=1,p=2,v=4,_=1,g=2,y=1,d=2,b=4,w=8,m=16,x=32,j=64,A=128,O=256,k=512,I=30,R="...",S=800,E=16,z=1,L=2,W=1/0,C=9007199254740991,T=1.7976931348623157e308,U=NaN,B=4294967295,$=B-1,P=B>>>1,D=[["ary",A],["bind",y],["bindKey",d],["curry",w],["curryRight",m],["flip",k],["partial",x],["partialRight",j],["rearg",O]],M="[object Arguments]",F="[object Array]",N="[object AsyncFunction]",q="[object Boolean]",Z="[object Date]",K="[object DOMException]",V="[object Error]",G="[object Function]",H="[object GeneratorFunction]",J="[object Map]",Y="[object Number]",Q="[object Null]",X="[object Object]",nn="[object Proxy]",tn="[object RegExp]",rn="[object Set]",en="[object String]",un="[object Symbol]",on="[object Undefined]",fn="[object WeakMap]",an="[object WeakSet]",cn="[object ArrayBuffer]",ln="[object DataView]",sn="[object Float32Array]",hn="[object Float64Array]",pn="[object Int8Array]",vn="[object Int16Array]",_n="[object Int32Array]",gn="[object Uint8Array]",yn="[object Uint8ClampedArray]",dn="[object Uint16Array]",bn="[object Uint32Array]",wn=/\b__p \+= '';/g,mn=/\b(__p \+=) '' \+/g,xn=/(__e\(.*?\)|\b__t\)) \+\n'';/g,jn=/&(?:amp|lt|gt|quot|#39);/g,An=/[&<>"']/g,On=RegExp(jn.source),kn=RegExp(An.source),In=/<%-([\s\S]+?)%>/g,Rn=/<%([\s\S]+?)%>/g,Sn=/<%=([\s\S]+?)%>/g,En=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,zn=/^\w*$/,Ln=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Wn=/[\\^$.*+?()[\]{}|]/g,Cn=RegExp(Wn.source),Tn=/^\s+|\s+$/g,Un=/^\s+/,Bn=/\s+$/,$n=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Pn=/\{\n\/\* \[wrapped with (.+)\] \*/,Dn=/,? & /,Mn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Fn=/\\(\\)?/g,Nn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,qn=/\w*$/,Zn=/^[-+]0x[0-9a-f]+$/i,Kn=/^0b[01]+$/i,Vn=/^\[object .+?Constructor\]$/,Gn=/^0o[0-7]+$/i,Hn=/^(?:0|[1-9]\d*)$/,Jn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Yn=/($^)/,Qn=/['\n\r\u2028\u2029\\]/g,Xn="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",nt="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",tt="[\\ud800-\\udfff]",rt="["+nt+"]",et="["+Xn+"]",ut="\\d+",it="[\\u2700-\\u27bf]",ot="[a-z\\xdf-\\xf6\\xf8-\\xff]",ft="[^\\ud800-\\udfff"+nt+ut+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",at="\\ud83c[\\udffb-\\udfff]",ct="[^\\ud800-\\udfff]",lt="(?:\\ud83c[\\udde6-\\uddff]){2}",st="[\\ud800-\\udbff][\\udc00-\\udfff]",ht="[A-Z\\xc0-\\xd6\\xd8-\\xde]",pt="(?:"+ot+"|"+ft+")",vt="(?:"+ht+"|"+ft+")",_t="(?:"+et+"|"+at+")"+"?",gt="[\\ufe0e\\ufe0f]?"+_t+("(?:\\u200d(?:"+[ct,lt,st].join("|")+")[\\ufe0e\\ufe0f]?"+_t+")*"),yt="(?:"+[it,lt,st].join("|")+")"+gt,dt="(?:"+[ct+et+"?",et,lt,st,tt].join("|")+")",bt=RegExp("['’]","g"),wt=RegExp(et,"g"),mt=RegExp(at+"(?="+at+")|"+dt+gt,"g"),xt=RegExp([ht+"?"+ot+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[rt,ht,"$"].join("|")+")",vt+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[rt,ht+pt,"$"].join("|")+")",ht+"?"+pt+"+(?:['’](?:d|ll|m|re|s|t|ve))?",ht+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ut,yt].join("|"),"g"),jt=RegExp("[\\u200d\\ud800-\\udfff"+Xn+"\\ufe0e\\ufe0f]"),At=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Ot=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],kt=-1,It={};It[sn]=It[hn]=It[pn]=It[vn]=It[_n]=It[gn]=It[yn]=It[dn]=It[bn]=!0,It[M]=It[F]=It[cn]=It[q]=It[ln]=It[Z]=It[V]=It[G]=It[J]=It[Y]=It[X]=It[tn]=It[rn]=It[en]=It[fn]=!1;var Rt={};Rt[M]=Rt[F]=Rt[cn]=Rt[ln]=Rt[q]=Rt[Z]=Rt[sn]=Rt[hn]=Rt[pn]=Rt[vn]=Rt[_n]=Rt[J]=Rt[Y]=Rt[X]=Rt[tn]=Rt[rn]=Rt[en]=Rt[un]=Rt[gn]=Rt[yn]=Rt[dn]=Rt[bn]=!0,Rt[V]=Rt[G]=Rt[fn]=!1;var St={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Et=parseFloat,zt=parseInt,Lt="object"==typeof n&&n&&n.Object===Object&&n,Wt="object"==typeof self&&self&&self.Object===Object&&self,Ct=Lt||Wt||Function("return this")(),Tt="object"==typeof t&&t&&!t.nodeType&&t,Ut=Tt&&"object"==typeof e&&e&&!e.nodeType&&e,Bt=Ut&&Ut.exports===Tt,$t=Bt&&Lt.process,Pt=function(){try{var n=Ut&&Ut.require&&Ut.require("util").types;return n||$t&&$t.binding&&$t.binding("util")}catch(n){}}(),Dt=Pt&&Pt.isArrayBuffer,Mt=Pt&&Pt.isDate,Ft=Pt&&Pt.isMap,Nt=Pt&&Pt.isRegExp,qt=Pt&&Pt.isSet,Zt=Pt&&Pt.isTypedArray;function Kt(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function Vt(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function Gt(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&!1!==t(n[r],r,n););return n}function Ht(n,t){for(var r=null==n?0:n.length;r--&&!1!==t(n[r],r,n););return n}function Jt(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return!1;return!0}function Yt(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function Qt(n,t){return!!(null==n?0:n.length)&&ar(n,t,0)>-1}function Xt(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return!0;return!1}function nr(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function tr(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function rr(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);return r}function er(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function ur(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return!0;return!1}var ir=hr("length");function or(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,!1}),e}function fr(n,t,r,e){for(var u=n.length,i=r+(e?1:-1);e?i--:++i<u;)if(t(n[i],i,n))return i;return-1}function ar(n,t,r){return t==t?function(n,t,r){var e=r-1,u=n.length;for(;++e<u;)if(n[e]===t)return e;return-1}(n,t,r):fr(n,lr,r)}function cr(n,t,r,e){for(var u=r-1,i=n.length;++u<i;)if(e(n[u],t))return u;return-1}function lr(n){return n!=n}function sr(n,t){var r=null==n?0:n.length;return r?_r(n,t)/r:U}function hr(n){return function(t){return null==t?i:t[n]}}function pr(n){return function(t){return null==n?i:n[t]}}function vr(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=!1,n):t(r,n,u,i)}),r}function _r(n,t){for(var r,e=-1,u=n.length;++e<u;){var o=t(n[e]);o!==i&&(r=r===i?o:r+o)}return r}function gr(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function yr(n){return function(t){return n(t)}}function dr(n,t){return nr(t,function(t){return n[t]})}function br(n,t){return n.has(t)}function wr(n,t){for(var r=-1,e=n.length;++r<e&&ar(t,n[r],0)>-1;);return r}function mr(n,t){for(var r=n.length;r--&&ar(t,n[r],0)>-1;);return r}var xr=pr({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),jr=pr({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function Ar(n){return"\\"+St[n]}function Or(n){return jt.test(n)}function kr(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n]}),r}function Ir(n,t){return function(r){return n(t(r))}}function Rr(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&o!==s||(n[r]=s,i[u++]=r)}return i}function Sr(n,t){return"__proto__"==t?i:n[t]}function Er(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function zr(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function Lr(n){return Or(n)?function(n){var t=mt.lastIndex=0;for(;mt.test(n);)++t;return t}(n):ir(n)}function Wr(n){return Or(n)?function(n){return n.match(mt)||[]}(n):function(n){return n.split("")}(n)}var Cr=pr({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var Tr=function n(t){var r=(t=null==t?Ct:Tr.defaults(Ct.Object(),t,Tr.pick(Ct,Ot))).Array,e=t.Date,u=t.Error,Xn=t.Function,nt=t.Math,tt=t.Object,rt=t.RegExp,et=t.String,ut=t.TypeError,it=r.prototype,ot=Xn.prototype,ft=tt.prototype,at=t["__core-js_shared__"],ct=ot.toString,lt=ft.hasOwnProperty,st=0,ht=function(){var n=/[^.]+$/.exec(at&&at.keys&&at.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),pt=ft.toString,vt=ct.call(tt),_t=Ct._,gt=rt("^"+ct.call(lt).replace(Wn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),yt=Bt?t.Buffer:i,dt=t.Symbol,mt=t.Uint8Array,jt=yt?yt.allocUnsafe:i,St=Ir(tt.getPrototypeOf,tt),Lt=tt.create,Wt=ft.propertyIsEnumerable,Tt=it.splice,Ut=dt?dt.isConcatSpreadable:i,$t=dt?dt.iterator:i,Pt=dt?dt.toStringTag:i,ir=function(){try{var n=$i(tt,"defineProperty");return n({},"",{}),n}catch(n){}}(),pr=t.clearTimeout!==Ct.clearTimeout&&t.clearTimeout,Ur=e&&e.now!==Ct.Date.now&&e.now,Br=t.setTimeout!==Ct.setTimeout&&t.setTimeout,$r=nt.ceil,Pr=nt.floor,Dr=tt.getOwnPropertySymbols,Mr=yt?yt.isBuffer:i,Fr=t.isFinite,Nr=it.join,qr=Ir(tt.keys,tt),Zr=nt.max,Kr=nt.min,Vr=e.now,Gr=t.parseInt,Hr=nt.random,Jr=it.reverse,Yr=$i(t,"DataView"),Qr=$i(t,"Map"),Xr=$i(t,"Promise"),ne=$i(t,"Set"),te=$i(t,"WeakMap"),re=$i(tt,"create"),ee=te&&new te,ue={},ie=co(Yr),oe=co(Qr),fe=co(Xr),ae=co(ne),ce=co(te),le=dt?dt.prototype:i,se=le?le.valueOf:i,he=le?le.toString:i;function pe(n){if(Rf(n)&&!yf(n)&&!(n instanceof ye)){if(n instanceof ge)return n;if(lt.call(n,"__wrapped__"))return lo(n)}return new ge(n)}var ve=function(){function n(){}return function(t){if(!If(t))return{};if(Lt)return Lt(t);n.prototype=t;var r=new n;return n.prototype=i,r}}();function _e(){}function ge(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=i}function ye(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=B,this.__views__=[]}function de(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function be(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function we(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function me(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new we;++t<r;)this.add(n[t])}function xe(n){var t=this.__data__=new be(n);this.size=t.size}function je(n,t){var r=yf(n),e=!r&&gf(n),u=!r&&!e&&mf(n),i=!r&&!e&&!u&&Uf(n),o=r||e||u||i,f=o?gr(n.length,et):[],a=f.length;for(var c in n)!t&&!lt.call(n,c)||o&&("length"==c||u&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Zi(c,a))||f.push(c);return f}function Ae(n){var t=n.length;return t?n[mu(0,t-1)]:i}function Oe(n,t){return oo(ri(n),Ce(t,0,n.length))}function ke(n){return oo(ri(n))}function Ie(n,t,r){(r===i||pf(n[t],r))&&(r!==i||t in n)||Le(n,t,r)}function Re(n,t,r){var e=n[t];lt.call(n,t)&&pf(e,r)&&(r!==i||t in n)||Le(n,t,r)}function Se(n,t){for(var r=n.length;r--;)if(pf(n[r][0],t))return r;return-1}function Ee(n,t,r,e){return Pe(n,function(n,u,i){t(e,n,r(n),i)}),e}function ze(n,t){return n&&ei(t,ua(t),n)}function Le(n,t,r){"__proto__"==t&&ir?ir(n,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):n[t]=r}function We(n,t){for(var e=-1,u=t.length,o=r(u),f=null==n;++e<u;)o[e]=f?i:Xf(n,t[e]);return o}function Ce(n,t,r){return n==n&&(r!==i&&(n=n<=r?n:r),t!==i&&(n=n>=t?n:t)),n}function Te(n,t,r,e,u,o){var f,a=t&h,c=t&p,l=t&v;if(r&&(f=u?r(n,e,u,o):r(n)),f!==i)return f;if(!If(n))return n;var s=yf(n);if(s){if(f=function(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&lt.call(n,"index")&&(r.index=n.index,r.input=n.input),r}(n),!a)return ri(n,f)}else{var _=Mi(n),g=_==G||_==H;if(mf(n))return Ju(n,a);if(_==X||_==M||g&&!u){if(f=c||g?{}:Ni(n),!a)return c?function(n,t){return ei(n,Di(n),t)}(n,function(n,t){return n&&ei(t,ia(t),n)}(f,n)):function(n,t){return ei(n,Pi(n),t)}(n,ze(f,n))}else{if(!Rt[_])return u?n:{};f=function(n,t,r){var e=n.constructor;switch(t){case cn:return Yu(n);case q:case Z:return new e(+n);case ln:return function(n,t){var r=t?Yu(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.byteLength)}(n,r);case sn:case hn:case pn:case vn:case _n:case gn:case yn:case dn:case bn:return Qu(n,r);case J:return new e;case Y:case en:return new e(n);case tn:return function(n){var t=new n.constructor(n.source,qn.exec(n));return t.lastIndex=n.lastIndex,t}(n);case rn:return new e;case un:return function(n){return se?tt(se.call(n)):{}}(n)}}(n,_,a)}}o||(o=new xe);var y=o.get(n);if(y)return y;if(o.set(n,f),Wf(n))return n.forEach(function(e){f.add(Te(e,t,r,e,n,o))}),f;if(Sf(n))return n.forEach(function(e,u){f.set(u,Te(e,t,r,u,n,o))}),f;var d=s?i:(l?c?zi:Ei:c?ia:ua)(n);return Gt(d||n,function(e,u){d&&(e=n[u=e]),Re(f,u,Te(e,t,r,u,n,o))}),f}function Ue(n,t,r){var e=r.length;if(null==n)return!e;for(n=tt(n);e--;){var u=r[e],o=t[u],f=n[u];if(f===i&&!(u in n)||!o(f))return!1}return!0}function Be(n,t,r){if("function"!=typeof n)throw new ut(a);return ro(function(){n.apply(i,r)},t)}function $e(n,t,r,e){var u=-1,i=Qt,f=!0,a=n.length,c=[],l=t.length;if(!a)return c;r&&(t=nr(t,yr(r))),e?(i=Xt,f=!1):t.length>=o&&(i=br,f=!1,t=new me(t));n:for(;++u<a;){var s=n[u],h=null==r?s:r(s);if(s=e||0!==s?s:0,f&&h==h){for(var p=l;p--;)if(t[p]===h)continue n;c.push(s)}else i(t,h,e)||c.push(s)}return c}pe.templateSettings={escape:In,evaluate:Rn,interpolate:Sn,variable:"",imports:{_:pe}},pe.prototype=_e.prototype,pe.prototype.constructor=pe,ge.prototype=ve(_e.prototype),ge.prototype.constructor=ge,ye.prototype=ve(_e.prototype),ye.prototype.constructor=ye,de.prototype.clear=function(){this.__data__=re?re(null):{},this.size=0},de.prototype.delete=function(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t},de.prototype.get=function(n){var t=this.__data__;if(re){var r=t[n];return r===c?i:r}return lt.call(t,n)?t[n]:i},de.prototype.has=function(n){var t=this.__data__;return re?t[n]!==i:lt.call(t,n)},de.prototype.set=function(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=re&&t===i?c:t,this},be.prototype.clear=function(){this.__data__=[],this.size=0},be.prototype.delete=function(n){var t=this.__data__,r=Se(t,n);return!(r<0||(r==t.length-1?t.pop():Tt.call(t,r,1),--this.size,0))},be.prototype.get=function(n){var t=this.__data__,r=Se(t,n);return r<0?i:t[r][1]},be.prototype.has=function(n){return Se(this.__data__,n)>-1},be.prototype.set=function(n,t){var r=this.__data__,e=Se(r,n);return e<0?(++this.size,r.push([n,t])):r[e][1]=t,this},we.prototype.clear=function(){this.size=0,this.__data__={hash:new de,map:new(Qr||be),string:new de}},we.prototype.delete=function(n){var t=Ui(this,n).delete(n);return this.size-=t?1:0,t},we.prototype.get=function(n){return Ui(this,n).get(n)},we.prototype.has=function(n){return Ui(this,n).has(n)},we.prototype.set=function(n,t){var r=Ui(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this},me.prototype.add=me.prototype.push=function(n){return this.__data__.set(n,c),this},me.prototype.has=function(n){return this.__data__.has(n)},xe.prototype.clear=function(){this.__data__=new be,this.size=0},xe.prototype.delete=function(n){var t=this.__data__,r=t.delete(n);return this.size=t.size,r},xe.prototype.get=function(n){return this.__data__.get(n)},xe.prototype.has=function(n){return this.__data__.has(n)},xe.prototype.set=function(n,t){var r=this.__data__;if(r instanceof be){var e=r.__data__;if(!Qr||e.length<o-1)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new we(e)}return r.set(n,t),this.size=r.size,this};var Pe=oi(Ve),De=oi(Ge,!0);function Me(n,t){var r=!0;return Pe(n,function(n,e,u){return r=!!t(n,e,u)}),r}function Fe(n,t,r){for(var e=-1,u=n.length;++e<u;){var o=n[e],f=t(o);if(null!=f&&(a===i?f==f&&!Tf(f):r(f,a)))var a=f,c=o}return c}function Ne(n,t){var r=[];return Pe(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function qe(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=qi),u||(u=[]);++i<o;){var f=n[i];t>0&&r(f)?t>1?qe(f,t-1,r,e,u):tr(u,f):e||(u[u.length]=f)}return u}var Ze=fi(),Ke=fi(!0);function Ve(n,t){return n&&Ze(n,t,ua)}function Ge(n,t){return n&&Ke(n,t,ua)}function He(n,t){return Yt(t,function(t){return Af(n[t])})}function Je(n,t){for(var r=0,e=(t=Ku(t,n)).length;null!=n&&r<e;)n=n[ao(t[r++])];return r&&r==e?n:i}function Ye(n,t,r){var e=t(n);return yf(n)?e:tr(e,r(n))}function Qe(n){return null==n?n===i?on:Q:Pt&&Pt in tt(n)?function(n){var t=lt.call(n,Pt),r=n[Pt];try{n[Pt]=i;var e=!0}catch(n){}var u=pt.call(n);return e&&(t?n[Pt]=r:delete n[Pt]),u}(n):function(n){return pt.call(n)}(n)}function Xe(n,t){return n>t}function nu(n,t){return null!=n&&lt.call(n,t)}function tu(n,t){return null!=n&&t in tt(n)}function ru(n,t,e){for(var u=e?Xt:Qt,o=n[0].length,f=n.length,a=f,c=r(f),l=1/0,s=[];a--;){var h=n[a];a&&t&&(h=nr(h,yr(t))),l=Kr(h.length,l),c[a]=!e&&(t||o>=120&&h.length>=120)?new me(a&&h):i}h=n[0];var p=-1,v=c[0];n:for(;++p<o&&s.length<l;){var _=h[p],g=t?t(_):_;if(_=e||0!==_?_:0,!(v?br(v,g):u(s,g,e))){for(a=f;--a;){var y=c[a];if(!(y?br(y,g):u(n[a],g,e)))continue n}v&&v.push(g),s.push(_)}}return s}function eu(n,t,r){var e=null==(n=no(n,t=Ku(t,n)))?n:n[ao(xo(t))];return null==e?i:Kt(e,n,r)}function uu(n){return Rf(n)&&Qe(n)==M}function iu(n,t,r,e,u){return n===t||(null==n||null==t||!Rf(n)&&!Rf(t)?n!=n&&t!=t:function(n,t,r,e,u,o){var f=yf(n),a=yf(t),c=f?F:Mi(n),l=a?F:Mi(t),s=(c=c==M?X:c)==X,h=(l=l==M?X:l)==X,p=c==l;if(p&&mf(n)){if(!mf(t))return!1;f=!0,s=!1}if(p&&!s)return o||(o=new xe),f||Uf(n)?Ri(n,t,r,e,u,o):function(n,t,r,e,u,i,o){switch(r){case ln:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case cn:return!(n.byteLength!=t.byteLength||!i(new mt(n),new mt(t)));case q:case Z:case Y:return pf(+n,+t);case V:return n.name==t.name&&n.message==t.message;case tn:case en:return n==t+"";case J:var f=kr;case rn:var a=e&_;if(f||(f=Er),n.size!=t.size&&!a)return!1;var c=o.get(n);if(c)return c==t;e|=g,o.set(n,t);var l=Ri(f(n),f(t),e,u,i,o);return o.delete(n),l;case un:if(se)return se.call(n)==se.call(t)}return!1}(n,t,c,r,e,u,o);if(!(r&_)){var v=s&&lt.call(n,"__wrapped__"),y=h&&lt.call(t,"__wrapped__");if(v||y){var d=v?n.value():n,b=y?t.value():t;return o||(o=new xe),u(d,b,r,e,o)}}return!!p&&(o||(o=new xe),function(n,t,r,e,u,o){var f=r&_,a=Ei(n),c=a.length,l=Ei(t).length;if(c!=l&&!f)return!1;for(var s=c;s--;){var h=a[s];if(!(f?h in t:lt.call(t,h)))return!1}var p=o.get(n);if(p&&o.get(t))return p==t;var v=!0;o.set(n,t),o.set(t,n);for(var g=f;++s<c;){h=a[s];var y=n[h],d=t[h];if(e)var b=f?e(d,y,h,t,n,o):e(y,d,h,n,t,o);if(!(b===i?y===d||u(y,d,r,e,o):b)){v=!1;break}g||(g="constructor"==h)}if(v&&!g){var w=n.constructor,m=t.constructor;w!=m&&"constructor"in n&&"constructor"in t&&!("function"==typeof w&&w instanceof w&&"function"==typeof m&&m instanceof m)&&(v=!1)}return o.delete(n),o.delete(t),v}(n,t,r,e,u,o))}(n,t,r,e,iu,u))}function ou(n,t,r,e){var u=r.length,o=u,f=!e;if(null==n)return!o;for(n=tt(n);u--;){var a=r[u];if(f&&a[2]?a[1]!==n[a[0]]:!(a[0]in n))return!1}for(;++u<o;){var c=(a=r[u])[0],l=n[c],s=a[1];if(f&&a[2]){if(l===i&&!(c in n))return!1}else{var h=new xe;if(e)var p=e(l,s,c,n,t,h);if(!(p===i?iu(s,l,_|g,e,h):p))return!1}}return!0}function fu(n){return!(!If(n)||function(n){return!!ht&&ht in n}(n))&&(Af(n)?gt:Vn).test(co(n))}function au(n){return"function"==typeof n?n:null==n?Ea:"object"==typeof n?yf(n)?vu(n[0],n[1]):pu(n):Pa(n)}function cu(n){if(!Ji(n))return qr(n);var t=[];for(var r in tt(n))lt.call(n,r)&&"constructor"!=r&&t.push(r);return t}function lu(n){if(!If(n))return function(n){var t=[];if(null!=n)for(var r in tt(n))t.push(r);return t}(n);var t=Ji(n),r=[];for(var e in n)("constructor"!=e||!t&&lt.call(n,e))&&r.push(e);return r}function su(n,t){return n<t}function hu(n,t){var e=-1,u=bf(n)?r(n.length):[];return Pe(n,function(n,r,i){u[++e]=t(n,r,i)}),u}function pu(n){var t=Bi(n);return 1==t.length&&t[0][2]?Qi(t[0][0],t[0][1]):function(r){return r===n||ou(r,n,t)}}function vu(n,t){return Vi(n)&&Yi(t)?Qi(ao(n),t):function(r){var e=Xf(r,n);return e===i&&e===t?na(r,n):iu(t,e,_|g)}}function _u(n,t,r,e,u){n!==t&&Ze(t,function(o,f){if(If(o))u||(u=new xe),function(n,t,r,e,u,o,f){var a=Sr(n,r),c=Sr(t,r),l=f.get(c);if(l)Ie(n,r,l);else{var s=o?o(a,c,r+"",n,t,f):i,h=s===i;if(h){var p=yf(c),v=!p&&mf(c),_=!p&&!v&&Uf(c);s=c,p||v||_?yf(a)?s=a:wf(a)?s=ri(a):v?(h=!1,s=Ju(c,!0)):_?(h=!1,s=Qu(c,!0)):s=[]:zf(c)||gf(c)?(s=a,gf(a)?s=qf(a):(!If(a)||e&&Af(a))&&(s=Ni(c))):h=!1}h&&(f.set(c,s),u(s,c,e,o,f),f.delete(c)),Ie(n,r,s)}}(n,t,f,r,_u,e,u);else{var a=e?e(Sr(n,f),o,f+"",n,t,u):i;a===i&&(a=o),Ie(n,f,a)}},ia)}function gu(n,t){var r=n.length;if(r)return Zi(t+=t<0?r:0,r)?n[t]:i}function yu(n,t,r){var e=-1;return t=nr(t.length?t:[Ea],yr(Ti())),function(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}(hu(n,function(n,r,u){return{criteria:nr(t,function(t){return t(n)}),index:++e,value:n}}),function(n,t){return function(n,t,r){for(var e=-1,u=n.criteria,i=t.criteria,o=u.length,f=r.length;++e<o;){var a=Xu(u[e],i[e]);if(a){if(e>=f)return a;var c=r[e];return a*("desc"==c?-1:1)}}return n.index-t.index}(n,t,r)})}function du(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=Je(n,o);r(f,o)&&ku(i,Ku(o,n),f)}return i}function bu(n,t,r,e){var u=e?cr:ar,i=-1,o=t.length,f=n;for(n===t&&(t=ri(t)),r&&(f=nr(n,yr(r)));++i<o;)for(var a=0,c=t[i],l=r?r(c):c;(a=u(f,l,a,e))>-1;)f!==n&&Tt.call(f,a,1),Tt.call(n,a,1);return n}function wu(n,t){for(var r=n?t.length:0,e=r-1;r--;){var u=t[r];if(r==e||u!==i){var i=u;Zi(u)?Tt.call(n,u,1):$u(n,u)}}return n}function mu(n,t){return n+Pr(Hr()*(t-n+1))}function xu(n,t){var r="";if(!n||t<1||t>C)return r;do{t%2&&(r+=n),(t=Pr(t/2))&&(n+=n)}while(t);return r}function ju(n,t){return eo(Xi(n,t,Ea),n+"")}function Au(n){return Ae(pa(n))}function Ou(n,t){var r=pa(n);return oo(r,Ce(t,0,r.length))}function ku(n,t,r,e){if(!If(n))return n;for(var u=-1,o=(t=Ku(t,n)).length,f=o-1,a=n;null!=a&&++u<o;){var c=ao(t[u]),l=r;if(u!=f){var s=a[c];(l=e?e(s,c,a):i)===i&&(l=If(s)?s:Zi(t[u+1])?[]:{})}Re(a,c,l),a=a[c]}return n}var Iu=ee?function(n,t){return ee.set(n,t),n}:Ea,Ru=ir?function(n,t){return ir(n,"toString",{configurable:!0,enumerable:!1,value:Ia(t),writable:!0})}:Ea;function Su(n){return oo(pa(n))}function Eu(n,t,e){var u=-1,i=n.length;t<0&&(t=-t>i?0:i+t),(e=e>i?i:e)<0&&(e+=i),i=t>e?0:e-t>>>0,t>>>=0;for(var o=r(i);++u<i;)o[u]=n[u+t];return o}function zu(n,t){var r;return Pe(n,function(n,e,u){return!(r=t(n,e,u))}),!!r}function Lu(n,t,r){var e=0,u=null==n?e:n.length;if("number"==typeof t&&t==t&&u<=P){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!Tf(o)&&(r?o<=t:o<t)?e=i+1:u=i}return u}return Wu(n,t,Ea,r)}function Wu(n,t,r,e){t=r(t);for(var u=0,o=null==n?0:n.length,f=t!=t,a=null===t,c=Tf(t),l=t===i;u<o;){var s=Pr((u+o)/2),h=r(n[s]),p=h!==i,v=null===h,_=h==h,g=Tf(h);if(f)var y=e||_;else y=l?_&&(e||p):a?_&&p&&(e||!v):c?_&&p&&!v&&(e||!g):!v&&!g&&(e?h<=t:h<t);y?u=s+1:o=s}return Kr(o,$)}function Cu(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r],f=t?t(o):o;if(!r||!pf(f,a)){var a=f;i[u++]=0===o?0:o}}return i}function Tu(n){return"number"==typeof n?n:Tf(n)?U:+n}function Uu(n){if("string"==typeof n)return n;if(yf(n))return nr(n,Uu)+"";if(Tf(n))return he?he.call(n):"";var t=n+"";return"0"==t&&1/n==-W?"-0":t}function Bu(n,t,r){var e=-1,u=Qt,i=n.length,f=!0,a=[],c=a;if(r)f=!1,u=Xt;else if(i>=o){var l=t?null:xi(n);if(l)return Er(l);f=!1,u=br,c=new me}else c=t?[]:a;n:for(;++e<i;){var s=n[e],h=t?t(s):s;if(s=r||0!==s?s:0,f&&h==h){for(var p=c.length;p--;)if(c[p]===h)continue n;t&&c.push(h),a.push(s)}else u(c,h,r)||(c!==a&&c.push(h),a.push(s))}return a}function $u(n,t){return null==(n=no(n,t=Ku(t,n)))||delete n[ao(xo(t))]}function Pu(n,t,r,e){return ku(n,t,r(Je(n,t)),e)}function Du(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?Eu(n,e?0:i,e?i+1:u):Eu(n,e?i+1:0,e?u:i)}function Mu(n,t){var r=n;return r instanceof ye&&(r=r.value()),rr(t,function(n,t){return t.func.apply(t.thisArg,tr([n],t.args))},r)}function Fu(n,t,e){var u=n.length;if(u<2)return u?Bu(n[0]):[];for(var i=-1,o=r(u);++i<u;)for(var f=n[i],a=-1;++a<u;)a!=i&&(o[i]=$e(o[i]||f,n[a],t,e));return Bu(qe(o,1),t,e)}function Nu(n,t,r){for(var e=-1,u=n.length,o=t.length,f={};++e<u;){var a=e<o?t[e]:i;r(f,n[e],a)}return f}function qu(n){return wf(n)?n:[]}function Zu(n){return"function"==typeof n?n:Ea}function Ku(n,t){return yf(n)?n:Vi(n,t)?[n]:fo(Zf(n))}var Vu=ju;function Gu(n,t,r){var e=n.length;return r=r===i?e:r,!t&&r>=e?n:Eu(n,t,r)}var Hu=pr||function(n){return Ct.clearTimeout(n)};function Ju(n,t){if(t)return n.slice();var r=n.length,e=jt?jt(r):new n.constructor(r);return n.copy(e),e}function Yu(n){var t=new n.constructor(n.byteLength);return new mt(t).set(new mt(n)),t}function Qu(n,t){var r=t?Yu(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.length)}function Xu(n,t){if(n!==t){var r=n!==i,e=null===n,u=n==n,o=Tf(n),f=t!==i,a=null===t,c=t==t,l=Tf(t);if(!a&&!l&&!o&&n>t||o&&f&&c&&!a&&!l||e&&f&&c||!r&&c||!u)return 1;if(!e&&!o&&!l&&n<t||l&&r&&u&&!e&&!o||a&&r&&u||!f&&u||!c)return-1}return 0}function ni(n,t,e,u){for(var i=-1,o=n.length,f=e.length,a=-1,c=t.length,l=Zr(o-f,0),s=r(c+l),h=!u;++a<c;)s[a]=t[a];for(;++i<f;)(h||i<o)&&(s[e[i]]=n[i]);for(;l--;)s[a++]=n[i++];return s}function ti(n,t,e,u){for(var i=-1,o=n.length,f=-1,a=e.length,c=-1,l=t.length,s=Zr(o-a,0),h=r(s+l),p=!u;++i<s;)h[i]=n[i];for(var v=i;++c<l;)h[v+c]=t[c];for(;++f<a;)(p||i<o)&&(h[v+e[f]]=n[i++]);return h}function ri(n,t){var e=-1,u=n.length;for(t||(t=r(u));++e<u;)t[e]=n[e];return t}function ei(n,t,r,e){var u=!r;r||(r={});for(var o=-1,f=t.length;++o<f;){var a=t[o],c=e?e(r[a],n[a],a,r,n):i;c===i&&(c=n[a]),u?Le(r,a,c):Re(r,a,c)}return r}function ui(n,t){return function(r,e){var u=yf(r)?Vt:Ee,i=t?t():{};return u(r,n,Ti(e,2),i)}}function ii(n){return ju(function(t,r){var e=-1,u=r.length,o=u>1?r[u-1]:i,f=u>2?r[2]:i;for(o=n.length>3&&"function"==typeof o?(u--,o):i,f&&Ki(r[0],r[1],f)&&(o=u<3?i:o,u=1),t=tt(t);++e<u;){var a=r[e];a&&n(t,a,e,o)}return t})}function oi(n,t){return function(r,e){if(null==r)return r;if(!bf(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=tt(r);(t?i--:++i<u)&&!1!==e(o[i],i,o););return r}}function fi(n){return function(t,r,e){for(var u=-1,i=tt(t),o=e(t),f=o.length;f--;){var a=o[n?f:++u];if(!1===r(i[a],a,i))break}return t}}function ai(n){return function(t){var r=Or(t=Zf(t))?Wr(t):i,e=r?r[0]:t.charAt(0),u=r?Gu(r,1).join(""):t.slice(1);return e[n]()+u}}function ci(n){return function(t){return rr(Aa(ga(t).replace(bt,"")),n,"")}}function li(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=ve(n.prototype),e=n.apply(r,t);return If(e)?e:r}}function si(n){return function(t,r,e){var u=tt(t);if(!bf(t)){var o=Ti(r,3);t=ua(t),r=function(n){return o(u[n],n,u)}}var f=n(t,r,e);return f>-1?u[o?t[f]:f]:i}}function hi(n){return Si(function(t){var r=t.length,e=r,u=ge.prototype.thru;for(n&&t.reverse();e--;){var o=t[e];if("function"!=typeof o)throw new ut(a);if(u&&!f&&"wrapper"==Wi(o))var f=new ge([],!0)}for(e=f?e:r;++e<r;){var c=Wi(o=t[e]),l="wrapper"==c?Li(o):i;f=l&&Gi(l[0])&&l[1]==(A|w|x|O)&&!l[4].length&&1==l[9]?f[Wi(l[0])].apply(f,l[3]):1==o.length&&Gi(o)?f[c]():f.thru(o)}return function(){var n=arguments,e=n[0];if(f&&1==n.length&&yf(e))return f.plant(e).value();for(var u=0,i=r?t[u].apply(this,n):e;++u<r;)i=t[u].call(this,i);return i}})}function pi(n,t,e,u,o,f,a,c,l,s){var h=t&A,p=t&y,v=t&d,_=t&(w|m),g=t&k,b=v?i:li(n);return function y(){for(var d=arguments.length,w=r(d),m=d;m--;)w[m]=arguments[m];if(_)var x=Ci(y),j=function(n,t){for(var r=n.length,e=0;r--;)n[r]===t&&++e;return e}(w,x);if(u&&(w=ni(w,u,o,_)),f&&(w=ti(w,f,a,_)),d-=j,_&&d<s){var A=Rr(w,x);return wi(n,t,pi,y.placeholder,e,w,A,c,l,s-d)}var O=p?e:this,k=v?O[n]:n;return d=w.length,c?w=function(n,t){for(var r=n.length,e=Kr(t.length,r),u=ri(n);e--;){var o=t[e];n[e]=Zi(o,r)?u[o]:i}return n}(w,c):g&&d>1&&w.reverse(),h&&l<d&&(w.length=l),this&&this!==Ct&&this instanceof y&&(k=b||li(k)),k.apply(O,w)}}function vi(n,t){return function(r,e){return function(n,t,r,e){return Ve(n,function(n,u,i){t(e,r(n),u,i)}),e}(r,n,t(e),{})}}function _i(n,t){return function(r,e){var u;if(r===i&&e===i)return t;if(r!==i&&(u=r),e!==i){if(u===i)return e;"string"==typeof r||"string"==typeof e?(r=Uu(r),e=Uu(e)):(r=Tu(r),e=Tu(e)),u=n(r,e)}return u}}function gi(n){return Si(function(t){return t=nr(t,yr(Ti())),ju(function(r){var e=this;return n(t,function(n){return Kt(n,e,r)})})})}function yi(n,t){var r=(t=t===i?" ":Uu(t)).length;if(r<2)return r?xu(t,n):t;var e=xu(t,$r(n/Lr(t)));return Or(t)?Gu(Wr(e),0,n).join(""):e.slice(0,n)}function di(n){return function(t,e,u){return u&&"number"!=typeof u&&Ki(t,e,u)&&(e=u=i),t=Df(t),e===i?(e=t,t=0):e=Df(e),function(n,t,e,u){for(var i=-1,o=Zr($r((t-n)/(e||1)),0),f=r(o);o--;)f[u?o:++i]=n,n+=e;return f}(t,e,u=u===i?t<e?1:-1:Df(u),n)}}function bi(n){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=Nf(t),r=Nf(r)),n(t,r)}}function wi(n,t,r,e,u,o,f,a,c,l){var s=t&w;t|=s?x:j,(t&=~(s?j:x))&b||(t&=~(y|d));var h=[n,t,u,s?o:i,s?f:i,s?i:o,s?i:f,a,c,l],p=r.apply(i,h);return Gi(n)&&to(p,h),p.placeholder=e,uo(p,n,t)}function mi(n){var t=nt[n];return function(n,r){if(n=Nf(n),r=null==r?0:Kr(Mf(r),292)){var e=(Zf(n)+"e").split("e");return+((e=(Zf(t(e[0]+"e"+(+e[1]+r)))+"e").split("e"))[0]+"e"+(+e[1]-r))}return t(n)}}var xi=ne&&1/Er(new ne([,-0]))[1]==W?function(n){return new ne(n)}:Ta;function ji(n){return function(t){var r=Mi(t);return r==J?kr(t):r==rn?zr(t):function(n,t){return nr(t,function(t){return[t,n[t]]})}(t,n(t))}}function Ai(n,t,e,u,o,f,c,l){var h=t&d;if(!h&&"function"!=typeof n)throw new ut(a);var p=u?u.length:0;if(p||(t&=~(x|j),u=o=i),c=c===i?c:Zr(Mf(c),0),l=l===i?l:Mf(l),p-=o?o.length:0,t&j){var v=u,_=o;u=o=i}var g=h?i:Li(n),k=[n,t,e,u,o,v,_,f,c,l];if(g&&function(n,t){var r=n[1],e=t[1],u=r|e,i=u<(y|d|A),o=e==A&&r==w||e==A&&r==O&&n[7].length<=t[8]||e==(A|O)&&t[7].length<=t[8]&&r==w;if(!i&&!o)return n;e&y&&(n[2]=t[2],u|=r&y?0:b);var f=t[3];if(f){var a=n[3];n[3]=a?ni(a,f,t[4]):f,n[4]=a?Rr(n[3],s):t[4]}(f=t[5])&&(a=n[5],n[5]=a?ti(a,f,t[6]):f,n[6]=a?Rr(n[5],s):t[6]),(f=t[7])&&(n[7]=f),e&A&&(n[8]=null==n[8]?t[8]:Kr(n[8],t[8])),null==n[9]&&(n[9]=t[9]),n[0]=t[0],n[1]=u}(k,g),n=k[0],t=k[1],e=k[2],u=k[3],o=k[4],!(l=k[9]=k[9]===i?h?0:n.length:Zr(k[9]-p,0))&&t&(w|m)&&(t&=~(w|m)),t&&t!=y)I=t==w||t==m?function(n,t,e){var u=li(n);return function o(){for(var f=arguments.length,a=r(f),c=f,l=Ci(o);c--;)a[c]=arguments[c];var s=f<3&&a[0]!==l&&a[f-1]!==l?[]:Rr(a,l);return(f-=s.length)<e?wi(n,t,pi,o.placeholder,i,a,s,i,i,e-f):Kt(this&&this!==Ct&&this instanceof o?u:n,this,a)}}(n,t,l):t!=x&&t!=(y|x)||o.length?pi.apply(i,k):function(n,t,e,u){var i=t&y,o=li(n);return function t(){for(var f=-1,a=arguments.length,c=-1,l=u.length,s=r(l+a),h=this&&this!==Ct&&this instanceof t?o:n;++c<l;)s[c]=u[c];for(;a--;)s[c++]=arguments[++f];return Kt(h,i?e:this,s)}}(n,t,e,u);else var I=function(n,t,r){var e=t&y,u=li(n);return function t(){return(this&&this!==Ct&&this instanceof t?u:n).apply(e?r:this,arguments)}}(n,t,e);return uo((g?Iu:to)(I,k),n,t)}function Oi(n,t,r,e){return n===i||pf(n,ft[r])&&!lt.call(e,r)?t:n}function ki(n,t,r,e,u,o){return If(n)&&If(t)&&(o.set(t,n),_u(n,t,i,ki,o),o.delete(t)),n}function Ii(n){return zf(n)?i:n}function Ri(n,t,r,e,u,o){var f=r&_,a=n.length,c=t.length;if(a!=c&&!(f&&c>a))return!1;var l=o.get(n);if(l&&o.get(t))return l==t;var s=-1,h=!0,p=r&g?new me:i;for(o.set(n,t),o.set(t,n);++s<a;){var v=n[s],y=t[s];if(e)var d=f?e(y,v,s,t,n,o):e(v,y,s,n,t,o);if(d!==i){if(d)continue;h=!1;break}if(p){if(!ur(t,function(n,t){if(!br(p,t)&&(v===n||u(v,n,r,e,o)))return p.push(t)})){h=!1;break}}else if(v!==y&&!u(v,y,r,e,o)){h=!1;break}}return o.delete(n),o.delete(t),h}function Si(n){return eo(Xi(n,i,go),n+"")}function Ei(n){return Ye(n,ua,Pi)}function zi(n){return Ye(n,ia,Di)}var Li=ee?function(n){return ee.get(n)}:Ta;function Wi(n){for(var t=n.name+"",r=ue[t],e=lt.call(ue,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function Ci(n){return(lt.call(pe,"placeholder")?pe:n).placeholder}function Ti(){var n=pe.iteratee||za;return n=n===za?au:n,arguments.length?n(arguments[0],arguments[1]):n}function Ui(n,t){var r=n.__data__;return function(n){var t=typeof n;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==n:null===n}(t)?r["string"==typeof t?"string":"hash"]:r.map}function Bi(n){for(var t=ua(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,Yi(u)]}return t}function $i(n,t){var r=function(n,t){return null==n?i:n[t]}(n,t);return fu(r)?r:i}var Pi=Dr?function(n){return null==n?[]:(n=tt(n),Yt(Dr(n),function(t){return Wt.call(n,t)}))}:Fa,Di=Dr?function(n){for(var t=[];n;)tr(t,Pi(n)),n=St(n);return t}:Fa,Mi=Qe;function Fi(n,t,r){for(var e=-1,u=(t=Ku(t,n)).length,i=!1;++e<u;){var o=ao(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:!!(u=null==n?0:n.length)&&kf(u)&&Zi(o,u)&&(yf(n)||gf(n))}function Ni(n){return"function"!=typeof n.constructor||Ji(n)?{}:ve(St(n))}function qi(n){return yf(n)||gf(n)||!!(Ut&&n&&n[Ut])}function Zi(n,t){var r=typeof n;return!!(t=null==t?C:t)&&("number"==r||"symbol"!=r&&Hn.test(n))&&n>-1&&n%1==0&&n<t}function Ki(n,t,r){if(!If(r))return!1;var e=typeof t;return!!("number"==e?bf(r)&&Zi(t,r.length):"string"==e&&t in r)&&pf(r[t],n)}function Vi(n,t){if(yf(n))return!1;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!Tf(n))||zn.test(n)||!En.test(n)||null!=t&&n in tt(t)}function Gi(n){var t=Wi(n),r=pe[t];if("function"!=typeof r||!(t in ye.prototype))return!1;if(n===r)return!0;var e=Li(r);return!!e&&n===e[0]}(Yr&&Mi(new Yr(new ArrayBuffer(1)))!=ln||Qr&&Mi(new Qr)!=J||Xr&&"[object Promise]"!=Mi(Xr.resolve())||ne&&Mi(new ne)!=rn||te&&Mi(new te)!=fn)&&(Mi=function(n){var t=Qe(n),r=t==X?n.constructor:i,e=r?co(r):"";if(e)switch(e){case ie:return ln;case oe:return J;case fe:return"[object Promise]";case ae:return rn;case ce:return fn}return t});var Hi=at?Af:Na;function Ji(n){var t=n&&n.constructor;return n===("function"==typeof t&&t.prototype||ft)}function Yi(n){return n==n&&!If(n)}function Qi(n,t){return function(r){return null!=r&&r[n]===t&&(t!==i||n in tt(r))}}function Xi(n,t,e){return t=Zr(t===i?n.length-1:t,0),function(){for(var u=arguments,i=-1,o=Zr(u.length-t,0),f=r(o);++i<o;)f[i]=u[t+i];i=-1;for(var a=r(t+1);++i<t;)a[i]=u[i];return a[t]=e(f),Kt(n,this,a)}}function no(n,t){return t.length<2?n:Je(n,Eu(t,0,-1))}var to=io(Iu),ro=Br||function(n,t){return Ct.setTimeout(n,t)},eo=io(Ru);function uo(n,t,r){var e=t+"";return eo(n,function(n,t){var r=t.length;if(!r)return n;var e=r-1;return t[e]=(r>1?"& ":"")+t[e],t=t.join(r>2?", ":" "),n.replace($n,"{\n/* [wrapped with "+t+"] */\n")}(e,function(n,t){return Gt(D,function(r){var e="_."+r[0];t&r[1]&&!Qt(n,e)&&n.push(e)}),n.sort()}(function(n){var t=n.match(Pn);return t?t[1].split(Dn):[]}(e),r)))}function io(n){var t=0,r=0;return function(){var e=Vr(),u=E-(e-r);if(r=e,u>0){if(++t>=S)return arguments[0]}else t=0;return n.apply(i,arguments)}}function oo(n,t){var r=-1,e=n.length,u=e-1;for(t=t===i?e:t;++r<t;){var o=mu(r,u),f=n[o];n[o]=n[r],n[r]=f}return n.length=t,n}var fo=function(n){var t=ff(n,function(n){return r.size===l&&r.clear(),n}),r=t.cache;return t}(function(n){var t=[];return 46===n.charCodeAt(0)&&t.push(""),n.replace(Ln,function(n,r,e,u){t.push(e?u.replace(Fn,"$1"):r||n)}),t});function ao(n){if("string"==typeof n||Tf(n))return n;var t=n+"";return"0"==t&&1/n==-W?"-0":t}function co(n){if(null!=n){try{return ct.call(n)}catch(n){}try{return n+""}catch(n){}}return""}function lo(n){if(n instanceof ye)return n.clone();var t=new ge(n.__wrapped__,n.__chain__);return t.__actions__=ri(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}var so=ju(function(n,t){return wf(n)?$e(n,qe(t,1,wf,!0)):[]}),ho=ju(function(n,t){var r=xo(t);return wf(r)&&(r=i),wf(n)?$e(n,qe(t,1,wf,!0),Ti(r,2)):[]}),po=ju(function(n,t){var r=xo(t);return wf(r)&&(r=i),wf(n)?$e(n,qe(t,1,wf,!0),i,r):[]});function vo(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:Mf(r);return u<0&&(u=Zr(e+u,0)),fr(n,Ti(t,3),u)}function _o(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e-1;return r!==i&&(u=Mf(r),u=r<0?Zr(e+u,0):Kr(u,e-1)),fr(n,Ti(t,3),u,!0)}function go(n){return null!=n&&n.length?qe(n,1):[]}function yo(n){return n&&n.length?n[0]:i}var bo=ju(function(n){var t=nr(n,qu);return t.length&&t[0]===n[0]?ru(t):[]}),wo=ju(function(n){var t=xo(n),r=nr(n,qu);return t===xo(r)?t=i:r.pop(),r.length&&r[0]===n[0]?ru(r,Ti(t,2)):[]}),mo=ju(function(n){var t=xo(n),r=nr(n,qu);return(t="function"==typeof t?t:i)&&r.pop(),r.length&&r[0]===n[0]?ru(r,i,t):[]});function xo(n){var t=null==n?0:n.length;return t?n[t-1]:i}var jo=ju(Ao);function Ao(n,t){return n&&n.length&&t&&t.length?bu(n,t):n}var Oo=Si(function(n,t){var r=null==n?0:n.length,e=We(n,t);return wu(n,nr(t,function(n){return Zi(n,r)?+n:n}).sort(Xu)),e});function ko(n){return null==n?n:Jr.call(n)}var Io=ju(function(n){return Bu(qe(n,1,wf,!0))}),Ro=ju(function(n){var t=xo(n);return wf(t)&&(t=i),Bu(qe(n,1,wf,!0),Ti(t,2))}),So=ju(function(n){var t=xo(n);return t="function"==typeof t?t:i,Bu(qe(n,1,wf,!0),i,t)});function Eo(n){if(!n||!n.length)return[];var t=0;return n=Yt(n,function(n){if(wf(n))return t=Zr(n.length,t),!0}),gr(t,function(t){return nr(n,hr(t))})}function zo(n,t){if(!n||!n.length)return[];var r=Eo(n);return null==t?r:nr(r,function(n){return Kt(t,i,n)})}var Lo=ju(function(n,t){return wf(n)?$e(n,t):[]}),Wo=ju(function(n){return Fu(Yt(n,wf))}),Co=ju(function(n){var t=xo(n);return wf(t)&&(t=i),Fu(Yt(n,wf),Ti(t,2))}),To=ju(function(n){var t=xo(n);return t="function"==typeof t?t:i,Fu(Yt(n,wf),i,t)}),Uo=ju(Eo);var Bo=ju(function(n){var t=n.length,r=t>1?n[t-1]:i;return zo(n,r="function"==typeof r?(n.pop(),r):i)});function $o(n){var t=pe(n);return t.__chain__=!0,t}function Po(n,t){return t(n)}var Do=Si(function(n){var t=n.length,r=t?n[0]:0,e=this.__wrapped__,u=function(t){return We(t,n)};return!(t>1||this.__actions__.length)&&e instanceof ye&&Zi(r)?((e=e.slice(r,+r+(t?1:0))).__actions__.push({func:Po,args:[u],thisArg:i}),new ge(e,this.__chain__).thru(function(n){return t&&!n.length&&n.push(i),n})):this.thru(u)});var Mo=ui(function(n,t,r){lt.call(n,r)?++n[r]:Le(n,r,1)});var Fo=si(vo),No=si(_o);function qo(n,t){return(yf(n)?Gt:Pe)(n,Ti(t,3))}function Zo(n,t){return(yf(n)?Ht:De)(n,Ti(t,3))}var Ko=ui(function(n,t,r){lt.call(n,r)?n[r].push(t):Le(n,r,[t])});var Vo=ju(function(n,t,e){var u=-1,i="function"==typeof t,o=bf(n)?r(n.length):[];return Pe(n,function(n){o[++u]=i?Kt(t,n,e):eu(n,t,e)}),o}),Go=ui(function(n,t,r){Le(n,r,t)});function Ho(n,t){return(yf(n)?nr:hu)(n,Ti(t,3))}var Jo=ui(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]});var Yo=ju(function(n,t){if(null==n)return[];var r=t.length;return r>1&&Ki(n,t[0],t[1])?t=[]:r>2&&Ki(t[0],t[1],t[2])&&(t=[t[0]]),yu(n,qe(t,1),[])}),Qo=Ur||function(){return Ct.Date.now()};function Xo(n,t,r){return t=r?i:t,t=n&&null==t?n.length:t,Ai(n,A,i,i,i,i,t)}function nf(n,t){var r;if("function"!=typeof t)throw new ut(a);return n=Mf(n),function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=i),r}}var tf=ju(function(n,t,r){var e=y;if(r.length){var u=Rr(r,Ci(tf));e|=x}return Ai(n,e,t,r,u)}),rf=ju(function(n,t,r){var e=y|d;if(r.length){var u=Rr(r,Ci(rf));e|=x}return Ai(t,e,n,r,u)});function ef(n,t,r){var e,u,o,f,c,l,s=0,h=!1,p=!1,v=!0;if("function"!=typeof n)throw new ut(a);function _(t){var r=e,o=u;return e=u=i,s=t,f=n.apply(o,r)}function g(n){var r=n-l;return l===i||r>=t||r<0||p&&n-s>=o}function y(){var n=Qo();if(g(n))return d(n);c=ro(y,function(n){var r=t-(n-l);return p?Kr(r,o-(n-s)):r}(n))}function d(n){return c=i,v&&e?_(n):(e=u=i,f)}function b(){var n=Qo(),r=g(n);if(e=arguments,u=this,l=n,r){if(c===i)return function(n){return s=n,c=ro(y,t),h?_(n):f}(l);if(p)return c=ro(y,t),_(l)}return c===i&&(c=ro(y,t)),f}return t=Nf(t)||0,If(r)&&(h=!!r.leading,o=(p="maxWait"in r)?Zr(Nf(r.maxWait)||0,t):o,v="trailing"in r?!!r.trailing:v),b.cancel=function(){c!==i&&Hu(c),s=0,e=l=u=c=i},b.flush=function(){return c===i?f:d(Qo())},b}var uf=ju(function(n,t){return Be(n,1,t)}),of=ju(function(n,t,r){return Be(n,Nf(t)||0,r)});function ff(n,t){if("function"!=typeof n||null!=t&&"function"!=typeof t)throw new ut(a);var r=function(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;if(i.has(u))return i.get(u);var o=n.apply(this,e);return r.cache=i.set(u,o)||i,o};return r.cache=new(ff.Cache||we),r}function af(n){if("function"!=typeof n)throw new ut(a);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}ff.Cache=we;var cf=Vu(function(n,t){var r=(t=1==t.length&&yf(t[0])?nr(t[0],yr(Ti())):nr(qe(t,1),yr(Ti()))).length;return ju(function(e){for(var u=-1,i=Kr(e.length,r);++u<i;)e[u]=t[u].call(this,e[u]);return Kt(n,this,e)})}),lf=ju(function(n,t){var r=Rr(t,Ci(lf));return Ai(n,x,i,t,r)}),sf=ju(function(n,t){var r=Rr(t,Ci(sf));return Ai(n,j,i,t,r)}),hf=Si(function(n,t){return Ai(n,O,i,i,i,t)});function pf(n,t){return n===t||n!=n&&t!=t}var vf=bi(Xe),_f=bi(function(n,t){return n>=t}),gf=uu(function(){return arguments}())?uu:function(n){return Rf(n)&&lt.call(n,"callee")&&!Wt.call(n,"callee")},yf=r.isArray,df=Dt?yr(Dt):function(n){return Rf(n)&&Qe(n)==cn};function bf(n){return null!=n&&kf(n.length)&&!Af(n)}function wf(n){return Rf(n)&&bf(n)}var mf=Mr||Na,xf=Mt?yr(Mt):function(n){return Rf(n)&&Qe(n)==Z};function jf(n){if(!Rf(n))return!1;var t=Qe(n);return t==V||t==K||"string"==typeof n.message&&"string"==typeof n.name&&!zf(n)}function Af(n){if(!If(n))return!1;var t=Qe(n);return t==G||t==H||t==N||t==nn}function Of(n){return"number"==typeof n&&n==Mf(n)}function kf(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=C}function If(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function Rf(n){return null!=n&&"object"==typeof n}var Sf=Ft?yr(Ft):function(n){return Rf(n)&&Mi(n)==J};function Ef(n){return"number"==typeof n||Rf(n)&&Qe(n)==Y}function zf(n){if(!Rf(n)||Qe(n)!=X)return!1;var t=St(n);if(null===t)return!0;var r=lt.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&ct.call(r)==vt}var Lf=Nt?yr(Nt):function(n){return Rf(n)&&Qe(n)==tn};var Wf=qt?yr(qt):function(n){return Rf(n)&&Mi(n)==rn};function Cf(n){return"string"==typeof n||!yf(n)&&Rf(n)&&Qe(n)==en}function Tf(n){return"symbol"==typeof n||Rf(n)&&Qe(n)==un}var Uf=Zt?yr(Zt):function(n){return Rf(n)&&kf(n.length)&&!!It[Qe(n)]};var Bf=bi(su),$f=bi(function(n,t){return n<=t});function Pf(n){if(!n)return[];if(bf(n))return Cf(n)?Wr(n):ri(n);if($t&&n[$t])return function(n){for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}(n[$t]());var t=Mi(n);return(t==J?kr:t==rn?Er:pa)(n)}function Df(n){return n?(n=Nf(n))===W||n===-W?(n<0?-1:1)*T:n==n?n:0:0===n?n:0}function Mf(n){var t=Df(n),r=t%1;return t==t?r?t-r:t:0}function Ff(n){return n?Ce(Mf(n),0,B):0}function Nf(n){if("number"==typeof n)return n;if(Tf(n))return U;if(If(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=If(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(Tn,"");var r=Kn.test(n);return r||Gn.test(n)?zt(n.slice(2),r?2:8):Zn.test(n)?U:+n}function qf(n){return ei(n,ia(n))}function Zf(n){return null==n?"":Uu(n)}var Kf=ii(function(n,t){if(Ji(t)||bf(t))ei(t,ua(t),n);else for(var r in t)lt.call(t,r)&&Re(n,r,t[r])}),Vf=ii(function(n,t){ei(t,ia(t),n)}),Gf=ii(function(n,t,r,e){ei(t,ia(t),n,e)}),Hf=ii(function(n,t,r,e){ei(t,ua(t),n,e)}),Jf=Si(We);var Yf=ju(function(n,t){n=tt(n);var r=-1,e=t.length,u=e>2?t[2]:i;for(u&&Ki(t[0],t[1],u)&&(e=1);++r<e;)for(var o=t[r],f=ia(o),a=-1,c=f.length;++a<c;){var l=f[a],s=n[l];(s===i||pf(s,ft[l])&&!lt.call(n,l))&&(n[l]=o[l])}return n}),Qf=ju(function(n){return n.push(i,ki),Kt(fa,i,n)});function Xf(n,t,r){var e=null==n?i:Je(n,t);return e===i?r:e}function na(n,t){return null!=n&&Fi(n,t,tu)}var ta=vi(function(n,t,r){null!=t&&"function"!=typeof t.toString&&(t=pt.call(t)),n[t]=r},Ia(Ea)),ra=vi(function(n,t,r){null!=t&&"function"!=typeof t.toString&&(t=pt.call(t)),lt.call(n,t)?n[t].push(r):n[t]=[r]},Ti),ea=ju(eu);function ua(n){return bf(n)?je(n):cu(n)}function ia(n){return bf(n)?je(n,!0):lu(n)}var oa=ii(function(n,t,r){_u(n,t,r)}),fa=ii(function(n,t,r,e){_u(n,t,r,e)}),aa=Si(function(n,t){var r={};if(null==n)return r;var e=!1;t=nr(t,function(t){return t=Ku(t,n),e||(e=t.length>1),t}),ei(n,zi(n),r),e&&(r=Te(r,h|p|v,Ii));for(var u=t.length;u--;)$u(r,t[u]);return r});var ca=Si(function(n,t){return null==n?{}:function(n,t){return du(n,t,function(t,r){return na(n,r)})}(n,t)});function la(n,t){if(null==n)return{};var r=nr(zi(n),function(n){return[n]});return t=Ti(t),du(n,r,function(n,r){return t(n,r[0])})}var sa=ji(ua),ha=ji(ia);function pa(n){return null==n?[]:dr(n,ua(n))}var va=ci(function(n,t,r){return t=t.toLowerCase(),n+(r?_a(t):t)});function _a(n){return ja(Zf(n).toLowerCase())}function ga(n){return(n=Zf(n))&&n.replace(Jn,xr).replace(wt,"")}var ya=ci(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),da=ci(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),ba=ai("toLowerCase");var wa=ci(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()});var ma=ci(function(n,t,r){return n+(r?" ":"")+ja(t)});var xa=ci(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),ja=ai("toUpperCase");function Aa(n,t,r){return n=Zf(n),(t=r?i:t)===i?function(n){return At.test(n)}(n)?function(n){return n.match(xt)||[]}(n):function(n){return n.match(Mn)||[]}(n):n.match(t)||[]}var Oa=ju(function(n,t){try{return Kt(n,i,t)}catch(n){return jf(n)?n:new u(n)}}),ka=Si(function(n,t){return Gt(t,function(t){t=ao(t),Le(n,t,tf(n[t],n))}),n});function Ia(n){return function(){return n}}var Ra=hi(),Sa=hi(!0);function Ea(n){return n}function za(n){return au("function"==typeof n?n:Te(n,h))}var La=ju(function(n,t){return function(r){return eu(r,n,t)}}),Wa=ju(function(n,t){return function(r){return eu(n,r,t)}});function Ca(n,t,r){var e=ua(t),u=He(t,e);null!=r||If(t)&&(u.length||!e.length)||(r=t,t=n,n=this,u=He(t,ua(t)));var i=!(If(r)&&"chain"in r&&!r.chain),o=Af(n);return Gt(u,function(r){var e=t[r];n[r]=e,o&&(n.prototype[r]=function(){var t=this.__chain__;if(i||t){var r=n(this.__wrapped__);return(r.__actions__=ri(this.__actions__)).push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,tr([this.value()],arguments))})}),n}function Ta(){}var Ua=gi(nr),Ba=gi(Jt),$a=gi(ur);function Pa(n){return Vi(n)?hr(ao(n)):function(n){return function(t){return Je(t,n)}}(n)}var Da=di(),Ma=di(!0);function Fa(){return[]}function Na(){return!1}var qa=_i(function(n,t){return n+t},0),Za=mi("ceil"),Ka=_i(function(n,t){return n/t},1),Va=mi("floor");var Ga=_i(function(n,t){return n*t},1),Ha=mi("round"),Ja=_i(function(n,t){return n-t},0);return pe.after=function(n,t){if("function"!=typeof t)throw new ut(a);return n=Mf(n),function(){if(--n<1)return t.apply(this,arguments)}},pe.ary=Xo,pe.assign=Kf,pe.assignIn=Vf,pe.assignInWith=Gf,pe.assignWith=Hf,pe.at=Jf,pe.before=nf,pe.bind=tf,pe.bindAll=ka,pe.bindKey=rf,pe.castArray=function(){if(!arguments.length)return[];var n=arguments[0];return yf(n)?n:[n]},pe.chain=$o,pe.chunk=function(n,t,e){t=(e?Ki(n,t,e):t===i)?1:Zr(Mf(t),0);var u=null==n?0:n.length;if(!u||t<1)return[];for(var o=0,f=0,a=r($r(u/t));o<u;)a[f++]=Eu(n,o,o+=t);return a},pe.compact=function(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){var i=n[t];i&&(u[e++]=i)}return u},pe.concat=function(){var n=arguments.length;if(!n)return[];for(var t=r(n-1),e=arguments[0],u=n;u--;)t[u-1]=arguments[u];return tr(yf(e)?ri(e):[e],qe(t,1))},pe.cond=function(n){var t=null==n?0:n.length,r=Ti();return n=t?nr(n,function(n){if("function"!=typeof n[1])throw new ut(a);return[r(n[0]),n[1]]}):[],ju(function(r){for(var e=-1;++e<t;){var u=n[e];if(Kt(u[0],this,r))return Kt(u[1],this,r)}})},pe.conforms=function(n){return function(n){var t=ua(n);return function(r){return Ue(r,n,t)}}(Te(n,h))},pe.constant=Ia,pe.countBy=Mo,pe.create=function(n,t){var r=ve(n);return null==t?r:ze(r,t)},pe.curry=function n(t,r,e){var u=Ai(t,w,i,i,i,i,i,r=e?i:r);return u.placeholder=n.placeholder,u},pe.curryRight=function n(t,r,e){var u=Ai(t,m,i,i,i,i,i,r=e?i:r);return u.placeholder=n.placeholder,u},pe.debounce=ef,pe.defaults=Yf,pe.defaultsDeep=Qf,pe.defer=uf,pe.delay=of,pe.difference=so,pe.differenceBy=ho,pe.differenceWith=po,pe.drop=function(n,t,r){var e=null==n?0:n.length;return e?Eu(n,(t=r||t===i?1:Mf(t))<0?0:t,e):[]},pe.dropRight=function(n,t,r){var e=null==n?0:n.length;return e?Eu(n,0,(t=e-(t=r||t===i?1:Mf(t)))<0?0:t):[]},pe.dropRightWhile=function(n,t){return n&&n.length?Du(n,Ti(t,3),!0,!0):[]},pe.dropWhile=function(n,t){return n&&n.length?Du(n,Ti(t,3),!0):[]},pe.fill=function(n,t,r,e){var u=null==n?0:n.length;return u?(r&&"number"!=typeof r&&Ki(n,t,r)&&(r=0,e=u),function(n,t,r,e){var u=n.length;for((r=Mf(r))<0&&(r=-r>u?0:u+r),(e=e===i||e>u?u:Mf(e))<0&&(e+=u),e=r>e?0:Ff(e);r<e;)n[r++]=t;return n}(n,t,r,e)):[]},pe.filter=function(n,t){return(yf(n)?Yt:Ne)(n,Ti(t,3))},pe.flatMap=function(n,t){return qe(Ho(n,t),1)},pe.flatMapDeep=function(n,t){return qe(Ho(n,t),W)},pe.flatMapDepth=function(n,t,r){return r=r===i?1:Mf(r),qe(Ho(n,t),r)},pe.flatten=go,pe.flattenDeep=function(n){return null!=n&&n.length?qe(n,W):[]},pe.flattenDepth=function(n,t){return null!=n&&n.length?qe(n,t=t===i?1:Mf(t)):[]},pe.flip=function(n){return Ai(n,k)},pe.flow=Ra,pe.flowRight=Sa,pe.fromPairs=function(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e},pe.functions=function(n){return null==n?[]:He(n,ua(n))},pe.functionsIn=function(n){return null==n?[]:He(n,ia(n))},pe.groupBy=Ko,pe.initial=function(n){return null!=n&&n.length?Eu(n,0,-1):[]},pe.intersection=bo,pe.intersectionBy=wo,pe.intersectionWith=mo,pe.invert=ta,pe.invertBy=ra,pe.invokeMap=Vo,pe.iteratee=za,pe.keyBy=Go,pe.keys=ua,pe.keysIn=ia,pe.map=Ho,pe.mapKeys=function(n,t){var r={};return t=Ti(t,3),Ve(n,function(n,e,u){Le(r,t(n,e,u),n)}),r},pe.mapValues=function(n,t){var r={};return t=Ti(t,3),Ve(n,function(n,e,u){Le(r,e,t(n,e,u))}),r},pe.matches=function(n){return pu(Te(n,h))},pe.matchesProperty=function(n,t){return vu(n,Te(t,h))},pe.memoize=ff,pe.merge=oa,pe.mergeWith=fa,pe.method=La,pe.methodOf=Wa,pe.mixin=Ca,pe.negate=af,pe.nthArg=function(n){return n=Mf(n),ju(function(t){return gu(t,n)})},pe.omit=aa,pe.omitBy=function(n,t){return la(n,af(Ti(t)))},pe.once=function(n){return nf(2,n)},pe.orderBy=function(n,t,r,e){return null==n?[]:(yf(t)||(t=null==t?[]:[t]),yf(r=e?i:r)||(r=null==r?[]:[r]),yu(n,t,r))},pe.over=Ua,pe.overArgs=cf,pe.overEvery=Ba,pe.overSome=$a,pe.partial=lf,pe.partialRight=sf,pe.partition=Jo,pe.pick=ca,pe.pickBy=la,pe.property=Pa,pe.propertyOf=function(n){return function(t){return null==n?i:Je(n,t)}},pe.pull=jo,pe.pullAll=Ao,pe.pullAllBy=function(n,t,r){return n&&n.length&&t&&t.length?bu(n,t,Ti(r,2)):n},pe.pullAllWith=function(n,t,r){return n&&n.length&&t&&t.length?bu(n,t,i,r):n},pe.pullAt=Oo,pe.range=Da,pe.rangeRight=Ma,pe.rearg=hf,pe.reject=function(n,t){return(yf(n)?Yt:Ne)(n,af(Ti(t,3)))},pe.remove=function(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=Ti(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),u.push(e))}return wu(n,u),r},pe.rest=function(n,t){if("function"!=typeof n)throw new ut(a);return ju(n,t=t===i?t:Mf(t))},pe.reverse=ko,pe.sampleSize=function(n,t,r){return t=(r?Ki(n,t,r):t===i)?1:Mf(t),(yf(n)?Oe:Ou)(n,t)},pe.set=function(n,t,r){return null==n?n:ku(n,t,r)},pe.setWith=function(n,t,r,e){return e="function"==typeof e?e:i,null==n?n:ku(n,t,r,e)},pe.shuffle=function(n){return(yf(n)?ke:Su)(n)},pe.slice=function(n,t,r){var e=null==n?0:n.length;return e?(r&&"number"!=typeof r&&Ki(n,t,r)?(t=0,r=e):(t=null==t?0:Mf(t),r=r===i?e:Mf(r)),Eu(n,t,r)):[]},pe.sortBy=Yo,pe.sortedUniq=function(n){return n&&n.length?Cu(n):[]},pe.sortedUniqBy=function(n,t){return n&&n.length?Cu(n,Ti(t,2)):[]},pe.split=function(n,t,r){return r&&"number"!=typeof r&&Ki(n,t,r)&&(t=r=i),(r=r===i?B:r>>>0)?(n=Zf(n))&&("string"==typeof t||null!=t&&!Lf(t))&&!(t=Uu(t))&&Or(n)?Gu(Wr(n),0,r):n.split(t,r):[]},pe.spread=function(n,t){if("function"!=typeof n)throw new ut(a);return t=null==t?0:Zr(Mf(t),0),ju(function(r){var e=r[t],u=Gu(r,0,t);return e&&tr(u,e),Kt(n,this,u)})},pe.tail=function(n){var t=null==n?0:n.length;return t?Eu(n,1,t):[]},pe.take=function(n,t,r){return n&&n.length?Eu(n,0,(t=r||t===i?1:Mf(t))<0?0:t):[]},pe.takeRight=function(n,t,r){var e=null==n?0:n.length;return e?Eu(n,(t=e-(t=r||t===i?1:Mf(t)))<0?0:t,e):[]},pe.takeRightWhile=function(n,t){return n&&n.length?Du(n,Ti(t,3),!1,!0):[]},pe.takeWhile=function(n,t){return n&&n.length?Du(n,Ti(t,3)):[]},pe.tap=function(n,t){return t(n),n},pe.throttle=function(n,t,r){var e=!0,u=!0;if("function"!=typeof n)throw new ut(a);return If(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),ef(n,t,{leading:e,maxWait:t,trailing:u})},pe.thru=Po,pe.toArray=Pf,pe.toPairs=sa,pe.toPairsIn=ha,pe.toPath=function(n){return yf(n)?nr(n,ao):Tf(n)?[n]:ri(fo(Zf(n)))},pe.toPlainObject=qf,pe.transform=function(n,t,r){var e=yf(n),u=e||mf(n)||Uf(n);if(t=Ti(t,4),null==r){var i=n&&n.constructor;r=u?e?new i:[]:If(n)&&Af(i)?ve(St(n)):{}}return(u?Gt:Ve)(n,function(n,e,u){return t(r,n,e,u)}),r},pe.unary=function(n){return Xo(n,1)},pe.union=Io,pe.unionBy=Ro,pe.unionWith=So,pe.uniq=function(n){return n&&n.length?Bu(n):[]},pe.uniqBy=function(n,t){return n&&n.length?Bu(n,Ti(t,2)):[]},pe.uniqWith=function(n,t){return t="function"==typeof t?t:i,n&&n.length?Bu(n,i,t):[]},pe.unset=function(n,t){return null==n||$u(n,t)},pe.unzip=Eo,pe.unzipWith=zo,pe.update=function(n,t,r){return null==n?n:Pu(n,t,Zu(r))},pe.updateWith=function(n,t,r,e){return e="function"==typeof e?e:i,null==n?n:Pu(n,t,Zu(r),e)},pe.values=pa,pe.valuesIn=function(n){return null==n?[]:dr(n,ia(n))},pe.without=Lo,pe.words=Aa,pe.wrap=function(n,t){return lf(Zu(t),n)},pe.xor=Wo,pe.xorBy=Co,pe.xorWith=To,pe.zip=Uo,pe.zipObject=function(n,t){return Nu(n||[],t||[],Re)},pe.zipObjectDeep=function(n,t){return Nu(n||[],t||[],ku)},pe.zipWith=Bo,pe.entries=sa,pe.entriesIn=ha,pe.extend=Vf,pe.extendWith=Gf,Ca(pe,pe),pe.add=qa,pe.attempt=Oa,pe.camelCase=va,pe.capitalize=_a,pe.ceil=Za,pe.clamp=function(n,t,r){return r===i&&(r=t,t=i),r!==i&&(r=(r=Nf(r))==r?r:0),t!==i&&(t=(t=Nf(t))==t?t:0),Ce(Nf(n),t,r)},pe.clone=function(n){return Te(n,v)},pe.cloneDeep=function(n){return Te(n,h|v)},pe.cloneDeepWith=function(n,t){return Te(n,h|v,t="function"==typeof t?t:i)},pe.cloneWith=function(n,t){return Te(n,v,t="function"==typeof t?t:i)},pe.conformsTo=function(n,t){return null==t||Ue(n,t,ua(t))},pe.deburr=ga,pe.defaultTo=function(n,t){return null==n||n!=n?t:n},pe.divide=Ka,pe.endsWith=function(n,t,r){n=Zf(n),t=Uu(t);var e=n.length,u=r=r===i?e:Ce(Mf(r),0,e);return(r-=t.length)>=0&&n.slice(r,u)==t},pe.eq=pf,pe.escape=function(n){return(n=Zf(n))&&kn.test(n)?n.replace(An,jr):n},pe.escapeRegExp=function(n){return(n=Zf(n))&&Cn.test(n)?n.replace(Wn,"\\$&"):n},pe.every=function(n,t,r){var e=yf(n)?Jt:Me;return r&&Ki(n,t,r)&&(t=i),e(n,Ti(t,3))},pe.find=Fo,pe.findIndex=vo,pe.findKey=function(n,t){return or(n,Ti(t,3),Ve)},pe.findLast=No,pe.findLastIndex=_o,pe.findLastKey=function(n,t){return or(n,Ti(t,3),Ge)},pe.floor=Va,pe.forEach=qo,pe.forEachRight=Zo,pe.forIn=function(n,t){return null==n?n:Ze(n,Ti(t,3),ia)},pe.forInRight=function(n,t){return null==n?n:Ke(n,Ti(t,3),ia)},pe.forOwn=function(n,t){return n&&Ve(n,Ti(t,3))},pe.forOwnRight=function(n,t){return n&&Ge(n,Ti(t,3))},pe.get=Xf,pe.gt=vf,pe.gte=_f,pe.has=function(n,t){return null!=n&&Fi(n,t,nu)},pe.hasIn=na,pe.head=yo,pe.identity=Ea,pe.includes=function(n,t,r,e){n=bf(n)?n:pa(n),r=r&&!e?Mf(r):0;var u=n.length;return r<0&&(r=Zr(u+r,0)),Cf(n)?r<=u&&n.indexOf(t,r)>-1:!!u&&ar(n,t,r)>-1},pe.indexOf=function(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:Mf(r);return u<0&&(u=Zr(e+u,0)),ar(n,t,u)},pe.inRange=function(n,t,r){return t=Df(t),r===i?(r=t,t=0):r=Df(r),function(n,t,r){return n>=Kr(t,r)&&n<Zr(t,r)}(n=Nf(n),t,r)},pe.invoke=ea,pe.isArguments=gf,pe.isArray=yf,pe.isArrayBuffer=df,pe.isArrayLike=bf,pe.isArrayLikeObject=wf,pe.isBoolean=function(n){return!0===n||!1===n||Rf(n)&&Qe(n)==q},pe.isBuffer=mf,pe.isDate=xf,pe.isElement=function(n){return Rf(n)&&1===n.nodeType&&!zf(n)},pe.isEmpty=function(n){if(null==n)return!0;if(bf(n)&&(yf(n)||"string"==typeof n||"function"==typeof n.splice||mf(n)||Uf(n)||gf(n)))return!n.length;var t=Mi(n);if(t==J||t==rn)return!n.size;if(Ji(n))return!cu(n).length;for(var r in n)if(lt.call(n,r))return!1;return!0},pe.isEqual=function(n,t){return iu(n,t)},pe.isEqualWith=function(n,t,r){var e=(r="function"==typeof r?r:i)?r(n,t):i;return e===i?iu(n,t,i,r):!!e},pe.isError=jf,pe.isFinite=function(n){return"number"==typeof n&&Fr(n)},pe.isFunction=Af,pe.isInteger=Of,pe.isLength=kf,pe.isMap=Sf,pe.isMatch=function(n,t){return n===t||ou(n,t,Bi(t))},pe.isMatchWith=function(n,t,r){return r="function"==typeof r?r:i,ou(n,t,Bi(t),r)},pe.isNaN=function(n){return Ef(n)&&n!=+n},pe.isNative=function(n){if(Hi(n))throw new u(f);return fu(n)},pe.isNil=function(n){return null==n},pe.isNull=function(n){return null===n},pe.isNumber=Ef,pe.isObject=If,pe.isObjectLike=Rf,pe.isPlainObject=zf,pe.isRegExp=Lf,pe.isSafeInteger=function(n){return Of(n)&&n>=-C&&n<=C},pe.isSet=Wf,pe.isString=Cf,pe.isSymbol=Tf,pe.isTypedArray=Uf,pe.isUndefined=function(n){return n===i},pe.isWeakMap=function(n){return Rf(n)&&Mi(n)==fn},pe.isWeakSet=function(n){return Rf(n)&&Qe(n)==an},pe.join=function(n,t){return null==n?"":Nr.call(n,t)},pe.kebabCase=ya,pe.last=xo,pe.lastIndexOf=function(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e;return r!==i&&(u=(u=Mf(r))<0?Zr(e+u,0):Kr(u,e-1)),t==t?function(n,t,r){for(var e=r+1;e--;)if(n[e]===t)return e;return e}(n,t,u):fr(n,lr,u,!0)},pe.lowerCase=da,pe.lowerFirst=ba,pe.lt=Bf,pe.lte=$f,pe.max=function(n){return n&&n.length?Fe(n,Ea,Xe):i},pe.maxBy=function(n,t){return n&&n.length?Fe(n,Ti(t,2),Xe):i},pe.mean=function(n){return sr(n,Ea)},pe.meanBy=function(n,t){return sr(n,Ti(t,2))},pe.min=function(n){return n&&n.length?Fe(n,Ea,su):i},pe.minBy=function(n,t){return n&&n.length?Fe(n,Ti(t,2),su):i},pe.stubArray=Fa,pe.stubFalse=Na,pe.stubObject=function(){return{}},pe.stubString=function(){return""},pe.stubTrue=function(){return!0},pe.multiply=Ga,pe.nth=function(n,t){return n&&n.length?gu(n,Mf(t)):i},pe.noConflict=function(){return Ct._===this&&(Ct._=_t),this},pe.noop=Ta,pe.now=Qo,pe.pad=function(n,t,r){n=Zf(n);var e=(t=Mf(t))?Lr(n):0;if(!t||e>=t)return n;var u=(t-e)/2;return yi(Pr(u),r)+n+yi($r(u),r)},pe.padEnd=function(n,t,r){n=Zf(n);var e=(t=Mf(t))?Lr(n):0;return t&&e<t?n+yi(t-e,r):n},pe.padStart=function(n,t,r){n=Zf(n);var e=(t=Mf(t))?Lr(n):0;return t&&e<t?yi(t-e,r)+n:n},pe.parseInt=function(n,t,r){return r||null==t?t=0:t&&(t=+t),Gr(Zf(n).replace(Un,""),t||0)},pe.random=function(n,t,r){if(r&&"boolean"!=typeof r&&Ki(n,t,r)&&(t=r=i),r===i&&("boolean"==typeof t?(r=t,t=i):"boolean"==typeof n&&(r=n,n=i)),n===i&&t===i?(n=0,t=1):(n=Df(n),t===i?(t=n,n=0):t=Df(t)),n>t){var e=n;n=t,t=e}if(r||n%1||t%1){var u=Hr();return Kr(n+u*(t-n+Et("1e-"+((u+"").length-1))),t)}return mu(n,t)},pe.reduce=function(n,t,r){var e=yf(n)?rr:vr,u=arguments.length<3;return e(n,Ti(t,4),r,u,Pe)},pe.reduceRight=function(n,t,r){var e=yf(n)?er:vr,u=arguments.length<3;return e(n,Ti(t,4),r,u,De)},pe.repeat=function(n,t,r){return t=(r?Ki(n,t,r):t===i)?1:Mf(t),xu(Zf(n),t)},pe.replace=function(){var n=arguments,t=Zf(n[0]);return n.length<3?t:t.replace(n[1],n[2])},pe.result=function(n,t,r){var e=-1,u=(t=Ku(t,n)).length;for(u||(u=1,n=i);++e<u;){var o=null==n?i:n[ao(t[e])];o===i&&(e=u,o=r),n=Af(o)?o.call(n):o}return n},pe.round=Ha,pe.runInContext=n,pe.sample=function(n){return(yf(n)?Ae:Au)(n)},pe.size=function(n){if(null==n)return 0;if(bf(n))return Cf(n)?Lr(n):n.length;var t=Mi(n);return t==J||t==rn?n.size:cu(n).length},pe.snakeCase=wa,pe.some=function(n,t,r){var e=yf(n)?ur:zu;return r&&Ki(n,t,r)&&(t=i),e(n,Ti(t,3))},pe.sortedIndex=function(n,t){return Lu(n,t)},pe.sortedIndexBy=function(n,t,r){return Wu(n,t,Ti(r,2))},pe.sortedIndexOf=function(n,t){var r=null==n?0:n.length;if(r){var e=Lu(n,t);if(e<r&&pf(n[e],t))return e}return-1},pe.sortedLastIndex=function(n,t){return Lu(n,t,!0)},pe.sortedLastIndexBy=function(n,t,r){return Wu(n,t,Ti(r,2),!0)},pe.sortedLastIndexOf=function(n,t){if(null!=n&&n.length){var r=Lu(n,t,!0)-1;if(pf(n[r],t))return r}return-1},pe.startCase=ma,pe.startsWith=function(n,t,r){return n=Zf(n),r=null==r?0:Ce(Mf(r),0,n.length),t=Uu(t),n.slice(r,r+t.length)==t},pe.subtract=Ja,pe.sum=function(n){return n&&n.length?_r(n,Ea):0},pe.sumBy=function(n,t){return n&&n.length?_r(n,Ti(t,2)):0},pe.template=function(n,t,r){var e=pe.templateSettings;r&&Ki(n,t,r)&&(t=i),n=Zf(n),t=Gf({},t,e,Oi);var u,o,f=Gf({},t.imports,e.imports,Oi),a=ua(f),c=dr(f,a),l=0,s=t.interpolate||Yn,h="__p += '",p=rt((t.escape||Yn).source+"|"+s.source+"|"+(s===Sn?Nn:Yn).source+"|"+(t.evaluate||Yn).source+"|$","g"),v="//# sourceURL="+("sourceURL"in t?t.sourceURL:"lodash.templateSources["+ ++kt+"]")+"\n";n.replace(p,function(t,r,e,i,f,a){return e||(e=i),h+=n.slice(l,a).replace(Qn,Ar),r&&(u=!0,h+="' +\n__e("+r+") +\n'"),f&&(o=!0,h+="';\n"+f+";\n__p += '"),e&&(h+="' +\n((__t = ("+e+")) == null ? '' : __t) +\n'"),l=a+t.length,t}),h+="';\n";var _=t.variable;_||(h="with (obj) {\n"+h+"\n}\n"),h=(o?h.replace(wn,""):h).replace(mn,"$1").replace(xn,"$1;"),h="function("+(_||"obj")+") {\n"+(_?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(u?", __e = _.escape":"")+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}";var g=Oa(function(){return Xn(a,v+"return "+h).apply(i,c)});if(g.source=h,jf(g))throw g;return g},pe.times=function(n,t){if((n=Mf(n))<1||n>C)return[];var r=B,e=Kr(n,B);t=Ti(t),n-=B;for(var u=gr(e,t);++r<n;)t(r);return u},pe.toFinite=Df,pe.toInteger=Mf,pe.toLength=Ff,pe.toLower=function(n){return Zf(n).toLowerCase()},pe.toNumber=Nf,pe.toSafeInteger=function(n){return n?Ce(Mf(n),-C,C):0===n?n:0},pe.toString=Zf,pe.toUpper=function(n){return Zf(n).toUpperCase()},pe.trim=function(n,t,r){if((n=Zf(n))&&(r||t===i))return n.replace(Tn,"");if(!n||!(t=Uu(t)))return n;var e=Wr(n),u=Wr(t);return Gu(e,wr(e,u),mr(e,u)+1).join("")},pe.trimEnd=function(n,t,r){if((n=Zf(n))&&(r||t===i))return n.replace(Bn,"");if(!n||!(t=Uu(t)))return n;var e=Wr(n);return Gu(e,0,mr(e,Wr(t))+1).join("")},pe.trimStart=function(n,t,r){if((n=Zf(n))&&(r||t===i))return n.replace(Un,"");if(!n||!(t=Uu(t)))return n;var e=Wr(n);return Gu(e,wr(e,Wr(t))).join("")},pe.truncate=function(n,t){var r=I,e=R;if(If(t)){var u="separator"in t?t.separator:u;r="length"in t?Mf(t.length):r,e="omission"in t?Uu(t.omission):e}var o=(n=Zf(n)).length;if(Or(n)){var f=Wr(n);o=f.length}if(r>=o)return n;var a=r-Lr(e);if(a<1)return e;var c=f?Gu(f,0,a).join(""):n.slice(0,a);if(u===i)return c+e;if(f&&(a+=c.length-a),Lf(u)){if(n.slice(a).search(u)){var l,s=c;for(u.global||(u=rt(u.source,Zf(qn.exec(u))+"g")),u.lastIndex=0;l=u.exec(s);)var h=l.index;c=c.slice(0,h===i?a:h)}}else if(n.indexOf(Uu(u),a)!=a){var p=c.lastIndexOf(u);p>-1&&(c=c.slice(0,p))}return c+e},pe.unescape=function(n){return(n=Zf(n))&&On.test(n)?n.replace(jn,Cr):n},pe.uniqueId=function(n){var t=++st;return Zf(n)+t},pe.upperCase=xa,pe.upperFirst=ja,pe.each=qo,pe.eachRight=Zo,pe.first=yo,Ca(pe,function(){var n={};return Ve(pe,function(t,r){lt.call(pe.prototype,r)||(n[r]=t)}),n}(),{chain:!1}),pe.VERSION="4.17.10",Gt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){pe[n].placeholder=pe}),Gt(["drop","take"],function(n,t){ye.prototype[n]=function(r){r=r===i?1:Zr(Mf(r),0);var e=this.__filtered__&&!t?new ye(this):this.clone();return e.__filtered__?e.__takeCount__=Kr(r,e.__takeCount__):e.__views__.push({size:Kr(r,B),type:n+(e.__dir__<0?"Right":"")}),e},ye.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),Gt(["filter","map","takeWhile"],function(n,t){var r=t+1,e=r==z||3==r;ye.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({iteratee:Ti(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),Gt(["head","last"],function(n,t){var r="take"+(t?"Right":"");ye.prototype[n]=function(){return this[r](1).value()[0]}}),Gt(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");ye.prototype[n]=function(){return this.__filtered__?new ye(this):this[r](1)}}),ye.prototype.compact=function(){return this.filter(Ea)},ye.prototype.find=function(n){return this.filter(n).head()},ye.prototype.findLast=function(n){return this.reverse().find(n)},ye.prototype.invokeMap=ju(function(n,t){return"function"==typeof n?new ye(this):this.map(function(r){return eu(r,n,t)})}),ye.prototype.reject=function(n){return this.filter(af(Ti(n)))},ye.prototype.slice=function(n,t){n=Mf(n);var r=this;return r.__filtered__&&(n>0||t<0)?new ye(r):(n<0?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==i&&(r=(t=Mf(t))<0?r.dropRight(-t):r.take(t-n)),r)},ye.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},ye.prototype.toArray=function(){return this.take(B)},Ve(ye.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=pe[e?"take"+("last"==t?"Right":""):t],o=e||/^find/.test(t);u&&(pe.prototype[t]=function(){var t=this.__wrapped__,f=e?[1]:arguments,a=t instanceof ye,c=f[0],l=a||yf(t),s=function(n){var t=u.apply(pe,tr([n],f));return e&&h?t[0]:t};l&&r&&"function"==typeof c&&1!=c.length&&(a=l=!1);var h=this.__chain__,p=!!this.__actions__.length,v=o&&!h,_=a&&!p;if(!o&&l){t=_?t:new ye(this);var g=n.apply(t,f);return g.__actions__.push({func:Po,args:[s],thisArg:i}),new ge(g,h)}return v&&_?n.apply(this,f):(g=this.thru(s),v?e?g.value()[0]:g.value():g)})}),Gt(["pop","push","shift","sort","splice","unshift"],function(n){var t=it[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);pe.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(yf(u)?u:[],n)}return this[r](function(r){return t.apply(yf(r)?r:[],n)})}}),Ve(ye.prototype,function(n,t){var r=pe[t];if(r){var e=r.name+"";(ue[e]||(ue[e]=[])).push({name:t,func:r})}}),ue[pi(i,d).name]=[{name:"wrapper",func:i}],ye.prototype.clone=function(){var n=new ye(this.__wrapped__);return n.__actions__=ri(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=ri(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=ri(this.__views__),n},ye.prototype.reverse=function(){if(this.__filtered__){var n=new ye(this);n.__dir__=-1,n.__filtered__=!0}else(n=this.clone()).__dir__*=-1;return n},ye.prototype.value=function(){var n=this.__wrapped__.value(),t=this.__dir__,r=yf(n),e=t<0,u=r?n.length:0,i=function(n,t,r){for(var e=-1,u=r.length;++e<u;){var i=r[e],o=i.size;switch(i.type){case"drop":n+=o;break;case"dropRight":t-=o;break;case"take":t=Kr(t,n+o);break;case"takeRight":n=Zr(n,t-o)}}return{start:n,end:t}}(0,u,this.__views__),o=i.start,f=i.end,a=f-o,c=e?f:o-1,l=this.__iteratees__,s=l.length,h=0,p=Kr(a,this.__takeCount__);if(!r||!e&&u==a&&p==a)return Mu(n,this.__actions__);var v=[];n:for(;a--&&h<p;){for(var _=-1,g=n[c+=t];++_<s;){var y=l[_],d=y.iteratee,b=y.type,w=d(g);if(b==L)g=w;else if(!w){if(b==z)continue n;break n}}v[h++]=g}return v},pe.prototype.at=Do,pe.prototype.chain=function(){return $o(this)},pe.prototype.commit=function(){return new ge(this.value(),this.__chain__)},pe.prototype.next=function(){this.__values__===i&&(this.__values__=Pf(this.value()));var n=this.__index__>=this.__values__.length;return{done:n,value:n?i:this.__values__[this.__index__++]}},pe.prototype.plant=function(n){for(var t,r=this;r instanceof _e;){var e=lo(r);e.__index__=0,e.__values__=i,t?u.__wrapped__=e:t=e;var u=e;r=r.__wrapped__}return u.__wrapped__=n,t},pe.prototype.reverse=function(){var n=this.__wrapped__;if(n instanceof ye){var t=n;return this.__actions__.length&&(t=new ye(this)),(t=t.reverse()).__actions__.push({func:Po,args:[ko],thisArg:i}),new ge(t,this.__chain__)}return this.thru(ko)},pe.prototype.toJSON=pe.prototype.valueOf=pe.prototype.value=function(){return Mu(this.__wrapped__,this.__actions__)},pe.prototype.first=pe.prototype.head,$t&&(pe.prototype[$t]=function(){return this}),pe}();Ct._=Tr,(u=function(){return Tr}.call(t,r,t,e))===i||(e.exports=u)}).call(this)}).call(this,r(1),r(20)(n))},22:function(n,t,r){n.exports=r(21)}});;
!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([,function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);n(19),n(17),n(14);!function(e,t,n){t.platon={settings:n.platon||{homepageSlideSpeed:2e3},getViewport:function(){return{width:Math.max(document.documentElement.clientWidth,window.innerWidth||0),height:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}},frontpageSlider:function(n){if(e("body.anonymous-slider",n).length){var i=0,r=0;e(".anonymous-slider .slider-item").each(function(){e(this).attr("data-id",i),i&&e(this).addClass("hide").fadeOut(),i+=1}),setInterval(function(){r<i-1?r+=1:r=0,e('.anonymous-slider .slider-item:not([data-id="'+r+'"])').addClass("hide").fadeOut(),e('.anonymous-slider .slider-item[data-id="'+r+'"]').removeClass("hide").fadeIn()},t.platon.settings.homepageSlideSpeed)}},anonymousUserForms:function(t){e("body.anonymous-slider").length&&e("#user-sidebar a",t).once().click(function(t){var n=e(this).attr("href");e('.form-wrapper[data-target="'+n+'"]').length&&(t.preventDefault(),e(".form-wrapper[data-target]").hide(),e('.form-wrapper[data-target="'+n+'"]').show())})},searchBar:function(t){e(".search-trigger a",t).once().click(function(n){n.preventDefault(),e(this).hasClass("open")?(e(this).removeClass("open"),e("#search-form",t).hide()):(e(this).addClass("open"),e("#search-form",t).show(),e('#search-form form input[type="search"]',t).focus())})},trainingCatalog:function(t){e("body.page-catalogue .views-exposed-form fieldset#edit-sort-by--wrapper legend",t).once().click(function(){e(this).hasClass("active")?e(this).removeClass("active"):e(this).addClass("active")})},privateMessageRecipients:function(t){e(".private-message-recipients",t).each(function(){var t=parseInt(e(this).css("line-height"),10);e(this).css("max-height",t),e(this).find(".content").height()>t&&(e(this).css("max-height",t).addClass("short").append('<a href="#" class="expander">...</a>'),e(this).find(".expander").on("click",function(){return e(this).closest(".private-message-recipients").css("max-height","none").removeClass("short"),e(this).hide(),!1}))})},stepsVisibility:function(t){if(e("div#block-lp-steps-block",t).length){var n=e("#content",t).attr("class");e("#sidebar-first",t).hide(),e("#content",t).addClass("col-lg-12"),e("#main div#edit-actions",t).prepend('<a href="#" id="lp-steps-trigger" class="btn btn-link mr-auto">show</a>'),e("a#lp-steps-trigger",t).once().click(function(i){i.preventDefault(),e("a#lp-steps-trigger",t).hasClass("open")?(e("a#lp-steps-trigger",t).removeClass("open"),e("#sidebar-first",t).hide(),e("#content",t).addClass("col-lg-12")):(e("a#lp-steps-trigger",t).addClass("open"),e("#sidebar-first",t).show(),e("#content",t).attr("class",n))})}},formatTFTOperations:function(t){e("div#documents-library table tbody tr > td:last-child",t).each(function(){if(!e(this).hasClass("js-formatted")){e(this).addClass("js-formatted");var t='<div class="btn-group operations">';t+='<button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"></button>',t+='<div class="dropdown-menu dropdown-menu-right">',e(this).find("a").each(function(){e(this).removeClass("ops-link"),t+=e(this)[0].outerHTML}),t+="</div>",t+="</div>",e(this).html(t)}})},mobileMenu:function(t){var n=e("button.navbar-toggler",t),i=e("div#menu-wrapper",t);n.once().click(function(){n.hasClass("open")?(n.removeClass("open"),i.removeClass("show")):(n.addClass("open"),i.addClass("show"))})},fileWidget:function(t){e(".opigno-file-widget-wrapper",t).each(function(){e(this).find('input[type="hidden"] + span.file').length?e(this).addClass("not-empty"):e(this).removeClass("not-empty")})},packageFileInput:function(t){e(document,t).on("change",'input[name="files[package]"]',function(t){var n=e(this).next(".description"),i=t.target.value.split("\\").pop();n.data("default-value")||n.data("default-value",n.text()),i?n.text(i):n.text(n.data("default-value"))})},viewOpignoActivitiesBank:function(t){if(e(".view-opigno-activities-bank-lp-interface",t).length){var n=e('nav[aria-labelledby="pagination-heading"]',t);n.children("ul.pager").css("margin-bottom","-1rem"),e("form#views-form-opigno-activities-bank-lp-interface-default > table",t).after(n)}}},t.behaviors.platon={attach:function(n){t.platon.frontpageSlider(n),t.platon.anonymousUserForms(n),t.platon.searchBar(n),t.platon.trainingCatalog(n),t.platon.privateMessageRecipients(n),t.platon.stepsVisibility(n),t.platon.mobileMenu(n),t.platon.fileWidget(n),t.platon.packageFileInput(n),t.platon.viewOpignoActivitiesBank(n),e("iframe").iFrameResize(),e('a[href="#documents-library"]',n).once().click(function(){t.platon.formatTFTOperations(n)}),e(document).ajaxSuccess(function(){t.platon.formatTFTOperations(n)})}}}(window.jQuery,window.Drupal,window.drupalSettings)},,,,,,,,,function(e,t){!function(t){"use strict";if("undefined"!=typeof window){var n=!0,i=10,r="",o=0,a="",s=null,l="",u=!1,c={resize:1,click:1},f=128,d=!0,h=1,p="bodyOffset",m=p,g=!0,v="",y={},b=32,_=null,w=!1,E="[iFrameSizer]",T=E.length,C="",x={max:1,min:1,bodyScroll:1,documentElementScroll:1},S="child",A=!0,O=window.parent,I="*",D=0,N=!1,k=null,L=16,P=1,R="scroll",H=R,M=window,j=function(){J("MessageCallback function not defined")},F=function(){},W=function(){},B={height:function(){return J("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return J("Custom width calculation function not defined"),document.body.scrollWidth}},q={},U=Date.now||function(){return(new Date).getTime()},V={bodyOffset:function(){return document.body.offsetHeight+ue("marginTop")+ue("marginBottom")},offset:function(){return V.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return B.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,fe(V))},min:function(){return Math.min.apply(null,fe(V))},grow:function(){return V.max()},lowestElement:function(){return Math.max(V.bodyOffset()||V.documentElementOffset(),ce("bottom",he()))},taggedElement:function(){return de("bottom","data-iframe-height")}},z={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return B.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(z.bodyScroll(),z.documentElementScroll())},max:function(){return Math.max.apply(null,fe(z))},min:function(){return Math.min.apply(null,fe(z))},rightMostElement:function(){return ce("right",he())},taggedElement:function(){return de("right","data-iframe-width")}},G=function(e){var t,n,i,r=null,o=0,a=function(){o=U(),r=null,i=e.apply(t,n),r||(t=n=null)};return function(){var s=U();o||(o=s);var l=L-(s-o);return t=this,n=arguments,l<=0||l>L?(r&&(clearTimeout(r),r=null),o=s,i=e.apply(t,n),r||(t=n=null)):r||(r=setTimeout(a,l)),i}}(pe);K(window,"message",_e),"loading"!==document.readyState&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}function K(e,t,n){"addEventListener"in window?e.addEventListener(t,n,!1):"attachEvent"in window&&e.attachEvent("on"+t,n)}function Q(e,t,n){"removeEventListener"in window?e.removeEventListener(t,n,!1):"detachEvent"in window&&e.detachEvent("on"+t,n)}function $(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Y(e){return E+"["+C+"] "+e}function X(e){w&&"object"==typeof window.console&&console.log(Y(e))}function J(e){"object"==typeof window.console&&console.warn(Y(e))}function Z(){!function(){function e(e){return"true"===e}var i=v.substr(T).split(":");C=i[0],o=t!==i[1]?Number(i[1]):o,u=t!==i[2]?e(i[2]):u,w=t!==i[3]?e(i[3]):w,b=t!==i[4]?Number(i[4]):b,n=t!==i[6]?e(i[6]):n,a=i[7],m=t!==i[8]?i[8]:m,r=i[9],l=i[10],D=t!==i[11]?Number(i[11]):D,y.enable=t!==i[12]&&e(i[12]),S=t!==i[13]?i[13]:S,H=t!==i[14]?i[14]:H}(),X("Initialising iFrame ("+location.href+")"),function(){function e(e,t){return"function"==typeof e&&(X("Setup custom "+t+"CalcMethod"),B[t]=e,e="custom"),e}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(!function(){var e=window.iFrameResizer;X("Reading data from page: "+JSON.stringify(e)),j="messageCallback"in e?e.messageCallback:j,F="readyCallback"in e?e.readyCallback:F,I="targetOrigin"in e?e.targetOrigin:I,m="heightCalculationMethod"in e?e.heightCalculationMethod:m,H="widthCalculationMethod"in e?e.widthCalculationMethod:H}(),m=e(m,"height"),H=e(H,"width"));X("TargetOrigin for parent set to: "+I)}(),function(){t===a&&(a=o+"px");ee("margin",function(e,t){-1!==t.indexOf("-")&&(J("Negative CSS value ignored for "+e),t="");return t}("margin",a))}(),ee("background",r),ee("padding",l),function(){var e=document.createElement("div");e.style.clear="both",e.style.display="block",document.body.appendChild(e)}(),re(),oe(),document.documentElement.style.height="",document.body.style.height="",X('HTML & body height set to "auto"'),X("Enable public methods"),M.parentIFrame={autoResize:function(e){return!0===e&&!1===n?(n=!0,ae()):!1===e&&!0===n&&(n=!1,se()),n},close:function(){be(0,0,"close"),X("Disable outgoing messages"),A=!1,X("Remove event listener: Message"),Q(window,"message",_e),!0===n&&se()},getId:function(){return C},getPageInfo:function(e){"function"==typeof e?(W=e,be(0,0,"pageInfo")):(W=function(){},be(0,0,"pageInfoStop"))},moveToAnchor:function(e){y.findTarget(e)},reset:function(){ye("parentIFrame.reset")},scrollTo:function(e,t){be(t,e,"scrollTo")},scrollToOffset:function(e,t){be(t,e,"scrollToOffset")},sendMessage:function(e,t){be(0,0,"message",JSON.stringify(e),t)},setHeightCalculationMethod:function(e){m=e,re()},setWidthCalculationMethod:function(e){H=e,oe()},setTargetOrigin:function(e){X("Set targetOrigin: "+e),I=e},size:function(e,t){var n=(e||"")+(t?","+t:"");me("size","parentIFrame.size("+n+")",e,t)}},ae(),y=function(){function e(e){var n=e.getBoundingClientRect(),i={x:window.pageXOffset!==t?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==t?window.pageYOffset:document.documentElement.scrollTop};return{x:parseInt(n.left,10)+parseInt(i.x,10),y:parseInt(n.top,10)+parseInt(i.y,10)}}function n(n){var i=n.split("#")[1]||n,r=decodeURIComponent(i),o=document.getElementById(r)||document.getElementsByName(r)[0];t!==o?function(t){var n=e(t);X("Moving to in page link (#"+i+") at x: "+n.x+" y: "+n.y),be(n.y,n.x,"scrollToOffset")}(o):(X("In page link (#"+i+") not found in iFrame, so sending to parent"),be(0,0,"inPageLink","#"+i))}function i(){""!==location.hash&&"#"!==location.hash&&n(location.href)}y.enable?Array.prototype.forEach&&document.querySelectorAll?(X("Setting up location.hash handlers"),Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),function(e){"#"!==e.getAttribute("href")&&K(e,"click",function(e){e.preventDefault(),n(this.getAttribute("href"))})}),K(window,"hashchange",i),setTimeout(i,f)):J("In page linking not fully supported in this browser! (See README.md for IE8 workaround)"):X("In page linking not enabled");return{findTarget:n}}(),me("init","Init message from host page"),F()}function ee(e,n){t!==n&&""!==n&&"null"!==n&&(document.body.style[e]=n,X("Body "+e+' set to "'+n+'"'))}function te(e){var t={add:function(t){function n(){me(e.eventName,e.eventType)}q[t]=n,K(window,t,n)},remove:function(e){var t=q[e];delete q[e],Q(window,e,t)}};e.eventNames&&Array.prototype.map?(e.eventName=e.eventNames[0],e.eventNames.map(t[e.method])):t[e.method](e.eventName),X($(e.method)+" event listener: "+e.eventType)}function ne(e){te({method:e,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),te({method:e,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),te({method:e,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),te({method:e,eventType:"Input",eventName:"input"}),te({method:e,eventType:"Mouse Up",eventName:"mouseup"}),te({method:e,eventType:"Mouse Down",eventName:"mousedown"}),te({method:e,eventType:"Orientation Change",eventName:"orientationchange"}),te({method:e,eventType:"Print",eventName:["afterprint","beforeprint"]}),te({method:e,eventType:"Ready State Change",eventName:"readystatechange"}),te({method:e,eventType:"Touch Start",eventName:"touchstart"}),te({method:e,eventType:"Touch End",eventName:"touchend"}),te({method:e,eventType:"Touch Cancel",eventName:"touchcancel"}),te({method:e,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),te({method:e,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),te({method:e,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),"child"===S&&te({method:e,eventType:"IFrame Resized",eventName:"resize"})}function ie(e,t,n,i){return t!==e&&(e in n||(J(e+" is not a valid option for "+i+"CalculationMethod."),e=t),X(i+' calculation method set to "'+e+'"')),e}function re(){m=ie(m,p,V,"height")}function oe(){H=ie(H,R,z,"width")}function ae(){!0===n?(ne("add"),function(){var e=0>b;window.MutationObserver||window.WebKitMutationObserver?e?le():s=function(){function e(e){function t(e){!1===e.complete&&(X("Attach listeners to "+e.src),e.addEventListener("load",r,!1),e.addEventListener("error",o,!1),s.push(e))}"attributes"===e.type&&"src"===e.attributeName?t(e.target):"childList"===e.type&&Array.prototype.forEach.call(e.target.querySelectorAll("img"),t)}function n(e){X("Remove listeners from "+e.src),e.removeEventListener("load",r,!1),e.removeEventListener("error",o,!1),function(e){s.splice(s.indexOf(e),1)}(e)}function i(e,i,r){n(e.target),me(i,r+": "+e.target.src,t,t)}function r(e){i(e,"imageLoad","Image loaded")}function o(e){i(e,"imageLoadFailed","Image load failed")}function a(t){me("mutationObserver","mutationObserver: "+t[0].target+" "+t[0].type),t.forEach(e)}var s=[],l=window.MutationObserver||window.WebKitMutationObserver,u=function(){var e=document.querySelector("body");return u=new l(a),X("Create body MutationObserver"),u.observe(e,{attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0}),u}();return{disconnect:function(){"disconnect"in u&&(X("Disconnect body MutationObserver"),u.disconnect(),s.forEach(n))}}}():(X("MutationObserver not supported in this browser!"),le())}()):X("Auto Resize disabled")}function se(){ne("remove"),null!==s&&s.disconnect(),clearInterval(_)}function le(){0!==b&&(X("setInterval: "+b+"ms"),_=setInterval(function(){me("interval","setInterval: "+b)},Math.abs(b)))}function ue(e,t){var n=0;return t=t||document.body,n="defaultView"in document&&"getComputedStyle"in document.defaultView?null!==(n=document.defaultView.getComputedStyle(t,null))?n[e]:0:function(e){if(/^\d+(px)?$/i.test(e))return parseInt(e,i);var n=t.style.left,r=t.runtimeStyle.left;return t.runtimeStyle.left=t.currentStyle.left,t.style.left=e||0,e=t.style.pixelLeft,t.style.left=n,t.runtimeStyle.left=r,e}(t.currentStyle[e]),parseInt(n,i)}function ce(e,t){for(var n=t.length,i=0,r=0,o=$(e),a=U(),s=0;s<n;s++)(i=t[s].getBoundingClientRect()[e]+ue("margin"+o,t[s]))>r&&(r=i);return a=U()-a,X("Parsed "+n+" HTML elements"),X("Element position calculated in "+a+"ms"),function(e){e>L/2&&X("Event throttle increased to "+(L=2*e)+"ms")}(a),r}function fe(e){return[e.bodyOffset(),e.bodyScroll(),e.documentElementOffset(),e.documentElementScroll()]}function de(e,t){var n=document.querySelectorAll("["+t+"]");return 0===n.length&&(J("No tagged elements ("+t+") found on page"),document.querySelectorAll("body *")),ce(e,n)}function he(){return document.querySelectorAll("body *")}function pe(e,n,i,r){var o,a;!function(){function e(e,t){return!(Math.abs(e-t)<=D)}return o=t!==i?i:V[m](),a=t!==r?r:z[H](),e(h,o)||u&&e(P,a)}()&&"init"!==e?e in{init:1,interval:1,size:1}||!(m in x||u&&H in x)?e in{interval:1}||X("No change in size detected"):ye(n):(ge(),be(h=o,P=a,e))}function me(e,t,n,i){N&&e in c?X("Trigger event cancelled: "+e):(e in{reset:1,resetPage:1,init:1}||X("Trigger event: "+t),"init"===e?pe(e,t,n,i):G(e,t,n,i))}function ge(){N||(N=!0,X("Trigger event lock on")),clearTimeout(k),k=setTimeout(function(){N=!1,X("Trigger event lock off"),X("--")},f)}function ve(e){h=V[m](),P=z[H](),be(h,P,e)}function ye(e){var t=m;m=p,X("Reset trigger event: "+e),ge(),ve("reset"),m=t}function be(e,n,i,r,o){!0===A&&(t===o?o=I:X("Message targetOrigin: "+o),function(){var a=C+":"+e+":"+n+":"+i+(t!==r?":"+r:"");X("Sending message to host page ("+a+")"),O.postMessage(E+a,o)}())}function _e(t){var n={init:function(){"interactive"===document.readyState||"complete"===document.readyState?(v=t.data,O=t.source,Z(),d=!1,setTimeout(function(){g=!1},f)):(X("Waiting for page ready"),K(window,"readystatechange",n.initFromParent))},reset:function(){g?X("Page reset ignored by init"):(X("Page size reset by host page"),ve("resetPage"))},resize:function(){me("resizeParent","Parent window requested size check")},moveToAnchor:function(){y.findTarget(r())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var e=r();X("PageInfoFromParent called from parent: "+e),W(JSON.parse(e)),X(" --")},message:function(){var e=r();X("MessageCallback called from parent: "+e),j(JSON.parse(e)),X(" --")}};function i(){return t.data.split("]")[1].split(":")[0]}function r(){return t.data.substr(t.data.indexOf(":")+1)}function o(){return t.data.split(":")[2]in{true:1,false:1}}function a(){var r=i();r in n?n[r]():(void 0===e||!e.exports)&&"iFrameResize"in window||o()||J("Unexpected message ("+t.data+")")}E===(""+t.data).substr(0,T)&&(!1===d?a():o()?n.init():X('Ignored message of type "'+i()+'". Received before initialization.'))}}()},function(e,t,n){var i,r,o;!function(n){"use strict";if("undefined"!=typeof window){var a=0,s=!1,l=!1,u="message".length,c="[iFrameSizer]",f=c.length,d=null,h=window.requestAnimationFrame,p={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},m={},g=null,v={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",closedCallback:function(){},initCallback:function(){},messageCallback:function(){x("MessageCallback function not defined")},resizedCallback:function(){},scrollCallback:function(){return!0}},y={};window.jQuery&&function(e){e.fn?e.fn.iFrameResize||(e.fn.iFrameResize=function(e){return this.filter("iframe").each(function(t,n){j(n,e)}).end()}):C("","Unable to bind to jQuery, it is not fully loaded.")}(window.jQuery),r=[],(o="function"==typeof(i=function(){function e(e,n){n&&(function(){if(!n.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==n.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+n.tagName+">")}(),j(n,e),t.push(n))}var t;return function(){var e,t=["moz","webkit","o","ms"];for(e=0;e<t.length&&!h;e+=1)h=window[t[e]+"RequestAnimationFrame"];h||T("setup","RequestAnimationFrame not supported")}(),b(window,"message",A),b(window,"resize",function(){W("resize")}),b(document,"visibilitychange",B),b(document,"-webkit-visibilitychange",B),b(window,"focusin",function(){W("focus")}),b(window,"focus",function(){W("focus")}),function(i,r){switch(t=[],function(e){e&&e.enablePublicMethods&&x("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}(i),typeof r){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(r||"iframe"),e.bind(n,i));break;case"object":e(i,r);break;default:throw new TypeError("Unexpected data type ("+typeof r+")")}return t}})?i.apply(t,r):i)===n||(e.exports=o)}function b(e,t,n){"addEventListener"in window?e.addEventListener(t,n,!1):"attachEvent"in window&&e.attachEvent("on"+t,n)}function _(e,t,n){"removeEventListener"in window?e.removeEventListener(t,n,!1):"detachEvent"in window&&e.detachEvent("on"+t,n)}function w(e){return c+"["+function(e){var t="Host page: "+e;return window.top!==window.self&&(t=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+e:"Nested host page: "+e),t}(e)+"]"}function E(e){return m[e]?m[e].log:s}function T(e,t){S("log",e,t,E(e))}function C(e,t){S("info",e,t,E(e))}function x(e,t){S("warn",e,t,!0)}function S(e,t,n,i){!0===i&&"object"==typeof window.console&&console[e](w(t),n)}function A(e){function t(){n("Height"),n("Width"),R(function(){P(p),N(g),l("resizedCallback",p)},p,"init")}function n(e){var t=Number(m[g]["max"+e]),n=Number(m[g]["min"+e]),i=e.toLowerCase(),r=Number(p[i]);T(g,"Checking "+i+" is in range "+n+"-"+t),r<n&&(r=n,T(g,"Set "+i+" to min value")),r>t&&(r=t,T(g,"Set "+i+" to max value")),p[i]=""+r}function i(e){return h.substr(h.indexOf(":")+u+e)}function r(e,t){!function(e,t,n){y[n]||(y[n]=setTimeout(function(){y[n]=null,e()},t))}(function(){H("Send Page Info","pageInfo:"+function(){var e=document.body.getBoundingClientRect(),t=p.iframe.getBoundingClientRect();return JSON.stringify({iframeHeight:t.height,iframeWidth:t.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(t.top-e.top,10),offsetLeft:parseInt(t.left-e.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset})}(),e,t)},32,t)}function o(e){var t=e.getBoundingClientRect();return D(g),{x:Math.floor(Number(t.left)+Number(d.x)),y:Math.floor(Number(t.top)+Number(d.y))}}function a(e){var t=e?o(p.iframe):{x:0,y:0},n={x:Number(p.width)+t.x,y:Number(p.height)+t.y};T(g,"Reposition requested from iFrame (offset x:"+t.x+" y:"+t.y+")"),window.top!==window.self?window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](n.x,n.y):x(g,"Unable to scroll to requested position, window.parentIFrame not found"):(d=n,s(),T(g,"--"))}function s(){!1!==l("scrollCallback",d)?N(g):k()}function l(e,t){return O(g,e,t)}var h=e.data,p={},g=null;"[iFrameResizerChild]Ready"===h?function(){for(var e in m)H("iFrame requested init",M(e),document.getElementById(e),e)}():c===(""+h).substr(0,f)&&h.substr(f).split(":")[0]in m?(p=function(){var e=h.substr(f).split(":");return{iframe:m[e[0]]&&m[e[0]].iframe,id:e[0],height:e[1],width:e[2],type:e[3]}}(),g=p.id,m[g]&&(m[g].loaded=!0),!function(){var e=p.type in{true:1,false:1,undefined:1};return e&&T(g,"Ignoring init message from meta parent page"),e}()&&function(e){var t=!0;return m[e]||(t=!1,x(p.type+" No settings for "+e+". Message was: "+h)),t}(g)&&(T(g,"Received: "+h),function(){var e=!0;return null===p.iframe&&(x(g,"IFrame ("+p.id+") not found"),e=!1),e}()&&function(){var t=e.origin,n=m[g]&&m[g].checkOrigin;if(n&&""+t!="null"&&!(n.constructor===Array?function(){var e=0,i=!1;for(T(g,"Checking connection is from allowed list of origins: "+n);e<n.length;e++)if(n[e]===t){i=!0;break}return i}():function(){var e=m[g]&&m[g].remoteHost;return T(g,"Checking connection is from: "+e),t===e}()))throw new Error("Unexpected message received from: "+t+" for "+p.iframe.id+". Message was: "+e.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}()&&function(){switch(m[g]&&m[g].firstRun&&m[g]&&(m[g].firstRun=!1),p.type){case"close":m[g].closeRequestCallback?O(g,"closeRequestCallback",m[g].iframe):I(p.iframe);break;case"message":!function(e){T(g,"MessageCallback passed: {iframe: "+p.iframe.id+", message: "+e+"}"),l("messageCallback",{iframe:p.iframe,message:JSON.parse(e)}),T(g,"--")}(i(6));break;case"scrollTo":a(!1);break;case"scrollToOffset":a(!0);break;case"pageInfo":r(m[g]&&m[g].iframe,g),function(){function e(e,i){function o(){m[n]?r(m[n].iframe,n):t()}["scroll","resize"].forEach(function(t){T(n,e+t+" listener for sendPageInfo"),i(window,t,o)})}function t(){e("Remove ",_)}var n=g;e("Add ",b),m[n]&&(m[n].stopPageInfo=t)}();break;case"pageInfoStop":m[g]&&m[g].stopPageInfo&&(m[g].stopPageInfo(),delete m[g].stopPageInfo);break;case"inPageLink":!function(e){var t=e.split("#")[1]||"",n=decodeURIComponent(t),i=document.getElementById(n)||document.getElementsByName(n)[0];i?function(){var e=o(i);T(g,"Moving to in page link (#"+t+") at x: "+e.x+" y: "+e.y),d={x:e.x,y:e.y},s(),T(g,"--")}():window.top!==window.self?window.parentIFrame?window.parentIFrame.moveToAnchor(t):T(g,"In page link #"+t+" not found and window.parentIFrame not found"):T(g,"In page link #"+t+" not found")}(i(9));break;case"reset":L(p);break;case"init":t(),l("initCallback",p.iframe);break;default:t()}}())):C(g,"Ignored: "+h)}function O(e,t,n){var i=null,r=null;if(m[e]){if("function"!=typeof(i=m[e][t]))throw new TypeError(t+" on iFrame["+e+"] is not a function");r=i(n)}return r}function I(e){var t=e.id;T(t,"Removing iFrame: "+t),e.parentNode&&e.parentNode.removeChild(e),O(t,"closedCallback",t),T(t,"--"),delete m[t]}function D(e){null===d&&T(e,"Get page position: "+(d={x:window.pageXOffset!==n?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==n?window.pageYOffset:document.documentElement.scrollTop}).x+","+d.y)}function N(e){null!==d&&(window.scrollTo(d.x,d.y),T(e,"Set page position: "+d.x+","+d.y),k())}function k(){d=null}function L(e){T(e.id,"Size reset requested by "+("init"===e.type?"host page":"iFrame")),D(e.id),R(function(){P(e),H("reset","reset",e.iframe,e.id)},e,"reset")}function P(e){function t(t){l||"0"!==e[t]||(l=!0,T(i,"Hidden iFrame detected, creating visibility listener"),function(){function e(){function e(e){function t(t){return"0px"===(m[e]&&m[e].iframe.style[t])}m[e]&&function(e){return null!==e.offsetParent}(m[e].iframe)&&(t("height")||t("width"))&&H("Visibility change","resize",m[e].iframe,e)}for(var t in m)e(t)}function t(t){T("window","Mutation observed: "+t[0].target+" "+t[0].type),F(e,16)}var n=window.MutationObserver||window.WebKitMutationObserver;n&&function(){var e=document.querySelector("body");new n(t).observe(e,{attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0})}()}())}function n(n){!function(t){e.iframe.style[t]=e[t]+"px",T(e.id,"IFrame ("+i+") "+t+" set to "+e[t]+"px")}(n),t(n)}var i=e.iframe.id;m[i]&&(m[i].sizeHeight&&n("height"),m[i].sizeWidth&&n("width"))}function R(e,t,n){n!==t.type&&h?(T(t.id,"Requesting animation frame"),h(e)):e()}function H(e,t,n,i,r){var o=!1;i=i||n.id,m[i]&&(n&&"contentWindow"in n&&null!==n.contentWindow?function(){var r=m[i]&&m[i].targetOrigin;T(i,"["+e+"] Sending msg to iframe["+i+"] ("+t+") targetOrigin: "+r),n.contentWindow.postMessage(c+t,r)}():x(i,"["+e+"] IFrame("+i+") not found"),r&&m[i]&&m[i].warningTimeout&&(m[i].msgTimeout=setTimeout(function(){!m[i]||m[i].loaded||o||(o=!0,x(i,"IFrame has not responded within "+m[i].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ingored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))},m[i].warningTimeout)))}function M(e){return e+":"+m[e].bodyMarginV1+":"+m[e].sizeWidth+":"+m[e].log+":"+m[e].interval+":"+m[e].enablePublicMethods+":"+m[e].autoResize+":"+m[e].bodyMargin+":"+m[e].heightCalculationMethod+":"+m[e].bodyBackground+":"+m[e].bodyPadding+":"+m[e].tolerance+":"+m[e].inPageLinks+":"+m[e].resizeFrom+":"+m[e].widthCalculationMethod}function j(e,t){var i=function(n){return n,""===n&&(e.id=n=function(){var e=t&&t.id||v.id+a++;return null!==document.getElementById(e)&&(e+=a++),e}(),s=(t||{}).log,n,T(n,"Added missing iframe ID: "+n+" ("+e.src+")")),n}(e.id);i in m&&"iFrameResizer"in e?x(i,"Ignored iFrame, already setup."):(!function(t){t=t||{},m[i]={firstRun:!0,iframe:e,remoteHost:e.src.split("/").slice(0,3).join("/")},function(e){if("object"!=typeof e)throw new TypeError("Options is not an object")}(t),function(e){for(var t in v)v.hasOwnProperty(t)&&(m[i][t]=e.hasOwnProperty(t)?e[t]:v[t])}(t),m[i]&&(m[i].targetOrigin=!0===m[i].checkOrigin?function(e){return""===e||"file://"===e?"*":e}(m[i].remoteHost):"*")}(t),function(){switch(T(i,"IFrame scrolling "+(m[i]&&m[i].scrolling?"enabled":"disabled")+" for "+i),e.style.overflow=!1===(m[i]&&m[i].scrolling)?"hidden":"auto",m[i]&&m[i].scrolling){case!0:e.scrolling="yes";break;case!1:e.scrolling="no";break;default:e.scrolling=m[i]?m[i].scrolling:"no"}}(),function(){function t(t){1/0!==m[i][t]&&0!==m[i][t]&&(e.style[t]=m[i][t]+"px",T(i,"Set "+t+" = "+m[i][t]+"px"))}function n(e){if(m[i]["min"+e]>m[i]["max"+e])throw new Error("Value for min"+e+" can not be greater than max"+e)}n("Height"),n("Width"),t("maxHeight"),t("minHeight"),t("maxWidth"),t("minWidth")}(),"number"!=typeof(m[i]&&m[i].bodyMargin)&&"0"!==(m[i]&&m[i].bodyMargin)||(m[i].bodyMarginV1=m[i].bodyMargin,m[i].bodyMargin=m[i].bodyMargin+"px"),function(t){b(e,"load",function(){H("iFrame.onload",t,e,n,!0),function(){var t=m[i]&&m[i].firstRun,n=m[i]&&m[i].heightCalculationMethod in p;!t&&n&&L({iframe:e,height:0,width:0,type:"init"})}()}),H("init",t,e,n,!0)}(M(i)),Function.prototype.bind&&m[i]&&(m[i].iframe.iFrameResizer={close:I.bind(null,m[i].iframe),resize:H.bind(null,"Window resize","resize",m[i].iframe),moveToAnchor:function(e){H("Move to anchor","moveToAnchor:"+e,m[i].iframe,i)},sendMessage:function(e){H("Send Message","message:"+(e=JSON.stringify(e)),m[i].iframe,i)}}))}function F(e,t){null===g&&(g=setTimeout(function(){g=null,e()},t))}function W(e){T("window","Trigger event: "+e),F(function(){q("Window "+e,"resize")},16)}function B(){"hidden"!==document.visibilityState&&(T("document","Trigger event: Visiblity change"),F(function(){q("Tab Visable","resize")},16))}function q(e,t){function n(e){return m[e]&&"parent"===m[e].resizeFrom&&m[e].autoResize&&!m[e].firstRun}for(var i in m)n(i)&&H(e,t,document.getElementById(i),i)}}()},function(e,t,n){t.iframeResizer=n(12),t.iframeResizerContentWindow=n(11)},function(e,t,n){"use strict";e.exports=n(13)},function(e,t,n){"use strict";n.r(t),function(e){for(
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.3
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var n="undefined"!=typeof window&&"undefined"!=typeof document,i=["Edge","Trident","Firefox"],r=0,o=0;o<i.length;o+=1)if(n&&navigator.userAgent.indexOf(i[o])>=0){r=1;break}var a=n&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},r))}};function s(e){return e&&"[object Function]"==={}.toString.call(e)}function l(e,t){if(1!==e.nodeType)return[];var n=getComputedStyle(e,null);return t?n[t]:n}function u(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function c(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=l(e),n=t.overflow,i=t.overflowX,r=t.overflowY;return/(auto|scroll|overlay)/.test(n+r+i)?e:c(u(e))}var f=n&&!(!window.MSInputMethodContext||!document.documentMode),d=n&&/MSIE 10/.test(navigator.userAgent);function h(e){return 11===e?f:10===e?d:f||d}function p(e){if(!e)return document.documentElement;for(var t=h(10)?document.body:null,n=e.offsetParent;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TD","TABLE"].indexOf(n.nodeName)&&"static"===l(n,"position")?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function m(e){return null!==e.parentNode?m(e.parentNode):e}function g(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?e:t,r=n?t:e,o=document.createRange();o.setStart(i,0),o.setEnd(r,0);var a=o.commonAncestorContainer;if(e!==a&&t!==a||i.contains(r))return function(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||p(e.firstElementChild)===e)}(a)?a:p(a);var s=m(e);return s.host?g(s.host,t):g(e,m(t).host)}function v(e){var t="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=e.nodeName;if("BODY"===n||"HTML"===n){var i=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||i)[t]}return e[t]}function y(e,t){var n="x"===t?"Left":"Top",i="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+i+"Width"],10)}function b(e,t,n,i){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],h(10)?n["offset"+e]+i["margin"+("Height"===e?"Top":"Left")]+i["margin"+("Height"===e?"Bottom":"Right")]:0)}function _(){var e=document.body,t=document.documentElement,n=h(10)&&getComputedStyle(t);return{height:b("Height",e,t,n),width:b("Width",e,t,n)}}var w=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},E=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),T=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};function x(e){return C({},e,{right:e.left+e.width,bottom:e.top+e.height})}function S(e){var t={};try{if(h(10)){t=e.getBoundingClientRect();var n=v(e,"top"),i=v(e,"left");t.top+=n,t.left+=i,t.bottom+=n,t.right+=i}else t=e.getBoundingClientRect()}catch(e){}var r={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},o="HTML"===e.nodeName?_():{},a=o.width||e.clientWidth||r.right-r.left,s=o.height||e.clientHeight||r.bottom-r.top,u=e.offsetWidth-a,c=e.offsetHeight-s;if(u||c){var f=l(e);u-=y(f,"x"),c-=y(f,"y"),r.width-=u,r.height-=c}return x(r)}function A(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=h(10),r="HTML"===t.nodeName,o=S(e),a=S(t),s=c(e),u=l(t),f=parseFloat(u.borderTopWidth,10),d=parseFloat(u.borderLeftWidth,10);n&&"HTML"===t.nodeName&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var p=x({top:o.top-a.top-f,left:o.left-a.left-d,width:o.width,height:o.height});if(p.marginTop=0,p.marginLeft=0,!i&&r){var m=parseFloat(u.marginTop,10),g=parseFloat(u.marginLeft,10);p.top-=f-m,p.bottom-=f-m,p.left-=d-g,p.right-=d-g,p.marginTop=m,p.marginLeft=g}return(i&&!n?t.contains(s):t===s&&"BODY"!==s.nodeName)&&(p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=v(t,"top"),r=v(t,"left"),o=n?-1:1;return e.top+=i*o,e.bottom+=i*o,e.left+=r*o,e.right+=r*o,e}(p,t)),p}function O(e){if(!e||!e.parentElement||h())return document.documentElement;for(var t=e.parentElement;t&&"none"===l(t,"transform");)t=t.parentElement;return t||document.documentElement}function I(e,t,n,i){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o={top:0,left:0},a=r?O(e):g(e,t);if("viewport"===i)o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,i=A(e,n),r=Math.max(n.clientWidth,window.innerWidth||0),o=Math.max(n.clientHeight,window.innerHeight||0),a=t?0:v(n),s=t?0:v(n,"left");return x({top:a-i.top+i.marginTop,left:s-i.left+i.marginLeft,width:r,height:o})}(a,r);else{var s=void 0;"scrollParent"===i?"BODY"===(s=c(u(t))).nodeName&&(s=e.ownerDocument.documentElement):s="window"===i?e.ownerDocument.documentElement:i;var f=A(s,a,r);if("HTML"!==s.nodeName||function e(t){var n=t.nodeName;return"BODY"!==n&&"HTML"!==n&&("fixed"===l(t,"position")||e(u(t)))}(a))o=f;else{var d=_(),h=d.height,p=d.width;o.top+=f.top-f.marginTop,o.bottom=h+f.top,o.left+=f.left-f.marginLeft,o.right=p+f.left}}return o.left+=n,o.top+=n,o.right-=n,o.bottom-=n,o}function D(e,t,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var a=I(n,i,o,r),s={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},l=Object.keys(s).map(function(e){return C({key:e},s[e],{area:function(e){return e.width*e.height}(s[e])})}).sort(function(e,t){return t.area-e.area}),u=l.filter(function(e){var t=e.width,i=e.height;return t>=n.clientWidth&&i>=n.clientHeight}),c=u.length>0?u[0].key:l[0].key,f=e.split("-")[1];return c+(f?"-"+f:"")}function N(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return A(n,i?O(t):g(t,n),i)}function k(e){var t=getComputedStyle(e),n=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return{width:e.offsetWidth+i,height:e.offsetHeight+n}}function L(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function P(e,t,n){n=n.split("-")[0];var i=k(e),r={width:i.width,height:i.height},o=-1!==["right","left"].indexOf(n),a=o?"top":"left",s=o?"left":"top",l=o?"height":"width",u=o?"width":"height";return r[a]=t[a]+t[l]/2-i[l]/2,r[s]=n===s?t[s]-i[u]:t[L(s)],r}function R(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function H(e,t,n){return(void 0===n?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var i=R(e,function(e){return e[t]===n});return e.indexOf(i)}(e,"name",n))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;e.enabled&&s(n)&&(t.offsets.popper=x(t.offsets.popper),t.offsets.reference=x(t.offsets.reference),t=n(t,e))}),t}function M(e,t){return e.some(function(e){var n=e.name;return e.enabled&&n===t})}function j(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),i=0;i<t.length;i++){var r=t[i],o=r?""+r+n:e;if(void 0!==document.body.style[o])return o}return null}function F(e){var t=e.ownerDocument;return t?t.defaultView:window}function W(e,t,n,i){n.updateBound=i,F(e).addEventListener("resize",n.updateBound,{passive:!0});var r=c(e);return function e(t,n,i,r){var o="BODY"===t.nodeName,a=o?t.ownerDocument.defaultView:t;a.addEventListener(n,i,{passive:!0}),o||e(c(a.parentNode),n,i,r),r.push(a)}(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function B(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=function(e,t){return F(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}(this.reference,this.state))}function q(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function U(e,t){Object.keys(t).forEach(function(n){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&q(t[n])&&(i="px"),e.style[n]=t[n]+i})}function V(e,t,n){var i=R(e,function(e){return e.name===t}),r=!!i&&e.some(function(e){return e.name===n&&e.enabled&&e.order<i.order});if(!r){var o="`"+t+"`",a="`"+n+"`";console.warn(a+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return r}var z=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],G=z.slice(3);function K(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=G.indexOf(e),i=G.slice(n+1).concat(G.slice(0,n));return t?i.reverse():i}var Q={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function $(e,t,n,i){var r=[0,0],o=-1!==["right","left"].indexOf(i),a=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=a.indexOf(R(a,function(e){return-1!==e.search(/,|\s/)}));a[s]&&-1===a[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,u=-1!==s?[a.slice(0,s).concat([a[s].split(l)[0]]),[a[s].split(l)[1]].concat(a.slice(s+1))]:[a];return(u=u.map(function(e,i){var r=(1===i?!o:o)?"height":"width",a=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,a=!0,e):a?(e[e.length-1]+=t,a=!1,e):e.concat(t)},[]).map(function(e){return function(e,t,n,i){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+r[1],a=r[2];if(!o)return e;if(0===a.indexOf("%")){var s=void 0;switch(a){case"%p":s=n;break;case"%":case"%r":default:s=i}return x(s)[t]/100*o}if("vh"===a||"vw"===a)return("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o;return o}(e,r,t,n)})})).forEach(function(e,t){e.forEach(function(n,i){q(n)&&(r[t]+=n*("-"===e[i-1]?-1:1))})}),r}var Y={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],i=t.split("-")[1];if(i){var r=e.offsets,o=r.reference,a=r.popper,s=-1!==["bottom","top"].indexOf(n),l=s?"left":"top",u=s?"width":"height",c={start:T({},l,o[l]),end:T({},l,o[l]+o[u]-a[u])};e.offsets.popper=C({},a,c[i])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n=t.offset,i=e.placement,r=e.offsets,o=r.popper,a=r.reference,s=i.split("-")[0],l=void 0;return l=q(+n)?[+n,0]:$(n,o,a,s),"left"===s?(o.top+=l[0],o.left-=l[1]):"right"===s?(o.top+=l[0],o.left+=l[1]):"top"===s?(o.left+=l[0],o.top-=l[1]):"bottom"===s&&(o.left+=l[0],o.top+=l[1]),e.popper=o,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||p(e.instance.popper);e.instance.reference===n&&(n=p(n));var i=j("transform"),r=e.instance.popper.style,o=r.top,a=r.left,s=r[i];r.top="",r.left="",r[i]="";var l=I(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);r.top=o,r.left=a,r[i]=s,t.boundaries=l;var u=t.priority,c=e.offsets.popper,f={primary:function(e){var n=c[e];return c[e]<l[e]&&!t.escapeWithReference&&(n=Math.max(c[e],l[e])),T({},e,n)},secondary:function(e){var n="right"===e?"left":"top",i=c[n];return c[e]>l[e]&&!t.escapeWithReference&&(i=Math.min(c[n],l[e]-("right"===e?c.width:c.height))),T({},n,i)}};return u.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";c=C({},c,f[t](e))}),e.offsets.popper=c,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,i=t.reference,r=e.placement.split("-")[0],o=Math.floor,a=-1!==["top","bottom"].indexOf(r),s=a?"right":"bottom",l=a?"left":"top",u=a?"width":"height";return n[s]<o(i[l])&&(e.offsets.popper[l]=o(i[l])-n[u]),n[l]>o(i[s])&&(e.offsets.popper[l]=o(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!V(e.instance.modifiers,"arrow","keepTogether"))return e;var i=t.element;if("string"==typeof i){if(!(i=e.instance.popper.querySelector(i)))return e}else if(!e.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var r=e.placement.split("-")[0],o=e.offsets,a=o.popper,s=o.reference,u=-1!==["left","right"].indexOf(r),c=u?"height":"width",f=u?"Top":"Left",d=f.toLowerCase(),h=u?"left":"top",p=u?"bottom":"right",m=k(i)[c];s[p]-m<a[d]&&(e.offsets.popper[d]-=a[d]-(s[p]-m)),s[d]+m>a[p]&&(e.offsets.popper[d]+=s[d]+m-a[p]),e.offsets.popper=x(e.offsets.popper);var g=s[d]+s[c]/2-m/2,v=l(e.instance.popper),y=parseFloat(v["margin"+f],10),b=parseFloat(v["border"+f+"Width"],10),_=g-e.offsets.popper[d]-y-b;return _=Math.max(Math.min(a[c]-m,_),0),e.arrowElement=i,e.offsets.arrow=(T(n={},d,Math.round(_)),T(n,h,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(M(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=I(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),i=e.placement.split("-")[0],r=L(i),o=e.placement.split("-")[1]||"",a=[];switch(t.behavior){case Q.FLIP:a=[i,r];break;case Q.CLOCKWISE:a=K(i);break;case Q.COUNTERCLOCKWISE:a=K(i,!0);break;default:a=t.behavior}return a.forEach(function(s,l){if(i!==s||a.length===l+1)return e;i=e.placement.split("-")[0],r=L(i);var u=e.offsets.popper,c=e.offsets.reference,f=Math.floor,d="left"===i&&f(u.right)>f(c.left)||"right"===i&&f(u.left)<f(c.right)||"top"===i&&f(u.bottom)>f(c.top)||"bottom"===i&&f(u.top)<f(c.bottom),h=f(u.left)<f(n.left),p=f(u.right)>f(n.right),m=f(u.top)<f(n.top),g=f(u.bottom)>f(n.bottom),v="left"===i&&h||"right"===i&&p||"top"===i&&m||"bottom"===i&&g,y=-1!==["top","bottom"].indexOf(i),b=!!t.flipVariations&&(y&&"start"===o&&h||y&&"end"===o&&p||!y&&"start"===o&&m||!y&&"end"===o&&g);(d||v||b)&&(e.flipped=!0,(d||v)&&(i=a[l+1]),b&&(o=function(e){return"end"===e?"start":"start"===e?"end":e}(o)),e.placement=i+(o?"-"+o:""),e.offsets.popper=C({},e.offsets.popper,P(e.instance.popper,e.offsets.reference,e.placement)),e=H(e.instance.modifiers,e,"flip"))}),e},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],i=e.offsets,r=i.popper,o=i.reference,a=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return r[a?"left":"top"]=o[n]-(s?r[a?"width":"height"]:0),e.placement=L(t),e.offsets.popper=x(r),e}},hide:{order:800,enabled:!0,fn:function(e){if(!V(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=R(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,i=t.y,r=e.offsets.popper,o=R(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a=void 0!==o?o:t.gpuAcceleration,s=S(p(e.instance.popper)),l={position:r.position},u={left:Math.floor(r.left),top:Math.round(r.top),bottom:Math.round(r.bottom),right:Math.floor(r.right)},c="bottom"===n?"top":"bottom",f="right"===i?"left":"right",d=j("transform"),h=void 0,m=void 0;if(m="bottom"===c?-s.height+u.bottom:u.top,h="right"===f?-s.width+u.right:u.left,a&&d)l[d]="translate3d("+h+"px, "+m+"px, 0)",l[c]=0,l[f]=0,l.willChange="transform";else{var g="bottom"===c?-1:1,v="right"===f?-1:1;l[c]=m*g,l[f]=h*v,l.willChange=c+", "+f}var y={"x-placement":e.placement};return e.attributes=C({},y,e.attributes),e.styles=C({},l,e.styles),e.arrowStyles=C({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){return U(e.instance.popper,e.styles),function(e,t){Object.keys(t).forEach(function(n){!1!==t[n]?e.setAttribute(n,t[n]):e.removeAttribute(n)})}(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&U(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,i,r){var o=N(r,t,e,n.positionFixed),a=D(n.placement,o,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",a),U(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},X=function(){function e(t,n){var i=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};w(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=a(this.update.bind(this)),this.options=C({},e.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(C({},e.Defaults.modifiers,r.modifiers)).forEach(function(t){i.options.modifiers[t]=C({},e.Defaults.modifiers[t]||{},r.modifiers?r.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return C({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&s(e.onLoad)&&e.onLoad(i.reference,i.popper,i.options,e,i.state)}),this.update();var o=this.options.eventsEnabled;o&&this.enableEventListeners(),this.state.eventsEnabled=o}return E(e,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=N(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=D(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=P(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=H(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,M(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[j("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=W(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return B.call(this)}}]),e}();X.Utils=("undefined"!=typeof window?window:e).PopperUtils,X.placements=z,X.Defaults=Y,t.default=X}.call(this,n(1))},function(e,t,n){var i;
/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
!function(t,n){"use strict";"object"==typeof e&&"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)}("undefined"!=typeof window?window:this,function(n,r){"use strict";var o=[],a=n.document,s=Object.getPrototypeOf,l=o.slice,u=o.concat,c=o.push,f=o.indexOf,d={},h=d.toString,p=d.hasOwnProperty,m=p.toString,g=m.call(Object),v={},y=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},b=function(e){return null!=e&&e===e.window},_={type:!0,src:!0,noModule:!0};function w(e,t,n){var i,r=(t=t||a).createElement("script");if(r.text=e,n)for(i in _)n[i]&&(r[i]=n[i]);t.head.appendChild(r).parentNode.removeChild(r)}function E(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?d[h.call(e)]||"object":typeof e}var T=function(e,t){return new T.fn.init(e,t)},C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function x(e){var t=!!e&&"length"in e&&e.length,n=E(e);return!y(e)&&!b(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}T.fn=T.prototype={jquery:"3.3.1",constructor:T,length:0,toArray:function(){return l.call(this)},get:function(e){return null==e?l.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=T.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return T.each(this,e)},map:function(e){return this.pushStack(T.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(l.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:o.sort,splice:o.splice},T.extend=T.fn.extend=function(){var e,t,n,i,r,o,a=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof a&&(u=a,a=arguments[s]||{},s++),"object"==typeof a||y(a)||(a={}),s===l&&(a=this,s--);s<l;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(i=e[t])&&(u&&i&&(T.isPlainObject(i)||(r=Array.isArray(i)))?(r?(r=!1,o=n&&Array.isArray(n)?n:[]):o=n&&T.isPlainObject(n)?n:{},a[t]=T.extend(u,o,i)):void 0!==i&&(a[t]=i));return a},T.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==h.call(e))&&(!(t=s(e))||"function"==typeof(n=p.call(t,"constructor")&&t.constructor)&&m.call(n)===g)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){w(e)},each:function(e,t){var n,i=0;if(x(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},trim:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(x(Object(e))?T.merge(n,"string"==typeof e?[e]:e):c.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:f.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,r=e.length;i<n;i++)e[r++]=t[i];return e.length=r,e},grep:function(e,t,n){for(var i=[],r=0,o=e.length,a=!n;r<o;r++)!t(e[r],r)!==a&&i.push(e[r]);return i},map:function(e,t,n){var i,r,o=0,a=[];if(x(e))for(i=e.length;o<i;o++)null!=(r=t(e[o],o,n))&&a.push(r);else for(o in e)null!=(r=t(e[o],o,n))&&a.push(r);return u.apply([],a)},guid:1,support:v}),"function"==typeof Symbol&&(T.fn[Symbol.iterator]=o[Symbol.iterator]),T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){d["[object "+t+"]"]=t.toLowerCase()});var S=
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
function(e){var t,n,i,r,o,a,s,l,u,c,f,d,h,p,m,g,v,y,b,_="sizzle"+1*new Date,w=e.document,E=0,T=0,C=ae(),x=ae(),S=ae(),A=function(e,t){return e===t&&(f=!0),0},O={}.hasOwnProperty,I=[],D=I.pop,N=I.push,k=I.push,L=I.slice,P=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",H="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",j="\\["+H+"*("+M+")(?:"+H+"*([*^$|!~]?=)"+H+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+H+"*\\]",F=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+j+")*)|.*)\\)|)",W=new RegExp(H+"+","g"),B=new RegExp("^"+H+"+|((?:^|[^\\\\])(?:\\\\.)*)"+H+"+$","g"),q=new RegExp("^"+H+"*,"+H+"*"),U=new RegExp("^"+H+"*([>+~]|"+H+")"+H+"*"),V=new RegExp("="+H+"*([^\\]'\"]*?)"+H+"*\\]","g"),z=new RegExp(F),G=new RegExp("^"+M+"$"),K={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+j),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+H+"*(even|odd|(([+-]|)(\\d*)n|)"+H+"*(?:([+-]|)"+H+"*(\\d+)|))"+H+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+H+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+H+"*((?:-\\d)?\\d*)"+H+"*\\)|)(?=[^-]|$)","i")},Q=/^(?:input|select|textarea|button)$/i,$=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,X=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,J=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+H+"?|("+H+")|.)","ig"),ee=function(e,t,n){var i="0x"+t-65536;return i!=i||n?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},ie=function(){d()},re=ye(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{k.apply(I=L.call(w.childNodes),w.childNodes),I[w.childNodes.length].nodeType}catch(e){k={apply:I.length?function(e,t){N.apply(e,L.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}function oe(e,t,i,r){var o,s,u,c,f,p,v,y=t&&t.ownerDocument,E=t?t.nodeType:9;if(i=i||[],"string"!=typeof e||!e||1!==E&&9!==E&&11!==E)return i;if(!r&&((t?t.ownerDocument||t:w)!==h&&d(t),t=t||h,m)){if(11!==E&&(f=X.exec(e)))if(o=f[1]){if(9===E){if(!(u=t.getElementById(o)))return i;if(u.id===o)return i.push(u),i}else if(y&&(u=y.getElementById(o))&&b(t,u)&&u.id===o)return i.push(u),i}else{if(f[2])return k.apply(i,t.getElementsByTagName(e)),i;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return k.apply(i,t.getElementsByClassName(o)),i}if(n.qsa&&!S[e+" "]&&(!g||!g.test(e))){if(1!==E)y=t,v=e;else if("object"!==t.nodeName.toLowerCase()){for((c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=_),s=(p=a(e)).length;s--;)p[s]="#"+c+" "+ve(p[s]);v=p.join(","),y=J.test(e)&&me(t.parentNode)||t}if(v)try{return k.apply(i,y.querySelectorAll(v)),i}catch(e){}finally{c===_&&t.removeAttribute("id")}}}return l(e.replace(B,"$1"),t,i,r)}function ae(){var e=[];return function t(n,r){return e.push(n+" ")>i.cacheLength&&delete t[e.shift()],t[n+" "]=r}}function se(e){return e[_]=!0,e}function le(e){var t=h.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ue(e,t){for(var n=e.split("|"),r=n.length;r--;)i.attrHandle[n[r]]=t}function ce(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function de(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function he(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&re(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function pe(e){return se(function(t){return t=+t,se(function(n,i){for(var r,o=e([],n.length,t),a=o.length;a--;)n[r=o[a]]&&(n[r]=!(i[r]=n[r]))})})}function me(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},d=oe.setDocument=function(e){var t,r,a=e?e.ownerDocument||e:w;return a!==h&&9===a.nodeType&&a.documentElement?(p=(h=a).documentElement,m=!o(h),w!==h&&(r=h.defaultView)&&r.top!==r&&(r.addEventListener?r.addEventListener("unload",ie,!1):r.attachEvent&&r.attachEvent("onunload",ie)),n.attributes=le(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=le(function(e){return e.appendChild(h.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Y.test(h.getElementsByClassName),n.getById=le(function(e){return p.appendChild(e).id=_,!h.getElementsByName||!h.getElementsByName(_).length}),n.getById?(i.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},i.find.ID=function(e,t){if(void 0!==t.getElementById&&m){var n=t.getElementById(e);return n?[n]:[]}}):(i.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},i.find.ID=function(e,t){if(void 0!==t.getElementById&&m){var n,i,r,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];for(r=t.getElementsByName(e),i=0;o=r[i++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),i.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],r=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[r++];)1===n.nodeType&&i.push(n);return i}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&m)return t.getElementsByClassName(e)},v=[],g=[],(n.qsa=Y.test(h.querySelectorAll))&&(le(function(e){p.appendChild(e).innerHTML="<a id='"+_+"'></a><select id='"+_+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&g.push("[*^$]="+H+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||g.push("\\["+H+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+_+"-]").length||g.push("~="),e.querySelectorAll(":checked").length||g.push(":checked"),e.querySelectorAll("a#"+_+"+*").length||g.push(".#.+[+~]")}),le(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=h.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&g.push("name"+H+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&g.push(":enabled",":disabled"),p.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(n.matchesSelector=Y.test(y=p.matches||p.webkitMatchesSelector||p.mozMatchesSelector||p.oMatchesSelector||p.msMatchesSelector))&&le(function(e){n.disconnectedMatch=y.call(e,"*"),y.call(e,"[s!='']:x"),v.push("!=",F)}),g=g.length&&new RegExp(g.join("|")),v=v.length&&new RegExp(v.join("|")),t=Y.test(p.compareDocumentPosition),b=t||Y.test(p.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},A=t?function(e,t){if(e===t)return f=!0,0;var i=!e.compareDocumentPosition-!t.compareDocumentPosition;return i||(1&(i=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===i?e===h||e.ownerDocument===w&&b(w,e)?-1:t===h||t.ownerDocument===w&&b(w,t)?1:c?P(c,e)-P(c,t):0:4&i?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,i=0,r=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!r||!o)return e===h?-1:t===h?1:r?-1:o?1:c?P(c,e)-P(c,t):0;if(r===o)return ce(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);for(;a[i]===s[i];)i++;return i?ce(a[i],s[i]):a[i]===w?-1:s[i]===w?1:0},h):h},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==h&&d(e),t=t.replace(V,"='$1']"),n.matchesSelector&&m&&!S[t+" "]&&(!v||!v.test(t))&&(!g||!g.test(t)))try{var i=y.call(e,t);if(i||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(e){}return oe(t,h,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==h&&d(e),b(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==h&&d(e);var r=i.attrHandle[t.toLowerCase()],o=r&&O.call(i.attrHandle,t.toLowerCase())?r(e,t,!m):void 0;return void 0!==o?o:n.attributes||!m?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,i=[],r=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(A),f){for(;t=e[o++];)t===e[o]&&(r=i.push(o));for(;r--;)e.splice(i[r],1)}return c=null,e},r=oe.getText=function(e){var t,n="",i=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=r(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[i++];)n+=r(t);return n},(i=oe.selectors={cacheLength:50,createPseudo:se,match:K,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return K.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&z.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=new RegExp("(^|"+H+")"+e+"("+H+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(i){var r=oe.attr(i,e);return null==r?"!="===t:!t||(r+="","="===t?r===n:"!="===t?r!==n:"^="===t?n&&0===r.indexOf(n):"*="===t?n&&r.indexOf(n)>-1:"$="===t?n&&r.slice(-n.length)===n:"~="===t?(" "+r.replace(W," ")+" ").indexOf(n)>-1:"|="===t&&(r===n||r.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,i,r){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===i&&0===r?function(e){return!!e.parentNode}:function(t,n,l){var u,c,f,d,h,p,m=o!==a?"nextSibling":"previousSibling",g=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!l&&!s,b=!1;if(g){if(o){for(;m;){for(d=t;d=d[m];)if(s?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;p=m="only"===e&&!p&&"nextSibling"}return!0}if(p=[a?g.firstChild:g.lastChild],a&&y){for(b=(h=(u=(c=(f=(d=g)[_]||(d[_]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]||[])[0]===E&&u[1])&&u[2],d=h&&g.childNodes[h];d=++h&&d&&d[m]||(b=h=0)||p.pop();)if(1===d.nodeType&&++b&&d===t){c[e]=[E,h,b];break}}else if(y&&(b=h=(u=(c=(f=(d=t)[_]||(d[_]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]||[])[0]===E&&u[1]),!1===b)for(;(d=++h&&d&&d[m]||(b=h=0)||p.pop())&&((s?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++b||(y&&((c=(f=d[_]||(d[_]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]=[E,b]),d!==t)););return(b-=r)===i||b%i==0&&b/i>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return r[_]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){for(var i,o=r(e,t),a=o.length;a--;)e[i=P(e,o[a])]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:se(function(e){var t=[],n=[],i=s(e.replace(B,"$1"));return i[_]?se(function(e,t,n,r){for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||r(t)).indexOf(e)>-1}}),lang:se(function(e){return G.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=m?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===p},focus:function(e){return e===h.activeElement&&(!h.hasFocus||h.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:he(!1),disabled:he(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return $.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:pe(function(){return[0]}),last:pe(function(e,t){return[t-1]}),eq:pe(function(e,t,n){return[n<0?n+t:n]}),even:pe(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:pe(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:pe(function(e,t,n){for(var i=n<0?n+t:n;--i>=0;)e.push(i);return e}),gt:pe(function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e})}}).pseudos.nth=i.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=de(t);function ge(){}function ve(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function ye(e,t,n){var i=t.dir,r=t.next,o=r||i,a=n&&"parentNode"===o,s=T++;return t.first?function(t,n,r){for(;t=t[i];)if(1===t.nodeType||a)return e(t,n,r);return!1}:function(t,n,l){var u,c,f,d=[E,s];if(l){for(;t=t[i];)if((1===t.nodeType||a)&&e(t,n,l))return!0}else for(;t=t[i];)if(1===t.nodeType||a)if(c=(f=t[_]||(t[_]={}))[t.uniqueID]||(f[t.uniqueID]={}),r&&r===t.nodeName.toLowerCase())t=t[i]||t;else{if((u=c[o])&&u[0]===E&&u[1]===s)return d[2]=u[2];if(c[o]=d,d[2]=e(t,n,l))return!0}return!1}}function be(e){return e.length>1?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1;return!0}:e[0]}function _e(e,t,n,i,r){for(var o,a=[],s=0,l=e.length,u=null!=t;s<l;s++)(o=e[s])&&(n&&!n(o,i,r)||(a.push(o),u&&t.push(s)));return a}function we(e,t,n,i,r,o){return i&&!i[_]&&(i=we(i)),r&&!r[_]&&(r=we(r,o)),se(function(o,a,s,l){var u,c,f,d=[],h=[],p=a.length,m=o||function(e,t,n){for(var i=0,r=t.length;i<r;i++)oe(e,t[i],n);return n}(t||"*",s.nodeType?[s]:s,[]),g=!e||!o&&t?m:_e(m,d,e,s,l),v=n?r||(o?e:p||i)?[]:a:g;if(n&&n(g,v,s,l),i)for(u=_e(v,h),i(u,[],s,l),c=u.length;c--;)(f=u[c])&&(v[h[c]]=!(g[h[c]]=f));if(o){if(r||e){if(r){for(u=[],c=v.length;c--;)(f=v[c])&&u.push(g[c]=f);r(null,v=[],u,l)}for(c=v.length;c--;)(f=v[c])&&(u=r?P(o,f):d[c])>-1&&(o[u]=!(a[u]=f))}}else v=_e(v===a?v.splice(p,v.length):v),r?r(null,a,v,l):k.apply(a,v)})}function Ee(e){for(var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],l=a?1:0,c=ye(function(e){return e===t},s,!0),f=ye(function(e){return P(t,e)>-1},s,!0),d=[function(e,n,i){var r=!a&&(i||n!==u)||((t=n).nodeType?c(e,n,i):f(e,n,i));return t=null,r}];l<o;l++)if(n=i.relative[e[l].type])d=[ye(be(d),n)];else{if((n=i.filter[e[l].type].apply(null,e[l].matches))[_]){for(r=++l;r<o&&!i.relative[e[r].type];r++);return we(l>1&&be(d),l>1&&ve(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(B,"$1"),n,l<r&&Ee(e.slice(l,r)),r<o&&Ee(e=e.slice(r)),r<o&&ve(e))}d.push(n)}return be(d)}return ge.prototype=i.filters=i.pseudos,i.setFilters=new ge,a=oe.tokenize=function(e,t){var n,r,o,a,s,l,u,c=x[e+" "];if(c)return t?0:c.slice(0);for(s=e,l=[],u=i.preFilter;s;){for(a in n&&!(r=q.exec(s))||(r&&(s=s.slice(r[0].length)||s),l.push(o=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(B," ")}),s=s.slice(n.length)),i.filter)!(r=K[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):x(e,l).slice(0)},s=oe.compile=function(e,t){var n,r=[],o=[],s=S[e+" "];if(!s){for(t||(t=a(e)),n=t.length;n--;)(s=Ee(t[n]))[_]?r.push(s):o.push(s);(s=S(e,function(e,t){var n=t.length>0,r=e.length>0,o=function(o,a,s,l,c){var f,p,g,v=0,y="0",b=o&&[],_=[],w=u,T=o||r&&i.find.TAG("*",c),C=E+=null==w?1:Math.random()||.1,x=T.length;for(c&&(u=a===h||a||c);y!==x&&null!=(f=T[y]);y++){if(r&&f){for(p=0,a||f.ownerDocument===h||(d(f),s=!m);g=e[p++];)if(g(f,a||h,s)){l.push(f);break}c&&(E=C)}n&&((f=!g&&f)&&v--,o&&b.push(f))}if(v+=y,n&&y!==v){for(p=0;g=t[p++];)g(b,_,a,s);if(o){if(v>0)for(;y--;)b[y]||_[y]||(_[y]=D.call(l));_=_e(_)}k.apply(l,_),c&&!o&&_.length>0&&v+t.length>1&&oe.uniqueSort(l)}return c&&(E=C,u=w),b};return n?se(o):o}(o,r))).selector=e}return s},l=oe.select=function(e,t,n,r){var o,l,u,c,f,d="function"==typeof e&&e,h=!r&&a(e=d.selector||e);if(n=n||[],1===h.length){if((l=h[0]=h[0].slice(0)).length>2&&"ID"===(u=l[0]).type&&9===t.nodeType&&m&&i.relative[l[1].type]){if(!(t=(i.find.ID(u.matches[0].replace(Z,ee),t)||[])[0]))return n;d&&(t=t.parentNode),e=e.slice(l.shift().value.length)}for(o=K.needsContext.test(e)?0:l.length;o--&&(u=l[o],!i.relative[c=u.type]);)if((f=i.find[c])&&(r=f(u.matches[0].replace(Z,ee),J.test(l[0].type)&&me(t.parentNode)||t))){if(l.splice(o,1),!(e=r.length&&ve(l)))return k.apply(n,r),n;break}}return(d||s(e,h))(r,t,!m,n,!t||J.test(e)&&me(t.parentNode)||t),n},n.sortStable=_.split("").sort(A).join("")===_,n.detectDuplicates=!!f,d(),n.sortDetached=le(function(e){return 1&e.compareDocumentPosition(h.createElement("fieldset"))}),le(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ue("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&le(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ue("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),le(function(e){return null==e.getAttribute("disabled")})||ue(R,function(e,t,n){var i;if(!n)return!0===e[t]?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}),oe}(n);T.find=S,T.expr=S.selectors,T.expr[":"]=T.expr.pseudos,T.uniqueSort=T.unique=S.uniqueSort,T.text=S.getText,T.isXMLDoc=S.isXML,T.contains=S.contains,T.escapeSelector=S.escape;var A=function(e,t,n){for(var i=[],r=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(r&&T(e).is(n))break;i.push(e)}return i},O=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},I=T.expr.match.needsContext;function D(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function k(e,t,n){return y(t)?T.grep(e,function(e,i){return!!t.call(e,i,e)!==n}):t.nodeType?T.grep(e,function(e){return e===t!==n}):"string"!=typeof t?T.grep(e,function(e){return f.call(t,e)>-1!==n}):T.filter(t,e,n)}T.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?T.find.matchesSelector(i,e)?[i]:[]:T.find.matches(e,T.grep(t,function(e){return 1===e.nodeType}))},T.fn.extend({find:function(e){var t,n,i=this.length,r=this;if("string"!=typeof e)return this.pushStack(T(e).filter(function(){for(t=0;t<i;t++)if(T.contains(r[t],this))return!0}));for(n=this.pushStack([]),t=0;t<i;t++)T.find(e,r[t],n);return i>1?T.uniqueSort(n):n},filter:function(e){return this.pushStack(k(this,e||[],!1))},not:function(e){return this.pushStack(k(this,e||[],!0))},is:function(e){return!!k(this,"string"==typeof e&&I.test(e)?T(e):e||[],!1).length}});var L,P=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(T.fn.init=function(e,t,n){var i,r;if(!e)return this;if(n=n||L,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:P.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof T?t[0]:t,T.merge(this,T.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:a,!0)),N.test(i[1])&&T.isPlainObject(t))for(i in t)y(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(r=a.getElementById(i[2]))&&(this[0]=r,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):y(e)?void 0!==n.ready?n.ready(e):e(T):T.makeArray(e,this)}).prototype=T.fn,L=T(a);var R=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function M(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}T.fn.extend({has:function(e){var t=T(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(T.contains(this,t[e]))return!0})},closest:function(e,t){var n,i=0,r=this.length,o=[],a="string"!=typeof e&&T(e);if(!I.test(e))for(;i<r;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&T.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?T.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?f.call(T(e),this[0]):f.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(T.uniqueSort(T.merge(this.get(),T(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),T.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return A(e,"parentNode")},parentsUntil:function(e,t,n){return A(e,"parentNode",n)},next:function(e){return M(e,"nextSibling")},prev:function(e){return M(e,"previousSibling")},nextAll:function(e){return A(e,"nextSibling")},prevAll:function(e){return A(e,"previousSibling")},nextUntil:function(e,t,n){return A(e,"nextSibling",n)},prevUntil:function(e,t,n){return A(e,"previousSibling",n)},siblings:function(e){return O((e.parentNode||{}).firstChild,e)},children:function(e){return O(e.firstChild)},contents:function(e){return D(e,"iframe")?e.contentDocument:(D(e,"template")&&(e=e.content||e),T.merge([],e.childNodes))}},function(e,t){T.fn[e]=function(n,i){var r=T.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=T.filter(i,r)),this.length>1&&(H[e]||T.uniqueSort(r),R.test(e)&&r.reverse()),this.pushStack(r)}});var j=/[^\x20\t\r\n\f]+/g;function F(e){return e}function W(e){throw e}function B(e,t,n,i){var r;try{e&&y(r=e.promise)?r.call(e).done(t).fail(n):e&&y(r=e.then)?r.call(e,t,n):t.apply(void 0,[e].slice(i))}catch(e){n.apply(void 0,[e])}}T.Callbacks=function(e){e="string"==typeof e?function(e){var t={};return T.each(e.match(j)||[],function(e,n){t[n]=!0}),t}(e):T.extend({},e);var t,n,i,r,o=[],a=[],s=-1,l=function(){for(r=r||e.once,i=t=!0;a.length;s=-1)for(n=a.shift();++s<o.length;)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1);e.memory||(n=!1),t=!1,r&&(o=n?[]:"")},u={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){T.each(n,function(n,i){y(i)?e.unique&&u.has(i)||o.push(i):i&&i.length&&"string"!==E(i)&&t(i)})}(arguments),n&&!t&&l()),this},remove:function(){return T.each(arguments,function(e,t){for(var n;(n=T.inArray(t,o,n))>-1;)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?T.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return r=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return r=a=[],n||t||(o=n=""),this},locked:function(){return!!r},fireWith:function(e,n){return r||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||l()),this},fire:function(){return u.fireWith(this,arguments),this},fired:function(){return!!i}};return u},T.extend({Deferred:function(e){var t=[["notify","progress",T.Callbacks("memory"),T.Callbacks("memory"),2],["resolve","done",T.Callbacks("once memory"),T.Callbacks("once memory"),0,"resolved"],["reject","fail",T.Callbacks("once memory"),T.Callbacks("once memory"),1,"rejected"]],i="pending",r={state:function(){return i},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return r.then(null,e)},pipe:function(){var e=arguments;return T.Deferred(function(n){T.each(t,function(t,i){var r=y(e[i[4]])&&e[i[4]];o[i[1]](function(){var e=r&&r.apply(this,arguments);e&&y(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[i[0]+"With"](this,r?[e]:arguments)})}),e=null}).promise()},then:function(e,i,r){var o=0;function a(e,t,i,r){return function(){var s=this,l=arguments,u=function(){var n,u;if(!(e<o)){if((n=i.apply(s,l))===t.promise())throw new TypeError("Thenable self-resolution");u=n&&("object"==typeof n||"function"==typeof n)&&n.then,y(u)?r?u.call(n,a(o,t,F,r),a(o,t,W,r)):(o++,u.call(n,a(o,t,F,r),a(o,t,W,r),a(o,t,F,t.notifyWith))):(i!==F&&(s=void 0,l=[n]),(r||t.resolveWith)(s,l))}},c=r?u:function(){try{u()}catch(n){T.Deferred.exceptionHook&&T.Deferred.exceptionHook(n,c.stackTrace),e+1>=o&&(i!==W&&(s=void 0,l=[n]),t.rejectWith(s,l))}};e?c():(T.Deferred.getStackHook&&(c.stackTrace=T.Deferred.getStackHook()),n.setTimeout(c))}}return T.Deferred(function(n){t[0][3].add(a(0,n,y(r)?r:F,n.notifyWith)),t[1][3].add(a(0,n,y(e)?e:F)),t[2][3].add(a(0,n,y(i)?i:W))}).promise()},promise:function(e){return null!=e?T.extend(e,r):r}},o={};return T.each(t,function(e,n){var a=n[2],s=n[5];r[n[1]]=a.add,s&&a.add(function(){i=s},t[3-e][2].disable,t[3-e][3].disable,t[0][2].lock,t[0][3].lock),a.add(n[3].fire),o[n[0]]=function(){return o[n[0]+"With"](this===o?void 0:this,arguments),this},o[n[0]+"With"]=a.fireWith}),r.promise(o),e&&e.call(o,o),o},when:function(e){var t=arguments.length,n=t,i=Array(n),r=l.call(arguments),o=T.Deferred(),a=function(e){return function(n){i[e]=this,r[e]=arguments.length>1?l.call(arguments):n,--t||o.resolveWith(i,r)}};if(t<=1&&(B(e,o.done(a(n)).resolve,o.reject,!t),"pending"===o.state()||y(r[n]&&r[n].then)))return o.then();for(;n--;)B(r[n],a(n),o.reject);return o.promise()}});var q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;T.Deferred.exceptionHook=function(e,t){n.console&&n.console.warn&&e&&q.test(e.name)&&n.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},T.readyException=function(e){n.setTimeout(function(){throw e})};var U=T.Deferred();function V(){a.removeEventListener("DOMContentLoaded",V),n.removeEventListener("load",V),T.ready()}T.fn.ready=function(e){return U.then(e).catch(function(e){T.readyException(e)}),this},T.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--T.readyWait:T.isReady)||(T.isReady=!0,!0!==e&&--T.readyWait>0||U.resolveWith(a,[T]))}}),T.ready.then=U.then,"complete"===a.readyState||"loading"!==a.readyState&&!a.documentElement.doScroll?n.setTimeout(T.ready):(a.addEventListener("DOMContentLoaded",V),n.addEventListener("load",V));var z=function(e,t,n,i,r,o,a){var s=0,l=e.length,u=null==n;if("object"===E(n))for(s in r=!0,n)z(e,t,s,n[s],!0,o,a);else if(void 0!==i&&(r=!0,y(i)||(a=!0),u&&(a?(t.call(e,i),t=null):(u=t,t=function(e,t,n){return u.call(T(e),n)})),t))for(;s<l;s++)t(e[s],n,a?i:i.call(e[s],s,t(e[s],n)));return r?e:u?t.call(e):l?t(e[0],n):o},G=/^-ms-/,K=/-([a-z])/g;function Q(e,t){return t.toUpperCase()}function $(e){return e.replace(G,"ms-").replace(K,Q)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function X(){this.expando=T.expando+X.uid++}X.uid=1,X.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,r=this.cache(e);if("string"==typeof t)r[$(t)]=n;else for(i in t)r[$(i)]=t[i];return r},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][$(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t){n=(t=Array.isArray(t)?t.map($):(t=$(t))in i?[t]:t.match(j)||[]).length;for(;n--;)delete i[t[n]]}(void 0===t||T.isEmptyObject(i))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!T.isEmptyObject(t)}};var J=new X,Z=new X,ee=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,te=/[A-Z]/g;function ne(e,t,n){var i;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(te,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:ee.test(e)?JSON.parse(e):e)}(n)}catch(e){}Z.set(e,t,n)}else n=void 0;return n}T.extend({hasData:function(e){return Z.hasData(e)||J.hasData(e)},data:function(e,t,n){return Z.access(e,t,n)},removeData:function(e,t){Z.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),T.fn.extend({data:function(e,t){var n,i,r,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(r=Z.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&0===(i=a[n].name).indexOf("data-")&&(i=$(i.slice(5)),ne(o,i,r[i]));J.set(o,"hasDataAttrs",!0)}return r}return"object"==typeof e?this.each(function(){Z.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t)return void 0!==(n=Z.get(o,e))?n:void 0!==(n=ne(o,e))?n:void 0;this.each(function(){Z.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Z.remove(this,e)})}}),T.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=J.get(e,t),n&&(!i||Array.isArray(n)?i=J.access(e,t,T.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=T.queue(e,t),i=n.length,r=n.shift(),o=T._queueHooks(e,t);"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),delete o.stop,r.call(e,function(){T.dequeue(e,t)},o)),!i&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:T.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),T.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?T.queue(this[0],e):void 0===t?this:this.each(function(){var n=T.queue(this,e,t);T._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&T.dequeue(this,e)})},dequeue:function(e){return this.each(function(){T.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,r=T.Deferred(),o=this,a=this.length,s=function(){--i||r.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(i++,n.empty.add(s));return s(),r.promise(t)}});var ie=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,re=new RegExp("^(?:([+-])=|)("+ie+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&T.contains(e.ownerDocument,e)&&"none"===T.css(e,"display")},se=function(e,t,n,i){var r,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in r=n.apply(e,i||[]),t)e.style[o]=a[o];return r};function le(e,t,n,i){var r,o,a=20,s=i?function(){return i.cur()}:function(){return T.css(e,t,"")},l=s(),u=n&&n[3]||(T.cssNumber[t]?"":"px"),c=(T.cssNumber[t]||"px"!==u&&+l)&&re.exec(T.css(e,t));if(c&&c[3]!==u){for(l/=2,u=u||c[3],c=+l||1;a--;)T.style(e,t,c+u),(1-o)*(1-(o=s()/l||.5))<=0&&(a=0),c/=o;c*=2,T.style(e,t,c+u),n=n||[]}return n&&(c=+c||+l||0,r=n[1]?c+(n[1]+1)*n[2]:+n[2],i&&(i.unit=u,i.start=c,i.end=r)),r}var ue={};function ce(e){var t,n=e.ownerDocument,i=e.nodeName,r=ue[i];return r||(t=n.body.appendChild(n.createElement(i)),r=T.css(t,"display"),t.parentNode.removeChild(t),"none"===r&&(r="block"),ue[i]=r,r)}function fe(e,t){for(var n,i,r=[],o=0,a=e.length;o<a;o++)(i=e[o]).style&&(n=i.style.display,t?("none"===n&&(r[o]=J.get(i,"display")||null,r[o]||(i.style.display="")),""===i.style.display&&ae(i)&&(r[o]=ce(i))):"none"!==n&&(r[o]="none",J.set(i,"display",n)));for(o=0;o<a;o++)null!=r[o]&&(e[o].style.display=r[o]);return e}T.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?T(this).show():T(this).hide()})}});var de=/^(?:checkbox|radio)$/i,he=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,pe=/^$|^module$|\/(?:java|ecma)script/i,me={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ge(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&D(e,t)?T.merge([e],n):n}function ve(e,t){for(var n=0,i=e.length;n<i;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}me.optgroup=me.option,me.tbody=me.tfoot=me.colgroup=me.caption=me.thead,me.th=me.td;var ye=/<|&#?\w+;/;function be(e,t,n,i,r){for(var o,a,s,l,u,c,f=t.createDocumentFragment(),d=[],h=0,p=e.length;h<p;h++)if((o=e[h])||0===o)if("object"===E(o))T.merge(d,o.nodeType?[o]:o);else if(ye.test(o)){for(a=a||f.appendChild(t.createElement("div")),s=(he.exec(o)||["",""])[1].toLowerCase(),l=me[s]||me._default,a.innerHTML=l[1]+T.htmlPrefilter(o)+l[2],c=l[0];c--;)a=a.lastChild;T.merge(d,a.childNodes),(a=f.firstChild).textContent=""}else d.push(t.createTextNode(o));for(f.textContent="",h=0;o=d[h++];)if(i&&T.inArray(o,i)>-1)r&&r.push(o);else if(u=T.contains(o.ownerDocument,o),a=ge(f.appendChild(o),"script"),u&&ve(a),n)for(c=0;o=a[c++];)pe.test(o.type||"")&&n.push(o);return f}!function(){var e=a.createDocumentFragment().appendChild(a.createElement("div")),t=a.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),v.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var _e=a.documentElement,we=/^key/,Ee=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function xe(){return!1}function Se(){try{return a.activeElement}catch(e){}}function Ae(e,t,n,i,r,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(i=i||n,n=void 0),t)Ae(e,s,n,i,t[s],o);return e}if(null==i&&null==r?(r=n,i=n=void 0):null==r&&("string"==typeof n?(r=i,i=void 0):(r=i,i=n,n=void 0)),!1===r)r=xe;else if(!r)return e;return 1===o&&(a=r,(r=function(e){return T().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=T.guid++)),e.each(function(){T.event.add(this,t,r,i,n)})}T.event={global:{},add:function(e,t,n,i,r){var o,a,s,l,u,c,f,d,h,p,m,g=J.get(e);if(g)for(n.handler&&(n=(o=n).handler,r=o.selector),r&&T.find.matchesSelector(_e,r),n.guid||(n.guid=T.guid++),(l=g.events)||(l=g.events={}),(a=g.handle)||(a=g.handle=function(t){return void 0!==T&&T.event.triggered!==t.type?T.event.dispatch.apply(e,arguments):void 0}),u=(t=(t||"").match(j)||[""]).length;u--;)h=m=(s=Te.exec(t[u])||[])[1],p=(s[2]||"").split(".").sort(),h&&(f=T.event.special[h]||{},h=(r?f.delegateType:f.bindType)||h,f=T.event.special[h]||{},c=T.extend({type:h,origType:m,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&T.expr.match.needsContext.test(r),namespace:p.join(".")},o),(d=l[h])||((d=l[h]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,i,p,a)||e.addEventListener&&e.addEventListener(h,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),r?d.splice(d.delegateCount++,0,c):d.push(c),T.event.global[h]=!0)},remove:function(e,t,n,i,r){var o,a,s,l,u,c,f,d,h,p,m,g=J.hasData(e)&&J.get(e);if(g&&(l=g.events)){for(u=(t=(t||"").match(j)||[""]).length;u--;)if(h=m=(s=Te.exec(t[u])||[])[1],p=(s[2]||"").split(".").sort(),h){for(f=T.event.special[h]||{},d=l[h=(i?f.delegateType:f.bindType)||h]||[],s=s[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=d.length;o--;)c=d[o],!r&&m!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||i&&i!==c.selector&&("**"!==i||!c.selector)||(d.splice(o,1),c.selector&&d.delegateCount--,f.remove&&f.remove.call(e,c));a&&!d.length&&(f.teardown&&!1!==f.teardown.call(e,p,g.handle)||T.removeEvent(e,h,g.handle),delete l[h])}else for(h in l)T.event.remove(e,h+t[u],n,i,!0);T.isEmptyObject(l)&&J.remove(e,"handle events")}},dispatch:function(e){var t,n,i,r,o,a,s=T.event.fix(e),l=new Array(arguments.length),u=(J.get(this,"events")||{})[s.type]||[],c=T.event.special[s.type]||{};for(l[0]=s,t=1;t<arguments.length;t++)l[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){for(a=T.event.handlers.call(this,s,u),t=0;(r=a[t++])&&!s.isPropagationStopped();)for(s.currentTarget=r.elem,n=0;(o=r.handlers[n++])&&!s.isImmediatePropagationStopped();)s.rnamespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(i=((T.event.special[o.origType]||{}).handle||o.handler).apply(r.elem,l))&&!1===(s.result=i)&&(s.preventDefault(),s.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,i,r,o,a,s=[],l=t.delegateCount,u=e.target;if(l&&u.nodeType&&!("click"===e.type&&e.button>=1))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&("click"!==e.type||!0!==u.disabled)){for(o=[],a={},n=0;n<l;n++)void 0===a[r=(i=t[n]).selector+" "]&&(a[r]=i.needsContext?T(r,this).index(u)>-1:T.find(r,this,null,[u]).length),a[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return u=this,l<t.length&&s.push({elem:u,handlers:t.slice(l)}),s},addProp:function(e,t){Object.defineProperty(T.Event.prototype,e,{enumerable:!0,configurable:!0,get:y(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[T.expando]?e:new T.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&D(this,"input"))return this.click(),!1},_default:function(e){return D(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},T.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},T.Event=function(e,t){if(!(this instanceof T.Event))return new T.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:xe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&T.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[T.expando]=!0},T.Event.prototype={constructor:T.Event,isDefaultPrevented:xe,isPropagationStopped:xe,isImmediatePropagationStopped:xe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},T.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ee.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},T.event.addProp),T.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){T.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=e.relatedTarget,r=e.handleObj;return i&&(i===this||T.contains(this,i))||(e.type=r.origType,n=r.handler.apply(this,arguments),e.type=t),n}}}),T.fn.extend({on:function(e,t,n,i){return Ae(this,e,t,n,i)},one:function(e,t,n,i){return Ae(this,e,t,n,i,1)},off:function(e,t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,T(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(r in e)this.off(r,t,e[r]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=xe),this.each(function(){T.event.remove(this,e,n,t)})}});var Oe=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ie=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function ke(e,t){return D(e,"table")&&D(11!==t.nodeType?t:t.firstChild,"tr")&&T(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Pe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Re(e,t){var n,i,r,o,a,s,l,u;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),u=o.events))for(r in delete a.handle,a.events={},u)for(n=0,i=u[r].length;n<i;n++)T.event.add(t,r,u[r][n]);Z.hasData(e)&&(s=Z.access(e),l=T.extend({},s),Z.set(t,l))}}function He(e,t){var n=t.nodeName.toLowerCase();"input"===n&&de.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Me(e,t,n,i){t=u.apply([],t);var r,o,a,s,l,c,f=0,d=e.length,h=d-1,p=t[0],m=y(p);if(m||d>1&&"string"==typeof p&&!v.checkClone&&De.test(p))return e.each(function(r){var o=e.eq(r);m&&(t[0]=p.call(this,r,o.html())),Me(o,t,n,i)});if(d&&(o=(r=be(t,e[0].ownerDocument,!1,e,i)).firstChild,1===r.childNodes.length&&(r=o),o||i)){for(s=(a=T.map(ge(r,"script"),Le)).length;f<d;f++)l=r,f!==h&&(l=T.clone(l,!0,!0),s&&T.merge(a,ge(l,"script"))),n.call(e[f],l,f);if(s)for(c=a[a.length-1].ownerDocument,T.map(a,Pe),f=0;f<s;f++)l=a[f],pe.test(l.type||"")&&!J.access(l,"globalEval")&&T.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?T._evalUrl&&T._evalUrl(l.src):w(l.textContent.replace(Ne,""),c,l))}return e}function je(e,t,n){for(var i,r=t?T.filter(t,e):e,o=0;null!=(i=r[o]);o++)n||1!==i.nodeType||T.cleanData(ge(i)),i.parentNode&&(n&&T.contains(i.ownerDocument,i)&&ve(ge(i,"script")),i.parentNode.removeChild(i));return e}T.extend({htmlPrefilter:function(e){return e.replace(Oe,"<$1></$2>")},clone:function(e,t,n){var i,r,o,a,s=e.cloneNode(!0),l=T.contains(e.ownerDocument,e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||T.isXMLDoc(e)))for(a=ge(s),i=0,r=(o=ge(e)).length;i<r;i++)He(o[i],a[i]);if(t)if(n)for(o=o||ge(e),a=a||ge(s),i=0,r=o.length;i<r;i++)Re(o[i],a[i]);else Re(e,s);return(a=ge(s,"script")).length>0&&ve(a,!l&&ge(e,"script")),s},cleanData:function(e){for(var t,n,i,r=T.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(i in t.events)r[i]?T.event.remove(n,i):T.removeEvent(n,i,t.handle);n[J.expando]=void 0}n[Z.expando]&&(n[Z.expando]=void 0)}}}),T.fn.extend({detach:function(e){return je(this,e,!0)},remove:function(e){return je(this,e)},text:function(e){return z(this,function(e){return void 0===e?T.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Me(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||ke(this,e).appendChild(e)})},prepend:function(){return Me(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=ke(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Me(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Me(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(T.cleanData(ge(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return T.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ie.test(e)&&!me[(he.exec(e)||["",""])[1].toLowerCase()]){e=T.htmlPrefilter(e);try{for(;n<i;n++)1===(t=this[n]||{}).nodeType&&(T.cleanData(ge(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Me(this,arguments,function(t){var n=this.parentNode;T.inArray(this,e)<0&&(T.cleanData(ge(this)),n&&n.replaceChild(t,this))},e)}}),T.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){T.fn[e]=function(e){for(var n,i=[],r=T(e),o=r.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),T(r[a])[t](n),c.apply(i,n.get());return this.pushStack(i)}});var Fe=new RegExp("^("+ie+")(?!px)[a-z%]+$","i"),We=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=n),t.getComputedStyle(e)},Be=new RegExp(oe.join("|"),"i");function qe(e,t,n){var i,r,o,a,s=e.style;return(n=n||We(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||T.contains(e.ownerDocument,e)||(a=T.style(e,t)),!v.pixelBoxStyles()&&Fe.test(a)&&Be.test(t)&&(i=s.width,r=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=i,s.minWidth=r,s.maxWidth=o)),void 0!==a?a+"":a}function Ue(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(c){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",_e.appendChild(u).appendChild(c);var e=n.getComputedStyle(c);i="1%"!==e.top,l=12===t(e.marginLeft),c.style.right="60%",s=36===t(e.right),r=36===t(e.width),c.style.position="absolute",o=36===c.offsetWidth||"absolute",_e.removeChild(u),c=null}}function t(e){return Math.round(parseFloat(e))}var i,r,o,s,l,u=a.createElement("div"),c=a.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===c.style.backgroundClip,T.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),s},pixelPosition:function(){return e(),i},reliableMarginLeft:function(){return e(),l},scrollboxSize:function(){return e(),o}}))}();var Ve=/^(none|table(?!-c[ea]).+)/,ze=/^--/,Ge={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"},Qe=["Webkit","Moz","ms"],$e=a.createElement("div").style;function Ye(e){var t=T.cssProps[e];return t||(t=T.cssProps[e]=function(e){if(e in $e)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;n--;)if((e=Qe[n]+t)in $e)return e}(e)||e),t}function Xe(e,t,n){var i=re.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function Je(e,t,n,i,r,o){var a="width"===t?1:0,s=0,l=0;if(n===(i?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=T.css(e,n+oe[a],!0,r)),i?("content"===n&&(l-=T.css(e,"padding"+oe[a],!0,r)),"margin"!==n&&(l-=T.css(e,"border"+oe[a]+"Width",!0,r))):(l+=T.css(e,"padding"+oe[a],!0,r),"padding"!==n?l+=T.css(e,"border"+oe[a]+"Width",!0,r):s+=T.css(e,"border"+oe[a]+"Width",!0,r));return!i&&o>=0&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-l-s-.5))),l}function Ze(e,t,n){var i=We(e),r=qe(e,t,i),o="border-box"===T.css(e,"boxSizing",!1,i),a=o;if(Fe.test(r)){if(!n)return r;r="auto"}return a=a&&(v.boxSizingReliable()||r===e.style[t]),("auto"===r||!parseFloat(r)&&"inline"===T.css(e,"display",!1,i))&&(r=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(r=parseFloat(r)||0)+Je(e,t,n||(o?"border":"content"),a,i,r)+"px"}function et(e,t,n,i,r){return new et.prototype.init(e,t,n,i,r)}T.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=qe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var r,o,a,s=$(t),l=ze.test(t),u=e.style;if(l||(t=Ye(s)),a=T.cssHooks[t]||T.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(r=a.get(e,!1,i))?r:u[t];"string"===(o=typeof n)&&(r=re.exec(n))&&r[1]&&(n=le(e,t,r),o="number"),null!=n&&n==n&&("number"===o&&(n+=r&&r[3]||(T.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,i))||(l?u.setProperty(t,n):u[t]=n))}},css:function(e,t,n,i){var r,o,a,s=$(t);return ze.test(t)||(t=Ye(s)),(a=T.cssHooks[t]||T.cssHooks[s])&&"get"in a&&(r=a.get(e,!0,n)),void 0===r&&(r=qe(e,t,i)),"normal"===r&&t in Ke&&(r=Ke[t]),""===n||n?(o=parseFloat(r),!0===n||isFinite(o)?o||0:r):r}}),T.each(["height","width"],function(e,t){T.cssHooks[t]={get:function(e,n,i){if(n)return!Ve.test(T.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,t,i):se(e,Ge,function(){return Ze(e,t,i)})},set:function(e,n,i){var r,o=We(e),a="border-box"===T.css(e,"boxSizing",!1,o),s=i&&Je(e,t,i,a,o);return a&&v.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Je(e,t,"border",!1,o)-.5)),s&&(r=re.exec(n))&&"px"!==(r[3]||"px")&&(e.style[t]=n,n=T.css(e,t)),Xe(0,n,s)}}}),T.cssHooks.marginLeft=Ue(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(qe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),T.each({margin:"",padding:"",border:"Width"},function(e,t){T.cssHooks[e+t]={expand:function(n){for(var i=0,r={},o="string"==typeof n?n.split(" "):[n];i<4;i++)r[e+oe[i]+t]=o[i]||o[i-2]||o[0];return r}},"margin"!==e&&(T.cssHooks[e+t].set=Xe)}),T.fn.extend({css:function(e,t){return z(this,function(e,t,n){var i,r,o={},a=0;if(Array.isArray(t)){for(i=We(e),r=t.length;a<r;a++)o[t[a]]=T.css(e,t[a],!1,i);return o}return void 0!==n?T.style(e,t,n):T.css(e,t)},e,t,arguments.length>1)}}),T.Tween=et,et.prototype={constructor:et,init:function(e,t,n,i,r,o){this.elem=e,this.prop=n,this.easing=r||T.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=o||(T.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=T.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}},et.prototype.init.prototype=et.prototype,et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=T.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){T.fx.step[e.prop]?T.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[T.cssProps[e.prop]]&&!T.cssHooks[e.prop]?e.elem[e.prop]=e.now:T.style(e.elem,e.prop,e.now+e.unit)}}},et.propHooks.scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},T.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},T.fx=et.prototype.init,T.fx.step={};var tt,nt,it=/^(?:toggle|show|hide)$/,rt=/queueHooks$/;function ot(){nt&&(!1===a.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(ot):n.setTimeout(ot,T.fx.interval),T.fx.tick())}function at(){return n.setTimeout(function(){tt=void 0}),tt=Date.now()}function st(e,t){var n,i=0,r={height:e};for(t=t?1:0;i<4;i+=2-t)r["margin"+(n=oe[i])]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function lt(e,t,n){for(var i,r=(ut.tweeners[t]||[]).concat(ut.tweeners["*"]),o=0,a=r.length;o<a;o++)if(i=r[o].call(n,t,e))return i}function ut(e,t,n){var i,r,o=0,a=ut.prefilters.length,s=T.Deferred().always(function(){delete l.elem}),l=function(){if(r)return!1;for(var t=tt||at(),n=Math.max(0,u.startTime+u.duration-t),i=1-(n/u.duration||0),o=0,a=u.tweens.length;o<a;o++)u.tweens[o].run(i);return s.notifyWith(e,[u,i,n]),i<1&&a?n:(a||s.notifyWith(e,[u,1,0]),s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:T.extend({},t),opts:T.extend(!0,{specialEasing:{},easing:T.easing._default},n),originalProperties:t,originalOptions:n,startTime:tt||at(),duration:n.duration,tweens:[],createTween:function(t,n){var i=T.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(i),i},stop:function(t){var n=0,i=t?u.tweens.length:0;if(r)return this;for(r=!0;n<i;n++)u.tweens[n].run(1);return t?(s.notifyWith(e,[u,1,0]),s.resolveWith(e,[u,t])):s.rejectWith(e,[u,t]),this}}),c=u.props;for(!function(e,t){var n,i,r,o,a;for(n in e)if(r=t[i=$(n)],o=e[n],Array.isArray(o)&&(r=o[1],o=e[n]=o[0]),n!==i&&(e[i]=o,delete e[n]),(a=T.cssHooks[i])&&"expand"in a)for(n in o=a.expand(o),delete e[i],o)n in e||(e[n]=o[n],t[n]=r);else t[i]=r}(c,u.opts.specialEasing);o<a;o++)if(i=ut.prefilters[o].call(u,e,c,u.opts))return y(i.stop)&&(T._queueHooks(u.elem,u.opts.queue).stop=i.stop.bind(i)),i;return T.map(c,lt,u),y(u.opts.start)&&u.opts.start.call(e,u),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),T.fx.timer(T.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u}T.Animation=T.extend(ut,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,re.exec(t),n),n}]},tweener:function(e,t){y(e)?(t=e,e=["*"]):e=e.match(j);for(var n,i=0,r=e.length;i<r;i++)n=e[i],ut.tweeners[n]=ut.tweeners[n]||[],ut.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var i,r,o,a,s,l,u,c,f="width"in t||"height"in t,d=this,h={},p=e.style,m=e.nodeType&&ae(e),g=J.get(e,"fxshow");for(i in n.queue||(null==(a=T._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,d.always(function(){d.always(function(){a.unqueued--,T.queue(e,"fx").length||a.empty.fire()})})),t)if(r=t[i],it.test(r)){if(delete t[i],o=o||"toggle"===r,r===(m?"hide":"show")){if("show"!==r||!g||void 0===g[i])continue;m=!0}h[i]=g&&g[i]||T.style(e,i)}if((l=!T.isEmptyObject(t))||!T.isEmptyObject(h))for(i in f&&1===e.nodeType&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],null==(u=g&&g.display)&&(u=J.get(e,"display")),"none"===(c=T.css(e,"display"))&&(u?c=u:(fe([e],!0),u=e.style.display||u,c=T.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=u)&&"none"===T.css(e,"float")&&(l||(d.done(function(){p.display=u}),null==u&&(c=p.display,u="none"===c?"":c)),p.display="inline-block")),n.overflow&&(p.overflow="hidden",d.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]})),l=!1,h)l||(g?"hidden"in g&&(m=g.hidden):g=J.access(e,"fxshow",{display:u}),o&&(g.hidden=!m),m&&fe([e],!0),d.done(function(){for(i in m||fe([e]),J.remove(e,"fxshow"),h)T.style(e,i,h[i])})),l=lt(m?g[i]:0,i,d),i in g||(g[i]=l.start,m&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?ut.prefilters.unshift(e):ut.prefilters.push(e)}}),T.speed=function(e,t,n){var i=e&&"object"==typeof e?T.extend({},e):{complete:n||!n&&t||y(e)&&e,duration:e,easing:n&&t||t&&!y(t)&&t};return T.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in T.fx.speeds?i.duration=T.fx.speeds[i.duration]:i.duration=T.fx.speeds._default),null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){y(i.old)&&i.old.call(this),i.queue&&T.dequeue(this,i.queue)},i},T.fn.extend({fadeTo:function(e,t,n,i){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=T.isEmptyObject(e),o=T.speed(t,n,i),a=function(){var t=ut(this,T.extend({},e),o);(r||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,r||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,r=null!=e&&e+"queueHooks",o=T.timers,a=J.get(this);if(r)a[r]&&a[r].stop&&i(a[r]);else for(r in a)a[r]&&a[r].stop&&rt.test(r)&&i(a[r]);for(r=o.length;r--;)o[r].elem!==this||null!=e&&o[r].queue!==e||(o[r].anim.stop(n),t=!1,o.splice(r,1));!t&&n||T.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),i=n[e+"queue"],r=n[e+"queueHooks"],o=T.timers,a=i?i.length:0;for(n.finish=!0,T.queue(this,e,[]),r&&r.stop&&r.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)i[t]&&i[t].finish&&i[t].finish.call(this);delete n.finish})}}),T.each(["toggle","show","hide"],function(e,t){var n=T.fn[t];T.fn[t]=function(e,i,r){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(st(t,!0),e,i,r)}}),T.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){T.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}}),T.timers=[],T.fx.tick=function(){var e,t=0,n=T.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||T.fx.stop(),tt=void 0},T.fx.timer=function(e){T.timers.push(e),T.fx.start()},T.fx.interval=13,T.fx.start=function(){nt||(nt=!0,ot())},T.fx.stop=function(){nt=null},T.fx.speeds={slow:600,fast:200,_default:400},T.fn.delay=function(e,t){return e=T.fx&&T.fx.speeds[e]||e,t=t||"fx",this.queue(t,function(t,i){var r=n.setTimeout(t,e);i.stop=function(){n.clearTimeout(r)}})},function(){var e=a.createElement("input"),t=a.createElement("select").appendChild(a.createElement("option"));e.type="checkbox",v.checkOn=""!==e.value,v.optSelected=t.selected,(e=a.createElement("input")).value="t",e.type="radio",v.radioValue="t"===e.value}();var ct,ft=T.expr.attrHandle;T.fn.extend({attr:function(e,t){return z(this,T.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){T.removeAttr(this,e)})}}),T.extend({attr:function(e,t,n){var i,r,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?T.prop(e,t,n):(1===o&&T.isXMLDoc(e)||(r=T.attrHooks[t.toLowerCase()]||(T.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void T.removeAttr(e,t):r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):r&&"get"in r&&null!==(i=r.get(e,t))?i:null==(i=T.find.attr(e,t))?void 0:i)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&D(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i=0,r=t&&t.match(j);if(r&&1===e.nodeType)for(;n=r[i++];)e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?T.removeAttr(e,n):e.setAttribute(n,n),n}},T.each(T.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ft[t]||T.find.attr;ft[t]=function(e,t,i){var r,o,a=t.toLowerCase();return i||(o=ft[a],ft[a]=r,r=null!=n(e,t,i)?a:null,ft[a]=o),r}});var dt=/^(?:input|select|textarea|button)$/i,ht=/^(?:a|area)$/i;function pt(e){return(e.match(j)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function gt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(j)||[]}T.fn.extend({prop:function(e,t){return z(this,T.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[T.propFix[e]||e]})}}),T.extend({prop:function(e,t,n){var i,r,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&T.isXMLDoc(e)||(t=T.propFix[t]||t,r=T.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=T.find.attr(e,"tabindex");return t?parseInt(t,10):dt.test(e.nodeName)||ht.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),v.optSelected||(T.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),T.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){T.propFix[this.toLowerCase()]=this}),T.fn.extend({addClass:function(e){var t,n,i,r,o,a,s,l=0;if(y(e))return this.each(function(t){T(this).addClass(e.call(this,t,mt(this)))});if((t=gt(e)).length)for(;n=this[l++];)if(r=mt(n),i=1===n.nodeType&&" "+pt(r)+" "){for(a=0;o=t[a++];)i.indexOf(" "+o+" ")<0&&(i+=o+" ");r!==(s=pt(i))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,i,r,o,a,s,l=0;if(y(e))return this.each(function(t){T(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=gt(e)).length)for(;n=this[l++];)if(r=mt(n),i=1===n.nodeType&&" "+pt(r)+" "){for(a=0;o=t[a++];)for(;i.indexOf(" "+o+" ")>-1;)i=i.replace(" "+o+" "," ");r!==(s=pt(i))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,i="string"===n||Array.isArray(e);return"boolean"==typeof t&&i?t?this.addClass(e):this.removeClass(e):y(e)?this.each(function(n){T(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,r,o,a;if(i)for(r=0,o=T(this),a=gt(e);t=a[r++];)o.hasClass(t)?o.removeClass(t):o.addClass(t);else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&(" "+pt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var vt=/\r/g;T.fn.extend({val:function(e){var t,n,i,r=this[0];return arguments.length?(i=y(e),this.each(function(n){var r;1===this.nodeType&&(null==(r=i?e.call(this,n,T(this).val()):e)?r="":"number"==typeof r?r+="":Array.isArray(r)&&(r=T.map(r,function(e){return null==e?"":e+""})),(t=T.valHooks[this.type]||T.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))})):r?(t=T.valHooks[r.type]||T.valHooks[r.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:"string"==typeof(n=r.value)?n.replace(vt,""):null==n?"":n:void 0}}),T.extend({valHooks:{option:{get:function(e){var t=T.find.attr(e,"value");return null!=t?t:pt(T.text(e))}},select:{get:function(e){var t,n,i,r=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],l=a?o+1:r.length;for(i=o<0?l:a?o:0;i<l;i++)if(((n=r[i]).selected||i===o)&&!n.disabled&&(!n.parentNode.disabled||!D(n.parentNode,"optgroup"))){if(t=T(n).val(),a)return t;s.push(t)}return s},set:function(e,t){for(var n,i,r=e.options,o=T.makeArray(t),a=r.length;a--;)((i=r[a]).selected=T.inArray(T.valHooks.option.get(i),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),T.each(["radio","checkbox"],function(){T.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=T.inArray(T(e).val(),t)>-1}},v.checkOn||(T.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in n;var yt=/^(?:focusinfocus|focusoutblur)$/,bt=function(e){e.stopPropagation()};T.extend(T.event,{trigger:function(e,t,i,r){var o,s,l,u,c,f,d,h,m=[i||a],g=p.call(e,"type")?e.type:e,v=p.call(e,"namespace")?e.namespace.split("."):[];if(s=h=l=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!yt.test(g+T.event.triggered)&&(g.indexOf(".")>-1&&(g=(v=g.split(".")).shift(),v.sort()),c=g.indexOf(":")<0&&"on"+g,(e=e[T.expando]?e:new T.Event(g,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=v.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),t=null==t?[e]:T.makeArray(t,[e]),d=T.event.special[g]||{},r||!d.trigger||!1!==d.trigger.apply(i,t))){if(!r&&!d.noBubble&&!b(i)){for(u=d.delegateType||g,yt.test(u+g)||(s=s.parentNode);s;s=s.parentNode)m.push(s),l=s;l===(i.ownerDocument||a)&&m.push(l.defaultView||l.parentWindow||n)}for(o=0;(s=m[o++])&&!e.isPropagationStopped();)h=s,e.type=o>1?u:d.bindType||g,(f=(J.get(s,"events")||{})[e.type]&&J.get(s,"handle"))&&f.apply(s,t),(f=c&&s[c])&&f.apply&&Y(s)&&(e.result=f.apply(s,t),!1===e.result&&e.preventDefault());return e.type=g,r||e.isDefaultPrevented()||d._default&&!1!==d._default.apply(m.pop(),t)||!Y(i)||c&&y(i[g])&&!b(i)&&((l=i[c])&&(i[c]=null),T.event.triggered=g,e.isPropagationStopped()&&h.addEventListener(g,bt),i[g](),e.isPropagationStopped()&&h.removeEventListener(g,bt),T.event.triggered=void 0,l&&(i[c]=l)),e.result}},simulate:function(e,t,n){var i=T.extend(new T.Event,n,{type:e,isSimulated:!0});T.event.trigger(i,null,t)}}),T.fn.extend({trigger:function(e,t){return this.each(function(){T.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return T.event.trigger(e,t,n,!0)}}),v.focusin||T.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){T.event.simulate(t,e.target,T.event.fix(e))};T.event.special[t]={setup:function(){var i=this.ownerDocument||this,r=J.access(i,t);r||i.addEventListener(e,n,!0),J.access(i,t,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this,r=J.access(i,t)-1;r?J.access(i,t,r):(i.removeEventListener(e,n,!0),J.remove(i,t))}}});var _t=n.location,wt=Date.now(),Et=/\?/;T.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new n.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||T.error("Invalid XML: "+e),t};var Tt=/\[\]$/,Ct=/\r?\n/g,xt=/^(?:submit|button|image|reset|file)$/i,St=/^(?:input|select|textarea|keygen)/i;function At(e,t,n,i){var r;if(Array.isArray(t))T.each(t,function(t,r){n||Tt.test(e)?i(e,r):At(e+"["+("object"==typeof r&&null!=r?t:"")+"]",r,n,i)});else if(n||"object"!==E(t))i(e,t);else for(r in t)At(e+"["+r+"]",t[r],n,i)}T.param=function(e,t){var n,i=[],r=function(e,t){var n=y(t)?t():t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!T.isPlainObject(e))T.each(e,function(){r(this.name,this.value)});else for(n in e)At(n,e[n],t,r);return i.join("&")},T.fn.extend({serialize:function(){return T.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=T.prop(this,"elements");return e?T.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!T(this).is(":disabled")&&St.test(this.nodeName)&&!xt.test(e)&&(this.checked||!de.test(e))}).map(function(e,t){var n=T(this).val();return null==n?null:Array.isArray(n)?T.map(n,function(e){return{name:t.name,value:e.replace(Ct,"\r\n")}}):{name:t.name,value:n.replace(Ct,"\r\n")}}).get()}});var Ot=/%20/g,It=/#.*$/,Dt=/([?&])_=[^&]*/,Nt=/^(.*?):[ \t]*([^\r\n]*)$/gm,kt=/^(?:GET|HEAD)$/,Lt=/^\/\//,Pt={},Rt={},Ht="*/".concat("*"),Mt=a.createElement("a");function jt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,r=0,o=t.toLowerCase().match(j)||[];if(y(n))for(;i=o[r++];)"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}function Ft(e,t,n,i){var r={},o=e===Rt;function a(s){var l;return r[s]=!0,T.each(e[s]||[],function(e,s){var u=s(t,n,i);return"string"!=typeof u||o||r[u]?o?!(l=u):void 0:(t.dataTypes.unshift(u),a(u),!1)}),l}return a(t.dataTypes[0])||!r["*"]&&a("*")}function Wt(e,t){var n,i,r=T.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((r[n]?e:i||(i={}))[n]=t[n]);return i&&T.extend(!0,e,i),e}Mt.href=_t.href,T.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:_t.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_t.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ht,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":T.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Wt(Wt(e,T.ajaxSettings),t):Wt(T.ajaxSettings,e)},ajaxPrefilter:jt(Pt),ajaxTransport:jt(Rt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var i,r,o,s,l,u,c,f,d,h,p=T.ajaxSetup({},t),m=p.context||p,g=p.context&&(m.nodeType||m.jquery)?T(m):T.event,v=T.Deferred(),y=T.Callbacks("once memory"),b=p.statusCode||{},_={},w={},E="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s)for(s={};t=Nt.exec(o);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?o:null},setRequestHeader:function(e,t){return null==c&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,_[e]=t),this},overrideMimeType:function(e){return null==c&&(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)C.always(e[C.status]);else for(t in e)b[t]=[b[t],e[t]];return this},abort:function(e){var t=e||E;return i&&i.abort(t),x(0,t),this}};if(v.promise(C),p.url=((e||p.url||_t.href)+"").replace(Lt,_t.protocol+"//"),p.type=t.method||t.type||p.method||p.type,p.dataTypes=(p.dataType||"*").toLowerCase().match(j)||[""],null==p.crossDomain){u=a.createElement("a");try{u.href=p.url,u.href=u.href,p.crossDomain=Mt.protocol+"//"+Mt.host!=u.protocol+"//"+u.host}catch(e){p.crossDomain=!0}}if(p.data&&p.processData&&"string"!=typeof p.data&&(p.data=T.param(p.data,p.traditional)),Ft(Pt,p,t,C),c)return C;for(d in(f=T.event&&p.global)&&0==T.active++&&T.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!kt.test(p.type),r=p.url.replace(It,""),p.hasContent?p.data&&p.processData&&0===(p.contentType||"").indexOf("application/x-www-form-urlencoded")&&(p.data=p.data.replace(Ot,"+")):(h=p.url.slice(r.length),p.data&&(p.processData||"string"==typeof p.data)&&(r+=(Et.test(r)?"&":"?")+p.data,delete p.data),!1===p.cache&&(r=r.replace(Dt,"$1"),h=(Et.test(r)?"&":"?")+"_="+wt+++h),p.url=r+h),p.ifModified&&(T.lastModified[r]&&C.setRequestHeader("If-Modified-Since",T.lastModified[r]),T.etag[r]&&C.setRequestHeader("If-None-Match",T.etag[r])),(p.data&&p.hasContent&&!1!==p.contentType||t.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Ht+"; q=0.01":""):p.accepts["*"]),p.headers)C.setRequestHeader(d,p.headers[d]);if(p.beforeSend&&(!1===p.beforeSend.call(m,C,p)||c))return C.abort();if(E="abort",y.add(p.complete),C.done(p.success),C.fail(p.error),i=Ft(Rt,p,t,C)){if(C.readyState=1,f&&g.trigger("ajaxSend",[C,p]),c)return C;p.async&&p.timeout>0&&(l=n.setTimeout(function(){C.abort("timeout")},p.timeout));try{c=!1,i.send(_,x)}catch(e){if(c)throw e;x(-1,e)}}else x(-1,"No Transport");function x(e,t,a,s){var u,d,h,_,w,E=t;c||(c=!0,l&&n.clearTimeout(l),i=void 0,o=s||"",C.readyState=e>0?4:0,u=e>=200&&e<300||304===e,a&&(_=function(e,t,n){for(var i,r,o,a,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(r in s)if(s[r]&&s[r].test(i)){l.unshift(r);break}if(l[0]in n)o=l[0];else{for(r in n){if(!l[0]||e.converters[r+" "+l[0]]){o=r;break}a||(a=r)}o=o||a}if(o)return o!==l[0]&&l.unshift(o),n[o]}(p,C,a)),_=function(e,t,n,i){var r,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(!(a=u[l+" "+o]||u["* "+o]))for(r in u)if((s=r.split(" "))[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){!0===a?a=u[r]:!0!==u[r]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}(p,_,C,u),u?(p.ifModified&&((w=C.getResponseHeader("Last-Modified"))&&(T.lastModified[r]=w),(w=C.getResponseHeader("etag"))&&(T.etag[r]=w)),204===e||"HEAD"===p.type?E="nocontent":304===e?E="notmodified":(E=_.state,d=_.data,u=!(h=_.error))):(h=E,!e&&E||(E="error",e<0&&(e=0))),C.status=e,C.statusText=(t||E)+"",u?v.resolveWith(m,[d,E,C]):v.rejectWith(m,[C,E,h]),C.statusCode(b),b=void 0,f&&g.trigger(u?"ajaxSuccess":"ajaxError",[C,p,u?d:h]),y.fireWith(m,[C,E]),f&&(g.trigger("ajaxComplete",[C,p]),--T.active||T.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return T.get(e,t,n,"json")},getScript:function(e,t){return T.get(e,void 0,t,"script")}}),T.each(["get","post"],function(e,t){T[t]=function(e,n,i,r){return y(n)&&(r=r||i,i=n,n=void 0),T.ajax(T.extend({url:e,type:t,dataType:r,data:n,success:i},T.isPlainObject(e)&&e))}}),T._evalUrl=function(e){return T.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},T.fn.extend({wrapAll:function(e){var t;return this[0]&&(y(e)&&(e=e.call(this[0])),t=T(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return y(e)?this.each(function(t){T(this).wrapInner(e.call(this,t))}):this.each(function(){var t=T(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=y(e);return this.each(function(n){T(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){T(this).replaceWith(this.childNodes)}),this}}),T.expr.pseudos.hidden=function(e){return!T.expr.pseudos.visible(e)},T.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},T.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},qt=T.ajaxSettings.xhr();v.cors=!!qt&&"withCredentials"in qt,v.ajax=qt=!!qt,T.ajaxTransport(function(e){var t,i;if(v.cors||qt&&!e.crossDomain)return{send:function(r,o){var a,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(a in e.xhrFields)s[a]=e.xhrFields[a];for(a in e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"),r)s.setRequestHeader(a,r[a]);t=function(e){return function(){t&&(t=i=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Bt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=t(),i=s.onerror=s.ontimeout=t("error"),void 0!==s.onabort?s.onabort=i:s.onreadystatechange=function(){4===s.readyState&&n.setTimeout(function(){t&&i()})},t=t("abort");try{s.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}}),T.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),T.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return T.globalEval(e),e}}}),T.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),T.ajaxTransport("script",function(e){var t,n;if(e.crossDomain)return{send:function(i,r){t=T("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&r("error"===e.type?404:200,e.type)}),a.head.appendChild(t[0])},abort:function(){n&&n()}}});var Ut=[],Vt=/(=)\?(?=&|$)|\?\?/;T.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Ut.pop()||T.expando+"_"+wt++;return this[e]=!0,e}}),T.ajaxPrefilter("json jsonp",function(e,t,i){var r,o,a,s=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(s||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=y(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return a||T.error(r+" was not called"),a[0]},e.dataTypes[0]="json",o=n[r],n[r]=function(){a=arguments},i.always(function(){void 0===o?T(n).removeProp(r):n[r]=o,e[r]&&(e.jsonpCallback=t.jsonpCallback,Ut.push(r)),a&&y(o)&&o(a[0]),a=o=void 0}),"script"}),v.createHTMLDocument=function(){var e=a.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),T.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((i=(t=a.implementation.createHTMLDocument("")).createElement("base")).href=a.location.href,t.head.appendChild(i)):t=a),r=N.exec(e),o=!n&&[],r?[t.createElement(r[1])]:(r=be([e],t,o),o&&o.length&&T(o).remove(),T.merge([],r.childNodes)));var i,r,o},T.fn.load=function(e,t,n){var i,r,o,a=this,s=e.indexOf(" ");return s>-1&&(i=pt(e.slice(s)),e=e.slice(0,s)),y(t)?(n=t,t=void 0):t&&"object"==typeof t&&(r="POST"),a.length>0&&T.ajax({url:e,type:r||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(i?T("<div>").append(T.parseHTML(e)).find(i):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},T.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){T.fn[t]=function(e){return this.on(t,e)}}),T.expr.pseudos.animated=function(e){return T.grep(T.timers,function(t){return e===t.elem}).length},T.offset={setOffset:function(e,t,n){var i,r,o,a,s,l,u=T.css(e,"position"),c=T(e),f={};"static"===u&&(e.style.position="relative"),s=c.offset(),o=T.css(e,"top"),l=T.css(e,"left"),("absolute"===u||"fixed"===u)&&(o+l).indexOf("auto")>-1?(a=(i=c.position()).top,r=i.left):(a=parseFloat(o)||0,r=parseFloat(l)||0),y(t)&&(t=t.call(e,n,T.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+r),"using"in t?t.using.call(e,f):c.css(f)}},T.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){T.offset.setOffset(this,e,t)});var t,n,i=this[0];return i?i.getClientRects().length?(t=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,i=this[0],r={top:0,left:0};if("fixed"===T.css(i,"position"))t=i.getBoundingClientRect();else{for(t=this.offset(),n=i.ownerDocument,e=i.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===T.css(e,"position");)e=e.parentNode;e&&e!==i&&1===e.nodeType&&((r=T(e).offset()).top+=T.css(e,"borderTopWidth",!0),r.left+=T.css(e,"borderLeftWidth",!0))}return{top:t.top-r.top-T.css(i,"marginTop",!0),left:t.left-r.left-T.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===T.css(e,"position");)e=e.offsetParent;return e||_e})}}),T.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;T.fn[e]=function(i){return z(this,function(e,i,r){var o;if(b(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===r)return o?o[t]:e[i];o?o.scrollTo(n?o.pageXOffset:r,n?r:o.pageYOffset):e[i]=r},e,i,arguments.length)}}),T.each(["top","left"],function(e,t){T.cssHooks[t]=Ue(v.pixelPosition,function(e,n){if(n)return n=qe(e,t),Fe.test(n)?T(e).position()[t]+"px":n})}),T.each({Height:"height",Width:"width"},function(e,t){T.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){T.fn[i]=function(r,o){var a=arguments.length&&(n||"boolean"!=typeof r),s=n||(!0===r||!0===o?"margin":"border");return z(this,function(t,n,r){var o;return b(t)?0===i.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===r?T.css(t,n,s):T.style(t,n,r,s)},t,a?r:void 0,a)}})}),T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){T.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),T.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),T.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),T.proxy=function(e,t){var n,i,r;if("string"==typeof t&&(n=e[t],t=e,e=n),y(e))return i=l.call(arguments,2),(r=function(){return e.apply(t||this,i.concat(l.call(arguments)))}).guid=e.guid=e.guid||T.guid++,r},T.holdReady=function(e){e?T.readyWait++:T.ready(!0)},T.isArray=Array.isArray,T.parseJSON=JSON.parse,T.nodeName=D,T.isFunction=y,T.isWindow=b,T.camelCase=$,T.type=E,T.now=Date.now,T.isNumeric=function(e){var t=T.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},void 0===(i=function(){return T}.apply(t,[]))||(e.exports=i);var zt=n.jQuery,Gt=n.$;return T.noConflict=function(e){return n.$===T&&(n.$=Gt),e&&n.jQuery===T&&(n.jQuery=zt),T},r||(n.jQuery=n.$=T),T})},function(e,t,n){
/*!
  * Bootstrap v4.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){o(e,t,n[t])})}return e}t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n;var s=function(e){var t="transitionend";function n(e){return{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase()}function i(t){var n=this,i=!1;return e(this).one(r.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||r.triggerTransitionEnd(n)},t),this}var r={TRANSITION_END:"bsTransitionEnd",getUID:function(e){do{e+=~~(1e6*Math.random())}while(document.getElementById(e));return e},getSelectorFromElement:function(t){var n=t.getAttribute("data-target");n&&"#"!==n||(n=t.getAttribute("href")||"");try{var i=e(document).find(n);return i.length>0?n:null}catch(e){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var n=e(t).css("transition-duration"),i=parseFloat(n);return i?(n=n.split(",")[0],1e3*parseFloat(n)):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(n){e(n).trigger(t)},supportsTransitionEnd:function(){return Boolean(t)},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,i){for(var o in i)if(Object.prototype.hasOwnProperty.call(i,o)){var a=i[o],s=t[o],l=s&&r.isElement(s)?"element":n(s);if(!new RegExp(a).test(l))throw new Error(e.toUpperCase()+': Option "'+o+'" provided type "'+l+'" but expected type "'+a+'".')}}};return e.fn.emulateTransitionEnd=i,e.event.special[r.TRANSITION_END]={bindType:t,delegateType:t,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},r}(t),l=function(e){var t=e.fn.alert,n={CLOSE:"close.bs.alert",CLOSED:"closed.bs.alert",CLICK_DATA_API:"click.bs.alert.data-api"},i={ALERT:"alert",FADE:"fade",SHOW:"show"},o=function(){function t(e){this._element=e}var o=t.prototype;return o.close=function(e){var t=this._element;e&&(t=this._getRootElement(e));var n=this._triggerCloseEvent(t);n.isDefaultPrevented()||this._removeElement(t)},o.dispose=function(){e.removeData(this._element,"bs.alert"),this._element=null},o._getRootElement=function(t){var n=s.getSelectorFromElement(t),r=!1;return n&&(r=e(n)[0]),r||(r=e(t).closest("."+i.ALERT)[0]),r},o._triggerCloseEvent=function(t){var i=e.Event(n.CLOSE);return e(t).trigger(i),i},o._removeElement=function(t){var n=this;if(e(t).removeClass(i.SHOW),e(t).hasClass(i.FADE)){var r=s.getTransitionDurationFromElement(t);e(t).one(s.TRANSITION_END,function(e){return n._destroyElement(t,e)}).emulateTransitionEnd(r)}else this._destroyElement(t)},o._destroyElement=function(t){e(t).detach().trigger(n.CLOSED).remove()},t._jQueryInterface=function(n){return this.each(function(){var i=e(this),r=i.data("bs.alert");r||(r=new t(this),i.data("bs.alert",r)),"close"===n&&r[n](this)})},t._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},r(t,null,[{key:"VERSION",get:function(){return"4.1.1"}}]),t}();return e(document).on(n.CLICK_DATA_API,'[data-dismiss="alert"]',o._handleDismiss(new o)),e.fn.alert=o._jQueryInterface,e.fn.alert.Constructor=o,e.fn.alert.noConflict=function(){return e.fn.alert=t,o._jQueryInterface},o}(t),u=function(e){var t="button",n=e.fn[t],i={ACTIVE:"active",BUTTON:"btn",FOCUS:"focus"},o={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:"input",ACTIVE:".active",BUTTON:".btn"},a={CLICK_DATA_API:"click.bs.button.data-api",FOCUS_BLUR_DATA_API:"focus.bs.button.data-api blur.bs.button.data-api"},s=function(){function t(e){this._element=e}var n=t.prototype;return n.toggle=function(){var t=!0,n=!0,r=e(this._element).closest(o.DATA_TOGGLE)[0];if(r){var a=e(this._element).find(o.INPUT)[0];if(a){if("radio"===a.type)if(a.checked&&e(this._element).hasClass(i.ACTIVE))t=!1;else{var s=e(r).find(o.ACTIVE)[0];s&&e(s).removeClass(i.ACTIVE)}if(t){if(a.hasAttribute("disabled")||r.hasAttribute("disabled")||a.classList.contains("disabled")||r.classList.contains("disabled"))return;a.checked=!e(this._element).hasClass(i.ACTIVE),e(a).trigger("change")}a.focus(),n=!1}}n&&this._element.setAttribute("aria-pressed",!e(this._element).hasClass(i.ACTIVE)),t&&e(this._element).toggleClass(i.ACTIVE)},n.dispose=function(){e.removeData(this._element,"bs.button"),this._element=null},t._jQueryInterface=function(n){return this.each(function(){var i=e(this).data("bs.button");i||(i=new t(this),e(this).data("bs.button",i)),"toggle"===n&&i[n]()})},r(t,null,[{key:"VERSION",get:function(){return"4.1.1"}}]),t}();return e(document).on(a.CLICK_DATA_API,o.DATA_TOGGLE_CARROT,function(t){t.preventDefault();var n=t.target;e(n).hasClass(i.BUTTON)||(n=e(n).closest(o.BUTTON)),s._jQueryInterface.call(e(n),"toggle")}).on(a.FOCUS_BLUR_DATA_API,o.DATA_TOGGLE_CARROT,function(t){var n=e(t.target).closest(o.BUTTON)[0];e(n).toggleClass(i.FOCUS,/^focus(in)?$/.test(t.type))}),e.fn[t]=s._jQueryInterface,e.fn[t].Constructor=s,e.fn[t].noConflict=function(){return e.fn[t]=n,s._jQueryInterface},s}(t),c=function(e){var t="carousel",n="bs.carousel",i="."+n,o=e.fn[t],l={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},u={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},c={NEXT:"next",PREV:"prev",LEFT:"left",RIGHT:"right"},f={SLIDE:"slide"+i,SLID:"slid"+i,KEYDOWN:"keydown"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i,TOUCHEND:"touchend"+i,LOAD_DATA_API:"load.bs.carousel.data-api",CLICK_DATA_API:"click.bs.carousel.data-api"},d={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slide",RIGHT:"carousel-item-right",LEFT:"carousel-item-left",NEXT:"carousel-item-next",PREV:"carousel-item-prev",ITEM:"carousel-item"},h={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},p=function(){function o(t,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=e(t)[0],this._indicatorsElement=e(this._element).find(h.INDICATORS)[0],this._addEventListeners()}var p=o.prototype;return p.next=function(){this._isSliding||this._slide(c.NEXT)},p.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},p.prev=function(){this._isSliding||this._slide(c.PREV)},p.pause=function(t){t||(this._isPaused=!0),e(this._element).find(h.NEXT_PREV)[0]&&(s.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},p.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},p.to=function(t){var n=this;this._activeElement=e(this._element).find(h.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)e(this._element).one(f.SLID,function(){return n.to(t)});else{if(i===t)return this.pause(),void this.cycle();var r=t>i?c.NEXT:c.PREV;this._slide(r,this._items[t])}},p.dispose=function(){e(this._element).off(i),e.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},p._getConfig=function(e){return e=a({},l,e),s.typeCheckConfig(t,e,u),e},p._addEventListeners=function(){var t=this;this._config.keyboard&&e(this._element).on(f.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&(e(this._element).on(f.MOUSEENTER,function(e){return t.pause(e)}).on(f.MOUSELEAVE,function(e){return t.cycle(e)}),"ontouchstart"in document.documentElement&&e(this._element).on(f.TOUCHEND,function(){t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval)}))},p._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next()}},p._getItemIndex=function(t){return this._items=e.makeArray(e(t).parent().find(h.ITEM)),this._items.indexOf(t)},p._getItemByDirection=function(e,t){var n=e===c.NEXT,i=e===c.PREV,r=this._getItemIndex(t),o=this._items.length-1,a=i&&0===r||n&&r===o;if(a&&!this._config.wrap)return t;var s=e===c.PREV?-1:1,l=(r+s)%this._items.length;return-1===l?this._items[this._items.length-1]:this._items[l]},p._triggerSlideEvent=function(t,n){var i=this._getItemIndex(t),r=this._getItemIndex(e(this._element).find(h.ACTIVE_ITEM)[0]),o=e.Event(f.SLIDE,{relatedTarget:t,direction:n,from:r,to:i});return e(this._element).trigger(o),o},p._setActiveIndicatorElement=function(t){if(this._indicatorsElement){e(this._indicatorsElement).find(h.ACTIVE).removeClass(d.ACTIVE);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&e(n).addClass(d.ACTIVE)}},p._slide=function(t,n){var i,r,o,a=this,l=e(this._element).find(h.ACTIVE_ITEM)[0],u=this._getItemIndex(l),p=n||l&&this._getItemByDirection(t,l),m=this._getItemIndex(p),g=Boolean(this._interval);if(t===c.NEXT?(i=d.LEFT,r=d.NEXT,o=c.LEFT):(i=d.RIGHT,r=d.PREV,o=c.RIGHT),p&&e(p).hasClass(d.ACTIVE))this._isSliding=!1;else{var v=this._triggerSlideEvent(p,o);if(!v.isDefaultPrevented()&&l&&p){this._isSliding=!0,g&&this.pause(),this._setActiveIndicatorElement(p);var y=e.Event(f.SLID,{relatedTarget:p,direction:o,from:u,to:m});if(e(this._element).hasClass(d.SLIDE)){e(p).addClass(r),s.reflow(p),e(l).addClass(i),e(p).addClass(i);var b=s.getTransitionDurationFromElement(l);e(l).one(s.TRANSITION_END,function(){e(p).removeClass(i+" "+r).addClass(d.ACTIVE),e(l).removeClass(d.ACTIVE+" "+r+" "+i),a._isSliding=!1,setTimeout(function(){return e(a._element).trigger(y)},0)}).emulateTransitionEnd(b)}else e(l).removeClass(d.ACTIVE),e(p).addClass(d.ACTIVE),this._isSliding=!1,e(this._element).trigger(y);g&&this.cycle()}}},o._jQueryInterface=function(t){return this.each(function(){var i=e(this).data(n),r=a({},l,e(this).data());"object"==typeof t&&(r=a({},r,t));var s="string"==typeof t?t:r.slide;if(i||(i=new o(this,r),e(this).data(n,i)),"number"==typeof t)i.to(t);else if("string"==typeof s){if(void 0===i[s])throw new TypeError('No method named "'+s+'"');i[s]()}else r.interval&&(i.pause(),i.cycle())})},o._dataApiClickHandler=function(t){var i=s.getSelectorFromElement(this);if(i){var r=e(i)[0];if(r&&e(r).hasClass(d.CAROUSEL)){var l=a({},e(r).data(),e(this).data()),u=this.getAttribute("data-slide-to");u&&(l.interval=!1),o._jQueryInterface.call(e(r),l),u&&e(r).data(n).to(u),t.preventDefault()}}},r(o,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return l}}]),o}();return e(document).on(f.CLICK_DATA_API,h.DATA_SLIDE,p._dataApiClickHandler),e(window).on(f.LOAD_DATA_API,function(){e(h.DATA_RIDE).each(function(){var t=e(this);p._jQueryInterface.call(t,t.data())})}),e.fn[t]=p._jQueryInterface,e.fn[t].Constructor=p,e.fn[t].noConflict=function(){return e.fn[t]=o,p._jQueryInterface},p}(t),f=function(e){var t="collapse",n="bs.collapse",i=e.fn[t],o={toggle:!0,parent:""},l={toggle:"boolean",parent:"(string|element)"},u={SHOW:"show.bs.collapse",SHOWN:"shown.bs.collapse",HIDE:"hide.bs.collapse",HIDDEN:"hidden.bs.collapse",CLICK_DATA_API:"click.bs.collapse.data-api"},c={SHOW:"show",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},f={WIDTH:"width",HEIGHT:"height"},d={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},h=function(){function i(t,n){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(n),this._triggerArray=e.makeArray(e('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var i=e(d.DATA_TOGGLE),r=0;r<i.length;r++){var o=i[r],a=s.getSelectorFromElement(o);null!==a&&e(a).filter(t).length>0&&(this._selector=a,this._triggerArray.push(o))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var h=i.prototype;return h.toggle=function(){e(this._element).hasClass(c.SHOW)?this.hide():this.show()},h.show=function(){var t,r,o=this;if(!(this._isTransitioning||e(this._element).hasClass(c.SHOW)||(this._parent&&0===(t=e.makeArray(e(this._parent).find(d.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(t=null),t&&(r=e(t).not(this._selector).data(n))&&r._isTransitioning))){var a=e.Event(u.SHOW);if(e(this._element).trigger(a),!a.isDefaultPrevented()){t&&(i._jQueryInterface.call(e(t).not(this._selector),"hide"),r||e(t).data(n,null));var l=this._getDimension();e(this._element).removeClass(c.COLLAPSE).addClass(c.COLLAPSING),this._element.style[l]=0,this._triggerArray.length>0&&e(this._triggerArray).removeClass(c.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var f=l[0].toUpperCase()+l.slice(1),h="scroll"+f,p=s.getTransitionDurationFromElement(this._element);e(this._element).one(s.TRANSITION_END,function(){e(o._element).removeClass(c.COLLAPSING).addClass(c.COLLAPSE).addClass(c.SHOW),o._element.style[l]="",o.setTransitioning(!1),e(o._element).trigger(u.SHOWN)}).emulateTransitionEnd(p),this._element.style[l]=this._element[h]+"px"}}},h.hide=function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass(c.SHOW)){var n=e.Event(u.HIDE);if(e(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",s.reflow(this._element),e(this._element).addClass(c.COLLAPSING).removeClass(c.COLLAPSE).removeClass(c.SHOW),this._triggerArray.length>0)for(var r=0;r<this._triggerArray.length;r++){var o=this._triggerArray[r],a=s.getSelectorFromElement(o);if(null!==a){var l=e(a);l.hasClass(c.SHOW)||e(o).addClass(c.COLLAPSED).attr("aria-expanded",!1)}}this.setTransitioning(!0),this._element.style[i]="";var f=s.getTransitionDurationFromElement(this._element);e(this._element).one(s.TRANSITION_END,function(){t.setTransitioning(!1),e(t._element).removeClass(c.COLLAPSING).addClass(c.COLLAPSE).trigger(u.HIDDEN)}).emulateTransitionEnd(f)}}},h.setTransitioning=function(e){this._isTransitioning=e},h.dispose=function(){e.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},h._getConfig=function(e){return(e=a({},o,e)).toggle=Boolean(e.toggle),s.typeCheckConfig(t,e,l),e},h._getDimension=function(){var t=e(this._element).hasClass(f.WIDTH);return t?f.WIDTH:f.HEIGHT},h._getParent=function(){var t=this,n=null;s.isElement(this._config.parent)?(n=this._config.parent,void 0!==this._config.parent.jquery&&(n=this._config.parent[0])):n=e(this._config.parent)[0];var r='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return e(n).find(r).each(function(e,n){t._addAriaAndCollapsedClass(i._getTargetFromElement(n),[n])}),n},h._addAriaAndCollapsedClass=function(t,n){if(t){var i=e(t).hasClass(c.SHOW);n.length>0&&e(n).toggleClass(c.COLLAPSED,!i).attr("aria-expanded",i)}},i._getTargetFromElement=function(t){var n=s.getSelectorFromElement(t);return n?e(n)[0]:null},i._jQueryInterface=function(t){return this.each(function(){var r=e(this),s=r.data(n),l=a({},o,r.data(),"object"==typeof t&&t?t:{});if(!s&&l.toggle&&/show|hide/.test(t)&&(l.toggle=!1),s||(s=new i(this,l),r.data(n,s)),"string"==typeof t){if(void 0===s[t])throw new TypeError('No method named "'+t+'"');s[t]()}})},r(i,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return o}}]),i}();return e(document).on(u.CLICK_DATA_API,d.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var i=e(this),r=s.getSelectorFromElement(this);e(r).each(function(){var t=e(this),r=t.data(n),o=r?"toggle":i.data();h._jQueryInterface.call(t,o)})}),e.fn[t]=h._jQueryInterface,e.fn[t].Constructor=h,e.fn[t].noConflict=function(){return e.fn[t]=i,h._jQueryInterface},h}(t),d=function(e){var t="dropdown",i="bs.dropdown",o="."+i,l=e.fn[t],u=new RegExp("38|40|27"),c={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,CLICK:"click"+o,CLICK_DATA_API:"click.bs.dropdown.data-api",KEYDOWN_DATA_API:"keydown.bs.dropdown.data-api",KEYUP_DATA_API:"keyup.bs.dropdown.data-api"},f={DISABLED:"disabled",SHOW:"show",DROPUP:"dropup",DROPRIGHT:"dropright",DROPLEFT:"dropleft",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left",POSITION_STATIC:"position-static"},d={DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",MENU:".dropdown-menu",NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"},h={TOP:"top-start",TOPEND:"top-end",BOTTOM:"bottom-start",BOTTOMEND:"bottom-end",RIGHT:"right-start",RIGHTEND:"right-end",LEFT:"left-start",LEFTEND:"left-end"},p={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},m={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},g=function(){function l(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var g=l.prototype;return g.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass(f.DISABLED)){var t=l._getParentFromElement(this._element),i=e(this._menu).hasClass(f.SHOW);if(l._clearMenus(),!i){var r={relatedTarget:this._element},o=e.Event(c.SHOW,r);if(e(t).trigger(o),!o.isDefaultPrevented()){if(!this._inNavbar){if(void 0===n)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var a=this._element;"parent"===this._config.reference?a=t:s.isElement(this._config.reference)&&(a=this._config.reference,void 0!==this._config.reference.jquery&&(a=this._config.reference[0])),"scrollParent"!==this._config.boundary&&e(t).addClass(f.POSITION_STATIC),this._popper=new n(a,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===e(t).closest(d.NAVBAR_NAV).length&&e(document.body).children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass(f.SHOW),e(t).toggleClass(f.SHOW).trigger(e.Event(c.SHOWN,r))}}}},g.dispose=function(){e.removeData(this._element,i),e(this._element).off(o),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},g.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},g._addEventListeners=function(){var t=this;e(this._element).on(c.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},g._getConfig=function(n){return n=a({},this.constructor.Default,e(this._element).data(),n),s.typeCheckConfig(t,n,this.constructor.DefaultType),n},g._getMenuElement=function(){if(!this._menu){var t=l._getParentFromElement(this._element);this._menu=e(t).find(d.MENU)[0]}return this._menu},g._getPlacement=function(){var t=e(this._element).parent(),n=h.BOTTOM;return t.hasClass(f.DROPUP)?(n=h.TOP,e(this._menu).hasClass(f.MENURIGHT)&&(n=h.TOPEND)):t.hasClass(f.DROPRIGHT)?n=h.RIGHT:t.hasClass(f.DROPLEFT)?n=h.LEFT:e(this._menu).hasClass(f.MENURIGHT)&&(n=h.BOTTOMEND),n},g._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},g._getPopperConfig=function(){var e=this,t={};"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=a({},t.offsets,e._config.offset(t.offsets)||{}),t}:t.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},l._jQueryInterface=function(t){return this.each(function(){var n=e(this).data(i),r="object"==typeof t?t:null;if(n||(n=new l(this,r),e(this).data(i,n)),"string"==typeof t){if(void 0===n[t])throw new TypeError('No method named "'+t+'"');n[t]()}})},l._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var n=e.makeArray(e(d.DATA_TOGGLE)),r=0;r<n.length;r++){var o=l._getParentFromElement(n[r]),a=e(n[r]).data(i),s={relatedTarget:n[r]};if(a){var u=a._menu;if(e(o).hasClass(f.SHOW)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&e.contains(o,t.target))){var h=e.Event(c.HIDE,s);e(o).trigger(h),h.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),n[r].setAttribute("aria-expanded","false"),e(u).removeClass(f.SHOW),e(o).removeClass(f.SHOW).trigger(e.Event(c.HIDDEN,s)))}}}},l._getParentFromElement=function(t){var n,i=s.getSelectorFromElement(t);return i&&(n=e(i)[0]),n||t.parentNode},l._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||e(t.target).closest(d.MENU).length)):u.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!e(this).hasClass(f.DISABLED))){var n=l._getParentFromElement(this),i=e(n).hasClass(f.SHOW);if((i||27===t.which&&32===t.which)&&(!i||27!==t.which&&32!==t.which)){var r=e(n).find(d.VISIBLE_ITEMS).get();if(0!==r.length){var o=r.indexOf(t.target);38===t.which&&o>0&&o--,40===t.which&&o<r.length-1&&o++,o<0&&(o=0),r[o].focus()}}else{if(27===t.which){var a=e(n).find(d.DATA_TOGGLE)[0];e(a).trigger("focus")}e(this).trigger("click")}}},r(l,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return p}},{key:"DefaultType",get:function(){return m}}]),l}();return e(document).on(c.KEYDOWN_DATA_API,d.DATA_TOGGLE,g._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API,d.MENU,g._dataApiKeydownHandler).on(c.CLICK_DATA_API+" "+c.KEYUP_DATA_API,g._clearMenus).on(c.CLICK_DATA_API,d.DATA_TOGGLE,function(t){t.preventDefault(),t.stopPropagation(),g._jQueryInterface.call(e(this),"toggle")}).on(c.CLICK_DATA_API,d.FORM_CHILD,function(e){e.stopPropagation()}),e.fn[t]=g._jQueryInterface,e.fn[t].Constructor=g,e.fn[t].noConflict=function(){return e.fn[t]=l,g._jQueryInterface},g}(t),h=function(e){var t="modal",n=".bs.modal",i=e.fn.modal,o={backdrop:!0,keyboard:!0,focus:!0,show:!0},l={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},u={HIDE:"hide.bs.modal",HIDDEN:"hidden.bs.modal",SHOW:"show.bs.modal",SHOWN:"shown.bs.modal",FOCUSIN:"focusin.bs.modal",RESIZE:"resize.bs.modal",CLICK_DISMISS:"click.dismiss.bs.modal",KEYDOWN_DISMISS:"keydown.dismiss.bs.modal",MOUSEUP_DISMISS:"mouseup.dismiss.bs.modal",MOUSEDOWN_DISMISS:"mousedown.dismiss.bs.modal",CLICK_DATA_API:"click.bs.modal.data-api"},c={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",SHOW:"show"},f={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},d=function(){function i(t,n){this._config=this._getConfig(n),this._element=t,this._dialog=e(t).find(f.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}var d=i.prototype;return d.toggle=function(e){return this._isShown?this.hide():this.show(e)},d.show=function(t){var n=this;if(!this._isTransitioning&&!this._isShown){e(this._element).hasClass(c.FADE)&&(this._isTransitioning=!0);var i=e.Event(u.SHOW,{relatedTarget:t});e(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),e(document.body).addClass(c.OPEN),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on(u.CLICK_DISMISS,f.DATA_DISMISS,function(e){return n.hide(e)}),e(this._dialog).on(u.MOUSEDOWN_DISMISS,function(){e(n._element).one(u.MOUSEUP_DISMISS,function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(t)}))}},d.hide=function(t){var n=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var i=e.Event(u.HIDE);if(e(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var r=e(this._element).hasClass(c.FADE);if(r&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off(u.FOCUSIN),e(this._element).removeClass(c.SHOW),e(this._element).off(u.CLICK_DISMISS),e(this._dialog).off(u.MOUSEDOWN_DISMISS),r){var o=s.getTransitionDurationFromElement(this._element);e(this._element).one(s.TRANSITION_END,function(e){return n._hideModal(e)}).emulateTransitionEnd(o)}else this._hideModal()}}},d.dispose=function(){e.removeData(this._element,"bs.modal"),e(window,document,this._element,this._backdrop).off(n),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},d.handleUpdate=function(){this._adjustDialog()},d._getConfig=function(e){return e=a({},o,e),s.typeCheckConfig(t,e,l),e},d._showElement=function(t){var n=this,i=e(this._element).hasClass(c.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&s.reflow(this._element),e(this._element).addClass(c.SHOW),this._config.focus&&this._enforceFocus();var r=e.Event(u.SHOWN,{relatedTarget:t}),o=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(r)};if(i){var a=s.getTransitionDurationFromElement(this._element);e(this._dialog).one(s.TRANSITION_END,o).emulateTransitionEnd(a)}else o()},d._enforceFocus=function(){var t=this;e(document).off(u.FOCUSIN).on(u.FOCUSIN,function(n){document!==n.target&&t._element!==n.target&&0===e(t._element).has(n.target).length&&t._element.focus()})},d._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?e(this._element).on(u.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||e(this._element).off(u.KEYDOWN_DISMISS)},d._setResizeEvent=function(){var t=this;this._isShown?e(window).on(u.RESIZE,function(e){return t.handleUpdate(e)}):e(window).off(u.RESIZE)},d._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){e(document.body).removeClass(c.OPEN),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger(u.HIDDEN)})},d._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},d._showBackdrop=function(t){var n=this,i=e(this._element).hasClass(c.FADE)?c.FADE:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=c.BACKDROP,i&&e(this._backdrop).addClass(i),e(this._backdrop).appendTo(document.body),e(this._element).on(u.CLICK_DISMISS,function(e){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:e.target===e.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),i&&s.reflow(this._backdrop),e(this._backdrop).addClass(c.SHOW),!t)return;if(!i)return void t();var r=s.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(s.TRANSITION_END,t).emulateTransitionEnd(r)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass(c.SHOW);var o=function(){n._removeBackdrop(),t&&t()};if(e(this._element).hasClass(c.FADE)){var a=s.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(s.TRANSITION_END,o).emulateTransitionEnd(a)}else o()}else t&&t()},d._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},d._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},d._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},d._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){e(f.FIXED_CONTENT).each(function(n,i){var r=e(i)[0].style.paddingRight,o=e(i).css("padding-right");e(i).data("padding-right",r).css("padding-right",parseFloat(o)+t._scrollbarWidth+"px")}),e(f.STICKY_CONTENT).each(function(n,i){var r=e(i)[0].style.marginRight,o=e(i).css("margin-right");e(i).data("margin-right",r).css("margin-right",parseFloat(o)-t._scrollbarWidth+"px")}),e(f.NAVBAR_TOGGLER).each(function(n,i){var r=e(i)[0].style.marginRight,o=e(i).css("margin-right");e(i).data("margin-right",r).css("margin-right",parseFloat(o)+t._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=e(document.body).css("padding-right");e(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},d._resetScrollbar=function(){e(f.FIXED_CONTENT).each(function(t,n){var i=e(n).data("padding-right");void 0!==i&&e(n).css("padding-right",i).removeData("padding-right")}),e(f.STICKY_CONTENT+", "+f.NAVBAR_TOGGLER).each(function(t,n){var i=e(n).data("margin-right");void 0!==i&&e(n).css("margin-right",i).removeData("margin-right")});var t=e(document.body).data("padding-right");void 0!==t&&e(document.body).css("padding-right",t).removeData("padding-right")},d._getScrollbarWidth=function(){var e=document.createElement("div");e.className=c.SCROLLBAR_MEASURER,document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},i._jQueryInterface=function(t,n){return this.each(function(){var r=e(this).data("bs.modal"),s=a({},o,e(this).data(),"object"==typeof t&&t?t:{});if(r||(r=new i(this,s),e(this).data("bs.modal",r)),"string"==typeof t){if(void 0===r[t])throw new TypeError('No method named "'+t+'"');r[t](n)}else s.show&&r.show(n)})},r(i,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return o}}]),i}();return e(document).on(u.CLICK_DATA_API,f.DATA_TOGGLE,function(t){var n,i=this,r=s.getSelectorFromElement(this);r&&(n=e(r)[0]);var o=e(n).data("bs.modal")?"toggle":a({},e(n).data(),e(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var l=e(n).one(u.SHOW,function(t){t.isDefaultPrevented()||l.one(u.HIDDEN,function(){e(i).is(":visible")&&i.focus()})});d._jQueryInterface.call(e(n),o,this)}),e.fn.modal=d._jQueryInterface,e.fn.modal.Constructor=d,e.fn.modal.noConflict=function(){return e.fn.modal=i,d._jQueryInterface},d}(t),p=function(e){var t="tooltip",i=".bs.tooltip",o=e.fn[t],l=new RegExp("(^|\\s)bs-tooltip\\S+","g"),u={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},c={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},f={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},d={SHOW:"show",OUT:"out"},h={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,INSERTED:"inserted"+i,CLICK:"click"+i,FOCUSIN:"focusin"+i,FOCUSOUT:"focusout"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i},p={FADE:"fade",SHOW:"show"},m={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner",ARROW:".arrow"},g={HOVER:"hover",FOCUS:"focus",CLICK:"click",MANUAL:"manual"},v=function(){function o(e,t){if(void 0===n)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=e,this.config=this._getConfig(t),this.tip=null,this._setListeners()}var v=o.prototype;return v.enable=function(){this._isEnabled=!0},v.disable=function(){this._isEnabled=!1},v.toggleEnabled=function(){this._isEnabled=!this._isEnabled},v.toggle=function(t){if(this._isEnabled)if(t){var n=this.constructor.DATA_KEY,i=e(t.currentTarget).data(n);i||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(e(this.getTipElement()).hasClass(p.SHOW))return void this._leave(null,this);this._enter(null,this)}},v.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},v.show=function(){var t=this;if("none"===e(this.element).css("display"))throw new Error("Please use show on visible elements");var i=e.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(i);var r=e.contains(this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!r)return;var o=this.getTipElement(),a=s.getUID(this.constructor.NAME);o.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&e(o).addClass(p.FADE);var l="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,u=this._getAttachment(l);this.addAttachmentClass(u);var c=!1===this.config.container?document.body:e(this.config.container);e(o).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(o).appendTo(c),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,o,{placement:u,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:m.ARROW},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){t._handlePopperPlacementChange(e)}}),e(o).addClass(p.SHOW),"ontouchstart"in document.documentElement&&e(document.body).children().on("mouseover",null,e.noop);var f=function(){t.config.animation&&t._fixTransition();var n=t._hoverState;t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),n===d.OUT&&t._leave(null,t)};if(e(this.tip).hasClass(p.FADE)){var h=s.getTransitionDurationFromElement(this.tip);e(this.tip).one(s.TRANSITION_END,f).emulateTransitionEnd(h)}else f()}},v.hide=function(t){var n=this,i=this.getTipElement(),r=e.Event(this.constructor.Event.HIDE),o=function(){n._hoverState!==d.SHOW&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),e(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()};if(e(this.element).trigger(r),!r.isDefaultPrevented()){if(e(i).removeClass(p.SHOW),"ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),this._activeTrigger[g.CLICK]=!1,this._activeTrigger[g.FOCUS]=!1,this._activeTrigger[g.HOVER]=!1,e(this.tip).hasClass(p.FADE)){var a=s.getTransitionDurationFromElement(i);e(i).one(s.TRANSITION_END,o).emulateTransitionEnd(a)}else o();this._hoverState=""}},v.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},v.isWithContent=function(){return Boolean(this.getTitle())},v.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-tooltip-"+t)},v.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},v.setContent=function(){var t=e(this.getTipElement());this.setElementContent(t.find(m.TOOLTIP_INNER),this.getTitle()),t.removeClass(p.FADE+" "+p.SHOW)},v.setElementContent=function(t,n){var i=this.config.html;"object"==typeof n&&(n.nodeType||n.jquery)?i?e(n).parent().is(t)||t.empty().append(n):t.text(e(n).text()):t[i?"html":"text"](n)},v.getTitle=function(){var e=this.element.getAttribute("data-original-title");return e||(e="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),e},v._getAttachment=function(e){return c[e.toUpperCase()]},v._setListeners=function(){var t=this,n=this.config.trigger.split(" ");n.forEach(function(n){if("click"===n)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,function(e){return t.toggle(e)});else if(n!==g.MANUAL){var i=n===g.HOVER?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,r=n===g.HOVER?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;e(t.element).on(i,t.config.selector,function(e){return t._enter(e)}).on(r,t.config.selector,function(e){return t._leave(e)})}e(t.element).closest(".modal").on("hide.bs.modal",function(){return t.hide()})}),this.config.selector?this.config=a({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},v._fixTitle=function(){var e=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==e)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},v._enter=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusin"===t.type?g.FOCUS:g.HOVER]=!0),e(n.getTipElement()).hasClass(p.SHOW)||n._hoverState===d.SHOW?n._hoverState=d.SHOW:(clearTimeout(n._timeout),n._hoverState=d.SHOW,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===d.SHOW&&n.show()},n.config.delay.show):n.show())},v._leave=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusout"===t.type?g.FOCUS:g.HOVER]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=d.OUT,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===d.OUT&&n.hide()},n.config.delay.hide):n.hide())},v._isWithActiveTrigger=function(){for(var e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1},v._getConfig=function(n){return"number"==typeof(n=a({},this.constructor.Default,e(this.element).data(),"object"==typeof n&&n?n:{})).delay&&(n.delay={show:n.delay,hide:n.delay}),"number"==typeof n.title&&(n.title=n.title.toString()),"number"==typeof n.content&&(n.content=n.content.toString()),s.typeCheckConfig(t,n,this.constructor.DefaultType),n},v._getDelegateConfig=function(){var e={};if(this.config)for(var t in this.config)this.constructor.Default[t]!==this.config[t]&&(e[t]=this.config[t]);return e},v._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(l);null!==n&&n.length>0&&t.removeClass(n.join(""))},v._handlePopperPlacementChange=function(e){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(e.placement))},v._fixTransition=function(){var t=this.getTipElement(),n=this.config.animation;null===t.getAttribute("x-placement")&&(e(t).removeClass(p.FADE),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},o._jQueryInterface=function(t){return this.each(function(){var n=e(this).data("bs.tooltip"),i="object"==typeof t&&t;if((n||!/dispose|hide/.test(t))&&(n||(n=new o(this,i),e(this).data("bs.tooltip",n)),"string"==typeof t)){if(void 0===n[t])throw new TypeError('No method named "'+t+'"');n[t]()}})},r(o,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return f}},{key:"NAME",get:function(){return t}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return h}},{key:"EVENT_KEY",get:function(){return i}},{key:"DefaultType",get:function(){return u}}]),o}();return e.fn[t]=v._jQueryInterface,e.fn[t].Constructor=v,e.fn[t].noConflict=function(){return e.fn[t]=o,v._jQueryInterface},v}(t),m=function(e){var t="popover",n=".bs.popover",i=e.fn[t],o=new RegExp("(^|\\s)bs-popover\\S+","g"),s=a({},p.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),l=a({},p.DefaultType,{content:"(string|element|function)"}),u={FADE:"fade",SHOW:"show"},c={TITLE:".popover-header",CONTENT:".popover-body"},f={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,INSERTED:"inserted"+n,CLICK:"click"+n,FOCUSIN:"focusin"+n,FOCUSOUT:"focusout"+n,MOUSEENTER:"mouseenter"+n,MOUSELEAVE:"mouseleave"+n},d=function(i){function a(){return i.apply(this,arguments)||this}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(a,i);var d=a.prototype;return d.isWithContent=function(){return this.getTitle()||this._getContent()},d.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-popover-"+t)},d.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},d.setContent=function(){var t=e(this.getTipElement());this.setElementContent(t.find(c.TITLE),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(t.find(c.CONTENT),n),t.removeClass(u.FADE+" "+u.SHOW)},d._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},d._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(o);null!==n&&n.length>0&&t.removeClass(n.join(""))},a._jQueryInterface=function(t){return this.each(function(){var n=e(this).data("bs.popover"),i="object"==typeof t?t:null;if((n||!/destroy|hide/.test(t))&&(n||(n=new a(this,i),e(this).data("bs.popover",n)),"string"==typeof t)){if(void 0===n[t])throw new TypeError('No method named "'+t+'"');n[t]()}})},r(a,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return s}},{key:"NAME",get:function(){return t}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return f}},{key:"EVENT_KEY",get:function(){return n}},{key:"DefaultType",get:function(){return l}}]),a}(p);return e.fn[t]=d._jQueryInterface,e.fn[t].Constructor=d,e.fn[t].noConflict=function(){return e.fn[t]=i,d._jQueryInterface},d}(t),g=function(e){var t="scrollspy",n=e.fn[t],i={offset:10,method:"auto",target:""},o={offset:"number",method:"string",target:"(string|element)"},l={ACTIVATE:"activate.bs.scrollspy",SCROLL:"scroll.bs.scrollspy",LOAD_DATA_API:"load.bs.scrollspy.data-api"},u={DROPDOWN_ITEM:"dropdown-item",DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active"},c={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},f={OFFSET:"offset",POSITION:"position"},d=function(){function n(t,n){var i=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+" "+c.NAV_LINKS+","+this._config.target+" "+c.LIST_ITEMS+","+this._config.target+" "+c.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on(l.SCROLL,function(e){return i._process(e)}),this.refresh(),this._process()}var d=n.prototype;return d.refresh=function(){var t=this,n=this._scrollElement===this._scrollElement.window?f.OFFSET:f.POSITION,i="auto"===this._config.method?n:this._config.method,r=i===f.POSITION?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();var o=e.makeArray(e(this._selector));o.map(function(t){var n,o=s.getSelectorFromElement(t);if(o&&(n=e(o)[0]),n){var a=n.getBoundingClientRect();if(a.width||a.height)return[e(n)[i]().top+r,o]}return null}).filter(function(e){return e}).sort(function(e,t){return e[0]-t[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},d.dispose=function(){e.removeData(this._element,"bs.scrollspy"),e(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},d._getConfig=function(n){if("string"!=typeof(n=a({},i,"object"==typeof n&&n?n:{})).target){var r=e(n.target).attr("id");r||(r=s.getUID(t),e(n.target).attr("id",r)),n.target="#"+r}return s.typeCheckConfig(t,n,o),n},d._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},d._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},d._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},d._process=function(){var e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;){var o=this._activeTarget!==this._targets[r]&&e>=this._offsets[r]&&(void 0===this._offsets[r+1]||e<this._offsets[r+1]);o&&this._activate(this._targets[r])}}},d._activate=function(t){this._activeTarget=t,this._clear();var n=this._selector.split(",");n=n.map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'});var i=e(n.join(","));i.hasClass(u.DROPDOWN_ITEM)?(i.closest(c.DROPDOWN).find(c.DROPDOWN_TOGGLE).addClass(u.ACTIVE),i.addClass(u.ACTIVE)):(i.addClass(u.ACTIVE),i.parents(c.NAV_LIST_GROUP).prev(c.NAV_LINKS+", "+c.LIST_ITEMS).addClass(u.ACTIVE),i.parents(c.NAV_LIST_GROUP).prev(c.NAV_ITEMS).children(c.NAV_LINKS).addClass(u.ACTIVE)),e(this._scrollElement).trigger(l.ACTIVATE,{relatedTarget:t})},d._clear=function(){e(this._selector).filter(c.ACTIVE).removeClass(u.ACTIVE)},n._jQueryInterface=function(t){return this.each(function(){var i=e(this).data("bs.scrollspy"),r="object"==typeof t&&t;if(i||(i=new n(this,r),e(this).data("bs.scrollspy",i)),"string"==typeof t){if(void 0===i[t])throw new TypeError('No method named "'+t+'"');i[t]()}})},r(n,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return i}}]),n}();return e(window).on(l.LOAD_DATA_API,function(){for(var t=e.makeArray(e(c.DATA_SPY)),n=t.length;n--;){var i=e(t[n]);d._jQueryInterface.call(i,i.data())}}),e.fn[t]=d._jQueryInterface,e.fn[t].Constructor=d,e.fn[t].noConflict=function(){return e.fn[t]=n,d._jQueryInterface},d}(t),v=function(e){var t=e.fn.tab,n={HIDE:"hide.bs.tab",HIDDEN:"hidden.bs.tab",SHOW:"show.bs.tab",SHOWN:"shown.bs.tab",CLICK_DATA_API:"click.bs.tab.data-api"},i={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",DISABLED:"disabled",FADE:"fade",SHOW:"show"},o={DROPDOWN:".dropdown",NAV_LIST_GROUP:".nav, .list-group",ACTIVE:".active",ACTIVE_UL:"> li > .active",DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"},a=function(){function t(e){this._element=e}var a=t.prototype;return a.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass(i.ACTIVE)||e(this._element).hasClass(i.DISABLED))){var r,a,l=e(this._element).closest(o.NAV_LIST_GROUP)[0],u=s.getSelectorFromElement(this._element);if(l){var c="UL"===l.nodeName?o.ACTIVE_UL:o.ACTIVE;a=(a=e.makeArray(e(l).find(c)))[a.length-1]}var f=e.Event(n.HIDE,{relatedTarget:this._element}),d=e.Event(n.SHOW,{relatedTarget:a});if(a&&e(a).trigger(f),e(this._element).trigger(d),!d.isDefaultPrevented()&&!f.isDefaultPrevented()){u&&(r=e(u)[0]),this._activate(this._element,l);var h=function(){var i=e.Event(n.HIDDEN,{relatedTarget:t._element}),r=e.Event(n.SHOWN,{relatedTarget:a});e(a).trigger(i),e(t._element).trigger(r)};r?this._activate(r,r.parentNode,h):h()}}},a.dispose=function(){e.removeData(this._element,"bs.tab"),this._element=null},a._activate=function(t,n,r){var a=this,l=("UL"===n.nodeName?e(n).find(o.ACTIVE_UL):e(n).children(o.ACTIVE))[0],u=r&&l&&e(l).hasClass(i.FADE),c=function(){return a._transitionComplete(t,l,r)};if(l&&u){var f=s.getTransitionDurationFromElement(l);e(l).one(s.TRANSITION_END,c).emulateTransitionEnd(f)}else c()},a._transitionComplete=function(t,n,r){if(n){e(n).removeClass(i.SHOW+" "+i.ACTIVE);var a=e(n.parentNode).find(o.DROPDOWN_ACTIVE_CHILD)[0];a&&e(a).removeClass(i.ACTIVE),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(e(t).addClass(i.ACTIVE),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),s.reflow(t),e(t).addClass(i.SHOW),t.parentNode&&e(t.parentNode).hasClass(i.DROPDOWN_MENU)){var l=e(t).closest(o.DROPDOWN)[0];l&&e(l).find(o.DROPDOWN_TOGGLE).addClass(i.ACTIVE),t.setAttribute("aria-expanded",!0)}r&&r()},t._jQueryInterface=function(n){return this.each(function(){var i=e(this),r=i.data("bs.tab");if(r||(r=new t(this),i.data("bs.tab",r)),"string"==typeof n){if(void 0===r[n])throw new TypeError('No method named "'+n+'"');r[n]()}})},r(t,null,[{key:"VERSION",get:function(){return"4.1.1"}}]),t}();return e(document).on(n.CLICK_DATA_API,o.DATA_TOGGLE,function(t){t.preventDefault(),a._jQueryInterface.call(e(this),"show")}),e.fn.tab=a._jQueryInterface,e.fn.tab.Constructor=a,e.fn.tab.noConflict=function(){return e.fn.tab=t,a._jQueryInterface},a}(t);(function(e){if(void 0===e)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")})(t),e.Util=s,e.Alert=l,e.Button=u,e.Carousel=c,e.Collapse=f,e.Dropdown=d,e.Modal=h,e.Popover=m,e.Scrollspy=g,e.Tab=v,e.Tooltip=p,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(16),n(15))},,function(e,t,n){}]);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  Drupal.Views = {};

  Drupal.Views.parseQueryString = function (query) {
    var args = {};
    var pos = query.indexOf('?');
    if (pos !== -1) {
      query = query.substring(pos + 1);
    }
    var pair = void 0;
    var pairs = query.split('&');
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i].split('=');

      if (pair[0] !== 'q' && pair[1]) {
        args[decodeURIComponent(pair[0].replace(/\+/g, ' '))] = decodeURIComponent(pair[1].replace(/\+/g, ' '));
      }
    }
    return args;
  };

  Drupal.Views.parseViewArgs = function (href, viewPath) {
    var returnObj = {};
    var path = Drupal.Views.getPath(href);

    var viewHref = Drupal.url(viewPath).substring(drupalSettings.path.baseUrl.length);

    if (viewHref && path.substring(0, viewHref.length + 1) === viewHref + '/') {
      returnObj.view_args = decodeURIComponent(path.substring(viewHref.length + 1, path.length));
      returnObj.view_path = path;
    }
    return returnObj;
  };

  Drupal.Views.pathPortion = function (href) {
    var protocol = window.location.protocol;
    if (href.substring(0, protocol.length) === protocol) {
      href = href.substring(href.indexOf('/', protocol.length + 2));
    }
    return href;
  };

  Drupal.Views.getPath = function (href) {
    href = Drupal.Views.pathPortion(href);
    href = href.substring(drupalSettings.path.baseUrl.length, href.length);

    if (href.substring(0, 3) === '?q=') {
      href = href.substring(3, href.length);
    }
    var chars = ['#', '?', '&'];
    for (var i = 0; i < chars.length; i++) {
      if (href.indexOf(chars[i]) > -1) {
        href = href.substr(0, href.indexOf(chars[i]));
      }
    }
    return href;
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.ViewsAjaxView = {};
  Drupal.behaviors.ViewsAjaxView.attach = function (context, settings) {
    if (settings && settings.views && settings.views.ajaxViews) {
      var ajaxViews = settings.views.ajaxViews;

      Object.keys(ajaxViews || {}).forEach(function (i) {
        Drupal.views.instances[i] = new Drupal.views.ajaxView(ajaxViews[i]);
      });
    }
  };
  Drupal.behaviors.ViewsAjaxView.detach = function (context, settings, trigger) {
    if (trigger === 'unload') {
      if (settings && settings.views && settings.views.ajaxViews) {
        var ajaxViews = settings.views.ajaxViews;

        Object.keys(ajaxViews || {}).forEach(function (i) {
          var selector = '.js-view-dom-id-' + ajaxViews[i].view_dom_id;
          if ($(selector, context).length) {
            delete Drupal.views.instances[i];
            delete settings.views.ajaxViews[i];
          }
        });
      }
    }
  };

  Drupal.views = {};

  Drupal.views.instances = {};

  Drupal.views.ajaxView = function (settings) {
    var selector = '.js-view-dom-id-' + settings.view_dom_id;
    this.$view = $(selector);

    var ajaxPath = drupalSettings.views.ajax_path;

    if (ajaxPath.constructor.toString().indexOf('Array') !== -1) {
      ajaxPath = ajaxPath[0];
    }

    var queryString = window.location.search || '';
    if (queryString !== '') {
      queryString = queryString.slice(1).replace(/q=[^&]+&?|&?render=[^&]+/, '');
      if (queryString !== '') {
        queryString = (/\?/.test(ajaxPath) ? '&' : '?') + queryString;
      }
    }

    this.element_settings = {
      url: ajaxPath + queryString,
      submit: settings,
      setClick: true,
      event: 'click',
      selector: selector,
      progress: { type: 'fullscreen' }
    };

    this.settings = settings;

    this.$exposed_form = $('form#views-exposed-form-' + settings.view_name.replace(/_/g, '-') + '-' + settings.view_display_id.replace(/_/g, '-'));
    this.$exposed_form.once('exposed-form').each($.proxy(this.attachExposedFormAjax, this));

    this.$view.filter($.proxy(this.filterNestedViews, this)).once('ajax-pager').each($.proxy(this.attachPagerAjax, this));

    var selfSettings = $.extend({}, this.element_settings, {
      event: 'RefreshView',
      base: this.selector,
      element: this.$view.get(0)
    });
    this.refreshViewAjax = Drupal.ajax(selfSettings);
  };

  Drupal.views.ajaxView.prototype.attachExposedFormAjax = function () {
    var that = this;
    this.exposedFormAjax = [];

    $('input[type=submit], input[type=image]', this.$exposed_form).not('[data-drupal-selector=edit-reset]').each(function (index) {
      var selfSettings = $.extend({}, that.element_settings, {
        base: $(this).attr('id'),
        element: this
      });
      that.exposedFormAjax[index] = Drupal.ajax(selfSettings);
    });
  };

  Drupal.views.ajaxView.prototype.filterNestedViews = function () {
    return !this.$view.parents('.view').length;
  };

  Drupal.views.ajaxView.prototype.attachPagerAjax = function () {
    this.$view.find('ul.js-pager__items > li > a, th.views-field a, .attachment .views-summary a').each($.proxy(this.attachPagerLinkAjax, this));
  };

  Drupal.views.ajaxView.prototype.attachPagerLinkAjax = function (id, link) {
    var $link = $(link);
    var viewData = {};
    var href = $link.attr('href');

    $.extend(viewData, this.settings, Drupal.Views.parseQueryString(href), Drupal.Views.parseViewArgs(href, this.settings.view_base_path));

    var selfSettings = $.extend({}, this.element_settings, {
      submit: viewData,
      base: false,
      element: link
    });
    this.pagerAjax = Drupal.ajax(selfSettings);
  };

  Drupal.AjaxCommands.prototype.viewsScrollTop = function (ajax, response) {
    var offset = $(response.selector).offset();

    var scrollTarget = response.selector;
    while ($(scrollTarget).scrollTop() === 0 && $(scrollTarget).parent()) {
      scrollTarget = $(scrollTarget).parent();
    }

    if (offset.top - 10 < $(scrollTarget).scrollTop()) {
      $(scrollTarget).animate({ scrollTop: offset.top - 10 }, 500);
    }
  };
})(jQuery, Drupal, drupalSettings);;
;(function ($, Drupal) {
  Drupal.behaviors.opignoViewPrivateMessage = {
    attach: function (context, settings) {
      var $rows = $('.view-private-message .views-row', context);

      // Redirects to thread if user clicks on thread block.
      $rows.once('click').click(function(e) {
        e.preventDefault();

        var $thread = $(this).find('.private-message-thread');

        if (!$thread.length) {
          return false;
        }

        var id = $thread.attr('data-thread-id');
        window.location = '/private_messages/' + id;

        return false;
      });
    },
  };

  // Fixes multiselect issue 2123241.
  if (Drupal.behaviors.multiSelect
      && !Drupal.behaviors.multiSelect.detach
  ) {
    Drupal.behaviors.multiSelect.detach = function (context, settings, trigger) {
      if (trigger === 'serialize') {
        $('select.multiselect-selected').selectAll();
      }
    };
  }
}(jQuery, Drupal));
;
;(function ($, Drupal) {
  Drupal.behaviors.opignoNotificationView = {
    attach: function (context, settings) {
      var $readAll = $('#read-all-notifications', context);
      var $notifications = $('.notification', context);
      var $unreadCount = $('#site-header #header-right .user-notifications a .unread');
      var $viewNotifications = $('header#site-header .user-notifications .view-opigno-notifications .views-row');
      // var $markReadTrigger = $('header#site-header .user-notifications #read-all-notifications');

      // Mark all notifications as read.
      $readAll.once('click').click(function(e) {
        e.preventDefault();

        $('.user-notifications')
          .removeClass('show')
          .children('.dropdown-menu')
          .removeClass('show');

        $.ajax({
          url: '/ajax/notifications/mark-read-all',
          success: function() {
            $unreadCount.text(0);
            $viewNotifications.remove();
            // $markReadTrigger.remove();
          },
        });

        return false;
      });

      // Mark a notification as read on click.
      $notifications.once('click').click(function(e) {
        e.preventDefault();

        var id = $(this).attr('data-id');
        $(this).closest('.views-row').remove();

        $.ajax({
          url: '/ajax/notifications/mark-read/' + id,
          success: function() {
            if ($unreadCount.length && $unreadCount.text() !== 0) {
              $unreadCount.text($unreadCount.text() - 1);
            }
          }
        });

        return false;
      });
    },
  };
}(jQuery, Drupal));
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, debounce) {
  var liveElement = void 0;
  var announcements = [];

  Drupal.behaviors.drupalAnnounce = {
    attach: function attach(context) {
      if (!liveElement) {
        liveElement = document.createElement('div');
        liveElement.id = 'drupal-live-announce';
        liveElement.className = 'visually-hidden';
        liveElement.setAttribute('aria-live', 'polite');
        liveElement.setAttribute('aria-busy', 'false');
        document.body.appendChild(liveElement);
      }
    }
  };

  function announce() {
    var text = [];
    var priority = 'polite';
    var announcement = void 0;

    var il = announcements.length;
    for (var i = 0; i < il; i++) {
      announcement = announcements.pop();
      text.unshift(announcement.text);

      if (announcement.priority === 'assertive') {
        priority = 'assertive';
      }
    }

    if (text.length) {
      liveElement.innerHTML = '';

      liveElement.setAttribute('aria-busy', 'true');

      liveElement.setAttribute('aria-live', priority);

      liveElement.innerHTML = text.join('\n');

      liveElement.setAttribute('aria-busy', 'false');
    }
  }

  Drupal.announce = function (text, priority) {
    announcements.push({
      text: text,
      priority: priority
    });

    return debounce(announce, 200)();
  };
})(Drupal, Drupal.debounce);;
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;t.type="text/css";t.id="matchmediajs-test";i.parentNode.insertBefore(t,i);n="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle;e={matchMedium:function(e){var i="@media "+e+"{ #matchmediajs-test { width: 1px; } }";if(t.styleSheet){t.styleSheet.cssText=i}else{t.textContent=i}return n.width==="1px"}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}());
;
(function(){if(window.matchMedia&&window.matchMedia("all").addListener){return false}var e=window.matchMedia,i=e("only all").matches,n=false,t=0,a=[],r=function(i){clearTimeout(t);t=setTimeout(function(){for(var i=0,n=a.length;i<n;i++){var t=a[i].mql,r=a[i].listeners||[],o=e(t.media).matches;if(o!==t.matches){t.matches=o;for(var s=0,l=r.length;s<l;s++){r[s].call(window,t)}}}},30)};window.matchMedia=function(t){var o=e(t),s=[],l=0;o.addListener=function(e){if(!i){return}if(!n){n=true;window.addEventListener("resize",r,true)}if(l===0){l=a.push({mql:o,listeners:s})}s.push(e)};o.removeListener=function(e){for(var i=0,n=s.length;i<n;i++){if(s[i]===e){s.splice(i,1)}}};return o}})();
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var activeItem = Drupal.url(drupalSettings.path.currentPath);

  $.fn.drupalToolbarMenu = function () {
    var ui = {
      handleOpen: Drupal.t('Extend'),
      handleClose: Drupal.t('Collapse')
    };

    function toggleList($item, switcher) {
      var $toggle = $item.children('.toolbar-box').children('.toolbar-handle');
      switcher = typeof switcher !== 'undefined' ? switcher : !$item.hasClass('open');

      $item.toggleClass('open', switcher);

      $toggle.toggleClass('open', switcher);

      $toggle.find('.action').text(switcher ? ui.handleClose : ui.handleOpen);
    }

    function toggleClickHandler(event) {
      var $toggle = $(event.target);
      var $item = $toggle.closest('li');

      toggleList($item);

      var $openItems = $item.siblings().filter('.open');
      toggleList($openItems, false);
    }

    function linkClickHandler(event) {
      if (!Drupal.toolbar.models.toolbarModel.get('isFixed')) {
        Drupal.toolbar.models.toolbarModel.set('activeTab', null);
      }

      event.stopPropagation();
    }

    function initItems($menu) {
      var options = {
        class: 'toolbar-icon toolbar-handle',
        action: ui.handleOpen,
        text: ''
      };

      $menu.find('li > a').wrap('<div class="toolbar-box">');

      $menu.find('li').each(function (index, element) {
        var $item = $(element);
        if ($item.children('ul.toolbar-menu').length) {
          var $box = $item.children('.toolbar-box');
          options.text = Drupal.t('@label', {
            '@label': $box.find('a').text()
          });
          $item.children('.toolbar-box').append(Drupal.theme('toolbarMenuItemToggle', options));
        }
      });
    }

    function markListLevels($lists, level) {
      level = !level ? 1 : level;
      var $lis = $lists.children('li').addClass('level-' + level);
      $lists = $lis.children('ul');
      if ($lists.length) {
        markListLevels($lists, level + 1);
      }
    }

    function openActiveItem($menu) {
      var pathItem = $menu.find('a[href="' + window.location.pathname + '"]');
      if (pathItem.length && !activeItem) {
        activeItem = window.location.pathname;
      }
      if (activeItem) {
        var $activeItem = $menu.find('a[href="' + activeItem + '"]').addClass('menu-item--active');
        var $activeTrail = $activeItem.parentsUntil('.root', 'li').addClass('menu-item--active-trail');
        toggleList($activeTrail, true);
      }
    }

    return this.each(function (selector) {
      var $menu = $(this).once('toolbar-menu');
      if ($menu.length) {
        $menu.on('click.toolbar', '.toolbar-box', toggleClickHandler).on('click.toolbar', '.toolbar-box a', linkClickHandler);

        $menu.addClass('root');
        initItems($menu);
        markListLevels($menu);

        openActiveItem($menu);
      }
    });
  };

  Drupal.theme.toolbarMenuItemToggle = function (options) {
    return '<button class="' + options.class + '"><span class="action">' + options.action + '</span> <span class="label">' + options.text + '</span></button>';
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var options = $.extend({
    breakpoints: {
      'toolbar.narrow': '',
      'toolbar.standard': '',
      'toolbar.wide': ''
    }
  }, drupalSettings.toolbar, {
    strings: {
      horizontal: Drupal.t('Horizontal orientation'),
      vertical: Drupal.t('Vertical orientation')
    }
  });

  Drupal.behaviors.toolbar = {
    attach: function attach(context) {
      if (!window.matchMedia('only screen').matches) {
        return;
      }

      $(context).find('#toolbar-administration').once('toolbar').each(function () {
        var model = new Drupal.toolbar.ToolbarModel({
          locked: JSON.parse(localStorage.getItem('Drupal.toolbar.trayVerticalLocked')),
          activeTab: document.getElementById(JSON.parse(localStorage.getItem('Drupal.toolbar.activeTabID'))),
          height: $('#toolbar-administration').outerHeight()
        });

        Drupal.toolbar.models.toolbarModel = model;

        Object.keys(options.breakpoints).forEach(function (label) {
          var mq = options.breakpoints[label];
          var mql = window.matchMedia(mq);
          Drupal.toolbar.mql[label] = mql;

          mql.addListener(Drupal.toolbar.mediaQueryChangeHandler.bind(null, model, label));

          Drupal.toolbar.mediaQueryChangeHandler.call(null, model, label, mql);
        });

        Drupal.toolbar.views.toolbarVisualView = new Drupal.toolbar.ToolbarVisualView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.toolbarAuralView = new Drupal.toolbar.ToolbarAuralView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.bodyVisualView = new Drupal.toolbar.BodyVisualView({
          el: this,
          model: model
        });

        model.trigger('change:isFixed', model, model.get('isFixed'));
        model.trigger('change:activeTray', model, model.get('activeTray'));

        var menuModel = new Drupal.toolbar.MenuModel();
        Drupal.toolbar.models.menuModel = menuModel;
        Drupal.toolbar.views.menuVisualView = new Drupal.toolbar.MenuVisualView({
          el: $(this).find('.toolbar-menu-administration').get(0),
          model: menuModel,
          strings: options.strings
        });

        Drupal.toolbar.setSubtrees.done(function (subtrees) {
          menuModel.set('subtrees', subtrees);
          var theme = drupalSettings.ajaxPageState.theme;
          localStorage.setItem('Drupal.toolbar.subtrees.' + theme, JSON.stringify(subtrees));

          model.set('areSubtreesLoaded', true);
        });

        Drupal.toolbar.views.toolbarVisualView.loadSubtrees();

        $(document).on('drupalViewportOffsetChange.toolbar', function (event, offsets) {
          model.set('offsets', offsets);
        });

        model.on('change:orientation', function (model, orientation) {
          $(document).trigger('drupalToolbarOrientationChange', orientation);
        }).on('change:activeTab', function (model, tab) {
          $(document).trigger('drupalToolbarTabChange', tab);
        }).on('change:activeTray', function (model, tray) {
          $(document).trigger('drupalToolbarTrayChange', tray);
        });

        if (Drupal.toolbar.models.toolbarModel.get('orientation') === 'horizontal' && Drupal.toolbar.models.toolbarModel.get('activeTab') === null) {
          Drupal.toolbar.models.toolbarModel.set({
            activeTab: $('.toolbar-bar .toolbar-tab:not(.home-toolbar-tab) a').get(0)
          });
        }

        $(window).on({
          'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
            var $toolbar = $('#toolbar-bar');
            $toolbar.css('margin-top', '0');

            if (settings.drupalOffCanvasPosition === 'top') {
              var height = Drupal.offCanvas.getContainer($element).outerHeight();
              $toolbar.css('margin-top', height + 'px');

              $element.on('dialogContentResize.off-canvas', function () {
                var newHeight = Drupal.offCanvas.getContainer($element).outerHeight();
                $toolbar.css('margin-top', newHeight + 'px');
              });
            }
          },
          'dialog:beforeclose': function dialogBeforeclose() {
            $('#toolbar-bar').css('margin-top', '0');
          }
        });
      });
    }
  };

  Drupal.toolbar = {
    views: {},

    models: {},

    mql: {},

    setSubtrees: new $.Deferred(),

    mediaQueryChangeHandler: function mediaQueryChangeHandler(model, label, mql) {
      switch (label) {
        case 'toolbar.narrow':
          model.set({
            isOriented: mql.matches,
            isTrayToggleVisible: false
          });

          if (!mql.matches || !model.get('orientation')) {
            model.set({ orientation: 'vertical' }, { validate: true });
          }
          break;

        case 'toolbar.standard':
          model.set({
            isFixed: mql.matches
          });
          break;

        case 'toolbar.wide':
          model.set({
            orientation: mql.matches && !model.get('locked') ? 'horizontal' : 'vertical'
          }, { validate: true });

          model.set({
            isTrayToggleVisible: mql.matches
          });
          break;

        default:
          break;
      }
    }
  };

  Drupal.theme.toolbarOrientationToggle = function () {
    return '<div class="toolbar-toggle-orientation"><div class="toolbar-lining">' + '<button class="toolbar-icon" type="button"></button>' + '</div></div>';
  };

  Drupal.AjaxCommands.prototype.setToolbarSubtrees = function (ajax, response, status) {
    Drupal.toolbar.setSubtrees.resolve(response.subtrees);
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.MenuModel = Backbone.Model.extend({
    defaults: {
      subtrees: {}
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarModel = Backbone.Model.extend({
    defaults: {
      activeTab: null,

      activeTray: null,

      isOriented: false,

      isFixed: false,

      areSubtreesLoaded: false,

      isViewportOverflowConstrained: false,

      orientation: 'horizontal',

      locked: false,

      isTrayToggleVisible: true,

      height: null,

      offsets: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },

    validate: function validate(attributes, options) {
      if (attributes.orientation === 'horizontal' && this.get('locked') && !options.override) {
        return Drupal.t('The toolbar cannot be set to a horizontal orientation when it is locked.');
      }
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone) {
  Drupal.toolbar.BodyVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:activeTray ', this.render);
      this.listenTo(this.model, 'change:isFixed change:isViewportOverflowConstrained', this.isToolbarFixed);
    },
    isToolbarFixed: function isToolbarFixed() {
      var isViewportOverflowConstrained = this.model.get('isViewportOverflowConstrained');
      $('body').toggleClass('toolbar-fixed', isViewportOverflowConstrained || this.model.get('isFixed'));
    },
    render: function render() {
      $('body').toggleClass('toolbar-tray-open', !!this.model.get('activeTray'));
    }
  });
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.toolbar.MenuVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:subtrees', this.render);
    },
    render: function render() {
      var _this = this;

      var subtrees = this.model.get('subtrees');

      Object.keys(subtrees || {}).forEach(function (id) {
        _this.$el.find('#toolbar-link-' + id).once('toolbar-subtrees').after(subtrees[id]);
      });

      if ('drupalToolbarMenu' in $.fn) {
        this.$el.children('.toolbar-menu').drupalToolbarMenu();
      }
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarAuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.strings = options.strings;

      this.listenTo(this.model, 'change:orientation', this.onOrientationChange);
      this.listenTo(this.model, 'change:activeTray', this.onActiveTrayChange);
    },
    onOrientationChange: function onOrientationChange(model, orientation) {
      Drupal.announce(Drupal.t('Tray orientation changed to @orientation.', {
        '@orientation': orientation
      }));
    },
    onActiveTrayChange: function onActiveTrayChange(model, tray) {
      var relevantTray = tray === null ? model.previous('activeTray') : tray;

      if (!relevantTray) {
        return;
      }
      var action = tray === null ? Drupal.t('closed') : Drupal.t('opened');
      var trayNameElement = relevantTray.querySelector('.toolbar-tray-name');
      var text = void 0;
      if (trayNameElement !== null) {
        text = Drupal.t('Tray "@tray" @action.', {
          '@tray': trayNameElement.textContent,
          '@action': action
        });
      } else {
        text = Drupal.t('Tray @action.', { '@action': action });
      }
      Drupal.announce(text);
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, Backbone) {
  Drupal.toolbar.ToolbarVisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        'click .toolbar-bar .toolbar-tab .trigger': 'onTabClick',
        'click .toolbar-toggle-orientation button': 'onOrientationToggleClick',
        'touchend .toolbar-bar .toolbar-tab .trigger': touchEndToClick,
        'touchend .toolbar-toggle-orientation button': touchEndToClick
      };
    },
    initialize: function initialize(options) {
      this.strings = options.strings;

      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented change:isTrayToggleVisible', this.render);
      this.listenTo(this.model, 'change:mqMatches', this.onMediaQueryChange);
      this.listenTo(this.model, 'change:offsets', this.adjustPlacement);
      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented', this.updateToolbarHeight);

      this.$el.find('.toolbar-tray .toolbar-lining').append(Drupal.theme('toolbarOrientationToggle'));

      this.model.trigger('change:activeTab');
    },
    updateToolbarHeight: function updateToolbarHeight() {
      var toolbarTabOuterHeight = $('#toolbar-bar').find('.toolbar-tab').outerHeight() || 0;
      var toolbarTrayHorizontalOuterHeight = $('.is-active.toolbar-tray-horizontal').outerHeight() || 0;
      this.model.set('height', toolbarTabOuterHeight + toolbarTrayHorizontalOuterHeight);

      $('body').css({
        'padding-top': this.model.get('height')
      });

      this.triggerDisplace();
    },
    triggerDisplace: function triggerDisplace() {
      _.defer(function () {
        Drupal.displace(true);
      });
    },
    render: function render() {
      this.updateTabs();
      this.updateTrayOrientation();
      this.updateBarAttributes();

      $('body').removeClass('toolbar-loading');

      if (this.model.changed.orientation === 'vertical' || this.model.changed.activeTab) {
        this.loadSubtrees();
      }

      return this;
    },
    onTabClick: function onTabClick(event) {
      if (event.target.hasAttribute('data-toolbar-tray')) {
        var activeTab = this.model.get('activeTab');
        var clickedTab = event.target;

        this.model.set('activeTab', !activeTab || clickedTab !== activeTab ? clickedTab : null);

        event.preventDefault();
        event.stopPropagation();
      }
    },
    onOrientationToggleClick: function onOrientationToggleClick(event) {
      var orientation = this.model.get('orientation');

      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      var locked = antiOrientation === 'vertical';

      if (locked) {
        localStorage.setItem('Drupal.toolbar.trayVerticalLocked', 'true');
      } else {
        localStorage.removeItem('Drupal.toolbar.trayVerticalLocked');
      }

      this.model.set({
        locked: locked,
        orientation: antiOrientation
      }, {
        validate: true,
        override: true
      });

      event.preventDefault();
      event.stopPropagation();
    },
    updateTabs: function updateTabs() {
      var $tab = $(this.model.get('activeTab'));

      $(this.model.previous('activeTab')).removeClass('is-active').prop('aria-pressed', false);

      $(this.model.previous('activeTray')).removeClass('is-active');

      if ($tab.length > 0) {
        $tab.addClass('is-active').prop('aria-pressed', true);
        var name = $tab.attr('data-toolbar-tray');

        var id = $tab.get(0).id;
        if (id) {
          localStorage.setItem('Drupal.toolbar.activeTabID', JSON.stringify(id));
        }

        var $tray = this.$el.find('[data-toolbar-tray="' + name + '"].toolbar-tray');
        if ($tray.length) {
          $tray.addClass('is-active');
          this.model.set('activeTray', $tray.get(0));
        } else {
          this.model.set('activeTray', null);
        }
      } else {
        this.model.set('activeTray', null);
        localStorage.removeItem('Drupal.toolbar.activeTabID');
      }
    },
    updateBarAttributes: function updateBarAttributes() {
      var isOriented = this.model.get('isOriented');
      if (isOriented) {
        this.$el.find('.toolbar-bar').attr('data-offset-top', '');
      } else {
        this.$el.find('.toolbar-bar').removeAttr('data-offset-top');
      }

      this.$el.toggleClass('toolbar-oriented', isOriented);
    },
    updateTrayOrientation: function updateTrayOrientation() {
      var orientation = this.model.get('orientation');

      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';

      $('body').toggleClass('toolbar-vertical', orientation === 'vertical').toggleClass('toolbar-horizontal', orientation === 'horizontal');

      var removeClass = antiOrientation === 'horizontal' ? 'toolbar-tray-horizontal' : 'toolbar-tray-vertical';
      var $trays = this.$el.find('.toolbar-tray').removeClass(removeClass).addClass('toolbar-tray-' + orientation);

      var iconClass = 'toolbar-icon-toggle-' + orientation;
      var iconAntiClass = 'toolbar-icon-toggle-' + antiOrientation;
      var $orientationToggle = this.$el.find('.toolbar-toggle-orientation').toggle(this.model.get('isTrayToggleVisible'));
      $orientationToggle.find('button').val(antiOrientation).attr('title', this.strings[antiOrientation]).text(this.strings[antiOrientation]).removeClass(iconClass).addClass(iconAntiClass);

      var dir = document.documentElement.dir;
      var edge = dir === 'rtl' ? 'right' : 'left';

      $trays.removeAttr('data-offset-left data-offset-right data-offset-top');

      $trays.filter('.toolbar-tray-vertical.is-active').attr('data-offset-' + edge, '');

      $trays.filter('.toolbar-tray-horizontal.is-active').attr('data-offset-top', '');
    },
    adjustPlacement: function adjustPlacement() {
      var $trays = this.$el.find('.toolbar-tray');
      if (!this.model.get('isOriented')) {
        $trays.removeClass('toolbar-tray-horizontal').addClass('toolbar-tray-vertical');
      }
    },
    loadSubtrees: function loadSubtrees() {
      var $activeTab = $(this.model.get('activeTab'));
      var orientation = this.model.get('orientation');

      if (!this.model.get('areSubtreesLoaded') && typeof $activeTab.data('drupal-subtrees') !== 'undefined' && orientation === 'vertical') {
        var subtreesHash = drupalSettings.toolbar.subtreesHash;
        var theme = drupalSettings.ajaxPageState.theme;
        var endpoint = Drupal.url('toolbar/subtrees/' + subtreesHash);
        var cachedSubtreesHash = localStorage.getItem('Drupal.toolbar.subtreesHash.' + theme);
        var cachedSubtrees = JSON.parse(localStorage.getItem('Drupal.toolbar.subtrees.' + theme));
        var isVertical = this.model.get('orientation') === 'vertical';

        if (isVertical && subtreesHash === cachedSubtreesHash && cachedSubtrees) {
          Drupal.toolbar.setSubtrees.resolve(cachedSubtrees);
        } else if (isVertical) {
            localStorage.removeItem('Drupal.toolbar.subtreesHash.' + theme);
            localStorage.removeItem('Drupal.toolbar.subtrees.' + theme);

            Drupal.ajax({ url: endpoint }).execute();

            localStorage.setItem('Drupal.toolbar.subtreesHash.' + theme, subtreesHash);
          }
      }
    }
  });
})(jQuery, Drupal, drupalSettings, Backbone);;
  /*
 * jQuery Foundation Joyride Plugin 2.1
 * http://foundation.zurb.com
 * Copyright 2013, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

/*jslint unparam: true, browser: true, indent: 2 */

;(function ($, window, undefined) {
  'use strict';

  var defaults = {
      'version'              : '2.1',
      'tipLocation'          : 'bottom',  // 'top' or 'bottom' in relation to parent
      'nubPosition'          : 'auto',    // override on a per tooltip bases
      'scroll'               : true,      // whether to scroll to tips
      'scrollSpeed'          : 300,       // Page scrolling speed in milliseconds
      'timer'                : 0,         // 0 = no timer , all other numbers = timer in milliseconds
      'autoStart'            : false,     // true or false - false tour starts when restart called
      'startTimerOnClick'    : true,      // true or false - true requires clicking the first button start the timer
      'startOffset'          : 0,         // the index of the tooltip you want to start on (index of the li)
      'nextButton'           : true,      // true or false to control whether a next button is used
      'tipAnimation'         : 'fade',    // 'pop' or 'fade' in each tip
      'pauseAfter'           : [],        // array of indexes where to pause the tour after
      'tipAnimationFadeSpeed': 300,       // when tipAnimation = 'fade' this is speed in milliseconds for the transition
      'cookieMonster'        : false,     // true or false to control whether cookies are used
      'cookieName'           : 'joyride', // Name the cookie you'll use
      'cookieDomain'         : false,     // Will this cookie be attached to a domain, ie. '.notableapp.com'
      'cookiePath'           : false,     // Set to '/' if you want the cookie for the whole website
      'localStorage'         : false,     // true or false to control whether localstorage is used
      'localStorageKey'      : 'joyride', // Keyname in localstorage
      'tipContainer'         : 'body',    // Where will the tip be attached
      'modal'                : false,     // Whether to cover page with modal during the tour
      'expose'               : false,     // Whether to expose the elements at each step in the tour (requires modal:true)
      'postExposeCallback'   : $.noop,    // A method to call after an element has been exposed
      'preRideCallback'      : $.noop,    // A method to call before the tour starts (passed index, tip, and cloned exposed element)
      'postRideCallback'     : $.noop,    // A method to call once the tour closes (canceled or complete)
      'preStepCallback'      : $.noop,    // A method to call before each step
      'postStepCallback'     : $.noop,    // A method to call after each step
      'template' : { // HTML segments for tip layout
        'link'    : '<a href="#close" class="joyride-close-tip">X</a>',
        'timer'   : '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
        'tip'     : '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
        'wrapper' : '<div class="joyride-content-wrapper" role="dialog"></div>',
        'button'  : '<a href="#" class="joyride-next-tip"></a>',
        'modal'   : '<div class="joyride-modal-bg"></div>',
        'expose'  : '<div class="joyride-expose-wrapper"></div>',
        'exposeCover': '<div class="joyride-expose-cover"></div>'
      }
    },

    Modernizr = Modernizr || false,

    settings = {},

    methods = {

      init : function (opts) {
        return this.each(function () {

          if ($.isEmptyObject(settings)) {
            settings = $.extend(true, defaults, opts);

            // non configurable settings
            settings.document = window.document;
            settings.$document = $(settings.document);
            settings.$window = $(window);
            settings.$content_el = $(this);
            settings.$body = $(settings.tipContainer);
            settings.body_offset = $(settings.tipContainer).position();
            settings.$tip_content = $('> li', settings.$content_el);
            settings.paused = false;
            settings.attempts = 0;

            settings.tipLocationPatterns = {
              top: ['bottom'],
              bottom: [], // bottom should not need to be repositioned
              left: ['right', 'top', 'bottom'],
              right: ['left', 'top', 'bottom']
            };

            // are we using jQuery 1.7+
            methods.jquery_check();

            // can we create cookies?
            if (!$.isFunction($.cookie)) {
              settings.cookieMonster = false;
            }

            // generate the tips and insert into dom.
            if ( (!settings.cookieMonster || !$.cookie(settings.cookieName) ) &&
              (!settings.localStorage || !methods.support_localstorage() || !localStorage.getItem(settings.localStorageKey) ) ) {

              settings.$tip_content.each(function (index) {
                methods.create({$li : $(this), index : index});
              });

              // show first tip
              if(settings.autoStart)
              {
                if (!settings.startTimerOnClick && settings.timer > 0) {
                  methods.show('init');
                  methods.startTimer();
                } else {
                  methods.show('init');
                }
              }

            }

            settings.$document.on('click.joyride', '.joyride-next-tip, .joyride-modal-bg', function (e) {
              e.preventDefault();

              if (settings.$li.next().length < 1) {
                methods.end();
              } else if (settings.timer > 0) {
                clearTimeout(settings.automate);
                methods.hide();
                methods.show();
                methods.startTimer();
              } else {
                methods.hide();
                methods.show();
              }

            });

            settings.$document.on('click.joyride', '.joyride-close-tip', function (e) {
              e.preventDefault();
              methods.end(true /* isAborted */);
            });

            settings.$window.on('resize.joyride', function (e) {
              if(settings.$li){
              if(settings.exposed && settings.exposed.length>0){
                var $els = $(settings.exposed);
                $els.each(function(){
                  var $this = $(this);
                  methods.un_expose($this);
                  methods.expose($this);
                });
              }
              if (methods.is_phone()) {
                methods.pos_phone();
              } else {
                methods.pos_default();
              }
              }
            });
          } else {
            methods.restart();
          }

        });
      },

      // call this method when you want to resume the tour
      resume : function () {
        methods.set_li();
        methods.show();
      },

      nextTip: function(){
            if (settings.$li.next().length < 1) {
            methods.end();
            } else if (settings.timer > 0) {
            clearTimeout(settings.automate);
            methods.hide();
            methods.show();
            methods.startTimer();
            } else {
            methods.hide();
            methods.show();
            }
      },

      tip_template : function (opts) {
        var $blank, content, $wrapper;

        opts.tip_class = opts.tip_class || '';

        $blank = $(settings.template.tip).addClass(opts.tip_class);
        content = $.trim($(opts.li).html()) +
          methods.button_text(opts.button_text) +
          settings.template.link +
          methods.timer_instance(opts.index);

        $wrapper = $(settings.template.wrapper);
        if (opts.li.attr('data-aria-labelledby')) {
          $wrapper.attr('aria-labelledby', opts.li.attr('data-aria-labelledby'))
        }
        if (opts.li.attr('data-aria-describedby')) {
          $wrapper.attr('aria-describedby', opts.li.attr('data-aria-describedby'))
        }
        $blank.append($wrapper);
        $blank.first().attr('data-index', opts.index);
        $('.joyride-content-wrapper', $blank).append(content);

        return $blank[0];
      },

      timer_instance : function (index) {
        var txt;

        if ((index === 0 && settings.startTimerOnClick && settings.timer > 0) || settings.timer === 0) {
          txt = '';
        } else {
          txt = methods.outerHTML($(settings.template.timer)[0]);
        }
        return txt;
      },

      button_text : function (txt) {
        if (settings.nextButton) {
          txt = $.trim(txt) || 'Next';
          txt = methods.outerHTML($(settings.template.button).append(txt)[0]);
        } else {
          txt = '';
        }
        return txt;
      },

      create : function (opts) {
        // backwards compatibility with data-text attribute
        var buttonText = opts.$li.attr('data-button') || opts.$li.attr('data-text'),
          tipClass = opts.$li.attr('class'),
          $tip_content = $(methods.tip_template({
            tip_class : tipClass,
            index : opts.index,
            button_text : buttonText,
            li : opts.$li
          }));

        $(settings.tipContainer).append($tip_content);
      },

      show : function (init) {
        var opts = {}, ii, opts_arr = [], opts_len = 0, p,
            $timer = null;

        // are we paused?
        if (settings.$li === undefined || ($.inArray(settings.$li.index(), settings.pauseAfter) === -1)) {

          // don't go to the next li if the tour was paused
          if (settings.paused) {
            settings.paused = false;
          } else {
            methods.set_li(init);
          }

          settings.attempts = 0;

          if (settings.$li.length && settings.$target.length > 0) {
            if(init){ //run when we first start
                settings.preRideCallback(settings.$li.index(), settings.$next_tip );
                if(settings.modal){
                    methods.show_modal();
                }
            }
            settings.preStepCallback(settings.$li.index(), settings.$next_tip );

            // parse options
            opts_arr = (settings.$li.data('options') || ':').split(';');
            opts_len = opts_arr.length;
            for (ii = opts_len - 1; ii >= 0; ii--) {
              p = opts_arr[ii].split(':');

              if (p.length === 2) {
                opts[$.trim(p[0])] = $.trim(p[1]);
              }
            }
            settings.tipSettings = $.extend({}, settings, opts);
            settings.tipSettings.tipLocationPattern = settings.tipLocationPatterns[settings.tipSettings.tipLocation];

            if(settings.modal && settings.expose){
              methods.expose();
            }

            // scroll if not modal
            if (!settings.$target.is("body") && settings.scroll) {
              methods.scroll_to();
            }

            if (methods.is_phone()) {
              methods.pos_phone(true);
            } else {
              methods.pos_default(true);
            }

            $timer = $('.joyride-timer-indicator', settings.$next_tip);

            if (/pop/i.test(settings.tipAnimation)) {

              $timer.outerWidth(0);

              if (settings.timer > 0) {

                settings.$next_tip.show();
                $timer.animate({
                  width: $('.joyride-timer-indicator-wrap', settings.$next_tip).outerWidth()
                }, settings.timer);

              } else {

                settings.$next_tip.show();

              }


            } else if (/fade/i.test(settings.tipAnimation)) {

              $timer.outerWidth(0);

              if (settings.timer > 0) {

                settings.$next_tip.fadeIn(settings.tipAnimationFadeSpeed);

                settings.$next_tip.show();
                $timer.animate({
                  width: $('.joyride-timer-indicator-wrap', settings.$next_tip).outerWidth()
                }, settings.timer);

              } else {

                settings.$next_tip.fadeIn(settings.tipAnimationFadeSpeed);

              }
            }

            settings.$current_tip = settings.$next_tip;
            // Focus next button for keyboard users.
            $('.joyride-next-tip', settings.$current_tip).focus();
            methods.tabbable(settings.$current_tip);
          // skip non-existent targets
          } else if (settings.$li && settings.$target.length < 1) {

            methods.show();

          } else {

            methods.end();

          }
        } else {

          settings.paused = true;

        }

      },

      // detect phones with media queries if supported.
      is_phone : function () {
        if (Modernizr) {
          return Modernizr.mq('only screen and (max-width: 767px)');
        }

        return (settings.$window.width() < 767) ? true : false;
      },

      support_localstorage : function () {
        if (Modernizr) {
          return Modernizr.localstorage;
        } else {
          return !!window.localStorage;
        }
      },

      hide : function () {
        if(settings.modal && settings.expose){
          methods.un_expose();
        }
        if(!settings.modal){
        $('.joyride-modal-bg').hide();
        }
        settings.$current_tip.hide();
        settings.postStepCallback(settings.$li.index(), settings.$current_tip);
      },

      set_li : function (init) {
        if (init) {
          settings.$li = settings.$tip_content.eq(settings.startOffset);
          methods.set_next_tip();
          settings.$current_tip = settings.$next_tip;
        } else {
          settings.$li = settings.$li.next();
          methods.set_next_tip();
        }

        methods.set_target();
      },

      set_next_tip : function () {
        settings.$next_tip = $('.joyride-tip-guide[data-index=' + settings.$li.index() + ']');
      },

      set_target : function () {
        var cl = settings.$li.attr('data-class'),
            id = settings.$li.attr('data-id'),
            $sel = function () {
              if (id) {
                return $(settings.document.getElementById(id));
              } else if (cl) {
                return $('.' + cl).filter(":visible").first();
              } else {
                return $('body');
              }
            };

        settings.$target = $sel();
      },

      scroll_to : function () {
        var window_half, tipOffset;

        window_half = settings.$window.height() / 2;
        tipOffset = Math.ceil(settings.$target.offset().top - window_half + settings.$next_tip.outerHeight());

        $("html, body").stop().animate({
          scrollTop: tipOffset
        }, settings.scrollSpeed);
      },

      paused : function () {
        if (($.inArray((settings.$li.index() + 1), settings.pauseAfter) === -1)) {
          return true;
        }

        return false;
      },

      destroy : function () {
        if(!$.isEmptyObject(settings)){
        settings.$document.off('.joyride');
        }

        $(window).off('.joyride');
        $('.joyride-close-tip, .joyride-next-tip, .joyride-modal-bg').off('.joyride');
        $('.joyride-tip-guide, .joyride-modal-bg').remove();
        clearTimeout(settings.automate);
        settings = {};
      },

      restart : function () {
        if(!settings.autoStart)
        {
          if (!settings.startTimerOnClick && settings.timer > 0) {
            methods.show('init');
            methods.startTimer();
          } else {
            methods.show('init');
          }
          settings.autoStart = true;
        }
        else
        {
        methods.hide();
        settings.$li = undefined;
        methods.show('init');
        }
      },

      pos_default : function (init) {
        var half_fold = Math.ceil(settings.$window.height() / 2),
            tip_position = settings.$next_tip.offset(),
            $nub = $('.joyride-nub', settings.$next_tip),
            nub_width = Math.ceil($nub.outerWidth() / 2),
            nub_height = Math.ceil($nub.outerHeight() / 2),
            toggle = init || false;

        // tip must not be "display: none" to calculate position
        if (toggle) {
          settings.$next_tip.css('visibility', 'hidden');
          settings.$next_tip.show();
        }

        if (!settings.$target.is("body")) {
            var
              topAdjustment = settings.tipSettings.tipAdjustmentY ? parseInt(settings.tipSettings.tipAdjustmentY) : 0,
              leftAdjustment = settings.tipSettings.tipAdjustmentX ? parseInt(settings.tipSettings.tipAdjustmentX) : 0;

            if (methods.bottom()) {
              settings.$next_tip.css({
                top: (settings.$target.offset().top + nub_height + settings.$target.outerHeight() + topAdjustment),
                left: settings.$target.offset().left + leftAdjustment});

              if (/right/i.test(settings.tipSettings.nubPosition)) {
                settings.$next_tip.css('left', settings.$target.offset().left - settings.$next_tip.outerWidth() + settings.$target.outerWidth());
              }

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'top');

            } else if (methods.top()) {

              settings.$next_tip.css({
                top: (settings.$target.offset().top - settings.$next_tip.outerHeight() - nub_height + topAdjustment),
                left: settings.$target.offset().left + leftAdjustment});

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'bottom');

            } else if (methods.right()) {

              settings.$next_tip.css({
                top: settings.$target.offset().top + topAdjustment,
                left: (settings.$target.outerWidth() + settings.$target.offset().left + nub_width) + leftAdjustment});

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'left');

            } else if (methods.left()) {

              settings.$next_tip.css({
                top: settings.$target.offset().top + topAdjustment,
                left: (settings.$target.offset().left - settings.$next_tip.outerWidth() - nub_width) + leftAdjustment});

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'right');

            }

            if (!methods.visible(methods.corners(settings.$next_tip)) && settings.attempts < settings.tipSettings.tipLocationPattern.length) {

              $nub.removeClass('bottom')
                .removeClass('top')
                .removeClass('right')
                .removeClass('left');

              settings.tipSettings.tipLocation = settings.tipSettings.tipLocationPattern[settings.attempts];

              settings.attempts++;

              methods.pos_default(true);

            }

        } else if (settings.$li.length) {

          methods.pos_modal($nub);

        }

        if (toggle) {
          settings.$next_tip.hide();
          settings.$next_tip.css('visibility', 'visible');
        }

      },

      pos_phone : function (init) {
        var tip_height = settings.$next_tip.outerHeight(),
            tip_offset = settings.$next_tip.offset(),
            target_height = settings.$target.outerHeight(),
            $nub = $('.joyride-nub', settings.$next_tip),
            nub_height = Math.ceil($nub.outerHeight() / 2),
            toggle = init || false;

        $nub.removeClass('bottom')
          .removeClass('top')
          .removeClass('right')
          .removeClass('left');

        if (toggle) {
          settings.$next_tip.css('visibility', 'hidden');
          settings.$next_tip.show();
        }

        if (!settings.$target.is("body")) {

          if (methods.top()) {

              settings.$next_tip.offset({top: settings.$target.offset().top - tip_height - nub_height});
              $nub.addClass('bottom');

          } else {

            settings.$next_tip.offset({top: settings.$target.offset().top + target_height + nub_height});
            $nub.addClass('top');

          }

        } else if (settings.$li.length) {

          methods.pos_modal($nub);

        }

        if (toggle) {
          settings.$next_tip.hide();
          settings.$next_tip.css('visibility', 'visible');
        }
      },

      pos_modal : function ($nub) {
        methods.center();
        $nub.hide();

        methods.show_modal();

      },

      show_modal : function() {
        if ($('.joyride-modal-bg').length < 1) {
            $('body').append(settings.template.modal).show();
        }

        if (/pop/i.test(settings.tipAnimation)) {
          $('.joyride-modal-bg').show();
        } else {
          $('.joyride-modal-bg').fadeIn(settings.tipAnimationFadeSpeed);
        }
      },

      expose: function(){
        var expose,
          exposeCover,
          el,
          origCSS,
          randId = 'expose-'+Math.floor(Math.random()*10000);
        if (arguments.length>0 && arguments[0] instanceof $){
          el = arguments[0];
        } else if(settings.$target && !settings.$target.is("body")){
          el = settings.$target;
        }  else {
          return false;
        }
        if(el.length < 1){
          if(window.console){
            console.error('element not valid', el);
          }
          return false;
        }
        expose = $(settings.template.expose);
        settings.$body.append(expose);
        expose.css({
          top: el.offset().top,
          left: el.offset().left,
          width: el.outerWidth(true),
          height: el.outerHeight(true)
        });
        exposeCover = $(settings.template.exposeCover);
        origCSS = {
                  zIndex: el.css('z-index'),
                  position: el.css('position')
                  };
        el.css('z-index',expose.css('z-index')*1+1);
        if(origCSS.position == 'static'){
          el.css('position','relative');
        }
        el.data('expose-css',origCSS);
        exposeCover.css({
          top: el.offset().top,
          left: el.offset().left,
          width: el.outerWidth(true),
          height: el.outerHeight(true)
        });
        settings.$body.append(exposeCover);
        expose.addClass(randId);
        exposeCover.addClass(randId);
        if(settings.tipSettings['exposeClass']){
          expose.addClass(settings.tipSettings['exposeClass']);
          exposeCover.addClass(settings.tipSettings['exposeClass']);
        }
        el.data('expose', randId);
        settings.postExposeCallback(settings.$li.index(), settings.$next_tip, el);
        methods.add_exposed(el);
      },

      un_expose: function(){
        var exposeId,
          el,
          expose ,
          origCSS,
          clearAll = false;
        if (arguments.length>0 && arguments[0] instanceof $){
          el = arguments[0];
        } else if(settings.$target && !settings.$target.is("body")){
          el = settings.$target;
        }  else {
          return false;
        }
        if(el.length < 1){
          if(window.console){
            console.error('element not valid', el);
          }
          return false;
        }
        exposeId = el.data('expose');
        expose = $('.'+exposeId);
        if(arguments.length>1){
          clearAll = arguments[1];
        }
        if(clearAll === true){
          $('.joyride-expose-wrapper,.joyride-expose-cover').remove();
        } else {
          expose.remove();
        }
        origCSS = el.data('expose-css');
        if(origCSS.zIndex == 'auto'){
          el.css('z-index', '');
        } else {
          el.css('z-index',origCSS.zIndex);
        }
        if(origCSS.position != el.css('position')){
          if(origCSS.position == 'static'){// this is default, no need to set it.
            el.css('position', '');
          } else {
            el.css('position',origCSS.position);
          }
        }
        el.removeData('expose');
        el.removeData('expose-z-index');
        methods.remove_exposed(el);
      },

      add_exposed: function(el){
        settings.exposed = settings.exposed || [];
        if(el instanceof $){
          settings.exposed.push(el[0]);
        } else if(typeof el == 'string'){
          settings.exposed.push(el);
        }
      },

      remove_exposed: function(el){
        var search;
        if(el instanceof $){
          search = el[0]
        } else if (typeof el == 'string'){
          search = el;
        }
        settings.exposed = settings.exposed || [];
        for(var i=0; i<settings.exposed.length; i++){
          if(settings.exposed[i] == search){
            settings.exposed.splice(i,1);
            return;
          }
        }
      },

      center : function () {
        var $w = settings.$window;

        settings.$next_tip.css({
          top : ((($w.height() - settings.$next_tip.outerHeight()) / 2) + $w.scrollTop()),
          left : ((($w.width() - settings.$next_tip.outerWidth()) / 2) + $w.scrollLeft())
        });

        return true;
      },

      bottom : function () {
        return /bottom/i.test(settings.tipSettings.tipLocation);
      },

      top : function () {
        return /top/i.test(settings.tipSettings.tipLocation);
      },

      right : function () {
        return /right/i.test(settings.tipSettings.tipLocation);
      },

      left : function () {
        return /left/i.test(settings.tipSettings.tipLocation);
      },

      corners : function (el) {
        var w = settings.$window,
            window_half = w.height() / 2,
            tipOffset = Math.ceil(settings.$target.offset().top - window_half + settings.$next_tip.outerHeight()),//using this to calculate since scroll may not have finished yet.
            right = w.width() + w.scrollLeft(),
            offsetBottom =  w.height() + tipOffset,
            bottom = w.height() + w.scrollTop(),
            top = w.scrollTop();

            if(tipOffset < top){
              if (tipOffset <0 ){
                top = 0;
              } else {
                top = tipOffset;
              }
            }

            if(offsetBottom > bottom){
              bottom = offsetBottom;
            }

        return [
          el.offset().top < top,
          right < el.offset().left + el.outerWidth(),
          bottom < el.offset().top + el.outerHeight(),
          w.scrollLeft() > el.offset().left
        ];
      },

      visible : function (hidden_corners) {
        var i = hidden_corners.length;

        while (i--) {
          if (hidden_corners[i]) return false;
        }

        return true;
      },

      nub_position : function (nub, pos, def) {
        if (pos === 'auto') {
          nub.addClass(def);
        } else {
          nub.addClass(pos);
        }
      },

      startTimer : function () {
        if (settings.$li.length) {
          settings.automate = setTimeout(function () {
            methods.hide();
            methods.show();
            methods.startTimer();
          }, settings.timer);
        } else {
          clearTimeout(settings.automate);
        }
      },

      end : function (isAborted) {
        isAborted = isAborted || false;

        // Unbind resize events.
        if (isAborted) {
          settings.$window.off('resize.joyride');
        }

        if (settings.cookieMonster) {
          $.cookie(settings.cookieName, 'ridden', { expires: 365, domain: settings.cookieDomain, path: settings.cookiePath });
        }

        if (settings.localStorage) {
          localStorage.setItem(settings.localStorageKey, true);
        }

        if (settings.timer > 0) {
          clearTimeout(settings.automate);
        }
        if(settings.modal && settings.expose){
          methods.un_expose();
        }
        if (settings.$current_tip) {
          settings.$current_tip.hide();
        }
        if (settings.$li) {
          settings.postStepCallback(settings.$li.index(), settings.$current_tip, isAborted);
          settings.postRideCallback(settings.$li.index(), settings.$current_tip, isAborted);
        }
        $('.joyride-modal-bg').hide();
      },

      jquery_check : function () {
        // define on() and off() for older jQuery
        if (!$.isFunction($.fn.on)) {

          $.fn.on = function (types, sel, fn) {

            return this.delegate(sel, types, fn);

          };

          $.fn.off = function (types, sel, fn) {

            return this.undelegate(sel, types, fn);

          };

          return false;
        }

        return true;
      },

      outerHTML : function (el) {
        // support FireFox < 11
        return el.outerHTML || new XMLSerializer().serializeToString(el);
      },

      version : function () {
        return settings.version;
      },

      tabbable : function (el) {
        $(el).on('keydown', function( event ) {
          if (!event.isDefaultPrevented() && event.keyCode &&
              // Escape key.
              event.keyCode === 27 ) {
            event.preventDefault();
            methods.end(true /* isAborted */);
            return;
          }

          // Prevent tabbing out of tour items.
          if ( event.keyCode !== 9 ) {
            return;
          }
          var tabbables = $(el).find(":tabbable"),
            first = tabbables.filter(":first"),
            last  = tabbables.filter(":last");
          if ( event.target === last[0] && !event.shiftKey ) {
            first.focus( 1 );
            event.preventDefault();
          } else if ( event.target === first[0] && event.shiftKey ) {
            last.focus( 1 );
            event.preventDefault();
          }
        });
      }

    };

  $.fn.joyride = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' +  method + ' does not exist on jQuery.joyride');
    }
  };

}(jQuery, this));
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal, document) {
  var queryString = decodeURI(window.location.search);

  Drupal.behaviors.tour = {
    attach: function attach(context) {
      $('body').once('tour').each(function () {
        var model = new Drupal.tour.models.StateModel();
        new Drupal.tour.views.ToggleTourView({
          el: $(context).find('#toolbar-tab-tour'),
          model: model
        });

        model.on('change:isActive', function (model, isActive) {
          $(document).trigger(isActive ? 'drupalTourStarted' : 'drupalTourStopped');
        }).set('tour', $(context).find('ol#tour'));

        if (/tour=?/i.test(queryString)) {
          model.set('isActive', true);
        }
      });
    }
  };

  Drupal.tour = Drupal.tour || {
    models: {},

    views: {}
  };

  Drupal.tour.models.StateModel = Backbone.Model.extend({
    defaults: {
      tour: [],

      isActive: false,

      activeTour: []
    }
  });

  Drupal.tour.views.ToggleTourView = Backbone.View.extend({
    events: { click: 'onClick' },

    initialize: function initialize() {
      this.listenTo(this.model, 'change:tour change:isActive', this.render);
      this.listenTo(this.model, 'change:isActive', this.toggleTour);
    },
    render: function render() {
      this.$el.toggleClass('hidden', this._getTour().length === 0);

      var isActive = this.model.get('isActive');
      this.$el.find('button').toggleClass('is-active', isActive).prop('aria-pressed', isActive);
      return this;
    },
    toggleTour: function toggleTour() {
      if (this.model.get('isActive')) {
        var $tour = this._getTour();
        this._removeIrrelevantTourItems($tour, this._getDocument());
        var that = this;
        var close = Drupal.t('Close');
        if ($tour.find('li').length) {
          $tour.joyride({
            autoStart: true,
            postRideCallback: function postRideCallback() {
              that.model.set('isActive', false);
            },

            template: {
              link: '<a href="#close" class="joyride-close-tip" aria-label="' + close + '">&times;</a>',
              button: '<a href="#" class="button button--primary joyride-next-tip"></a>'
            }
          });
          this.model.set({ isActive: true, activeTour: $tour });
        }
      } else {
        this.model.get('activeTour').joyride('destroy');
        this.model.set({ isActive: false, activeTour: [] });
      }
    },
    onClick: function onClick(event) {
      this.model.set('isActive', !this.model.get('isActive'));
      event.preventDefault();
      event.stopPropagation();
    },
    _getTour: function _getTour() {
      return this.model.get('tour');
    },
    _getDocument: function _getDocument() {
      return $(document);
    },
    _removeIrrelevantTourItems: function _removeIrrelevantTourItems($tour, $document) {
      var removals = false;
      var tips = /tips=([^&]+)/.exec(queryString);
      $tour.find('li').each(function () {
        var $this = $(this);
        var itemId = $this.attr('data-id');
        var itemClass = $this.attr('data-class');

        if (tips && !$(this).hasClass(tips[1])) {
          removals = true;
          $this.remove();
          return;
        }

        if (!itemId && !itemClass || itemId && $document.find('#' + itemId).length || itemClass && $document.find('.' + itemClass).length) {
          return;
        }
        removals = true;
        $this.remove();
      });

      if (removals) {
        var total = $tour.find('li').length;
        if (!total) {
          this.model.set({ tour: [] });
        }

        $tour.find('li').each(function (index) {
          var progress = Drupal.t('!tour_item of !total', {
            '!tour_item': index + 1,
            '!total': total
          });
          $(this).find('.tour-progress').text(progress);
        }).eq(-1).attr('data-text', Drupal.t('End tour'));
      }
    }
  });
})(jQuery, Backbone, Drupal, document);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  function TabbingManager() {
    this.stack = [];
  }

  function TabbingContext(options) {
    $.extend(this, {
      level: null,

      $tabbableElements: $(),

      $disabledElements: $(),

      released: false,

      active: false
    }, options);
  }

  $.extend(TabbingManager.prototype, {
    constrain: function constrain(elements) {
      var il = this.stack.length;
      for (var i = 0; i < il; i++) {
        this.stack[i].deactivate();
      }

      var $elements = $(elements).find(':tabbable').addBack(':tabbable');

      var tabbingContext = new TabbingContext({
        level: this.stack.length,
        $tabbableElements: $elements
      });

      this.stack.push(tabbingContext);

      tabbingContext.activate();

      $(document).trigger('drupalTabbingConstrained', tabbingContext);

      return tabbingContext;
    },
    release: function release() {
      var toActivate = this.stack.length - 1;
      while (toActivate >= 0 && this.stack[toActivate].released) {
        toActivate--;
      }

      this.stack.splice(toActivate + 1);

      if (toActivate >= 0) {
        this.stack[toActivate].activate();
      }
    },
    activate: function activate(tabbingContext) {
      var $set = tabbingContext.$tabbableElements;
      var level = tabbingContext.level;

      var $disabledSet = $(':tabbable').not($set);

      tabbingContext.$disabledElements = $disabledSet;

      var il = $disabledSet.length;
      for (var i = 0; i < il; i++) {
        this.recordTabindex($disabledSet.eq(i), level);
      }

      $disabledSet.prop('tabindex', -1).prop('autofocus', false);

      var $hasFocus = $set.filter('[autofocus]').eq(-1);

      if ($hasFocus.length === 0) {
        $hasFocus = $set.eq(0);
      }
      $hasFocus.trigger('focus');
    },
    deactivate: function deactivate(tabbingContext) {
      var $set = tabbingContext.$disabledElements;
      var level = tabbingContext.level;
      var il = $set.length;
      for (var i = 0; i < il; i++) {
        this.restoreTabindex($set.eq(i), level);
      }
    },
    recordTabindex: function recordTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices') || {};
      tabInfo[level] = {
        tabindex: $el[0].getAttribute('tabindex'),
        autofocus: $el[0].hasAttribute('autofocus')
      };
      $el.data('drupalOriginalTabIndices', tabInfo);
    },
    restoreTabindex: function restoreTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices');
      if (tabInfo && tabInfo[level]) {
        var data = tabInfo[level];
        if (data.tabindex) {
          $el[0].setAttribute('tabindex', data.tabindex);
        } else {
            $el[0].removeAttribute('tabindex');
          }
        if (data.autofocus) {
          $el[0].setAttribute('autofocus', 'autofocus');
        }

        if (level === 0) {
          $el.removeData('drupalOriginalTabIndices');
        } else {
          var levelToDelete = level;
          while (tabInfo.hasOwnProperty(levelToDelete)) {
            delete tabInfo[levelToDelete];
            levelToDelete++;
          }
          $el.data('drupalOriginalTabIndices', tabInfo);
        }
      }
    }
  });

  $.extend(TabbingContext.prototype, {
    release: function release() {
      if (!this.released) {
        this.deactivate();
        this.released = true;
        Drupal.tabbingManager.release(this);

        $(document).trigger('drupalTabbingContextReleased', this);
      }
    },
    activate: function activate() {
      if (!this.active && !this.released) {
        this.active = true;
        Drupal.tabbingManager.activate(this);

        $(document).trigger('drupalTabbingContextActivated', this);
      }
    },
    deactivate: function deactivate() {
      if (this.active) {
        this.active = false;
        Drupal.tabbingManager.deactivate(this);

        $(document).trigger('drupalTabbingContextDeactivated', this);
      }
    }
  });

  if (Drupal.tabbingManager) {
    return;
  }

  Drupal.tabbingManager = new TabbingManager();
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone) {
  var strings = {
    tabbingReleased: Drupal.t('Tabbing is no longer constrained by the Contextual module.'),
    tabbingConstrained: Drupal.t('Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.'),
    pressEsc: Drupal.t('Press the esc key to exit.')
  };

  function initContextualToolbar(context) {
    if (!Drupal.contextual || !Drupal.contextual.collection) {
      return;
    }

    var contextualToolbar = Drupal.contextualToolbar;
    contextualToolbar.model = new contextualToolbar.StateModel({
      isViewing: localStorage.getItem('Drupal.contextualToolbar.isViewing') !== 'false'
    }, {
      contextualCollection: Drupal.contextual.collection
    });

    var viewOptions = {
      el: $('.toolbar .toolbar-bar .contextual-toolbar-tab'),
      model: contextualToolbar.model,
      strings: strings
    };
    new contextualToolbar.VisualView(viewOptions);
    new contextualToolbar.AuralView(viewOptions);
  }

  Drupal.behaviors.contextualToolbar = {
    attach: function attach(context) {
      if ($('body').once('contextualToolbar-init').length) {
        initContextualToolbar(context);
      }
    }
  };

  Drupal.contextualToolbar = {
    model: null
  };
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextualToolbar.StateModel = Backbone.Model.extend({
    defaults: {
      isViewing: true,

      isVisible: false,

      contextualCount: 0,

      tabbingContext: null
    },

    initialize: function initialize(attrs, options) {
      this.listenTo(options.contextualCollection, 'reset remove add', this.countContextualLinks);
      this.listenTo(options.contextualCollection, 'add', this.lockNewContextualLinks);

      this.listenTo(this, 'change:contextualCount', this.updateVisibility);

      this.listenTo(this, 'change:isViewing', function (model, isViewing) {
        options.contextualCollection.each(function (contextualModel) {
          contextualModel.set('isLocked', !isViewing);
        });
      });
    },
    countContextualLinks: function countContextualLinks(contextualModel, contextualCollection) {
      this.set('contextualCount', contextualCollection.length);
    },
    lockNewContextualLinks: function lockNewContextualLinks(contextualModel, contextualCollection) {
      if (!this.get('isViewing')) {
        contextualModel.set('isLocked', true);
      }
    },
    updateVisibility: function updateVisibility() {
      this.set('isVisible', this.get('contextualCount') > 0);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone, _) {
  Drupal.contextualToolbar.AuralView = Backbone.View.extend({
    announcedOnce: false,

    initialize: function initialize(options) {
      this.options = options;

      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.manageTabbing);

      $(document).on('keyup', _.bind(this.onKeypress, this));
      this.manageTabbing();
    },
    render: function render() {
      this.$el.find('button').attr('aria-pressed', !this.model.get('isViewing'));

      return this;
    },
    manageTabbing: function manageTabbing() {
      var tabbingContext = this.model.get('tabbingContext');

      if (tabbingContext) {
        if (tabbingContext.active) {
          Drupal.announce(this.options.strings.tabbingReleased);
        }
        tabbingContext.release();
      }

      if (!this.model.get('isViewing')) {
        tabbingContext = Drupal.tabbingManager.constrain($('.contextual-toolbar-tab, .contextual'));
        this.model.set('tabbingContext', tabbingContext);
        this.announceTabbingConstraint();
        this.announcedOnce = true;
      }
    },
    announceTabbingConstraint: function announceTabbingConstraint() {
      var strings = this.options.strings;
      Drupal.announce(Drupal.formatString(strings.tabbingConstrained, {
        '@contextualsCount': Drupal.formatPlural(Drupal.contextual.collection.length, '@count contextual link', '@count contextual links')
      }));
      Drupal.announce(strings.pressEsc);
    },
    onKeypress: function onKeypress(event) {
      if (!this.announcedOnce && event.keyCode === 9 && !this.model.get('isViewing')) {
        this.announceTabbingConstraint();

        this.announcedOnce = true;
      }

      if (event.keyCode === 27) {
        this.model.set('isViewing', true);
      }
    }
  });
})(jQuery, Drupal, Backbone, _);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextualToolbar.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        click: function click() {
          this.model.set('isViewing', !this.model.get('isViewing'));
        },

        touchend: touchEndToClick
      };
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.persist);
    },
    render: function render() {
      this.$el.toggleClass('hidden', !this.model.get('isVisible'));

      this.$el.find('button').toggleClass('is-active', !this.model.get('isViewing'));

      return this;
    },
    persist: function persist(model, isViewing) {
      if (!isViewing) {
        localStorage.setItem('Drupal.contextualToolbar.isViewing', 'false');
      } else {
        localStorage.removeItem('Drupal.contextualToolbar.isViewing');
      }
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var pathInfo = drupalSettings.path;
  var escapeAdminPath = sessionStorage.getItem('escapeAdminPath');
  var windowLocation = window.location;

  if (!pathInfo.currentPathIsAdmin && !/destination=/.test(windowLocation.search)) {
    sessionStorage.setItem('escapeAdminPath', windowLocation);
  }

  Drupal.behaviors.escapeAdmin = {
    attach: function attach() {
      var $toolbarEscape = $('[data-toolbar-escape-admin]').once('escapeAdmin');
      if ($toolbarEscape.length && pathInfo.currentPathIsAdmin) {
        if (escapeAdminPath !== null) {
          $toolbarEscape.attr('href', escapeAdminPath);
        } else {
          $toolbarEscape.text(Drupal.t('Home'));
        }
      }
    }
  };
})(jQuery, Drupal, drupalSettings);;
