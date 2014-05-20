# [iCheckMovies][1] Icon Font [![Bower version](https://badge.fury.io/bo/icheckmovies-icon-font.svg)](http://badge.fury.io/bo/icheckmovies-icon-font) [![Build Status](https://travis-ci.org/studio-donder/icheckmovies-icon-font.svg?branch=master)](https://travis-ci.org/studio-donder/icheckmovies-icon-font) [![devDependency Status](https://david-dm.org/studio-donder/icheckmovies-icon-font/dev-status.svg?theme=.io)](https://david-dm.org/studio-donder/icheckmovies-icon-font#info=devDependencies)

<img align="right" width="200" src="http://studio-donder.github.io/icheckmovies-icon-font/images/icon-preview.png">

iCheckMovies Icon Font is an open source icon font, designed for the [iCheckMovies][1] website. It features dozens of unique icons in three styles:

* **Default**: just the icon (``.icm-icon-*``).
* **Circled**: the icon with a nice circle around it (``.icm-icon-*-circled``).
* **Filled**: a filled circle with a negative cutout of the icon (``.icm-icon-*-filled``).

## License

See the [``LICENSE.md``](LICENSE.md) file.

## Changelog

See the [``CHANGELOG.md``](CHANGELOG.md) file.

## Usage

### Quick start

You can either:

* [Download the latest release][9]
* Clone the repository: `git clone https://github.com/studio-donder/icheckmovies-icon-font.git`
* Install with [Bower][8]: `bower install icheckmovies-icon-font`

### Manual usage

#### Fonts

Copy the font files (availabe in ``eot``, ``svg``, ``ttf`` and ``woff`` format) you need from ``build/fonts`` to your project's font folder. You can also install them in your OS and use them to design stuff.

#### CSS

Use one of the CSS files found in ``build/styles`` (normal or minified) and include them in your project. The CSS imports the font files using the ``@font-face`` declaration:

```css
@font-face {
  font-family: 'iCheckMovies';
  src: url('/fonts/iCheckMovies.eot');
  src: url('/fonts/iCheckMovies.eot?#iefix') format('embedded-opentype'),
    url('/fonts/iCheckMovies.woff') format('woff'),
    url('/fonts/iCheckMovies.ttf') format('truetype'),
    url('/fonts/iCheckMovies.svg#iCheckMovies') format('svg');
}
```

Replace the ``/fonts/`` path with the path you installed the fonts in.

#### LESS

If you prefer building the CSS yourself using [LESS][2], use the LESS file found in ``build/styles``. You can customize three variables to adjust the output file to your project's environment. Default values are:

```less
@icm-icon-font-path:   "/fonts/";
@icm-icon-font-name:   "iCheckMovies";
@icm-icon-font-svg-id: "iCheckMovies";
```

#### HTML

Always use the ``.icm-icon`` class combined with a specific icon class (e.g. ``icm-icon-plus-circled``). For example:

```html
<span class="icm-icon icm-icon-plus-circled"></span>
```

This prints an icon with a ``+`` shape and a circle around it.

## Building yourself

### Node.js

In order to build the icon fonts, LESS and CSS yourself, you'll need to have [node.js][3] installed on your development machine. 

### FontForge

Also, since this project is relying on ``grunt-webfont``, please refer to [its documentation][4] regarding the installation of [FontForge][5], which enables auto hinting on the generated fonts.

### Dependencies

Once you've installed node.js, browse to the project's root directory and run the following command to install all dependencies:

```bash
npm install
```
### Grunt

Now you're ready to build! This project uses [Grunt][6] to run all its tasks. There are a few tasks defined in the [``GruntFile.js``](GruntFile.js) task definition file, but we've defined an [alias task][7] called ``default`` that runs all necessary tasks in the correct order (from the project's root directory again):

```bash
grunt default
```

This will clean all files, generate the font files, compile the LESS files to CSS and put the results in the ``build`` directory.

[1]: http://www.icheckmovies.com/
[2]: http://lesscss.org/
[3]: http://nodejs.org/
[4]: https://github.com/sapegin/grunt-webfont#installation
[5]: http://fontforge.org/
[6]: http://gruntjs.com/
[7]: http://gruntjs.com/creating-tasks#alias-tasks
[8]: http://bower.io/
[9]: https://github.com/studio-donder/icheckmovies-icon-font/releases
