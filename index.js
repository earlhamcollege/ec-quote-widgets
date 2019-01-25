module.exports = {
  extend: 'apostrophe-widgets',
  contextual: true,
  label: 'EC Quote',
  perPage: 50,
  name: 'ec-quote',
  beforeConstruct: function(self, options) {
    options.addFields = [
      {
        name: 'quote_array',
        type: 'array',
        label: 'Quote Array',
	      listItemTemplate: 'ec-quote-widgets:listItem.html',
        schema: [
          {
            name: 'author',
            type: 'string',
            label: 'Author / Title',
            required: false
          },
          {
            name: 'author_info',
            type: 'string',
            label: 'Short Description',
            required: false
          },
          {
            name: 'quote',
            label: 'Main Content',
            type: 'singleton',
            help: 'limited by truncate value',
            widgetType: 'apostrophe-rich-text',
            required: false,
            options: {
                toolbar: [ 'Bold', 'Italic', 'Link', 'Unlink' ],
                limit: 400
            }
          }
        ]
      },
      {
        name: 'speed',
        type: 'integer',
        label: 'Display Rotate Speed (seconds)',
        def: '5',
        required: false
      },
      {
        name: 'nav_toggle',
        type: 'boolean',
        label: 'Show navigation for content',
        def: true,
        required: false,
      },
      {
        name: 'autoplay_toggle',
        type: 'boolean',
        label: 'Automatically rotate',
        def: 'true',
        required: false
      },
      {
        type: 'range',
        name: 'truncate',
        label: 'Character Truncate',
        min: 100,
        max: 500,
        step: 10, // optional
        def: 200
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
        name: 'quote_mode',
        type: 'select',
        required: true,
        def: '0',
        label: 'Select Text Mode',
        choices: [
          {
            label: 'Quote Mode',
            value: '0'
          },
          {
            label: 'General Mode',
            value: '1'
          },
          {
            label: 'Simplified Mode',
            value: '2'
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
    ].concat(options.addFields || [])

    options.arrangeFields = [
      {
        name:'general',
        label:'General Settings',
        fields: ['quote_mode','speed','nav_toggle','autoplay_toggle','truncate']
      },
      {
        name:'carousel',
        help: 'Carousel settings only take effect with multiple slides',
        label: 'Carousel Settings',
        fields: ['nav_toggle','speed','autoplay_toggle']
      },
      {
        name:'style',
        label:'Style Settings',
        fields: ['quote_author_color','quote_text_color','quote_container_color']
      },
      {
        name:'content',
        label: 'Content Settings',
        fields: ['quote_array']
      }
    ].concat(options.arrangeFields || [])
  },
  construct: function (self, options) {
    var superPushAssets = self.pushAssets;
    self.pushAssets = function() {
      superPushAssets();
      self.pushAsset('stylesheet','variables');
      self.pushAsset('stylesheet','slick');
  		self.pushAsset('stylesheet','slick-theme');
      self.pushAsset('stylesheet','always');
      self.pushAsset('stylesheet','custom');
  		self.pushAsset('script','slick.min');
  		self.pushAsset('script','always');
    }
  }
};
