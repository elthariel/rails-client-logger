(function( jsLogger, $, undefined ) {
    //Public Method
    jsLogger.debug = function(message) {
			invoke('debug', message);
    };

    jsLogger.info = function(message) {
			invoke('info', message);
    };

    jsLogger.warn = function(message) {
			invoke('warn', message);
    };

    jsLogger.error = function(message) {
			invoke('error', message);
    };

    jsLogger.fatal = function(message) {
			invoke('fatal', message);
    };

     
    //Private Method
    function invoke(level, message) {
			$.ajax({
			  type: 'post',
				beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
			  data: {level: level, message: message},
			  complete: function(request){},
			  url: "/logger/rails_client_logger/log"
			})
    }   
}( window.jsLogger = window.jsLogger || {}, jQuery ));