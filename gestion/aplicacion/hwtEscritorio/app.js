/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 4.1.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({
    views: [
        'winWorkplace'
    ],
    name: 'hwtEsritorio',

    loadCompanyData: function() {
            elf.writeElement('lblCompany'    ,elf.getSessionData('company_name'));
            elf.writeElement('lblUserName'   ,elf.getSessionData('user_name'));
            elf.writeElement('lblSystemName' ,elf.getSessionData('system_name'));
            elf.writeElement('lblProfile'    ,elf.getSessionData('user_profile'));
            elf.writeElement('lblVersion'    ,elf.getSessionData('system_version'));

    },

    launch: function() {
        Ext.create('hwtEsritorio.view.winWorkplace', {renderTo: Ext.getBody()});
        elf.defaultDataApp();

        appLocal = this.getApplication();
        appLocal.loadCompanyData();
        appLocal.renderInterface();
    },

    renderInterface: function() {
        Ext.getCmp('formWorkplace').doLayout();
        var heightWindow = Ext.getBody().getViewSize().height;
        var widthWindow  = Ext.getBody().getViewSize().width;
        console.log('Dimensiones: ');
        console.log(heightWindow);
        console.log(widthWindow);
        Ext.getCmp('formWorkplace').setHeight(heightWindow);



        elf.renderInterface(
            'formWorkplace',
            'tabTasks',
            58);

        var heightTab = heightWindow - 10;
        Ext.getCmp('tabTasks').setHeight(heightWindow);

        //Ext.getCmp('gridPedidoVenta').setHeight(alturaGrid);
    }

});