(function ($) {
  Drupal.behaviors.puddlesListen = {
    attach: function (context, settings) {
      // Only initialize a connection for non-overlay pages.
      if ($('body:not(.overlay)', context).length) {
        var sandbox = io.connect(settings.puddles.server);
        sandbox.on('connect', function () {
          sandbox.on('event', function (data) {
            if ($('.overlay-active').length && settings.puddles.halt_on_overlay) {
              return;
            }
            window.location.reload();
          });
        });
      }
    }
  };
})(jQuery)