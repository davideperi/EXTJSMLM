/*
Italiano
*/
Ext.ns(
	'MultiLanguageNative',
	'MultiLanguageNative.grid',
	'MultiLanguage.grid.List',
	'MultiLanguageNative.Message',
	'MultiLanguageNative.Title',
	'MultiLanguageNative.Panel'
);
MultiLanguageNative.grid.List = {
    column : {
        name: 'Nome',
        email: 'Posta elettronica',
		phone: 'Cellulare'
    }
};
MultiLanguageNative.Message = {
    error : {
        notfound: 'Questo è l\'errore 1',
        testa: 'Questo è l\'errore 2',
		testb: 'Questo è l\'errore 3'
    }
};
MultiLanguageNative.Title = {
    list : {
        personnel: 'Lista lavoratori'
    }
};
MultiLanguageNative.Panel = {
    title : {
        home: 'Inizio'
    }
};