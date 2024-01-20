import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyD4Fb1D3lv8kpk9R7hhSXRQ4f7pBuZYF5o",
  authDomain: "olx-clone-4216.firebaseapp.com",
  projectId: "olx-clone-4216",
  storageBucket: "olx-clone-4216.appspot.com",
  messagingSenderId: "969278543508",
  appId: "1:969278543508:web:f021aa13b18d8cdde48681"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage();

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
    const { productName, price, description, image } = userInfo;

    const storageRef = ref(storage, `ad/${image.name}`);

    await uploadBytes(storageRef, image)
    alert('image uploaded successfully')

    const url = await getDownloadURL(storageRef)
    console.log("🚀 ~ postData ~ url:", url)



    await addDoc(collection(db, 'Add Cart'), {
      productName,
      price,
      description,
      imageUrl: url,
    });



    alert('Successfully Post Ad');
    return true;
  } catch (e) {
    alert(e.message);
    return e
  };
}
export async function getAds() {
  const querySnapshot = await getDocs(collection(db, 'ads'));
  const ads = [];
  querySnapshot.forEach((doc) => {
      const ad = doc.data();
      ad.id = doc.id;

      ads.push(ad)
  });

  return ads;
}


export {
  SignUp,
  Login,
  postData
}

