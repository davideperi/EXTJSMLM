/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('MultiLanguageNative.Application', {
    extend: 'Ext.app.Application',
    
    name: 'MultiLanguageNative',

    stores: [
        // TODO: add global / shared stores here
    ],

	init: function(){
		var locale = location.href.match(/locale=([\w-]+)/);
		if( locale === null){
			var locale = location.href.match(/lang=([\w-]+)/);
		}
		locale = (locale && locale[1]) || 'en';

		Ext.apply('MultiLanguageNative',{
		  locale: locale
		});
	},
    launch: function () {
        // TODO - Launch the application
		console.log('Locale: ' + MultiLanguageNative.locale);
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
