# TuDasJetzt

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

## ionic build
0. npm install @capacitor/core @capacitor/cli
1. npx cap init tu-das-jetzt-x de.youssifwee.test.tudas
2. npm install @capacitor/android
3. npx cap add android
4. ng build --base-href .
5. capacitor.config.ts anpassen
6. npx cap copy
6. npx cap open android


### Im fehlerfall
ordner android löschen
npx cap sync android
npx cap add android


### immer nach änderungen im Code
ng build --base-href .
npx cap sync android
npx cap open android

## Migration zu Angular20
1. npm install -g @angular/cli@20
2. npm install
3. ng update @angular/core@20 @angular/cli@20
4. GIT commit
5. npm install firebase @angular/fire


## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```



# firebase konfiguration

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD4PmFB6WBY2W2ADkVorrYDPyRVrfHMPlU",
    authDomain: "tudasjetzt.firebaseapp.com",
    projectId: "tudasjetzt",
    storageBucket: "tudasjetzt.firebasestorage.app",
    messagingSenderId: "836592562609",
    appId: "1:836592562609:web:4a658677dc4a380994cd90",
    measurementId: "G-RY20NK429F"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>


## ODER
npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4PmFB6WBY2W2ADkVorrYDPyRVrfHMPlU",
  authDomain: "tudasjetzt.firebaseapp.com",
  projectId: "tudasjetzt",
  storageBucket: "tudasjetzt.firebasestorage.app",
  messagingSenderId: "836592562609",
  appId: "1:836592562609:web:4a658677dc4a380994cd90",
  measurementId: "G-RY20NK429F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
