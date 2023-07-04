'use strict';

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: 'color',
    plugin: 'color-picker',
    type: 'string',
    inputSize: { // optional
      default: 4,
      isResizable: true,
    },
  });
};
