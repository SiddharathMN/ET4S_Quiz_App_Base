// // src/FirebaseUIAuth.js
// import React, { useEffect, useRef } from 'react';
// import * as firebaseui from 'firebaseui';
// import 'firebaseui/dist/firebaseui.css';
// import { auth, googleProvider, emailProvider } from './firebaseConfig';

// const FirebaseUIAuth = () => {
//   const uiContainerRef = useRef();

//   useEffect(() => {
//     // Create AuthUI instance
//     const authUI = new firebaseui.auth.AuthUI(auth);

//     const uiConfig = {
//       signInSuccessUrl: '/home',
//       signInOptions: [
//         googleProvider.providerId,
//         emailProvider.providerId,
//       ],
//       tosUrl: '/terms-of-service',
//       privacyPolicyUrl: '/privacy-policy',
//     };

//     // Start the FirebaseUI Auth interface
//     if (uiContainerRef.current) {
//       authUI.start(uiContainerRef.current, uiConfig);
//     }

//     return () => {
//       // Clean up AuthUI when the component unmounts
//       authUI.reset();
//     };
//   }, []);

//   return (
//     <div className="firebaseui-auth-container" ref={uiContainerRef}>
//       <div id="loader">Loading...</div>
//     </div>
//   );
// };

// export default FirebaseUIAuth;
