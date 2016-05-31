/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MultiLanguageNative.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onListPainted: function(element){
        var grid = element.component;

        var title, column_name, column_email, column_phone,currentColumns = grid.getColumns();

        var lang = NativeLocale.Locale.getLocale();
        var columnArr = new Array();

        if(lang == 'it'){
            title= 'Lavoratori';
            columnArr['column_name'] = 'Nome'
            columnArr['column_email'] = 'Email';
            columnArr['column_phone'] = "Telefono";
        }
        else if(lang == 'en'){
            title= 'Workers'
            columnArr['column_name'] = 'Name'
            columnArr['column_email'] = 'Email';
            columnArr['column_phone'] = "Phone";
        }
        else{
            columnArr['column_name'] = 'Nombre'
            columnArr['column_email'] = 'Correo';
            columnArr['column_phone'] = "Telefono";
        }

        currentColumns.forEach(
            function(column, index, array) {

                var colParam = 'column_'+column._dataIndex;
                var newText = columnArr[colParam];
                column.setText(newText)
            }
        )
    }
});
