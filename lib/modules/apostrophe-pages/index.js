// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu

module.exports = {
  filters: {
    // Grab our ancestor pages, with two levels of subpages
    ancestors: {
      children: {
        depth: 2
      }
    },
    // We usually want children of the current page, too
    children: true
  },
  park: [
    {
      title: 'Buscar',
      slug: '/search',
      type: 'apostrophe-search',
      label: 'Buscar',
      published: true
    }
  ],
  types: [
    {
      name: 'home',
      label: 'Home'
    },
    {
      name: 'Reservas_museo_arqueológico_Eliecer_Silva_Celis.html',
      label: 'Reservas'
    },
    {
      name: 'default',
      label: 'Default'
    },
    {
      name: 'Guia de estilos',
      label: 'Guia de estilos'
    },
    {
      label: 'Colecciones',
      name: 'artwork-pages'
    },
    {
      label: 'Galeria',
      name: 'artist-pages'
    },
    {
      label: 'Personas',
      name: 'people-pages'
    },
    {
      label: 'ubicacion',
      name: 'location-pages'
    },
    {
      label: 'Blog',
      name: 'article-pages'
    },
    {
      label: 'Eventos',
      name: 'event-pages'
    }

    // Add more page types here, but make sure you create a corresponding
    // template in lib/modules/apostrophe-pages/views/pages! An exception:
    // "pieces pages" like `event-pages` are rendered via the `views/index.html`
    // and `views/show.html` templates of those modules.
  ]
};
