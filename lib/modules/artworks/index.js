const lorem = require('lorem-ipsum');

module.exports = {
  name: 'artwork',
  label: 'Exposicion',
  pluralLabel: 'Exposiciones',
  contextual: true,
  import: true,
  addFields: [
    {
      name: '_objectType',
      label: 'Tipo de objeto',
      type: 'joinByOne',
      withType: 'category-object-type',
      filters: {
        projection: {
          _url: 1,
          slug: 1,
          title: 1,
          type: 1
        }
      }
    },
    {
      name: '_location',
      label: 'Lugar del objeto',
      type: 'joinByOne',
      withType: 'location',
      filters: {
        projection: {
          _url: 1,
          slug: 1,
          title: 1,
          type: 1
        }
      }
    },
    {
      name: '_artist',
      label: 'Galeria',
      idField: 'artistId',
      type: 'joinByOne',
      withType: 'artist',
      withJoins: [ '_artworks' ],
      filters: {
        projection: {
          _url: 1,
          title: 1,
          description: 1,
          thumbnail: 1
        }
      }
    },
    {
      name: 'medium',
      label: 'Tribu',
      type: 'string'
    },
    {
      name: 'dimensions',
      label: 'Ciudad',
      type: 'string'
    },
    {
      name: 'year',
      label: 'Año',
      type: 'integer'
    },
    {
      name: 'thumbnail',
      label: 'Foto',
      type: 'singleton',
      widgetType: 'apostrophe-images',
      options: {
        limit: 1
      }
    },
    {
      name: 'description',
      label: 'Descripcion',
      type: 'string',
      textarea: true
    }
  ],
  arrangeFields: [
    {
      name: 'main',
      label: 'Contenido principal',
      fields: [
        '_artist',
        '_objectType',
        '_location',
        'medium',
        'dimensions',
        'year',
        'thumbnail',
        'description'
      ]
    }
  ],
  construct: function (self, options) {
    // Overriding importBeforeInsert from the apostrophe-pieces-import module.
    // Doc: https://github.com/apostrophecms/apostrophe-pieces-import#extending-the-import-process-for-your-type
    self.importBeforeInsert = function (job, record, piece, callback) {
      // Have to force in joined Ids
      if (record.objectTypeId) {
        piece.objectTypeId = record.objectTypeId;
      }

      if (record.locationId) {
        piece.locationId = record.locationId;
      }

      if (record.artistId) {
        piece.artistId = record.artistId;
      }

      piece.openGraphTitle = record.title + ' | MuseoDelSol on ApostropheCMS';
      piece.seoTitle = record.title + ' | MuseoDelSol on ApostropheCMS';
      piece.seoDescription = 'MuseoDelSol is an ApostropheCMS demo website, more at http://apostrophecms.org';
      piece.openGraphDescription = 'MuseoDelSol is an ApostropheCMS demo website, more at http://apostrophecms.org';

      for (let key in record) {
        if (record.hasOwnProperty(key)) {
          if (record[key] === '%LORUM%') {
            piece[key] = lorem({
              sentenceUpperBound: 10,
              count: 2,
              units: 'paragraphs'
            });
          }
        }
      }
      return callback(null);
    };
  }
};
