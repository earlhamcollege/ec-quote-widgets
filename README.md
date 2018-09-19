# QUOTE WIDGET
An [Apostrophe CMS](http://apostrophecms.org/) module to provide a quote block
for your content. A mandatory quote content region, along with two optional
regions for an author name and any other author information that may be
important to include.

## Example
This widget is meant to have data entered in the following manner:

Quote: 'This statement is the content of the quote'
Author: 'Porter L'
Author Info: 'An Earlham College student from Berea, KY'


## Install
From within your apostrophe project `npm install --save ec-quote-widgets`

Include widget in app.js:

```
  modules: {
    'ec-quote-widgets': {},
    // ... other modules
}
```
## Configuration
### Colors
In css/variables.less, colors are assigned to variable names like this:
```
@quote_author_color3: #861f41;
@quote_author_color4: #6dc6e8;
```
These hex values can be edited without impacting the functionality.


## Screenshots
![Alt text](/demo/screenshot1.png?raw=true "screenshot 1")
