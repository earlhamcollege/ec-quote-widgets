module.exports = {
  extend: 'apostrophe-widgets',
  contextual: true,
  label: 'EC Quote',
  addFields: [
    {
      name: 'author',
      type: 'string',
      label: 'Author',
      required: false
    },
    {
      name: 'quote',
      type: 'string',
      label: 'Quote',
      required: false
    },
    {
      name: 'author_info',
      type: 'string',
      label: 'Author Info',
      required: false
    }
  ]
};
