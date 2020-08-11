// This configures the apostrophe-users module to add an admin-level
// group by default:

module.exports = {
  groups: [
    {
      title: 'Cliente',
      permissions: [ ]
    },
    {
      title: 'admin',
      permissions: [ 'admin' ]
    }
  ]
};
