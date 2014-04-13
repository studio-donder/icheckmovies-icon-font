# iCheckMovies Icon Font

iCheckMovies Icon Font is an open source icon font, designed for the [iCheckMovies][1] website. It features dozens of unique icons in three styles:

* **Default**: just the icon (``.icm-icon-*``)
* **Circled**: the icon with a nice circle around it (``.icm-icon-*-circled``)
* **Filled**: a filled circle with a negative cutout of the icon (``.icm-icon-check-filled``)

## License

See the [``LICENSE.md``](LICENSE.md) file.

## Changelog

See the [``CHANGELOG.md``](CHANGELOG.md) file.

## Usage

### Fonts

Copy the font files (availabe in ``eot``, ``svg``, ``ttf`` and ``woff`` format) you need from ``build/fonts`` to your project's font folder. You can also install them in your OS and use them to design stuff.

### CSS

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

### LESS

If you prefer building the CSS yourself using [LESS][2], use the LESS file found in ``build/styles``. You can customize three variables to adjust the output file to your project's environment. Default values are:

```less
@icm-icon-font-path:   "/fonts/";
@icm-icon-font-name:   "iCheckMovies";
@icm-icon-font-svg-id: "iCheckMovies";
```

### HTML

Always use the ``.icm-icon`` class combined with a specific icon class (e.g. ``icm-icon-plus-circled``). For example:

```html
<span class="icm-icon icm-icon-plus-circled"></span>
```

This prints an icon with a ``+`` shape and a circle around it.

[1]: http://www.icheckmovies.com/
[2]: http://lesscss.org/