module.exports = {
  extend: 'apostrophe-widgets',
  contextual: true,
  label: 'EC Quote',
  addFields: [
          //ARRAY FOR HOLDING QUOTE CONTENTS
    {
      name: 'quote_array',
      type: 'array',
      label: 'Quote Array',
      schema: [
        {
          name: 'author',
          type: 'string',
          label: 'Quote Author',
          required: false
        },
        {
          name: 'author_info',
          type: 'string',
          label: 'Quote Author Info',
          required: false
        },
        {
          name: 'quote',
          label: 'Quote Contents',
          type: 'singleton',
          widgetType: 'apostrophe-rich-text',
          options: {
              toolbar: [ 'Bold', 'Italic', 'Link', 'Unlink' ]
          }
        }
      ]
    },
    {
      name: 'speed',
      type: 'integer',
      def: 5,
      label: 'Display Rotate Speed (seconds)',
      required: true
    },
    {
      name: 'quote_author_color',
      type: 'select',
      required: false,
      label: 'Select Highlight Color',
      choices: [
        {
          label: 'Color 0 (No Color)',
          value: '0'
        },
        {
          label: 'Color 1 (Yellow)',
          value: '1'
        },
        {
          label: 'Color 2 (Red)',
          value: '2'
        },
        {
          label: 'Color 3 (Maroon)',
          value: '3'
        },
        {
          label: 'Color 4 (Blue)',
          value: '4'
        }
      ]
    },
    {
      name: 'quote_text_color',
      type: 'select',
      required: false,
      label: 'Select Author Font Color',
      choices: [
        {
          label: 'Color 1 (Black)',
          value: '1'
        },
        {
          label: 'Color 2 (White)',
          value: '2'
        }
      ]
    },
    {
      name: 'quote_container_color',
      type: 'select',
      required: false,
      label: 'Select Background Color Widget',
      choices: [
        {
          label: 'Color 1 (Cream White)',
          value: '1'
        },
        {
          label: 'Color 2 (White)',
          value: '2'
        }
      ]
    }
  ],
  arrangeFields: [
    {
      name:'content',
      label:'Content Settings',
      fields: ['quote_array','speed']
    },
    {
      name:'color',
      label:'Color Settings',
      fields: ['quote_author_color','quote_text_color','quote_container_color']
    }
  ],
  construct: function (self, options) {
    self.pushAsset('stylesheet','ec-quote');
    self.pushAsset('stylesheet','variables');
    self.pushAsset('stylesheet','carousel');
  }
};
