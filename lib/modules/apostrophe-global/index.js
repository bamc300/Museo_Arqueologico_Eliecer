module.exports = {
  addFields: [
    {
      name: 'logoImages',
      label: 'Imagenes de logotipos enmascarados',
      help: 'En la carga de la página, elija uno al azar y enmascárelo con el logomark',
      type: 'singleton',
      widgetType: 'apostrophe-images'
    },
    {
      name: 'demoMode',
      label: '¿Habilitar el modo de demostración?',
      help: 'Esto activará las ventanas modales introductorias cuando llegue un usuario por primera vez, presentándoles ApostrpoheCMS',
      type: 'boolean',
      choices: [
        { label: 'No', value: false },
        { label: 'Yes', value: true }
      ]
    },
    {
      name: 'trackingID',
      label: 'ID de seguimiento de Google Analytics',
      help: 'Si está presente, se rastreará el tráfico a esta propiedad de Google Analytics.',
      type: 'string'
    }
  ],
  arrangeFields: [
    {
      name: 'navigation',
      label: 'Navegacion',
      fields: [
        'logoImages'
      ]
    },
    {
      name: 'admin',
      label: 'Admin',
      fields: [
        'demoMode',
        'trackingID'
      ]
    }
  ]
};
