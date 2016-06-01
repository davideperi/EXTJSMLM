/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MultiLanguageNative.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',

        'MultiLanguageNative.view.main.MainController',
        'MultiLanguageNative.view.main.MainModel',
        'MultiLanguageNative.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    tabBarPosition: 'bottom',

    items: [
        {
			id:'homePanel',
            title: 'Home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'mainlist'
            }]
        }
    ]
});
