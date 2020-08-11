module.exports = {
  label: 'Contenido Mixto',
  addFields: [
    {
      name: 'headline',
      label: 'Titular',
      type: 'string'
    },
    {
      name: '_content',
      label: 'Contenido para vincular',
      type: 'joinByArray',
      withType: ['artwork', 'artist', 'article', 'event'],
      filters: {
        projection: {
          _url: 1,
          slug: 1,
          title: 1,
          type: 1,
          thumbnail: 1,
          year: 1
        }
      }
    }
  ]
};
