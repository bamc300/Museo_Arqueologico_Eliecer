const areas = require('../helpers/lib/areas.js');
const _ = require('lodash');

module.exports = {
  name: 'artist',
  label: 'Galeria',
  pluralLabel: 'Galerias',
  contextual: true,
  sort: {
    title: 1
  },
  addFields: [
    {
      name: 'description',
      label: 'Corta descripcion',
      help: 'Breve descripcion De la imagen',
      type: 'string',
      textarea: true
    },
    {
      name: 'thumbnail',
      label: 'Foto',
      type: 'singleton',
      widgetType: 'apostrophe-images',
      options: {
        limit: 1,
        aspectRatio: [ 1, 1 ]
      }
    },
    {
      name: 'lifetime',
      label: 'Tiempo en que se descubrio',
      help: 'Años de descubrimento ejemplo 1840',
      type: 'string'
    },
    {
      name: 'nationality',
      label: 'Ciudad',
      type: 'string'
    },
    {
      name: 'movement',
      label: 'Tribu',
      help: 'Tribu del objeto',
      type: 'string'
    },
    {
      name: 'body',
      label: 'Cuerpo',
      contextual: true,
      type: 'area',
      options: {
        widgets: _.clone(areas.narrowWidgets)
      }
    },
    {
      name: 'extra',
      label: 'Extra',
      contextual: true,
      type: 'area',
      options: {
        widgets: _.clone(areas.baseWidgets)
      }
    },
    {
      // Access to all the works of this artist — but for performance,
      // only fetch them if we are fetching just one artist
      name: '_artworks',
      label: 'Exposicion',
      type: 'joinByOneReverse',
      withType: 'artwork',
      idField: 'artistId',
      ifOnlyOne: true
    }
  ],
  arrangeFields: [
    {
      name: 'main',
      label: 'Contenido Principal',
      fields: [
        'description',
        'thumbnail',
        'lifetime',
        'nationality',
        'movement'
      ]
    }
  ]
};
