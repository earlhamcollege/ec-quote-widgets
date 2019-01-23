## QUOTE WIDGET
An [Apostrophe CMS](http://apostrophecms.org/) module to provide a quote block
for your content. A mandatory quote content region, along with two optional
regions for an author name, a header and any other author information that may be
important to include. Supports using multiple quotes as an array, with a
configurable rotation speed and optional control buttons, and multiple preset styles which 
display information in different arrangements. 


### GETTING STARTED
#### Prerequisites
In order to use this module, you should have:
- NPM
- ApostropheCMS
#### Installing
From within your apostrophe project directory, run
 `npm install --save ec-quote-widgets`

Include widget in projects' app.js file:

```
  modules: {
    'ec-quote-widgets': {},
    // ... other modules
}
```

### Configuration
#### Colors
In css/variables.less, colors are assigned to variable names like this:
```
@quote_author_color3: #861f41;
@quote_author_color4: #6dc6e8;
```
These hex values can be edited without impacting the functionality. These values
are used to configure the background and content colors of the quote.


### Screenshots
![Alt text](https://i.postimg.cc/KjFtGNdk/ec-quote-widget_screenshot.png)

### License
This project is licensed under the MIT License - see the LICENSE.md file for details.
