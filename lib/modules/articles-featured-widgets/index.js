module.exports = {
  label: 'Featured Article Widget',
  addFields: [
    {
      name: 'label',
      label: 'Metaetiqueta',
      help: 'Pequeña meta descripción para el contexto del widget',
      type: 'string'
    },
    {
      name: 'description',
      label: 'Breve descripción',
      type: 'string',
      help: 'Descripción breve personalizada opcional',
      textarea: true
    },
    {
      name: '_article',
      label: 'Artículo para presentar',
      type: 'joinByOne',
      withType: 'article',
      filters: {
        projection: {
          _url: 1,
          slug: 1,
          title: 1,
          type: 1,
          publishedAt: 1,
          tags: 1,
          thumbnail: 1
        }
      }
    }
  ]
};
