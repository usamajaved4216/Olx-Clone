import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyD4Fb1D3lv8kpk9R7hhSXRQ4f7pBuZYF5o",
    authDomain: "olx-clone-4216.firebaseapp.com",
    projectId: "olx-clone-4216",
    storageBucket: "olx-clone-4216.appspot.com",
    messagingSenderId: "969278543508",
    appId: "1:969278543508:web:f021aa13b18d8cdde48681"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  function SignUp(userInfo) {
    console.log("🚀 ~ SignUp ~ userInfo:", userInfo)
    const {email, password}= userInfo

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("🚀 ~ .then ~ userCredential:", userCredential)
          const user = userCredential.user;
          alert('Registered SignUp Successfylly')
        })
        .catch((error) => {
          console.log("🚀 ~ SignUp ~ error:", error)
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)
        });

  }
  function Login(userInfo) {
    console.log("🚀 ~ Login ~ userInfo:", userInfo)
    const {email, password}= userInfo


    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log("🚀 ~ .then ~ userCredential:", userCredential)
    const user = userCredential.user;
    alert('Login Successfully')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
    
  }

  export {
    SignUp,
    Login
  }

