/**
 * This view is an example list of people.
 */
Ext.define('MultiLanguageNative.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'MultiLanguageNative.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

	initComponent:function(){
		console.log('Init component Locale: ' + MultiLanguageNative.locale);

		this.callParent();
		
	},

    columns: [
        { text: 'Name',  dataIndex: 'name', width: 100 },
        { text: 'Email', dataIndex: 'email', width: 230 },
        { text: 'Phone', dataIndex: 'phone', width: 150 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
