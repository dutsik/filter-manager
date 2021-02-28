// import auth0 from "auth0-js";
// import config from "../auth_config.json";
//
// const hostname = window.location.hostname
// const audience = "https://api.aioma." + hostname.substring(hostname.lastIndexOf(".")  + 1) + "/";
// /**
//  * Initializes the Auth0 client
//  */
//   let webAuth = new auth0.WebAuth({
//     domain: config.domain,
//   clientID: config.clientId,
//   audience: audience,
//   scope: 'openid profile email superadmin'
//   });
//
//
//
// const authProvider = {
//   login: ({ username, password }) =>  {
//     return new Promise((resolve, reject) => {
//       webAuth.client.login({
//         realm: 'SuperAdmins',
//         username: username,
//         password: password,
//         responseType: "token id_token"
//
//       },(err, authResult) => {
//         if (err) {
//           alert('Error: ' + err.description)
//
//         }
//         if (authResult && authResult.accessToken) {
//           localStorage.setItem('token', authResult.accessToken);
//           window.location = window.location.origin //redirect to main page
//         }
//         return resolve
//       });
//     })
//   },
//   logout: () => {
//
//     localStorage.removeItem('token');
//     return Promise.resolve();
//   },
//   checkError: (error) => {
//     const status = error && error.status ? error.status : error.response && error.response.status ? error.response.status : undefined;
//     if (status === 401 || status === 403) {
//
//       localStorage.removeItem('token');
//       return Promise.reject(error);
//     }
//     return Promise.resolve();
//   },
//   checkAuth: () => localStorage.getItem('token')
//     ? Promise.resolve()
//     : Promise.reject(),
//
//   // ...
//   getPermissions: params => Promise.resolve(),
//
// };
//
// export default authProvider;
