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
	controllers:[
		'Translations'
	],

	requires: ['NativeLocale.Locale'],

    init: function(){

        Ext.apply(NativeLocale,{
            Locale:Ext.widget('nativelocale')
        });

        var locale = location.href.match(/locale=([\w-]+)/);
        if( locale === null){
            var locale = location.href.match(/lang=([\w-]+)/);
        }
        locale = (locale && locale[1]) || 'en';

        NativeLocale.Locale.setLocale(locale);
        
    },
    launch: function () {
        // TODO - Launch the application
		console.log('Locale: ' + NativeLocale.Locale.getLocale());
		
		/* Test controller */
		// this.getApplication().getController('Translations').getString('en','column_name');
		
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
