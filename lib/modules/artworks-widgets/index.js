module.exports = {
  label: 'Colecciones',
  addFields: [
    {
      name: 'title',
      label: 'Titulo',
      type: 'string'
    },
    {
      name: '_page',
      label: 'Página para vincular',
      type: 'joinByOne',
      withType: 'apostrophe-page',
      filters: {
        projection: {
          // _url: 1 gives us slug, type, tags and whatever is currently
          // considered essential to populate _url properly
          _url: 1,
          title: 1
        }
      }
    }
  ],
  arrangeFields: [
    {
      name: 'basics',
      label: 'Basico',
      fields: [
        'title',
        'by',
        '_pieces',
        'limitByAll',
        'tags',
        'limitByTag',
        '_page'
      ]
    }
  ]
};
