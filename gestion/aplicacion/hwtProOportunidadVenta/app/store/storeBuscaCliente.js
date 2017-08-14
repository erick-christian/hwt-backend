/*
 * File: app/store/storeBuscaCliente.js
 *
 * This file was generated by Sencha Architect version 4.2.2.
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

Ext.define('hwtProOportunidadVenta.store.storeBuscaCliente', {
    extend: 'Ext.data.Store',

    requires: [
        'hwtProOportunidadVenta.model.modelBuscaCliente',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],

    constructor: function (cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            pageSize: 150,
            storeId: 'storeBuscaCliente',
            model: 'hwtProOportunidadVenta.model.modelBuscaCliente',
            proxy: {
                type: 'rest',
                reader: {
                    type: 'json',
                    rootProperty: function (data) {
                        var storeBuscaCliente = Ext.getStore('storeBuscaCliente');
                        var rawData = storeBuscaCliente.getProxy().getReader().rawData;
                        return rawData.hwtCliente;
                    }
                }
            },
            listeners: {
                beforeload: {
                    fn: me.onStoreBeforeLoad,
                    scope: me
                }
            }
        }, cfg)]);
    },

    onStoreBeforeLoad: function (store, operation, eOpts) {
        var storeBuscaCliente = Ext.getStore('storeBuscaCliente');
        var proxyCliente = storeBuscaCliente.getProxy();

        var objJsonData = new Object();
        objJsonData.page = storeBuscaCliente.currentPage;
        objJsonData.start = (storeBuscaCliente.currentPage - 1) * storeBuscaCliente.pageSize;
        objJsonData.limit = storeBuscaCliente.pageSize;
        objJsonData.filtroEstado = 'ACTIVO';
        objJsonData.paramCodigo = elf.readElement('tfParamCodigo');
        objJsonData.paramNombreCorto = elf.readElement('tfParamNombreCorto');
        objJsonData.paramRazonSocial = elf.readElement('tfParamRazonSocial');
        objJsonData.paramRFC = elf.readElement('tfParamRFC');

        var objJsonRequest = new Object();
        objJsonRequest.apiController = 'apiCliente';
        objJsonRequest.apiMethod = 'listaCliente';
        objJsonRequest.apiData = JSON.stringify(objJsonData);

        proxyCliente.api.read = elf.setApiDataBridge(objJsonRequest.apiController);
        proxyCliente.extraParams = objJsonRequest;

    }

});