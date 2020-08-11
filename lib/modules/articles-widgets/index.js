const linkSchema = require('../link-widgets/lib/schema.js');
const linkTab = require('../link-widgets/lib/tab.js');
const _ = require('lodash');

module.exports = {
  label: 'Articulo',
  addFields: _.clone(linkSchema).concat([
    {
      name: 'headline',
      label: 'Titular',
      type: 'string',
      required: true
    }
  ]),
  arrangeFields: [
    {
      name: 'main',
      label: 'Principal',
      fields: ['headline', '_pieces', 'by', 'limitByAll', 'tags', 'limitByTag']
    },
    {
      name: 'link',
      label: 'Link',
      fields: _.clone(linkTab)
    }
  ]
};
