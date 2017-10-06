/*
 * File: app/view/formAplicacion.js
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

Ext.define('hwtProOportunidadVenta.view.formAplicacion', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formAplicacion',

    requires: [
        'hwtProOportunidadVenta.view.formAplicacionViewModel',
        'Ext.button.Button',
        'Ext.toolbar.Separator',
        'Ext.toolbar.Fill',
        'Ext.grid.Panel',
        'Ext.view.Table',
        'Ext.toolbar.Paging',
        'Ext.form.field.ComboBox',
        'Ext.grid.column.Column'
    ],

    viewModel: {
        type: 'formaplicacion'
    },
    id: 'formAplicacion',
    itemId: 'formAplicacion',
    bodyCls: 'formBackground',
    bodyPadding: 10,
    defaultListenerScope: true,

    dockedItems: [
        {
            xtype: 'toolbar',
            cls: 'toolbarBackground',
            dock: 'top',
            id: 'toolbarPrincipal',
            itemId: 'toolbarPrincipal',
            items: [
                {
                    xtype: 'button',
                    id: 'btnVisualizar',
                    itemId: 'btnVisualizar',
                    width: 130,
                    iconCls: 'fa fa-eye icon16 iconColorDarkBlue',
                    text: 'Visualizar',
                    textAlign: 'left',
                    listeners: {
                        click: 'onButtonClickVisualizar'
                    }
                },
                {
                    xtype: 'button',
                    id: 'btnBuscar',
                    itemId: 'btnBuscar',
                    width: 130,
                    iconCls: 'fa fa-search icon16 iconColorDarkBlue',
                    text: 'Buscar',
                    textAlign: 'left',
                    listeners: {
                        click: 'onButtonClickBuscar'
                    }
                },
                {
                    xtype: 'tbseparator',
                    width: 50
                },
                {
                    xtype: 'button',
                    id: 'btnCrear',
                    itemId: 'btnCrear',
                    width: 130,
                    iconCls: 'fa fa-plus-square icon16 iconColorGreen',
                    text: 'Crear',
                    textAlign: 'left',
                    listeners: {
                        click: 'onButtonClickCrear'
                    }
                },
                {
                    xtype: 'button',
                    id: 'btnActualizar',
                    itemId: 'btnActualizar',
                    width: 130,
                    iconCls: 'fa fa-pencil-square icon16 iconColorGreen',
                    text: 'Actualizar',
                    textAlign: 'left',
                    listeners: {
                        click: 'onButtonClickActualizar'
                    }
                },
                {
                    xtype: 'tbseparator',
                    width: 50
                },
                {
                    xtype: 'button',
                    id: 'btnEliminar',
                    itemId: 'btnEliminar',
                    width: 130,
                    iconCls: 'fa fa-trash icon16 iconColorDarkRed',
                    text: 'Eliminar',
                    textAlign: 'left',
                    listeners: {
                        click: 'onButtonClickEliminar'
                    }
                },
                {
                    xtype: 'button',
                    id: 'btnReporte',
                    itemId: 'btnReporte',
                    width: 130,
                    iconCls: 'fa fa-th  icon16 iconColorDarkBlue',
                    text: 'Reporte',
                    textAlign: 'left',
                    listeners: {
                        click: 'onButtonClickReporte'
                    }
                },
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'button',
                    id: 'btnSalir',
                    itemId: 'btnSalir',
                    width: 130,
                    iconCls: 'fa fa-external-link-square  icon16 iconColorRed',
                    text: 'Salir',
                    textAlign: 'left',
                    listeners: {
                        click: 'onButtonClickSalir'
                    }
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'gridpanel',
            reference: 'gridOportunidadVenta',
            id: 'gridOportunidadVenta',
            itemId: 'gridOportunidadVenta',
            title: 'Oportunidad de Venta',
            store: 'storeOportunidadVenta',
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    width: 360,
                    displayInfo: true,
                    store: 'storeOportunidadVenta',
                    items: [
                        {
                            xtype: 'combobox',
                            id: 'cbxSituacionOportunidad',
                            itemId: 'cbxSituacionOportunidad',
                            fieldLabel: 'Situación',
                            editable: false,
                            displayField: 'descripcion',
                            queryMode: 'local',
                            store: 'storeSituacionOportunidad',
                            valueField: 'codigo',
                            listeners: {
                                change: 'onCbxSituacionOportunidadChange'
                            }
                        },
                        {
                            xtype: 'button',
                            cls: 'botonZoomToolbar',
                            id: 'btnLimpiaBusqueda',
                            itemId: 'btnLimpiaBusqueda',
                            iconCls: 'fa fa-retweet icon16 iconColorDarkBlue',
                            text: 'Limpiar Busqueda',
                            listeners: {
                                click: 'onBtnLimpiaBusquedaClick'
                            }
                        }
                    ]
                }
            ],
            columns: [
                {
                    xtype: 'gridcolumn',
                    width: 90,
                    dataIndex: 'num_oportunidad',
                    locked: true,
                    text: 'Oportunidad'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'situacion_oportunidad_descripcion',
                    locked: true,
                    text: 'Situación'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'tipo_solicitante_descripcion',
                    text: 'Tipo</br>Solicitante'
                },
                {
                    xtype: 'gridcolumn',
                    width: 80,
                    dataIndex: 'codigo_cliente',
                    text: 'Cliente'
                },
                {
                    xtype: 'gridcolumn',
                    width: 200,
                    dataIndex: 'razon_social',
                    text: 'Razón Social'
                },
                {
                    xtype: 'gridcolumn',
                    width: 150,
                    dataIndex: 'tipo_empresa',
                    text: 'Tipo</br>Empresa'
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Visita',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            align: 'center',
                            dataIndex: 'visita_fecha',
                            text: 'Fecha'
                        },
                        {
                            xtype: 'gridcolumn',
                            align: 'center',
                            dataIndex: 'visita_semana',
                            text: 'Semana'
                        }
                    ]
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Cantidad de Unidades',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            width: 80,
                            align: 'right',
                            dataIndex: 'cantidad_solicitada',
                            text: 'Solicitadas'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 80,
                            align: 'right',
                            dataIndex: 'cantidad_atendida',
                            text: 'Atendidas'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 80,
                            align: 'right',
                            dataIndex: 'cantidad_saldo',
                            text: 'Saldo'
                        }
                    ]
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'marca',
                    text: 'Marca'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'modelo',
                    text: 'Modelo'
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Localizacion',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            width: 120,
                            dataIndex: 'solicitud_estado',
                            text: 'Estado'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 120,
                            dataIndex: 'solicitud_municipio',
                            text: 'Municipio'
                        }
                    ]
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Contacto',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            width: 150,
                            dataIndex: 'contacto_nombre',
                            text: 'Nombre'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 150,
                            dataIndex: 'contacto_cargo',
                            text: 'Cargo'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'contacto_telefono',
                            text: 'Telefono'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'contacto_movil',
                            text: 'Movil'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 200,
                            dataIndex: 'contacto_email',
                            text: 'Email'
                        }
                    ]
                },
                {
                    xtype: 'gridcolumn',
                    width: 150,
                    dataIndex: 'concesionario_descripcion',
                    text: 'Consecionario'
                },
                {
                    xtype: 'gridcolumn',
                    width: 150,
                    dataIndex: 'gerente_regional_nombre',
                    text: 'Gerente</br>Regional'
                },
                {
                    xtype: 'gridcolumn',
                    width: 120,
                    dataIndex: 'vendedor_nombre',
                    text: 'Vendedor'
                }
            ],
            listeners: {
                itemclick: 'onGridOportunidadVentaItemClick',
                itemdblclick: 'onGridOportunidadVentaItemDblClick'
            }
        }
    ],

    onButtonClickVisualizar: function(button, e, eOpts) {

    },

    onButtonClickBuscar: function(button, e, eOpts) {
        elf.openWindow('winBuscaOportunidad');
        Ext.getCmp('formBuscaOportunidad').preparaInterfaz();

    },

    onButtonClickCrear: function(button, e, eOpts) {
        elf.openWindow('winOportunidadVenta');
        Ext.getCmp('formOportunidadVenta').operacionOportunidadVenta = 'crear';
        Ext.getCmp('formOportunidadVenta').preparaInterfaz();
    },

    onButtonClickActualizar: function(button, e, eOpts) {

    },

    onButtonClickEliminar: function(button, e, eOpts) {

    },

    onButtonClickReporte: function(button, e, eOpts) {
        var apiController = 'apiOportunidadVenta';
        var apiMethod = 'reporteOportunidadVenta';
        var objJsonData = new Object();
        objJsonData.tipoEjecucion = 'REPORTE';

        var objJsonRequest = new Object();
        objJsonRequest.apiController = apiController;
        objJsonRequest.apiMethod = apiMethod;
        objJsonRequest.apiData = JSON.stringify(objJsonData);

        var functionSuccess = function () {
            var jsonData = elf.getInfoDataBridge('reporteOportunidadVenta');

            console.info('Archivo Generado:');
            console.info(jsonData);

            var archivoGenerado = elf.getGeneratedFile(jsonData.archivoGenerado.nombre);
            window.open(archivoGenerado);

            elf.deleteFileServer('../reporte/', jsonData.archivoGenerado.nombre + '.xlsx');
        };

        var functionFailure = function () {
            var jsonData = elf.getInfoDataBridge('reporteOportunidadVenta');
            elf.showInfo(jsonData, 'error');
        };

        elf.doDataBridge(objJsonRequest,
            functionSuccess,
            null,
            functionFailure,
            null);
    },

    onButtonClickSalir: function(button, e, eOpts) {
        elf.stopApp('hwtProOportunidadVenta');
    },

    onCbxSituacionOportunidadChange: function (field, newValue, oldValue, eOpts) {

    },

    onBtnLimpiaBusquedaClick: function (button, e, eOpts) {
        elf.refreshGrid('gridOportunidadVenta');
    },

    onGridOportunidadVentaItemClick: function (dataview, record, item, index, e, eOpts) {
        Ext.getCmp('gridOportunidadVenta').recordActivo = record.data;
    },

    onGridOportunidadVentaItemDblClick: function (dataview, record, item, index, e, eOpts) {
        Ext.getCmp('formAplicacion').presentaRegistro();
    },

    extraeOpcionesOportunidad: function () {
        var apiController = 'apiOportunidadVenta';
        var apiMethod = 'datosOpciones';
        var objJsonData = new Object();
        objJsonData.tipo = 'OpcionesOportunidadVenta';

        var objJsonRequest = new Object();
        objJsonRequest.apiController = apiController;
        objJsonRequest.apiMethod = apiMethod;
        objJsonRequest.apiData = JSON.stringify(objJsonData);

        var functionSuccess = function () {
            var jsonData = elf.getInfoDataBridge(apiMethod);

            var arrayCombos = new Array();
            var objConfig = new Object();

            objConfig.idComboBox = 'cbxSituacionOportunidad';
            objConfig.idDataBridge = 'datosOpciones';
            objConfig.id = 'opcionesSituacionOportunidad';
            objConfig.fieldValue = 'codigo';
            objConfig.fieldDisplay = 'descripcion';
            objConfig.filterValue = undefined;

            arrayCombos.push(objConfig);
            arrayCombos.forEach(elf.loadComboBoxConfig);

            elf.refreshGrid('gridOportunidadVenta');
        };

        var functionFailure = function () {
            var jsonData = elf.getInfoDataBridge(apiMethod);
        };

        elf.doDataBridge(objJsonRequest,
            functionSuccess,
            null,
            functionFailure,
            null);

    },

    presentaRegistro: function (pEstado) {
        registroActivo = Ext.getCmp('gridOportunidadVenta').recordActivo;

        var apiController = 'apiOportunidadVenta';
        var apiMethod = 'datosOportunidadVenta';
        var objJsonData = new Object();
        objJsonData.numOportunidadVenta = registroActivo.num_oportunidad;

        var objJsonRequest = new Object();
        objJsonRequest.apiController = apiController;
        objJsonRequest.apiMethod = apiMethod;
        objJsonRequest.apiData = JSON.stringify(objJsonData);

        var functionSuccess = function () {
            var jsonData = elf.getInfoDataBridge(apiMethod);

            var pModo = '';
            if (pEstado === 'editar') {
                pModo = 'edit';
            }

            elf.openWindow('winOportunidadVenta');
            /*
            var arrayCombos = new Array();
            arrayCombos.push('EstadoOportunidadVenta');
            arrayCombos.forEach(Ext.getCmp('formAplicacion').cargaCombo);
            */

            //ECRC: Función que se ejecuta después de que se carguen las Opciones
            var funcionCarga = function () {
                Ext.getCmp('formOportunidadVenta').operacionOportunidadVenta = 'edicion';
                Ext.getCmp('formOportunidadVenta').estadoRegistro = 'edicion';
                var jsonData = elf.getInfoDataBridge('datosOportunidadVenta');

                elf.showRecord(jsonData, 'hwtOportunidadVenta', 'edit');
            };

            Ext.getCmp('formOportunidadVenta').preparaInterfaz(funcionCarga);

            //ECRC: Después de que cargue las Opciones desplegará el Registro
            //Ext.getCmp('formAplicacion').cargaOpciones(funcionCarga);
        };

        var functionFailure = function () {
            var jsonData = elf.getInfoDataBridge(apiMethod);
            elf.showInfo(jsonData,
                'error');
        };

        elf.doDataBridge(objJsonRequest,
            functionSuccess,
            null,
            functionFailure,
            null);
    }

});