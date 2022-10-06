# Midterm Project for [Boolean](https://boolean.careers/)

Project: Bakery Website
Languages uses:

* HTML
* CSS
* JavaScript
* Framework: **Vue**

## Project Directions

For this project our restriction is the framework to use: [VueJS v2](https://v2.vuejs.org/) using [VueCli](https://cli.vuejs.org/) for scaffolding.
We have been provided with the design of the layout as if we were working for a client. We need to implement the design layout as close as possible to the request of our hypothetic designer.

All of the images and the colour schemes have also been provided.

From here, we are left to do the work in **4 days** roughly with a presentation at the end.

## Step 1: Analysis

Instead of jumping in blind, I decided to sit down and create the **abstract structure** of the application first by splitting it into various subcomponents that can then be implemented in an efficient and scalable way. Having a conceptualized view of the entire app can help avoiding hours of refactoring and bugs at the end.

The abstract structure of my project can be found here: [Bakery Project](https://www.figma.com/file/8rrldVduPNee50hDXEfqFx/Boolean-Project-%2F-Case-Study%3A-Bakery?node-id=0%3A1).

I then created the Vue2 App through VueCli, my settings included:

* Babel
* CSS Preprocessor
* ESLint only errors
* Router

I added the router plugin because the website at the top has different pages. These can be simulated by Vue using Routers and RouterViews. I decided to implement the History more for router links to emulate traditional multi-page websites. This does require an additional setup when working on the backend server to make sure that the search recognizes these simulated pages. It is not too difficult though, and the documentation can be found here: [Vue Router History Mode](https://v3.router.vuejs.org/guide/essentials/history-mode.html).

For many of the images I will create an assets/images in the public folder following VueCli guidelines (found at the bottom of the page): [When to use public folder](https://cli.vuejs.org/guide/html-and-static-assets.html#the-public-folder)

## Versions

### Implementing OurProductsSection

v0.1.2

### Implmenting Header

v0.1.1: Implemented the Header

### Setup

v0.0: Created scaffolding and basic setup for the page

```shell
npm install
```

### Compiles and hot-reloads for development

```shell
npm run serve
```

### Compiles and minifies for production

```shell
npm run build
```

### Lints and fixes files

```shell
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
