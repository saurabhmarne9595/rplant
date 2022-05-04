// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import firestore from "@react-native-firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFrxpmMc7zJx5xSLS6TxOUWSeo_Tcv8jY",
  authDomain: "rplant-6ca63.firebaseapp.com",
  projectId: "rplant-6ca63",
  storageBucket: "rplant-6ca63.appspot.com",
  messagingSenderId: "33288411539",
  appId: "1:33288411539:web:a02fc2685bdee504493066",
  measurementId: "G-QCL19NS4KP",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

passwordReset: (email) => {
  return firebase.auth().sendPasswordResetEmail(email);
};

const usersCollection = firebase
  .firestore()
  .collection("users")
  .get()
  .then((collectionSnapshot) => {
    // console.log("Total users: ", collectionSnapshot.size);
    collectionSnapshot.forEach((documentSnapshot) => {
      // console.log(documentSnapshot.data());
    });
  });

const getAllUserRecords = async () => {
  let users = [];
  const data = await firebase.firestore().collection("users").get();
  data.forEach((d) => {
    users.push(d.data());
  });
  return users;
};

const createUser = async (name, age) => {
  await firebase
    .firestore()
    .collection("users")
    .add({
      name: name,
      age: age,
    })
    .then(() => {
      console.log("User added!");
    });
};

////////////////////////////////////////////////////////////////////////////////////////////////
const PlantCollection = firebase
  .firestore()
  .collection("Plantdb")
  .get()
  .then((collectionSnapshot) => {
    // console.log("Total Plant: ", collectionSnapshot.size);
    collectionSnapshot.forEach((documentSnapshot) => {
      // console.log(documentSnapshot.data());
    });
  });

const getAllPlantRecords = async () => {
  let plants = [];
  const data = await firebase.firestore().collection("Plantdb").get();
  data.forEach((d) => {
    plants.push(d.data());
  });
  return plants;
};

const getAPlantRecord = async (PlantName) => {
  let plants = [];
  const data = await firebase
    .firestore()
    .collection("Plantdb")
    .where("Name", "==", PlantName)
    .get();
  data.forEach((d) => {
    plants.push(d.data());
  });
  return plants[0];
};

const AddPlant = async (Name, Price, Photo, Description) => {
  await firebase
    .firestore()
    .collection("Plantdb")
    .add({
      Description: Description,
      Name: Name,
      Photo: Photo,
      Price: Price,
    })
    .then(() => {
      console.log("Plant added!");
    });
};

/////////////////////////////////////////////////////////////////////////////////////////////////
// createUser("John Doe", 30);
// AddPlant(
//   "Sunflower123",
//   35,
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/800px-Sunflower_sky_backdrop.jpg",
//   "Helianthus is a genus comprising about 70 species of annual and perennial flowering plants in the daisy family Asteraceae commonly known as sunflowers."
// );
// console.log(getAllPlantRecords());
// console.log(getAllRecords());
// console.log(usersCollection);
const auth = firebase.auth();
export {
  auth,
  getAllUserRecords,
  createUser,
  getAllPlantRecords,
  AddPlant,
  getAPlantRecord,
};
