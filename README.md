# vue-three-template
A Vue.js template for Three.js application with TypeScript support. This template can be used for prototyping Three.js web application. 

This is based on a customized Vue CLI 3 setup with the following elements:

- Babel
- TypeScript
- CSS Preprocessors: Sass/SCSS (with dart-sass)
- Linter / Formatter: TSLint (Lint on save)

It also includes predefined Visual Studio Code tasks (in *.vscode/tasks.json*) and debug configuration (in *.vscode/launch.json*) using Google Chrome browser.

- Use F5 to launch a debug session, this will start the development server and open a Google Chrome instance to the local url.

- Use CTRL + SHIFT + B shortcut to launch a production build, this will also prerender static HTML (index.html) using the [prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin).

> **REMARK** : this template shows how to separate the SFC (Single-File Component) into view (.html) and logic (.ts) files. For example, the *HelloWorld3D* component has a Vue component  (HelloWorld3D.vue) that contains the scoped styles but also links the logic (HelloWorld3D.ts) which includes the view (HelloWorld3D.html). All these files are located in the *@/components/HelloWorld3D* folder. This proposed structure is optional, but may be of interest to minimize potential code versioning conflicts.

## Project setup
```
yarn install
```
OR
```
npm install
```

### Compiles and hot-reloads for development
```
yarn serve
```
OR
```
npm run serve
```

### Compiles and minifies for production
```
yarn build
```
OR
```
npm run build
```

### Lints and fixes files
```
yarn lint
```
OR
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## [MIT](http://opensource.org/licenses/MIT) License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---