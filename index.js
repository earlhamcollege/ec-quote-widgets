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
    },
    {
      name: 'quote_author_color',
      type: 'select',
      required: false,
      label: 'Select Highlight Color',
      help: 'Color 0: White, Color 1: Yellow, Color 2: Red, Color 3: Maroon, Color 4: Blue',
      choices: [
        {
          label: 'Color 0 (default)',
          value: '0'
        },
        {
          label: 'Color 1',
          value: '1'
        },
        {
          label: 'Color 2',
          value: '2'
        },
        {
          label: 'Color 3',
          value: '3'
        },
        {
          label: 'Color 4',
          value: '4'
        }
      ]
    },
    {
      name: 'quote_text_color',
      type: 'select',
      required: false,
      label: 'Select Author Font Color',
      help: 'Color 1: Black, Color 2: White',
      choices: [
        {
          label: 'Color 1',
          value: '1'
        },
        {
          label: 'Color 2',
          value: '2'
        }
      ]
    },
    {
      name: 'quote_container_color',
      type: 'select',
      required: false,
      label: 'Select Background Color Widget',
      help: 'Color 1: Cream, Color 2: White',
      choices: [
        {
          label: 'Color 1',
          value: '1'
        },
        {
          label: 'Color 2',
          value: '2'
        }
      ]
    }
  ],
  construct: function (self, options) {
    self.pushAsset('stylesheet','ec-quote');
    self.pushAsset('stylesheet','variables')
  }
};