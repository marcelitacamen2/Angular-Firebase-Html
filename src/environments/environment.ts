// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  _firebase: {
    apiKey: "AIzaSyB1SyCfm5-KGXP7gyx7x39xsfS8klUPk1c",
  authDomain: "empleados-2d785.firebaseapp.com",
  databaseURL: "https://empleados-2d785-default-rtdb.firebaseio.com",
  projectId: "empleados-2d785",
  storageBucket: "empleados-2d785.appspot.com",
  messagingSenderId: "387025464722",
  appId: "1:387025464722:web:a3ef2b47e87a1a9b7fa54b"

  },
  get firebase() {
    return this._firebase;
  },
  set firebase(value) {
    this._firebase = value;
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
