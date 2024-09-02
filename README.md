# NgScaffolding18

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## Scaffolding 
```bash
📦src
 ┣ 📂app
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📂data-access
 ┃ ┃ ┃ ┗ 📜auth.service.ts
 ┃ ┃ ┗ 📂features
 ┃ ┃ ┃ ┣ 📂log-in
 ┃ ┃ ┃ ┃ ┣ 📜log-in.component.html
 ┃ ┃ ┃ ┃ ┣ 📜log-in.component.scss
 ┃ ┃ ┃ ┃ ┗ 📜log-in.component.ts
 ┃ ┃ ┃ ┣ 📂sign-up
 ┃ ┃ ┃ ┃ ┣ 📜sign-up.component.html
 ┃ ┃ ┃ ┃ ┣ 📜sign-up.component.scss
 ┃ ┃ ┃ ┃ ┗ 📜sign-up.component.ts
 ┃ ┃ ┃ ┣ 📜auth.routes.ts
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂core
 ┃ ┃ ┗ 📂guards
 ┃ ┃ ┃ ┗ 📜auth.guards.ts
 ┃ ┣ 📂dashboard
 ┃ ┃ ┣ 📜dashboard.component.html
 ┃ ┃ ┣ 📜dashboard.component.scss
 ┃ ┃ ┣ 📜dashboard.component.spec.ts
 ┃ ┃ ┗ 📜dashboard.component.ts
 ┃ ┣ 📂products
 ┃ ┃ ┣ 📂data-access
 ┃ ┃ ┃ ┗ 📜product-store.service.ts
 ┃ ┃ ┣ 📂features
 ┃ ┃ ┃ ┣ 📂product-detail
 ┃ ┃ ┃ ┃ ┣ 📜product-detail.component.html
 ┃ ┃ ┃ ┃ ┣ 📜product-detail.component.scss
 ┃ ┃ ┃ ┃ ┣ 📜product-detail.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜product-detail.component.ts
 ┃ ┃ ┃ ┣ 📂product-list
 ┃ ┃ ┃ ┃ ┣ 📜product-list.component.html
 ┃ ┃ ┃ ┃ ┣ 📜product-list.component.scss
 ┃ ┃ ┃ ┃ ┣ 📜product-list.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜product-list.component.ts
 ┃ ┃ ┃ ┗ 📜product.routes.ts
 ┃ ┃ ┣ 📂ui
 ┃ ┃ ┃ ┗ 📂product-card
 ┃ ┃ ┃ ┃ ┗ 📜product-card.component.ts
 ┃ ┃ ┣ 📜products.component.html
 ┃ ┃ ┣ 📜products.component.scss
 ┃ ┃ ┣ 📜products.component.spec.ts
 ┃ ┃ ┗ 📜products.component.ts
 ┃ ┣ 📂shared
 ┃ ┃ ┣ 📂data-access
 ┃ ┃ ┃ ┗ 📜storage.service.ts
 ┃ ┃ ┗ 📂ui
 ┃ ┃ ┃ ┣ 📂button
 ┃ ┃ ┃ ┃ ┣ 📜button.component.html
 ┃ ┃ ┃ ┃ ┣ 📜button.component.scss
 ┃ ┃ ┃ ┃ ┣ 📜button.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜button.component.ts
 ┃ ┃ ┃ ┗ 📂layout
 ┃ ┃ ┃ ┃ ┣ 📂footer
 ┃ ┃ ┃ ┃ ┃ ┣ 📜footer.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜footer.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜footer.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜footer.component.ts
 ┃ ┃ ┃ ┃ ┣ 📂navbar
 ┃ ┃ ┃ ┃ ┃ ┣ 📜navbar.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜navbar.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜navbar.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜navbar.component.ts
 ┃ ┃ ┃ ┃ ┣ 📜layout.component.html
 ┃ ┃ ┃ ┃ ┣ 📜layout.component.scss
 ┃ ┃ ┃ ┃ ┣ 📜layout.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜layout.component.ts
 ┃ ┣ 📜app.component.html
 ┃ ┣ 📜app.component.scss
 ┃ ┣ 📜app.component.spec.ts
 ┃ ┣ 📜app.component.ts
 ┃ ┣ 📜app.config.ts
 ┃ ┗ 📜app.routes.ts
 ┣ 📜index.html
 ┣ 📜main.ts
 ┗ 📜styles.scss

```
