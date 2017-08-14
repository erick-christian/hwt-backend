/*
 * File: app/model/modelOportunidadVenta.js
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

Ext.define('hwtProOportunidadVenta.model.modelOportunidadVenta', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Field'
    ],

    fields: [
        {
            name: 'num_oportunidad'
        },
        {
            name: 'situacion_oportunidad'
        },
        {
            name: 'situacion_oportunidad_descripcion'
        },
        {
            name: 'codigo_gerente_regional'
        },
        {
            name: 'gerente_regional_nombre'
        },
        {
            name: 'codigo_vendedor'
        },
        {
            name: 'vendedor_nombre'
        },
        {
            name: 'visita_fecha'
        },
        {
            name: 'visita_semana'
        },
        {
            name: 'tipo_solicitante'
        },
        {
            name: 'tipo_solicitante_descripcion'
        },
        {
            name: 'tipo_empresa'
        },
        {
            name: 'tipo_empresa_descripcion'
        },
        {
            name: 'contacto_nombre'
        },
        {
            name: 'contacto_cargo'
        },
        {
            name: 'contacto_telefono'
        },
        {
            name: 'contacto_movil'
        },
        {
            name: 'contacto_email'
        },
        {
            name: 'codigo_consecionario'
        },
        {
            name: 'concesionario_descripcion'
        },
        {
            name: 'solicitud_pais'
        },
        {
            name: 'solicitud_pais_descripcion'
        },
        {
            name: 'solicitud_estado'
        },
        {
            name: 'solicitud_estado_descripcion'
        },
        {
            name: 'solicitud_municipio'
        },
        {
            name: 'solicitud_municipio_descripcion'
        },
        {
            name: 'solicitud_ciudad'
        },
        {
            name: 'solicitud_cp'
        },
        {
            name: 'cantidad_solicitada'
        },
        {
            name: 'cantidad_atendida'
        },
        {
            name: 'cantidad_saldo'
        },
        {
            name: 'marca'
        },
        {
            name: 'modelo'
        },
        {
            name: 'observaciones'
        },
        {
            name: 'codigo_cliente'
        },
        {
            name: 'razon_social'
        }
    ]
});