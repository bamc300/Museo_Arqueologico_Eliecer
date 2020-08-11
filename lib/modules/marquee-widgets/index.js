const areas = require('../helpers/lib/areas.js');
const _ = require('lodash');

module.exports = {
  label: 'Marco',
  skipInitialModal: true,
  addFields: [
    {
      contextual: true,
      name: 'image',
      label: 'Imagen de banner',
      type: 'singleton',
      widgetType: 'apostrophe-images',
      controls: {
        position: 'top-right'
      },
      options: {
        aspectRatio: [ 1, 0.55 ],
        minSize: [ 1400, 770 ],
        limit: 1,
        template: 'single'
      }
    },
    {
      contextual: true,
      name: 'content',
      label: 'Contenido',
      type: 'area',
      options: {
        widgets: {
          'apostrophe-rich-text': {
            toolbar: _.clone(areas.baseToolbar),
            styles: _.clone(areas.baseStyles)
          },
          'link': {}
        }
      }
    },
    {
      name: 'screen',
      label: 'Transparencia de superposición de pantalla',
      help: 'Esto oscurece o ilumina la imagen, creando más o menos contraste para el contenido.',
      type: 'select',
      choices: [
        { label: '0% (Fully Transparent)', value: '0' },
        { label: '20%', value: '0.2' },
        { label: '40%', value: '0.4' },
        { label: '60%', value: '0.6' },
        { label: '80%', value: '0.8' },
        { label: '100% (Fully opaque)', value: '1' }
      ]
    }
  ]
};
