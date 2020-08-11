const _ = require('lodash');
const {baseWidgets} = require('../helpers/lib/areas.js');

const columnWidgets = _.cloneDeep(baseWidgets);
delete columnWidgets.columns;

module.exports = {
  label: 'Columnas',
  skipInitialModal: true,
  addFields: [
    {
      name: 'config',
      label: 'Configuracion',
      type: 'select',
      def: 'two',
      choices: [
        { label: 'Tres Columnas (3 / 3 / 2)', value: 'three' },
        { label: 'Dos Columnas (5 / 3)', value: 'two' },
        { label: 'Dos Columnas (3 / 5)', value: 'two-reverse' }
      ]
    },
    {
      name: 'background',
      label: 'Fondo',
      type: 'select',
      def: 'none',
      choices: [
        { label: 'Ninguno', value: 'none' },
        { label: 'Crema', value: 'o-background-brand-secondary' },
        { label: 'Purpura', value: 'o-background-light' }
      ]
    },
    {
      name: 'column1',
      label: 'Columna uno',
      contextual: true,
      type: 'area',
      options: {
        widgets: columnWidgets
      }
    },
    {
      name: 'column2',
      label: 'Columna dos',
      contextual: true,
      type: 'area',
      options: {
        widgets: columnWidgets
      }
    },
    {
      name: 'column3',
      label: 'Columna 3',
      contextual: true,
      type: 'area',
      options: {
        widgets: columnWidgets
      }
    }
  ]
};
