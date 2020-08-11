module.exports = {
  label: 'Una Imagen',
  addFields: [
    {
      name: 'image',
      label: 'Imagen',
      type: 'singleton',
      widgetType: 'apostrophe-images',
      options: {
        limit: 1
      }
    },
    {
      name: 'caption',
      label: 'Subtitulo',
      type: 'string'
    }
  ]
};
