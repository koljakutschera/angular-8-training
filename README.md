# Angular 8 BookMonkey

This project reimplements the https://angular-buch.com/ application which is based on Angular 4 in fancy new Angular 8. I generated and developed it with Angular 8 from scratch to update my angular skills breaking through all the breaking changes like in i18n-handling and so on. I hope this can save you a lot of headaches when following the book while using the latest angular version. All
chapters are branches with
self-explanatory names. Happy coding!

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Build i18n-builds

Run `npm run extract-i18n` to extract i18n-messages.

Translate stuff...

Run `npm run build-production-en` to build a production ready english version for example

Or run `npm run serve-production-en` to build a production ready english version and watch it at localhost

Everything related to i18n is configured in angular.json. See package.json for more infos about how to generate translated builds.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Use an Browser-Extension: https://augury.rangle.io/ to inspect angular in the browser.

If you can use: POEditor.com for translation.
