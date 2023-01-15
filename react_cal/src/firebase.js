    // Import the functions you need from the SDKs you need
    import firebase from 'firebase/compat/app';
    import 'firebase/compat/auth';
    import 'firebase/compat/firestore';
    import "firebase/compat/database";
    import "firebase/compat/storage";
        // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyBvICXVOOyTuq64Bn88CEjAgm8x5j-UwlE",
      authDomain: "react-project-4b888.firebaseapp.com",
      projectId: "react-project-4b888",
      storageBucket: "react-project-4b888.appspot.com",
      messagingSenderId: "859664666897",
      appId: "1:859664666897:web:c41a2ec11119c5bc527cb0"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const firestore = firebase.firestore();
    
    export { firestore };