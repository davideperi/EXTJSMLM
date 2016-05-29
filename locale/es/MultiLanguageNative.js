/*
Español
*/
Ext.ns(
	'MultiLanguage',
	'MultiLanguage.grid',
	'MultiLanguage.grid.List',
	'MultiLanguage.Message',
	'MultiLanguage.Title',
	'MultiLanguage.Panel'
);
MultiLanguage.grid.List = {
    column : {
        name: 'Nombre',
        email: 'Correo electronico',
		phone: 'Telefono'
    }
};
MultiLanguage.Message = {
    error : {
        notfound: 'Este error es el numero 1',
        testa: 'Este error es el numero 2',
		testb: 'Este error es el numero 3'
    }
};
MultiLanguage.Title = {
    list : {
        personnel: 'Listado Trabajadores'
    }
};
MultiLanguage.Panel = {
    title : {
        home: 'Inicio'
    }
};