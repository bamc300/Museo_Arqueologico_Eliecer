module.exports = {
  label: 'Mapa',
  addFields: [
    {
      name: '_locations',
      label: 'Lugares para mostrar',
      type: 'joinByArray',
      withType: 'location'
    }
  ],
  construct: function (self, options) {
    // This hydrates joins and returns them to the front-end player's `data` param
    self.filterForDataAttribute = function (widget) { return widget; };
    const superGetCreateSingletonOptions = self.getCreateSingletonOptions;
    self.getCreateSingletonOptions = function (req) {
      // We are interested in the mapquest options given to the
      // corresponding pieces module
      const locations = self.apos.modules.locations;
      let browserOptions = superGetCreateSingletonOptions(req);
      if (locations.options.mapQuest) {
        browserOptions.mapQuestKey = locations.options.mapQuest.key;
      } else {
        console.warn('ADVERTENCIA: ubicaciones-widgets no tiene clave MapQuest, ver README');
      }
      return browserOptions;
    };
  }
};
