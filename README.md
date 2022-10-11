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
We are tasked to create the **desktop layout** provided in the design images, the mobile/small screen design is not present.

## Step 1: Analysis

Instead of jumping in blind, I decided to sit down and create the **abstract structure** of the application first by splitting it into various subcomponents that can then be implemented in an efficient and scalable way. Having a conceptualized view of the entire app can help avoiding hours of refactoring and bugs at the end.

The abstract structure of my project can be found here: [Bakery Project](https://www.figma.com/file/8rrldVduPNee50hDXEfqFx/Boolean-Project-%2F-Case-Study%3A-Bakery?node-id=0%3A1).

I then created the Vue2 App through VueCli, my settings included:

* Babel
* CSS Preprocessor
* ESLint only errors
* Router

I added the router plugin because the website at the top has different pages. These can be simulated by Vue using Routers and RouterViews. I decided to implement the History more for router links to emulate traditional multi-page websites. This does require an additional setup when working on the backend server to make sure that the search recognizes these simulated pages. It is not too difficult though, and the documentation can be found here: [Vue Router History Mode](https://v3.router.vuejs.org/guide/essentials/history-mode.html).

For many of the images I will create an assets/images in the public folder following VueCli guidelines (found at the bottom of the page): [When to use public folder](https://cli.vuejs.org/guide/html-and-static-assets.html#the-public-folder).

## Step 2: Plugins and Extensions

After planning the macrostructure, I looked for appropriate and compatible plugins that would make certain components more flexible and easier to manage.

For this project I used:

* FontAwesome v6.2.0
* Embla Carousel v7.3.0

## Step 3: Creating the component tree structure

I created a barebone skeletal structure for the entire project with a top-down approach, by starting from the #app and slowly splitting the project into small manageable components that are pretty basic on their own, but together they make a more complex app.
I organized them into the **components** folder with two additional subfolders:

* macrosections: for components that occupy a logical section within the website
* shared: components used multiple times

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
