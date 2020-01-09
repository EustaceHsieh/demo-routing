# DemoRouting

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## ===================
建立專案
ng new iisi -p=iisi

建立 Layout頁面
ng g c layout

建立第一大類模組
ng g module inq
ng g module don
ng g module acc


建立功能模組-與次級路由器
ng g module inq/donation --routing -m=inq

ng g module don/donation --routing -m=don

建立元件
ng g c inq/donation/inqDonation
ng g c inq/collection/inqCollection

ng g c don/donation/donDonation
