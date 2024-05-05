import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider, signOut } from "firebase/auth";
import { collection, addDoc, getFirestore, doc, setDoc, query, where, getDocs, getDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyANUY4Z25RFm81JCDVc__wrhMPa9XdJ1KQ",
  authDomain: "exms20.firebaseapp.com",
  projectId: "exms20",
  storageBucket: "exms20.appspot.com",
  messagingSenderId: "696431189974",
  appId: "1:696431189974:web:1c23fedaa7386018b8ce77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new FacebookAuthProvider();
const auth = getAuth(app);
const google = new GoogleAuthProvider();
const db = getFirestore(app);


const signinFb = (email, password) => {
  signInWithPopup(auth, provider, email, password)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      // IdP data available using getAdditionalUserInfo(result)
      // ...

      alert("user successfully signed in")
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);

      // ...

      alert(error.message)

    })
};



const googlesignin = () => {
  signInWithPopup(auth, google)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      alert("signin successfully")
    })

    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      alert(error.message)

    })
};

 



const restro_data =
  [
    {
      "restaurant_name": "Karachi Biryani House",
      "cuisine_type": "Pakistani",
      "address": {
        "street": "456 Food Street",
        "city": "Karachi",
        "state": "SD",
        "postal_code": "78901"
      },
      "phone": "555-789-1234",
      "image_url": 'https://images.deliveryhero.io/image/fd-pk/LH/zw0m-hero.jpg?width=560&height=240&quality=45',
      "menu_categories": [
        {
          "category_name": "Starters",
          "items": [
            {
              "item": "Chicken Samosa",
              "price": 150,
              "item_image_url": 'https://images.deliveryhero.io/image/fd-pk/LH/vye5-hero.jpg?width=560&height=240&quality=45',
            },
            {
              "item": "Vegetable Pakora",
              "price": 120,
              "item_image_url": 'https://images.deliveryhero.io/image/fd-pk/LH/nqiz-hero.jpg?width=560&height=240&quality=45',
            }
          ]
        },
        {
          "category_name": "Main Courses",
          "items": [
            {
              "item": "Chicken Biryani",
              "price": 350,
              "item_image_url": 'https://images.deliveryhero.io/image/fd-pk/LH/fbow-hero.jpg?width=560&height=240&quality=45',
            },
            {
              "item": "Beef Karahi",
              "price": 300,
              "item_image_url": 'https://images.deliveryhero.io/image/fd-pk/LH/xney-hero.jpg?width=560&height=240&quality=45',
            }
          ]
        },
        {
          "category_name": "Desserts",
          "items": [
            {
              "item": "Gulab Jamun",
              "price": 80,
              "item_image_url": 'https://images.deliveryhero.io/image/fd-pk/LH/zet7-hero.jpg?width=560&height=240&quality=45',
            },
            {
              "item": "Kheer",
              "price": 100,
              "item_image_url": 'https://images.deliveryhero.io/image/fd-pk/LH/oq45-hero.jpg?width=560&height=240&quality=45',
            }
          ]
        }
      ],
      "opening_hours": {
        "monday": "11:00 AM - 10:00 PM",
        "tuesday": "11:00 AM - 10:00 PM",
        "wednesday": "11:00 AM - 10:00 PM",
        "thursday": "11:00 AM - 10:00 PM",
        "friday": "11:00 AM - 11:00 PM",
        "saturday": "12:00 PM - 11:00 PM",
        "sunday": "12:00 PM - 9:00 PM"
      }
    },
    {
      "restaurant_name": "Spice of Lahore",
      "cuisine_type": "Indian",
      "address": {
        "street": "789 Spice Avenue",
        "city": "Karachi",
        "state": "SD",
        "postal_code": "56789"
      },
      "phone": "555-234-5678",
      "image_url": 'https://images.deliveryhero.io/image/fd-pk/LH/w7ye-hero.jpg?width=560&height=240&quality=45',
      "menu_categories": [
        {
          "category_name": "Appetizers",
          "items": [
            {
              "item": "Paneer Tikka",
              "price": 250,
              "item_image_url": 'https://images.deliveryhero.io/image/fd-pk/LH/x7me-hero.jpg?width=560&height=240&quality=45',
            },
            {
              "item": "Samosa Chaat",
              "price": 180,
              "item_image_url": 'https://images.deliveryhero.io/image/fd-pk/LH/v6hn-hero.jpg?width=560&height=240&quality=45',
            }
          ]
        },
        {
          "category_name": "Main Courses",
          "items": [
            {
              "item": "Butter Chicken",
              "price": 400,
              "item_image_url": 'https://images.deliveryhero.io/image/fd-pk/LH/p18y-hero.jpg?width=560&height=240&quality=45',
            },
            {
              "item": "Dal Makhani",
              "price": 250,
              "item_image_url": 'https://images.deliveryhero.io/image/fd-pk/LH/n1tt-hero.jpg?width=560&height=240&quality=45',
            }
          ]
        },
        {
          "category_name": "Desserts",
          "items": [
            {
              "item": "Rasmalai",
              "price": 100,
              "item_image_url": 'https://images.deliveryhero.io/image/fd-pk/LH/jnr0-hero.jpg?width=560&height=240&quality=45',
            },
            {
              "item": "Gulab Jamun",
              "price": 80,
              "item_image_url": 'https://images.deliveryhero.io/image/fd-pk/LH/smzc-hero.jpg?width=560&height=240&quality=45',
            }
          ]
        }
      ],
      "opening_hours": {
        "monday": "12:00 PM - 9:00 PM",
        "tuesday": "12:00 PM - 9:00 PM",
        "wednesday": "12:00 PM - 9:00 PM",
        "thursday": "12:00 PM - 9:00 PM",
        "friday": "12:00 PM - 10:00 PM",
        "saturday": "1:00 PM - 10:00 PM",
        "sunday": "1:00 PM - 8:00 PM"
      }
    },
    {
      "restaurant_name": "Tandoori Delights",
      "cuisine_type": "Indian",
      "address": {
        "street": "123 Tandoori Lane",
        "city": "Karachi",
        "state": "SD",
        "postal_code": "45678"
      },
      "phone": "555-876-5432",
      "image_url": 'https://images.deliveryhero.io/image/fd-pk/LH/h8z1-hero.jpg?width=560&height=240&quality=45',
      "menu_categories": [
        {
          "category_name": "Breads",
          "items": [
            {
              "item": "Naan",
              "price": 40,
              "item_image_url": 'https://images.deliveryhero.io/image/fd-pk/LH/n7bd-hero.jpg?width=560&height=240&quality=45',
            },
            {
              "item": "Roti",
              "price": 30,
              "item_image_url": 'https://images.deliveryhero.io/image/fd-pk/LH/w5ap-hero.jpg?width=560&height=240&quality=45',
            }
          ]
        },
        {
          "category_name": "Grilled Delights",
          "items": [
            {
              "item": "Tandoori Chicken",
              "price": 300,
              "item_image_url": 'https://images.deliveryhero.io/image/fd-pk/LH/kv1o-hero.jpg?width=560&height=240&quality=45',
            },
            {
              "item": "Seekh Kebab",
              "price": 250,
              "item_image_url": 'https://images.deliveryhero.io/image/fd-pk/LH/j4hj-hero.jpg?width=560&height=240&quality=45',
            }
          ]
        },
        {
          "category_name": "Desserts",
          "items": [
            {
              "item": "Gulab Jamun",
              "price": 80,
              "item_image_url": 'https://images.deliveryhero.io/image/fd-pk/LH/j722-hero.jpg?width=560&height=240&quality=45',
            },
            {
              "item": "Kulfi",
              "price": 90,
              "item_image_url": 'https://images.deliveryhero.io/image/fd-pk/LH/u0m9-hero.jpg?width=560&height=240&quality=45',
            }
          ]
        }
      ],
      "opening_hours": {
        "monday": "12:00 PM - 8:00 PM",
        "tuesday": "12:00 PM - 8:00 PM",
        "wednesday": "12:00 PM - 8:00 PM",
        "thursday": "12:00 PM - 8:00 PM",
        "friday": "12:00 PM - 9:00 PM",
        "saturday": "1:00 PM - 9:00 PM",
        "sunday": "1:00 PM - 7:00 PM"
      }
    },

    {
      "restaurant_name": "Karachi Biryani House",
      "cuisine_type": "Pakistani",
      "address": {
        "street": "456 Food Street",
        "city": "Karachi",
        "state": "SD",
        "postal_code": "78901"
      },
      "phone": "555-789-1234",
      "image_url": "https://images.deliveryhero.io/image/fd-pk/LH/ss5x-hero.jpg?width=560&height=240&quality=45",
      "menu_categories": [
        {
          "category_name": "Starters",
          "items": [
            {
              "item": "Chicken Samosa",
              "price": 150,
              "item_image_url": "https://images.deliveryhero.io/image/fd-pk/LH/bxt6-hero.jpg?width=560&height=240&quality=45",
            },
            {
              "item": "Vegetable Pakora",
              "price": 120,
              "item_image_url": "https://images.deliveryhero.io/image/fd-pk/LH/cq6a-hero.jpg?width=560&height=240&quality=45",
            }
          ]
        },
        {
          "category_name": "Main Courses",
          "items": [
            {
              "item": "Chicken Biryani",
              "price": 350,
              "item_image_url": "https://images.deliveryhero.io/image/fd-pk/LH/t0fy-hero.jpg?width=560&height=240&quality=45",
            },
            {
              "item": "Beef Karahi",
              "price": 300,
              "item_image_url": "https://images.deliveryhero.io/image/fd-pk/LH/n1zj-hero.jpg?width=560&height=240&quality=45",
            }
          ]
        },
        {
          "category_name": "Desserts",
          "items": [
            {
              "item": "Gulab Jamun",
              "price": 80,
              "item_image_url": "https://images.deliveryhero.io/image/fd-pk/LH/ghhz-hero.jpg?width=560&height=240&quality=45",
            },
            {
              "item": "Kheer",
              "price": 100,
              "item_image_url": "https://images.deliveryhero.io/image/fd-pk/LH/j6i2-hero.jpg?width=560&height=240&quality=45",
            }
          ]
        }
      ],
      "opening_hours": {
        "monday": "11:00 AM - 10:00 PM",
        "tuesday": "11:00 AM - 10:00 PM",
        "wednesday": "11:00 AM - 10:00 PM",
        "thursday": "11:00 AM - 10:00 PM",
        "friday": "11:00 AM - 11:00 PM",
        "saturday": "12:00 PM - 11:00 PM",
        "sunday": "12:00 PM - 9:00 PM"
      }
    },
    {
      "restaurant_name": "Spice of Lahore",
      "cuisine_type": "Indian",
      "address": {
        "street": "789 Spice Avenue",
        "city": "Karachi",
        "state": "SD",
        "postal_code": "56789"
      },
      "phone": "555-234-5678",
      "image_url": "https://images.deliveryhero.io/image/fd-pk/LH/nnzu-hero.jpg?width=560&height=240&quality=45",
      "menu_categories": [
        {
          "category_name": "Appetizers",
          "items": [
            {
              "item": "Paneer Tikka",
              "price": 250,
              "item_image_url": "https://images.deliveryhero.io/image/fd-pk/LH/vj9d-hero.jpg?width=560&height=240&quality=45",
            },
            {
              "item": "Samosa Chaat",
              "price": 180,
              "item_image_url": "https://images.deliveryhero.io/image/fd-pk/LH/oiu4-hero.jpg?width=560&height=240&quality=45",
            }
          ]
        },
        {
          "category_name": "Main Courses",
          "items": [
            {
              "item": "Butter Chicken",
              "price": 400,
              "item_image_url": "https://images.deliveryhero.io/image/fd-pk/LH/w8wq-hero.jpg?width=560&height=240&quality=45",
            },
            {
              "item": "Dal Makhani",
              "price": 250,
              "item_image_url": "https://images.deliveryhero.io/image/fd-pk/LH/v7hb-hero.jpg?width=560&height=240&quality=45",
            }
          ]
        },
        {
          "category_name": "Desserts",
          "items": [
            {
              "item": "Rasmalai",
              "price": 100,
              "item_image_url": "https://images.deliveryhero.io/image/fd-pk/LH/rvz1-hero.jpg?width=560&height=240&quality=45",
            },
            {
              "item": "Gulab Jamun",
              "price": 80,
              "item_image_url": "https://images.deliveryhero.io/image/fd-pk/LH/qqjj-hero.jpg?width=560&height=240&quality=45",
            }
          ]
        }
      ],
      "opening_hours": {
        "monday": "12:00 PM - 9:00 PM",
        "tuesday": "12:00 PM - 9:00 PM",
        "wednesday": "12:00 PM - 9:00 PM",
        "thursday": "12:00 PM - 9:00 PM",
        "friday": "12:00 PM - 10:00 PM",
        "saturday": "1:00 PM - 10:00 PM",
        "sunday": "1:00 PM - 8:00 PM"
      }
    },
    {
      "restaurant_name": "Tandoori Delights",
      "cuisine_type": "Indian",
      "address": {
        "street": "123 Tandoori Lane",
        "city": "Karachi",
        "state": "SD",
        "postal_code": "45678"
      },
      "phone": "555-876-5432",
      "image_url": "https://images.deliveryhero.io/image/fd-pk/LH/fngf-hero.jpg?width=560&height=240&quality=45",
      "menu_categories": [
        {
          "category_name": "Breads",
          "items": [
            {
              "item": "Naan",
              "price": 40,
              "item_image_url": "https://images.deliveryhero.io/image/fd-pk/LH/m5r9-hero.jpg?width=560&height=240&quality=45",
            },
            {
              "item": "Roti",
              "price": 30,
              "item_image_url": "https://images.deliveryhero.io/image/fd-pk/LH/t6ms-hero.jpg?width=560&height=240&quality=45",
            }
          ]
        },
        {
          "category_name": "Grilled Delights",
          "items": [
            {
              "item": "Tandoori Chicken",
              "price": 300,
              "item_image_url": "https://images.deliveryhero.io/image/fd-pk/LH/w3ua-hero.jpg?width=560&height=240&quality=45",
            },
            {
              "item": "Seekh Kebab",
              "price": 250,
              "item_image_url": "https://images.deliveryhero.io/image/fd-pk/LH/i86v-hero.jpg?width=560&height=240&quality=45",
            }
          ]
        },
        {
          "category_name": "Desserts",
          "items": [
            {
              "item": "Gulab Jamun",
              "price": 80,
              "item_image_url": "https://images.deliveryhero.io/image/fd-pk/LH/hxig-hero.jpg?width=560&height=240&quality=45",
            },
            {
              "item": "Kulfi",
              "price": 90,
              "item_image_url": "https://images.deliveryhero.io/image/fd-pk/LH/n6wa-hero.jpg?width=560&height=240&quality=45",
            }
          ]
        }
      ],
      "opening_hours": {
        "monday": "12:00 PM - 8:00 PM",
        "tuesday": "12:00 PM - 8:00 PM",
        "wednesday": "12:00 PM - 8:00 PM",
        "thursday": "12:00 PM - 8:00 PM",
        "friday": "12:00 PM - 9:00 PM",
        "saturday": "1:00 PM - 9:00 PM",
        "sunday": "1:00 PM - 7:00 PM"
      }
    }
  ]

function postRestaurants() {
  try {
    for (var i = 0; i < restro_data.length; i++) {
      addDoc(collection(db, "allrestaurant"), restro_data[i])
    }
  } catch (e) {
    alert(e.message)
  }

}

async function getRestaurant() {
  // import { collection, getDocs } from "firebase/firestore";

  const querySnapshot = await getDocs(collection(db, "allrestaurant"));
  const data = []
  querySnapshot.forEach((doc) => {
    const item = doc.data()
    item.id = doc.id
    // console.log('item',item)
    data.push(item)
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
  })
  return data
};


async function getSingleRestaurant(id) {
  const docRef = doc(db, "allrestaurant", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data()
    console.log("Document data:", docSnap.data());
    return docSnap.data()
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");

  }
}

export {
  signinFb,
  googlesignin,
  postRestaurants,
  getRestaurant,
  getSingleRestaurant,
}