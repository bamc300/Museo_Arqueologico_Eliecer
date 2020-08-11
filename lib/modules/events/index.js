const areas = require('../helpers/lib/areas.js');

module.exports = {
  name: 'event',
  label: 'Evento',
  pluralLabel: 'Eventos',
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
    },
    {
      name: '_location',
      label: 'Lugar del objeto',
      type: 'joinByOne',
      withType: 'location'
    },
    {
      name: 'body',
      label: 'Cuerpo',
      contextual: true,
      type: 'area',
      options: {
        widgets: areas.narrowWidgets
      }
    }
  ],
  construct: function (self, options) {
    options.arrangeFields = options.arrangeFields.map(group => {
      if (group.name === 'basic') {
        group.fields = group.fields.concat(['_location', 'thumbnail']);
      }
      return group;
    });
  }
};
