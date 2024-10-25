# A Modern Eden (AME) Design System

Setup
-----
1. Before running the project setup node/npm ([Installation instructions](https://nodejs.org/en/download/)).

2. Note that you will need to update node to v10.13.0 in order for this project to compile.

3. Run `npm install`.

4. Run `npm start`. This will:

  - Clear any previously built project files
  - Build project files
  - Start the server (localhost:3000)
  - Run watch tasks

Drizzle
-------

The pattern library is be powered by [Drizzle](https://github.com/cloudfour/drizzle) and will be organized by:
- [Data](https://github.com/cloudfour/drizzle/tree/master/docs#data)
- [Pages](https://github.com/cloudfour/drizzle/tree/master/docs#pages)
- [Patterns](https://github.com/cloudfour/drizzle/tree/master/docs#patterns)
- [Templates](https://github.com/cloudfour/drizzle/tree/master/docs#templates)

Public
------

The contents of the `public/` directory will be copied directly into the root of the `dist/` directory.

Sass
----

All CSS is compiled from [Sass](https://sass-lang.com/) and can be found in the `scss/` directory. Any files not prefixed with an underscore will compile to `dist/css/`.

JavaScript
----------

All JavaScript is compiled with [Webpack](https://webpack.js.org/) and can be found in the `js/` directory. All JavaScript files should be imported into `index.js` which will then be compiled to `dist/js/scripts.js`.

Testing
-------

Running `npm test` will run the following tasks:

- `pa11y`: Runs accessibility tests on all HTML files in the `dist/` directory
- `stylelint`: Checks all CSS  in the `dist/` for errors and enforces [Sparkbox's code conventions](https://www.npmjs.com/package/@sparkbox/stylelint-config-sparkbox)
- `eslint`: Checks all JavaScript  in the `dist/` for errors and enforces [Sparkbox's code conventions](https://www.npmjs.com/package/eslint-config-sparkbox)

Webhint
-------

[webhint](https://webhint.io/) is a customizable linting tool that helps you improve your site's accessibility, speed, cross-browser compatibility, and more by checking your code for best practices and common errors.

