module.exports = {
  name: 'person',
  label: 'Persona',
  pluralLabel: 'Personas',
  addFields: [
    {
      name: 'thumbnail',
      label: 'Foto',
      type: 'singleton',
      widgetType: 'apostrophe-images',
      options: {
        aspectRatio: [ 1, 1 ],
        minSize: [ 300, 300 ],
        limit: 1
      }
    },
    {
      name: 'role',
      label: 'Rol',
      type: 'string'
    },
    {
      name: 'description',
      label: 'Descripcion',
      type: 'string',
      textarea: true
    }
  ],
  arrangeFields: [
    {
      name: 'details',
      label: 'Detalles',
      fields: [
        'role',
        'thumbnail',
        'description'
      ]
    }
  ]
};
