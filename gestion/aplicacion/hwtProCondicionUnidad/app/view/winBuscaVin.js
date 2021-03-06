/*
 * File: app/view/winBuscaVin.js
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

Ext.define('hwtProCondicionUnidad.view.winBuscaVin', {
    extend: 'Ext.window.Window',
    alias: 'widget.winBuscaVin',

    requires: [
        'hwtProCondicionUnidad.view.winBuscaVinViewModel',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.form.field.ComboBox',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.view.Table',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Column',
        'Ext.toolbar.Fill'
    ],

    viewModel: {
        type: 'winbuscavin'
    },
    modal: true,
    height: 500,
    id: 'winBuscaVin',
    itemId: 'winBuscaVin',
    width: 600,
    layout: 'column',
    closable: false,
    title: 'Busca Unidades (VIN)',
    defaultListenerScope: true,

    items: [
        {
            xtype: 'form',
            seleccionaRegistro: function() {
                registroVin = Ext.getCmp('gridBuscaVin').recordActivo;
                console.warn(registroVin);

                elf.writeElement('tfVin',registroVin.vin);
                elf.closeWindow('winBuscaVin');

            },
            columnWidth: 1,
            id: 'formBuscaVin',
            itemId: 'formBuscaVin',
            layout: 'column',
            bodyCls: 'formBackground',
            bodyPadding: 10,
            items: [
                {
                    xtype: 'fieldset',
                    columnWidth: 1,
                    border: 0,
                    layout: 'column',
                    items: [
                        {
                            xtype: 'fieldset',
                            columnWidth: 0.7,
                            title: '<b>Parametros de Búsqueda</b>',
                            items: [
                                {
                                    xtype: 'combobox',
                                    anchor: '100%',
                                    id: 'cbxFiltroMarca',
                                    itemId: 'cbxFiltroMarca',
                                    fieldLabel: 'Marca',
                                    editable: false,
                                    displayField: 'descripcion',
                                    queryMode: 'local',
                                    store: 'storeFiltroMarca',
                                    valueField: 'descripcion'
                                },
                                {
                                    xtype: 'combobox',
                                    anchor: '100%',
                                    id: 'cbxFiltroModelo',
                                    itemId: 'cbxFiltroModelo',
                                    fieldLabel: 'Modelo',
                                    editable: false,
                                    displayField: 'descripcion',
                                    queryMode: 'local',
                                    store: 'storeFiltroModelo',
                                    valueField: 'descripcion'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    id: 'tfBuscaVin',
                                    itemId: 'tfBuscaVin',
                                    fieldLabel: 'VIN'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            columnWidth: 0.3,
                            margin: '9 0 0 5',
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'button',
                                    columnWidth: 1,
                                    cls: 'botonZoom',
                                    id: 'btnBuscarUnidades',
                                    itemId: 'btnBuscarUnidades',
                                    margin: '9 0 63',
                                    maxWidth: 150,
                                    iconCls: 'fa fa-search icon16 iconColorWhite',
                                    text: 'Buscar Unidades',
                                    textAlign: 'left',
                                    listeners: {
                                        click: 'onBtnBuscarUnidadesClick'
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'gridpanel',
                    columnWidth: 1,
                    height: 285,
                    id: 'gridBuscaVin',
                    itemId: 'gridBuscaVin',
                    margin: '-10 0 0 0',
                    title: 'Unidades',
                    forceFit: true,
                    store: 'storeBuscaVin',
                    dockedItems: [
                        {
                            xtype: 'pagingtoolbar',
                            dock: 'bottom',
                            width: 360,
                            displayInfo: true,
                            store: 'storeBuscaVin'
                        }
                    ],
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            id: 'idxvin',
                            itemId: 'idxvin',
                            width: 140,
                            dataIndex: 'vin',
                            text: 'Vin'
                        },
                        {
                            xtype: 'gridcolumn',
                            id: 'marca',
                            itemId: 'marca',
                            width: 120,
                            dataIndex: 'marca',
                            text: 'Marca'
                        },
                        {
                            xtype: 'gridcolumn',
                            id: 'modelo',
                            itemId: 'modelo',
                            width: 80,
                            dataIndex: 'modelo',
                            text: 'Modelo'
                        },
                        {
                            xtype: 'gridcolumn',
                            id: 'ann_unidad',
                            itemId: 'ann_unidad',
                            width: 80,
                            dataIndex: 'ann_unidad',
                            text: 'Año'
                        }
                    ],
                    listeners: {
                        itemclick: 'onGridBuscaVinItemClick',
                        itemdblclick: 'onGridBuscaVinItemDblClick'
                    }
                }
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            cls: 'toolbarBackground',
            dock: 'bottom',
            items: [
                {
                    xtype: 'button',
                    id: 'btnBuscaVinConfirmar',
                    itemId: 'btnBuscaVinConfirmar',
                    width: 130,
                    iconCls: 'fa fa-check-square icon16 iconColorGreen',
                    text: 'Confirmar',
                    textAlign: 'left',
                    listeners: {
                        click: 'onBtnBuscaVinConfirmarClick'
                    }
                },
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'button',
                    id: 'btnBuscaVinCerrar',
                    itemId: 'btnBuscaVinCerrar',
                    width: 130,
                    iconCls: 'fa fa-window-close icon16 iconColorRed',
                    text: 'Cerrar',
                    textAlign: 'left',
                    listeners: {
                        click: 'onBtnBuscaVinCerrarClick'
                    }
                }
            ]
        }
    ],

    onBtnBuscarUnidadesClick: function(button, e, eOpts) {
        elf.refreshGrid('gridBuscaVin');
    },

    onGridBuscaVinItemClick: function(dataview, record, item, index, e, eOpts) {
        Ext.getCmp('gridBuscaVin').recordActivo = record.data;
    },

    onGridBuscaVinItemDblClick: function(dataview, record, item, index, e, eOpts) {
        Ext.getCmp('formBuscaVin').seleccionaRegistro();
    },

    onBtnBuscaVinConfirmarClick: function(button, e, eOpts) {
        Ext.getCmp('formBuscaVin').seleccionaRegistro();
    },

    onBtnBuscaVinCerrarClick: function(button, e, eOpts) {
        elf.closeWindow('winBuscaVin');
    }

});