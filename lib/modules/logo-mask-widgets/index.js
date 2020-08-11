module.exports = {
  label: 'Logo',
  addFields: [
    {
      name: 'image',
      label: 'Imagen',
      type: 'singleton',
      widgetType: 'apostrophe-images',
      options: {
        limit: 1
      }
    }
  ]
};
