import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";


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
const db = getFirestore(app);

async function SignUp(userInfo) {
  console.log("🚀 ~ SignUp ~ userInfo:", userInfo)
  try {
    const { email, password, fullName, age } = userInfo
    console.log("🚀 ~ SignUp ~ fullname:", fullName)

    await createUserWithEmailAndPassword(auth, email, password)
    await addDoc(collection(db, 'user'), {
      fullName,
      age,
      email,
    }).then((res) => {
      console.log("🚀 ~ awaitaddDoc ~ res:", res)


    }).catch(err => {
      console.log("🚀 ~ awaitaddDoc ~ err:", err)


    })
    alert('register successfully!')
    return true
  } catch (e) {
    console.log("🚀 ~ SignUp ~ e:", e)
    alert(e.message)
    return e
  }
}


async function Login(userInfo) {
  console.log("🚀 ~ Login ~ userInfo:", userInfo)
  const { email, password } = userInfo

  try {

    return await signInWithEmailAndPassword(auth, email, password).then(res => {
      console.log("🚀 ~ awaitsignInWithEmailAndPassword ~ res:", res)
      alert('Login Successfully')
      return res;
    })
  } catch (e) {
    alert(e.message)
    return e
  }
}
const postData = async (userInfo) => {
  console.log("🚀 ~ postData ~ userInfo:", userInfo)
  try {
    const { productName , price , description , quantity } = userInfo;
    await addDoc(collection(db, 'users'), {
      productName,
      price, 
      description, 
      quantity
    });

    alert('Successfully Post Ad');
    return true;
  } catch (e) {
    alert(e.message);
    return e
  };
 }



export {
  SignUp,
  Login,
  postData
}

