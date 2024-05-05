import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection, getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Swal from 'sweetalert2'

const firebaseConfig = {
  apiKey: "AIzaSyCAngb1W-bmApxUqMofZVpmydvjEnEl7OM",
  authDomain: "olx-website-d4275.firebaseapp.com",
  projectId: "olx-website-d4275",
  storageBucket: "olx-website-d4275.appspot.com",
  messagingSenderId: "158965184035",
  appId: "1:158965184035:web:cb2d80ee41c688d63de396"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);


const signupUser = async (email, password, amUserName, phoneNumber) => {
  try {
    console.log('e--->', email, password, amUserName, phoneNumber)
    const res = await createUserWithEmailAndPassword(auth, email, password, amUserName)
    const docRef = await addDoc(collection(db, "users"), {
      Name: amUserName,
      Email: email,
      PhoneNumber: +phoneNumber,
    })
    alert('Sign In Successfully')
    // console.log("docRef", docRef)


    // return {
    //   status: 200,
    //   message: "successful",
    //   data: res.user
    // };
  }

  catch (e) {
    alert(e.message)

  }
}


//  return {
//   status: 200,
//   message : "successful",
//   data : res.user 
// }
// Signed in 
// const user = userCredential.user;
// alert("user sign up Sucessful")
// ...
// }

// catch(e) {
// alert(e.message)
// ..
// return {
//   status: 500,
//   message : e.message,
//   data : null 
//  }
// };
// }





const signinUser = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password)
    alert('Sign In Successfully')

    // return {
    //   status: 200,
    //   message: "successful",
    //   data: res.user
    // };
  }

  catch (e) {
    alert(e.message)

    // return {
    //   status: 500,
    //   message: e.message,
    //   data: null
    // }
  }
};


const PostAd = async ({ title, description, price, file }) => {
  try {
    // const url = await uploadImage(file)
    const data = { title, description, price: +price,}

    const docRef = await addDoc(collection(db, "ads"), data);
    Swal.fire('ad posted successfully')
  }

  catch (e) {
    Swal.fire(e.message)
  }

}

async function imgData(file) {
  // const uploadImage = await (file) => {
  try {
    const storageRef = ref(storage, 'ads/' + file.name);
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
  }

  catch (e) {
    alert(e.message)
  }
}
// }

export {
  signupUser,
  signinUser,
  PostAd,
  imgData
}