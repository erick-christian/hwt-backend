/*
 * File: app/view/winCotizacionUnidad.js
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

Ext.define('hwtProCotizacion.view.winCotizacionUnidad', {
    extend: 'Ext.window.Window',
    alias: 'widget.winCotizacionUnidad',

    requires: [
        'hwtProCotizacion.view.winCotizacionUnidadViewModel',
        'Ext.button.Button',
        'Ext.toolbar.Separator',
        'Ext.toolbar.Fill',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.form.field.Date',
        'Ext.grid.Panel',
        'Ext.view.Table',
        'Ext.grid.column.Action',
        'Ext.toolbar.Paging'
    ],

    viewModel: {
        type: 'wincotizacionunidad'
    },
    modal: true,
    id: 'winCotizacionUnidad',
    itemId: 'winCotizacionUnidad',
    width: 1000,
    closable: false,
    title: 'Cotización de Unidades',
    defaultListenerScope: true,

    dockedItems: [
        {
            xtype: 'toolbar',
            cls: 'toolbarBackground',
            dock: 'bottom',
            id: 'toolbarCotizacionUnidad',
            items: [
                {
                    xtype: 'button',
                    id: 'btnConfirmarCotizacionUnidad',
                    itemId: 'btnConfirmarCotizacionUnidad',
                    width: 130,
                    iconCls: 'fa fa-check-square icon16 iconColorGreen',
                    text: 'Confirmar',
                    textAlign: 'left'
                },
                {
                    xtype: 'tbseparator'
                },
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'button',
                    id: 'btnCerrarCotizacionUnidad',
                    itemId: 'btnCerrarCotizacionUnidad',
                    width: 130,
                    iconCls: 'fa fa-window-close icon16 iconColorRed',
                    text: 'Cerrar',
                    textAlign: 'left',
                    listeners: {
                        click: 'onBtnCerrarCotizacionUnidadClick'
                    }
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'form',
            eliminarUnidadCotizacion: function() {
                var gridCotizacionUnidad = Ext.getCmp('gridCotizacionUnidad');
                var recordUnidadCotizacion = gridCotizacionUnidad.recordActivo;

                if(recordUnidadCotizacion === undefined){
                    msgTipo      = 'error';
                    msgTitulo    = 'Eliminar Cotización';
                    msgContenido = 'Debe seleccionar un registro válido para realizar ésta operación';
                    elf.message(msgTipo,msgTitulo,msgContenido);
                    return;
                }

                var msgFuncion = function(){
                    var gridCotizacionUnidad = Ext.getCmp('gridCotizacionUnidad');
                    var recordUnidadCotizacion = gridCotizacionUnidad.recordActivo;
                    var apiController = 'apiCotizacion';
                    var apiMethod     = 'eliminarUnidadCotizacion';
                    var objJsonData   = new Object();
                    objJsonData.rowidUnidadCotizacion = recordUnidadCotizacion.rowid;
                    objJsonData.numCotizacion         = recordUnidadCotizacion.num_cotizacion;

                    var objJsonRequest = new Object();
                    objJsonRequest.apiController = apiController;
                    objJsonRequest.apiMethod     = apiMethod;
                    objJsonRequest.apiData       = JSON.stringify(objJsonData);

                    var functionSuccess = function(){
                        var jsonData = elf.getInfoDataBridge('eliminarUnidadCotizacion');

                        elf.showInfo(jsonData,'information');

                        var valor_subtotal = jsonData.hwtCotizacion[0].valor_subtotal;
                        var valor_impuesto = jsonData.hwtCotizacion[0].valor_impuesto;
                        var valor_total    = jsonData.hwtCotizacion[0].valor_total;

                        elf.writeElement('tfValSubtotal'     ,Ext.util.Format.number(valor_subtotal , '0,000.00'));
                        elf.writeElement('tfValImpuestos'    ,Ext.util.Format.number(valor_impuesto , '0,000.00'));
                        elf.writeElement('tfValTotal'        ,Ext.util.Format.number(valor_total    , '0,000.00'));

                        elf.refreshGrid('gridCotizacionUnidad');
                    };

                    var functionFailure = function(){
                        var jsonData = elf.getInfoDataBridge('eliminarUnidadCotizacion');
                        console.warn(jsonData);

                        elf.showInfo(jsonData,'error');
                    };


                    elf.doDataBridge(objJsonRequest,
                    functionSuccess,
                    null,
                    functionFailure,
                    null);
                }; //msgFuncion


                msgTipo      = 'question';
                msgTitulo    = 'Eliminar Unidad de la Cotización';
                msgContenido = 'Eliminar la Unidad de ' + recordUnidadCotizacion.codigo + ' ' +
                'de la Cotizacion ' + recordUnidadCotizacion.num_cotizacion + '?';

                elf.message(msgTipo,msgTitulo,msgContenido,msgFuncion);
            },
            id: 'formCotizacionUnidad',
            itemId: 'formCotizacionUnidad',
            layout: 'column',
            bodyCls: 'formBackground',
            bodyPadding: 10,
            items: [
                {
                    xtype: 'fieldset',
                    columnWidth: 0.8,
                    id: 'fieldsetDocCotizacion',
                    itemId: 'fieldsetDocCotizacion',
                    layout: 'column',
                    title: '<b>Documento</b>',
                    items: [
                        {
                            xtype: 'textfield',
                            columnWidth: 0.25,
                            disabled: true,
                            disabledCls: 'disabledField',
                            id: 'tfCodigoCliente',
                            itemId: 'tfCodigoCliente',
                            margin: '0 0 5 10',
                            fieldLabel: 'Cliente'
                        },
                        {
                            xtype: 'button',
                            cls: 'botonZoomWindow',
                            disabled: true,
                            id: 'btnZoomBuscaCliente',
                            itemId: 'btnZoomBuscaCliente',
                            width: 32,
                            iconCls: 'fa fa-search icon16 iconColorWhite',
                            listeners: {
                                click: 'onBtnZoomBuscaClienteClick'
                            }
                        },
                        {
                            xtype: 'textfield',
                            columnWidth: 0.4,
                            disabled: true,
                            disabledCls: 'disabledField',
                            id: 'tfNombreCliente',
                            itemId: 'tfNombreCliente',
                            margin: '0 5 5 5'
                        },
                        {
                            xtype: 'datefield',
                            columnWidth: 0.25,
                            disabled: true,
                            disabledCls: 'disabledField',
                            id: 'tfFechaCotizacion',
                            itemId: 'tfFechaCotizacion',
                            margin: '0 5 5 10',
                            minWidth: 220,
                            fieldLabel: 'Fecha'
                        },
                        {
                            xtype: 'textfield',
                            columnWidth: 0.25,
                            disabled: true,
                            disabledCls: 'disabledField',
                            id: 'tfNoCotizacion',
                            itemId: 'tfNoCotizacion',
                            margin: '0 5 5 10',
                            fieldLabel: 'No. Cotizacion'
                        },
                        {
                            xtype: 'textfield',
                            columnWidth: 0.2,
                            disabled: true,
                            disabledCls: 'disabledField',
                            id: 'tfUsuario',
                            itemId: 'tfUsuario',
                            margin: '0 5 5 330',
                            minWidth: 220,
                            fieldLabel: 'Usuario'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    columnWidth: 0.2,
                    id: 'fieldsetAcciones',
                    itemId: 'fieldsetAcciones',
                    margin: '0 0 5 5',
                    layout: 'column',
                    title: '<b>Acciones</b>',
                    items: [
                        {
                            xtype: 'button',
                            columnWidth: 1,
                            cls: 'botonZoomWindow',
                            id: 'btnIniciarCotizacion',
                            itemId: 'btnIniciarCotizacion',
                            margin: '0 0 5 0',
                            maxWidth: 150,
                            iconCls: 'fa fa-usd icon16 iconColorDarkWhite',
                            text: 'Iniciar Cotización',
                            textAlign: 'left',
                            listeners: {
                                click: 'onBtnIniciarCotizacionClick'
                            }
                        },
                        {
                            xtype: 'button',
                            columnWidth: 1,
                            cls: 'botonZoomWindow',
                            id: 'btnImprimirCotizacion',
                            itemId: 'btnImprimirCotizacion',
                            margin: '0 0 5 0',
                            maxWidth: 150,
                            iconCls: 'fa fa-file-text icon16 iconColorDarkWhite',
                            text: 'Imprimir',
                            textAlign: 'left',
                            listeners: {
                                click: 'onBtnImprimirCotizacionClick'
                            }
                        },
                        {
                            xtype: 'button',
                            columnWidth: 1,
                            cls: 'botonZoomWindow',
                            id: 'btnEnviarCotizacion',
                            itemId: 'btnEnviarCotizacion',
                            margin: '0 0 5 0',
                            maxWidth: 150,
                            iconCls: 'fa fa-envelope icon16 iconColorDarkWhite',
                            text: 'Enviar por Correo',
                            textAlign: 'left',
                            listeners: {
                                click: 'onBtnEnviarCotizacionClick'
                            }
                        }
                    ]
                },
                {
                    xtype: 'gridpanel',
                    columnWidth: 1,
                    reference: 'gridCotizacionUnidad',
                    height: 300,
                    id: 'gridCotizacionUnidad',
                    itemId: 'gridCotizacionUnidad',
                    title: 'Unidades',
                    forceFit: true,
                    store: 'storeCotizacionUnidad',
                    columns: [
                        {
                            xtype: 'actioncolumn',
                            id: 'colEliminarUnidad',
                            itemId: 'colEliminarUnidad',
                            width: 24,
                            items: [
                                {
                                    getClass: function(v, metadata, r, rowIndex, colIndex, store) {
                                        var iconClsRetorno = 'basura16';
                                        return iconClsRetorno;
                                    },
                                    handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                        var gridCotizacionUnidad = Ext.getCmp('gridCotizacionUnidad');
                                        gridCotizacionUnidad.recordActivo = record.data;
                                        Ext.getCmp('formCotizacionUnidad').eliminarUnidadCotizacion();
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'codigo',
                            text: 'Codigo'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 200,
                            dataIndex: 'vin',
                            text: 'Vin'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'modelo',
                            text: 'Modelo'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 150,
                            dataIndex: 'marca',
                            text: 'Marca'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'ann_unidad',
                            text: 'Año'
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                var valorRetorno = Ext.util.Format.number(value, '0,000.00');
                                return valorRetorno;
                            },
                            align: 'right',
                            dataIndex: 'precio_sin_iva',
                            text: 'Precio Unitario'
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'pagingtoolbar',
                            dock: 'bottom',
                            id: 'pagingToolbarGridCotizacionUnidad',
                            itemId: 'pagingToolbarGridCotizacionUnidad',
                            width: 360,
                            displayInfo: true,
                            store: 'storeCotizacionUnidad'
                        }
                    ],
                    listeners: {
                        itemclick: 'onGridCotizacionUnidadItemClick'
                    }
                },
                {
                    xtype: 'fieldset',
                    columnWidth: 0.65,
                    id: 'fieldsetAgregarUnidades',
                    itemId: 'fieldsetAgregarUnidades',
                    layout: 'column',
                    title: '<b>Agregar Unidades</b>',
                    items: [
                        {
                            xtype: 'textfield',
                            id: 'tfInsertarCodigo',
                            itemId: 'tfInsertarCodigo',
                            margin: '0 0 5 0',
                            fieldLabel: 'Codigo',
                            listeners: {
                                blur: 'onTfInsertarCodigoBlur'
                            }
                        },
                        {
                            xtype: 'button',
                            cls: 'botonZoomWindow',
                            id: 'btnZoomBuscaVin',
                            itemId: 'btnZoomBuscaVin',
                            width: 32,
                            iconCls: 'fa fa-search icon16 iconColorWhite',
                            listeners: {
                                click: 'onBtnZoomBuscaVinClick'
                            }
                        },
                        {
                            xtype: 'button',
                            cls: 'botonZoomWindow',
                            id: 'btnAgregarUnidad',
                            itemId: 'btnAgregarUnidad',
                            margin: '0 0 5 5',
                            width: 130,
                            iconCls: 'fa fa-plus icon16 iconColorWhite',
                            text: 'Agregar',
                            textAlign: 'left',
                            listeners: {
                                click: 'onBtnAgregarUnidadClick'
                            }
                        },
                        {
                            xtype: 'button',
                            handler: function(button, e) {
                                Ext.getCmp('formCotizacionUnidad').eliminarUnidadCotizacion();
                            },
                            cls: 'botonZoomWindow',
                            id: 'btnEliminarUnidad',
                            itemId: 'btnEliminarUnidad',
                            margin: '0 0 0 5',
                            width: 130,
                            iconCls: 'fa fa-trash icon16 iconColorWhite',
                            text: 'Eliminar',
                            textAlign: 'left'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    columnWidth: 0.3,
                    id: 'fieldsetTotales',
                    itemId: 'fieldsetTotales',
                    margin: '0 0 0 40',
                    minWidth: 300,
                    title: '<b>Totales</b>',
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            disabled: true,
                            disabledCls: 'disabledField',
                            id: 'tfValSubtotal',
                            itemId: 'tfValSubtotal',
                            fieldLabel: 'Subtotal',
                            labelAlign: 'right',
                            fieldCls: 'formatDecimal'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            disabled: true,
                            disabledCls: 'disabledField',
                            id: 'tfValImpuestos',
                            itemId: 'tfValImpuestos',
                            fieldLabel: 'Impuestos',
                            labelAlign: 'right',
                            fieldCls: 'formatDecimal'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            disabled: true,
                            disabledCls: 'disabledField',
                            id: 'tfValTotal',
                            itemId: 'tfValTotal',
                            fieldLabel: 'Total',
                            labelAlign: 'right',
                            fieldCls: 'formatDecimal'
                        }
                    ]
                }
            ]
        }
    ],

    onBtnCerrarCotizacionUnidadClick: function(button, e, eOpts) {
        elf.refreshGrid('gridCotizacion');
        elf.closeWindow('winCotizacionUnidad');
    },

    onBtnZoomBuscaClienteClick: function(button, e, eOpts) {
        elf.openWindow('winBuscaCliente');
        elf.refreshGrid('gridBuscaCliente');
    },

    onBtnIniciarCotizacionClick: function(button, e, eOpts) {
        if(elf.readElement('tfCodigoCliente') === ''){
            msgTipo      = 'error';
            msgTitulo    = 'Cliente no informado';
            msgContenido = 'Debe informar un Cliente válido para iniciar la generación de la Cotización.';
            elf.message(msgTipo,msgTitulo,msgContenido);
            return;
        }

        var apiController          = 'apiCotizacion';
        var apiMethod              = 'grabaCotizacion';
        var objJsonData            = new Object();
        objJsonData.tfCodigoCliente   = elf.readElement('tfCodigoCliente');
        objJsonData.tfFechaCotizacion = elf.readElement('tfFechaCotizacion');
        objJsonData.tfNoCotizacion    = elf.readElement('tfNoCotizacion');
        objJsonData.tfUsuario         = elf.readElement('tfUsuario');

        var objJsonRequest = new Object();
        objJsonRequest.apiController = apiController;
        objJsonRequest.apiMethod     = apiMethod;
        objJsonRequest.apiData       = JSON.stringify(objJsonData);

        var functionSuccess = function(){
            var jsonData = elf.getInfoDataBridge(apiMethod);
            console.warn('Success::grabaCotizacion:');
            console.warn(jsonData);

            elf.writeElement('tfNoCotizacion',jsonData.camposRegistro.num_cotizacion);

            elf.hideElement('btnIniciarCotizacion');
            elf.focusElement('tfInsertarCodigo');

        };

        var functionFailure = function(){
            var jsonData = elf.getInfoDataBridge(apiMethod);
            console.warn('Success::grabaCotizacion:');
            console.warn(jsonData);
        };

        elf.doDataBridge(objJsonRequest,
                         functionSuccess,
                         null,
                         functionFailure,
                         null);
    },

    onBtnImprimirCotizacionClick: function(button, e, eOpts) {
        var apiController = 'apiCotizacion';
        var apiMethod     = 'formatoCotizacion';
        var objJsonData   = new Object();
        objJsonData.numCotizacion = elf.readElement('tfNoCotizacion');

        var objJsonRequest = new Object();
        objJsonRequest.apiController = apiController;
        objJsonRequest.apiMethod     = apiMethod;
        objJsonRequest.apiData       = JSON.stringify(objJsonData);

        var functionSuccess = function(){
            var jsonData = elf.getInfoDataBridge('formatoCotizacion');
            var archivoGenerado = elf.getGeneratedFile(jsonData.archivoGenerado.nombre);
            window.open(archivoGenerado);
        };

        var functionFailure = function(){
            var jsonData = elf.getInfoDataBridge('formatoCotizacion');

            elf.showInfo(jsonData,'error');
        };


        elf.doDataBridge(objJsonRequest,
                         functionSuccess,
                         null,
                         functionFailure,
                         null);
    },

    onBtnEnviarCotizacionClick: function(button, e, eOpts) {
        if(elf.readElement('tfNoCotizacion') === ''){
            msgTipo      = 'error';
            msgTitulo    = 'Cotización no Valida';
            msgContenido = 'Debe seleccionar una Cotización Válida para realizar ésta operación.';
            elf.message(msgTipo,msgTitulo,msgContenido);
            return;
        }

        var apiController          = 'apiCotizacion';
        var apiMethod              = 'enviarCotizacion';
        var objJsonData            = new Object();
        objJsonData.tfNoCotizacion    = elf.readElement('tfNoCotizacion');

        var objJsonRequest = new Object();
        objJsonRequest.apiController = apiController;
        objJsonRequest.apiMethod     = apiMethod;
        objJsonRequest.apiData       = JSON.stringify(objJsonData);

        var functionSuccess = function(){
            var jsonData = elf.getInfoDataBridge(apiMethod);
            console.warn('Success::enviarCotizacion:');
            console.warn(jsonData);
        };

        var functionFailure = function(){
            var jsonData = elf.getInfoDataBridge(apiMethod);
            console.warn('Success::enviarCotizacion:');
            console.warn(jsonData);
        };

        elf.doDataBridge(objJsonRequest,
                         functionSuccess,
                         null,
                         functionFailure,
                         null);
    },

    onGridCotizacionUnidadItemClick: function(dataview, record, item, index, e, eOpts) {
        var gridCotizacionUnidad = Ext.getCmp('gridCotizacionUnidad');
        gridCotizacionUnidad.recordActivo = record.data;
    },

    onTfInsertarCodigoBlur: function(component, event, eOpts) {

    },

    onBtnZoomBuscaVinClick: function(button, e, eOpts) {
        elf.openWindow('winBuscaVin');

        var arrayCombos = new Array();
        arrayCombos.push('FiltroModelo');
        arrayCombos.push('FiltroMarca');
        arrayCombos.forEach(elf.loadCombos);
        elf.refreshGrid('gridBuscaVin');
    },

    onBtnAgregarUnidadClick: function(button, e, eOpts) {
        if(elf.readElement('tfInsertarCodigo') === ''){
            msgTipo      = 'error';
            msgTitulo    = 'Codigo de Unidad no informado';
            msgContenido = 'Debe informar un Código de Unidad válido para agregarlo a la Cotización.';
            elf.message(msgTipo,msgTitulo,msgContenido);
            return;
        }

        var apiController          = 'apiCotizacion';
        var apiMethod              = 'grabaUnidadCotizacion';
        var objJsonData            = new Object();
        objJsonData.tfNoCotizacion = elf.readElement('tfNoCotizacion');
        objJsonData.tfCodigoUnidad = elf.readElement('tfInsertarCodigo');

        var objJsonRequest = new Object();
        objJsonRequest.apiController = apiController;
        objJsonRequest.apiMethod     = apiMethod;
        objJsonRequest.apiData       = JSON.stringify(objJsonData);

        var functionSuccess = function(){
            var jsonData = elf.getInfoDataBridge(apiMethod);

            console.log(jsonData);

            var valor_subtotal = jsonData.hwtCotizacion[0].valor_subtotal;
            var valor_impuesto = jsonData.hwtCotizacion[0].valor_impuesto;
            var valor_total    = jsonData.hwtCotizacion[0].valor_total;

            elf.writeElement('tfValSubtotal'     ,Ext.util.Format.number(valor_subtotal , '0,000.00'));
            elf.writeElement('tfValImpuestos'    ,Ext.util.Format.number(valor_impuesto , '0,000.00'));
            elf.writeElement('tfValTotal'        ,Ext.util.Format.number(valor_total    , '0,000.00'));

            elf.refreshGrid('gridCotizacionUnidad');
            elf.writeElement('tfInsertarCodigo','');
        };

        var functionFailure = function(){
            var jsonData = elf.getInfoDataBridge(apiMethod);
            console.warn('Success::grabaCotizacion:');
            console.warn(jsonData);
        };

        elf.doDataBridge(objJsonRequest,
                         functionSuccess,
                         null,
                         functionFailure,
                         null);
    }

});