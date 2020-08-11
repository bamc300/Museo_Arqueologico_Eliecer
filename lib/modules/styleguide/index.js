const lorem = require('lorem-ipsum');

module.exports = {
  extend: 'apostrophe-custom-pages',
  name: 'styleguide',
  alias: 'Guia de estilos',

  construct: function (self, options) {
    self.dispatch('/', function (req, callback) {
      req.template = self.renderer('styleguide', {
        nav: [
          { label: 'Colors', anchor: 'colors' },
          { label: 'Typography', anchor: 'type' },
          { label: 'UI', anchor: 'ui' },
          { label: 'Forms', anchor: 'forms' }
        ],
        colors: [
          { label: 'Oscuro', class: 'o-background-dark' },
          { label: 'Medio', class: 'o-background-med' },
          { label: 'Luz', class: 'o-background-light' },
          { label: 'Blanco', class: 'o-background-white' },
          { label: 'Marca primaria', class: 'o-background-brand-primary' },
          { label: 'Marca secundaria', class: 'o-background-brand-secondary' }
        ],
        type: [
          { label: 'Este es un título', class: 'o-title', content: lorem({ sentenceUpperBound: 5 }) },
          { label: 'Este es un encabezado de sección', class: 'o-section-header', content: lorem({ sentenceUpperBound: 5 }) },
          { label: 'Este es un titular', class: 'o-headline', content: lorem({ sentenceUpperBound: 5 }) },
          { label: 'Este es un subtítulo', class: 'o-subheadline', content: lorem({ sentenceUpperBound: 5 }) },
          { label: 'Esta es la información meta', class: 'o-meta', content: lorem({ sentenceUpperBound: 10 }) },
          { label: 'Esto es un lede', class: 'o-lede', content: lorem({ sentenceUpperBound: 10, count: 2 }) },
          { label: 'Esta es la copia del cuerpo', class: 'o-body', content: lorem({ count: 2, units: 'paragraphs' }) }
        ]
      });
      return callback(null);
    });

    self.apos.pages.park({
      title: 'Styleguide',
      type: 'styleguide',
      slug: '/styleguide',
      published: true,
      orphan: true
    });
  },

  afterConstruct: function (self) {
    self.pushAsset('stylesheet', 'styleguide', { when: 'always' });
  }
};
