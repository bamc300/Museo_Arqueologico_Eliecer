module.exports = {
  label: 'Pagina defaul',
  name: 'default',
  addFields: [
    {
      name: 'masthead',
      label: '¿Mostrar masthead?',
      help: 'Esta es la banda de título púrpura que aparece sobre el contenido de la página.',
      type: 'boolean',
      choices: [
        { label: 'Yes', value: true },
        { label: 'No', value: false }
      ]
    },
    {
      name: 'peerNav',
      label: 'Mostrar navegación entre pares?',
      help: 'Esta es la lista de navegación de la izquierda.',
      type: 'boolean',
      choices: [
        { label: 'Yes', value: true },
        { label: 'No', value: false }
      ]
    }
  ],
  arrangeFields: [
    {
      name: 'admin',
      label: 'Admin',
      fields: [
        'masthead',
        'peerNav'
      ]
    }
  ]
};
