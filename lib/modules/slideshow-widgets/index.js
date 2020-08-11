module.exports = {
  label: 'Slideshow',
  addFields: [
    {
      name: 'imageType',
      label: 'Que tipo de imagen es',
      type: 'select',
      choices: [
        { label: 'Libreria de Media', value: 'media', showFields: [ 'images' ] },
        { label: 'Expocicion', value: 'artworks', showFields: [ '_artworks' ] }
      ]
    },
    {
      name: 'title',
      label: 'Titulo de la galeria',
      type: 'string'
    },
    {
      name: 'images',
      label: 'Imagenes',
      type: 'singleton',
      widgetType: 'apostrophe-images',
      options: {
        aspectRatio: false
      }
    },
    {
      name: '_artworks',
      label: 'Expocicion',
      type: 'joinByArray',
      withType: 'apostrophe-page',
      filters: {
        projection: {
          // _url: 1 gets us slug, type, tags and anything else essential
          // to populating the _url property
          _url: 1,
          title: 1
        }
      }
    }
  ]
};
