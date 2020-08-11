const linkSchema = require('../link-widgets/lib/schema.js');
const linkTab = require('../link-widgets/lib/tab.js');
const _ = require('lodash');

module.exports = {
  label: 'Eventos',
  addFields: _.clone(linkSchema).concat([
    {
      name: 'headline',
      label: 'Headline',
      type: 'string'
    }
  ]),
  arrangeFields: [
    {
      name: 'main',
      label: 'Main',
      fields: [ 'headline', '_pieces', 'by', 'limitByAll', 'tags', 'limitByTag' ]
    },
    {
      name: 'link',
      label: 'Link',
      fields: linkTab
    }
  ]
};
