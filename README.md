# Angular/TypeScript/NgRx Regions App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

## To run the app

Run `npm install` to install the required dependencies. 
Run `npm run start` for the dev server. 
Navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Lint

Run `npm run lint` to check TypeScript syntax.

## SCSS

The app is styled with SCSS and BEM. The base SCSS files are in the `assets/styles` directory, which are imported into `_main.scss`. `_main.css` is then imported into component level SCSS. 

The app is styled for both mobile and desktop. In mobile view, the dropdowns have a set maximum width which will truncate the text within it. 

## How to use the app

1. First select a option from the Regions dropdown. 
2. After selecting a region, the Countries dropdown will populate and be enabled for user selection.
3. Select a country option and click on the `Load details` button.
4. This will load the country details in a table.
5. To change region or country, click on the relevent dropdown to select another option, and click on `Load details`.

## DEV mode

To use the app with Redux dev tools, install the Redux dev tools browser extension, and uncomment the following lines in app.module.ts:

```
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
```
```
StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
```
