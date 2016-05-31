Ext.define('NativeLocale.Locale',{
    xtype:'nativelocale',
    
    constructor: function(options){
        this.initConfig(options);

        return this;
    },
    config  : {
        locale : "en"
    },

    applyLocale: function(){
        var locale = location.href.match(/locale=([\w-]+)/);
        if( locale === null){
            var locale = location.href.match(/lang=([\w-]+)/);
        }
        locale = (locale && locale[1]) || 'en';

        return locale;
    },
    setLocale:function(newLocale){

        Ext.apply(this,{
            locale:newLocale
        });

    },
    getLocale: function(){
        return this.locale;
    }
})