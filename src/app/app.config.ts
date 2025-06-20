import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

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

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
};
