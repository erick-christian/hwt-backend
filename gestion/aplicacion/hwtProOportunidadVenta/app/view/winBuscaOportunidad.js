/*
 * File: app/view/winBuscaOportunidad.js
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

Ext.define('hwtProOportunidadVenta.view.winBuscaOportunidad', {
    extend: 'Ext.window.Window',
    alias: 'widget.winBuscaOportunidad',

    requires: [
        'hwtProOportunidadVenta.view.winBuscaOportunidadViewModel',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.button.Button',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Fill'
    ],

    viewModel: {
        type: 'winbuscaoportunidad'
    },
    modal: true,
    id: 'winBuscaOportunidad',
    itemId: 'winBuscaOportunidad',
    width: 550,
    bodyCls: 'formBackground',
    closable: false,
    title: 'Busca Oportunidad de Venta',
    defaultListenerScope: true,

    items: [
        {
            xtype: 'form',
            preparaInterfaz: function () {
                var arrayCombos = new Array();

                var objConfig = new Object();
                objConfig.idComboBox = 'cbxBuscaSituacionInicial';
                objConfig.idDataBridge = 'datosOpciones';
                objConfig.id = 'opcionesSituacionOportunidad';
                objConfig.fieldValue = 'codigo';
                objConfig.fieldDisplay = 'descripcion';
                objConfig.filterValue = undefined;
                arrayCombos.push(objConfig);

                var objConfig = new Object();
                objConfig.idComboBox = 'cbxBuscaSituacionFinal';
                objConfig.idDataBridge = 'datosOpciones';
                objConfig.id = 'opcionesSituacionOportunidad';
                objConfig.fieldValue = 'codigo';
                objConfig.fieldDisplay = 'descripcion';
                objConfig.filterValue = undefined;
                arrayCombos.push(objConfig);

                var objConfig = new Object();
                objConfig.idComboBox = 'cbxBuscaMarca';
                objConfig.idDataBridge = 'datosOpciones';
                objConfig.id = 'opcionesMarca';
                objConfig.fieldValue = 'codigo';
                objConfig.fieldDisplay = 'descripcion';
                objConfig.filterValue = undefined;
                arrayCombos.push(objConfig);

                var objConfig = new Object();
                objConfig.idComboBox = 'cbxBuscaModelo';
                objConfig.idDataBridge = 'datosOpciones';
                objConfig.id = 'opcionesModelo';
                objConfig.fieldValue = 'codigo';
                objConfig.fieldDisplay = 'descripcion';
                objConfig.filterValue = undefined;
                arrayCombos.push(objConfig);

                var objConfig = new Object();
                objConfig.idComboBox = 'cbxBuscaConsecionario';
                objConfig.idDataBridge = 'datosOpciones';
                objConfig.id = 'opcionesConsecionario';
                objConfig.fieldValue = 'codigo_consecionario';
                objConfig.fieldDisplay = 'descripcion';
                objConfig.filterValue = undefined;
                arrayCombos.push(objConfig);

                var objConfig = new Object();
                objConfig.idComboBox = 'cbxBuscaConsecionario';
                objConfig.idDataBridge = 'datosOpciones';
                objConfig.id = 'opcionesConsecionario';
                objConfig.fieldValue = 'codigo_consecionario';
                objConfig.fieldDisplay = 'descripcion';
                objConfig.filterValue = undefined;
                arrayCombos.push(objConfig);

                var objConfig = new Object();
                objConfig.idComboBox = 'cbxBuscaGerenteRegional';
                objConfig.idDataBridge = 'datosOpciones';
                objConfig.id = 'opcionesGerenteRegional';
                objConfig.fieldValue = 'usuario';
                objConfig.fieldDisplay = 'nombre';
                objConfig.filterValue = undefined;
                arrayCombos.push(objConfig);

                var objConfig = new Object();
                objConfig.idComboBox = 'cbxBuscaVendedor';
                objConfig.idDataBridge = 'datosOpciones';
                objConfig.id = 'opcionesVendedor';
                objConfig.fieldValue = 'usuario';
                objConfig.fieldDisplay = 'nombre';
                objConfig.filterValue = undefined;
                arrayCombos.push(objConfig);

                arrayCombos.forEach(elf.loadComboBoxConfig);

                var fechaActual = new Date();
                elf.writeElement('dtBuscaFechaInicial', fechaActual);
                elf.writeElement('dtBuscaFechaFinal', fechaActual);
            },
            id: 'formBuscaOportunidad',
            itemId: 'formBuscaOportunidad',
            bodyCls: 'formBackground',
            bodyPadding: 10,
            items: [
                {
                    xtype: 'fieldset',
                    id: 'fieldsetFiltroCliente',
                    itemId: 'fieldsetFiltroCliente',
                    layout: 'column',
                    title: '<b>Filtro de Cliente</b>',
                    items: [
                        {
                            xtype: 'textfield',
                            columnWidth: 0.5,
                            id: 'tfBuscaCodCliente',
                            itemId: 'tfBuscaCodCliente',
                            margin: '0 3 3 0',
                            fieldLabel: 'Cliente'
                        },
                        {
                            xtype: 'button',
                            cls: 'botonZoomWindow',
                            id: 'btnZoomBuscaCliente',
                            itemId: 'btnZoomBuscaCliente',
                            minWidth: 0.04,
                            width: 30,
                            iconCls: 'fa fa-search icon16 iconColorWhite',
                            listeners: {
                                click: 'onBtnZoomBuscaClienteClick'
                            }
                        },
                        {
                            xtype: 'textfield',
                            columnWidth: 1,
                            id: 'tfBuscaRazonSocial',
                            itemId: 'tfBuscaRazonSocial',
                            margin: '0 0 3 0',
                            fieldLabel: 'Razón Social'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    id: 'fieldsetFiltroSituacion',
                    itemId: 'fieldsetFiltroSituacion',
                    layout: 'column',
                    title: '<b>Filtro de Situación</b>',
                    items: [
                        {
                            xtype: 'combobox',
                            columnWidth: 0.5,
                            id: 'cbxBuscaSituacionInicial',
                            itemId: 'cbxBuscaSituacionInicial',
                            margin: '0 0 3 0',
                            fieldLabel: 'Situación Inicial',
                            editable: false,
                            displayField: 'descripcion',
                            queryMode: 'local',
                            store: 'storeSituacionOportunidad',
                            valueField: 'codigo'
                        },
                        {
                            xtype: 'combobox',
                            columnWidth: 0.5,
                            id: 'cbxBuscaSituacionFinal',
                            itemId: 'cbxBuscaSituacionFinal',
                            margin: '0 0 3 5',
                            fieldLabel: 'Situación Final',
                            editable: false,
                            displayField: 'descripcion',
                            queryMode: 'local',
                            store: 'storeSituacionOportunidad',
                            valueField: 'codigo'
                        },
                        {
                            xtype: 'datefield',
                            columnWidth: 0.5,
                            id: 'dtBuscaFechaInicial',
                            itemId: 'dtBuscaFechaInicial',
                            margin: '0 0 3 0',
                            fieldLabel: 'Fecha Inicial'
                        },
                        {
                            xtype: 'datefield',
                            columnWidth: 0.5,
                            id: 'dtBuscaFechaFinal',
                            itemId: 'dtBuscaFechaFinal',
                            margin: '0 0 3 5',
                            fieldLabel: 'Fecha Final'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    id: 'fieldsetFiltroUnidad',
                    layout: 'column',
                    title: '<b>Filtro de Unidad</b>',
                    items: [
                        {
                            xtype: 'combobox',
                            columnWidth: 1,
                            id: 'cbxBuscaMarca',
                            itemId: 'cbxBuscaMarca',
                            margin: '0 0 3 0',
                            fieldLabel: 'Marca',
                            editable: false,
                            displayField: 'descripcion',
                            queryMode: 'local',
                            store: 'storeMarca',
                            valueField: 'codigo'
                        },
                        {
                            xtype: 'combobox',
                            columnWidth: 1,
                            id: 'cbxBuscaModelo',
                            itemId: 'cbxBuscaModelo',
                            margin: '0 0 3 0',
                            fieldLabel: 'Modelo',
                            editable: false,
                            displayField: 'descripcion',
                            queryMode: 'local',
                            store: 'storeModelo',
                            valueField: 'codigo'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    id: 'fieldsetFiltroVentas',
                    itemId: 'fieldsetFiltroVentas',
                    layout: 'column',
                    title: '<b>Filtro de Ventas</b>',
                    items: [
                        {
                            xtype: 'combobox',
                            columnWidth: 1,
                            id: 'cbxBuscaConsecionario',
                            itemId: 'cbxBuscaConsecionario',
                            margin: '0 0 3 0',
                            fieldLabel: 'Consecionario',
                            editable: false,
                            displayField: 'descripcion',
                            queryMode: 'local',
                            store: 'storeCodigoConsecionario',
                            valueField: 'codigo_consecionario'
                        },
                        {
                            xtype: 'combobox',
                            columnWidth: 1,
                            id: 'cbxBuscaGerenteRegional',
                            itemId: 'cbxBuscaGerenteRegional',
                            margin: '0 0 3 0',
                            fieldLabel: 'Gerente Regional',
                            editable: false,
                            displayField: 'nombre',
                            queryMode: 'local',
                            store: 'storeCodigoGerenteRegional',
                            valueField: 'usuario'
                        },
                        {
                            xtype: 'combobox',
                            columnWidth: 1,
                            id: 'cbxBuscaVendedor',
                            itemId: 'cbxBuscaVendedor',
                            margin: '0 0 3 0',
                            fieldLabel: 'Vendedor',
                            editable: false,
                            displayField: 'nombre',
                            queryMode: 'local',
                            store: 'storeCodigoVendedor',
                            valueField: 'usuario'
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    cls: 'toolbarBackground',
                    id: 'toolbarBuscaOportunidad',
                    itemId: 'toolbarBuscaOportunidad',
                    items: [
                        {
                            xtype: 'button',
                            id: 'btnBuscarOportunidad',
                            itemId: 'btnBuscarOportunidad',
                            width: 130,
                            iconCls: 'fa fa-search icon16 iconColorGreen',
                            text: 'Buscar',
                            textAlign: 'left',
                            listeners: {
                                click: 'onBtnBuscarOportunidadClick'
                            }
                        },
                        {
                            xtype: 'tbfill',
                            id: 'fillCerrarOportunidad',
                            itemId: 'fillCerrarOportunidad'
                        },
                        {
                            xtype: 'button',
                            id: 'btnBuscarOportunidadCerrar',
                            itemId: 'btnBuscarOportunidadCerrar',
                            width: 130,
                            iconCls: 'fa fa-window-close icon16 iconColorRed',
                            text: 'Cerrar',
                            textAlign: 'left',
                            listeners: {
                                click: 'onBtnBuscarOportunidadCerrarClick'
                            }
                        }
                    ]
                }
            ]
        }
    ],

    onBtnZoomBuscaClienteClick: function (button, e, eOpts) {
        var arrayCamposDespliegue = new Array();

        var objCampo = new Object();
        objCampo.campoForm = 'tfBuscaCodCliente';
        objCampo.campoDato = 'codigo_cliente';
        arrayCamposDespliegue.push(objCampo);

        var objCampo = new Object();
        objCampo.campoForm = 'tfBuscaRazonSocial';
        objCampo.campoDato = 'razon_social';
        arrayCamposDespliegue.push(objCampo);

        elf.openWindow('winBuscaCliente');

        Ext.getCmp('formBuscaCliente').arrayCamposDespliegue = arrayCamposDespliegue;

        elf.refreshGrid('gridBuscaCliente');
    },

    onBtnBuscarOportunidadClick: function (button, e, eOpts) {
        var arrayBusqueda = new Array();
        arrayBusqueda.push('tfBuscaCodCliente');
        arrayBusqueda.push('tfBuscaRazonSocial');
        arrayBusqueda.push('cbxBuscaSituacionInicial');
        arrayBusqueda.push('cbxBuscaSituacionFinal');
        arrayBusqueda.push('dtBuscaFechaInicial');
        arrayBusqueda.push('dtBuscaFechaFinal');
        arrayBusqueda.push('cbxBuscaMarca');
        arrayBusqueda.push('cbxBuscaModelo');
        arrayBusqueda.push('cbxBuscaConsecionario');
        arrayBusqueda.push('cbxBuscaGerenteRegional');
        arrayBusqueda.push('cbxBuscaVendedor');

        Ext.getStore('storeOportunidadVenta').arrayBusqueda = arrayBusqueda;
        elf.refreshGrid('gridOportunidadVenta');


    },

    onBtnBuscarOportunidadCerrarClick: function (button, e, eOpts) {
        Ext.getStore('storeOportunidadVenta').arrayBusqueda = undefined;
        elf.closeWindow('winBuscaOportunidad');
    }

});