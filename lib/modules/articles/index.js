module.exports = {
  name: 'article',
  label: 'Articulo',
  pluralLabel: 'Articulos',
  contextual: true,
  addFields: [
    {
      name: 'thumbnail',
      label: 'Foto',
      type: 'singleton',
      widgetType: 'apostrophe-images',
      options: {
        aspectRatio: [ 3, 2 ],
        limit: 1
      }
    }
  ],
  construct: function (self, options) {
    options.arrangeFields = options.arrangeFields.map(group => {
      if (group.name === 'basic') {
        group.fields.push('thumbnail');
      }
      return group;
    });
  }
};
