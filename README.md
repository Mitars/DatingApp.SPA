# DatingApp.SPA

Dating App SPA is the single page application frontend for the Dating Application course project.

Demonstrates the capabilities of Angular when tied together with a .NET Core API.

## Installation

In order to run the Dating App, you need both 
[Dating App SPA](https://github.com/Mitars/DatingApp.SPA) and the [Dating App API](https://github.com/Mitars/DatingApp.API).

## Production

In order to prepare the application for production, you need to download both the `DatingApp.API` and `DatingApp.SPA` and place them in the same directory.

In the `DatingApp.SPA` run
`ng build --prod`
and it will output the production files to sibling directory `DatingApp.API/wwwroot` which can be hosted.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
