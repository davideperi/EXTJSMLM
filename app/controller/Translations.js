Ext.define('MultiLanguageNative.controller.Translations', {
    extend: 'Ext.app.Controller',
	
	config: {
		strings: {
		    "it": {
		        "list_title": 'Personale',
				"tab_title": 'Pagina iniziale',
		        "column_name": 'Nome',
		        "column_email": 'Posta elettronica',
				"column_phone": 'Telefono'
		    },
		    "en": {
		        "list_title": 'Workers',
				"tab_title": 'Home',
		        "column_name": 'Name',
		        "column_email": 'Email',
				"column_phone": 'Phone'
		    },
		    "es": {
		        "list_title": 'Trabajadores',
				"tab_title": 'Inicio',
		        "column_name": 'Nombre',
		        "column_email": 'Correo',
				"column_phone": 'Telefono'
		    }
		}
	},
	getString:function( lang, stringKey ){
		var strings = this.getStrings();
		var string = strings[lang][stringKey];
		return(string);
	}

});
