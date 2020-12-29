import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAmX7NztIP6rSPxyI4MQZuucgyjw3poQWY",
  authDomain: "cfs-racing-club.firebaseapp.com",
  databaseURL: "https://cfs-racing-club-default-rtdb.firebaseio.com",
  projectId: "cfs-racing-club",
  storageBucket: "cfs-racing-club.appspot.com",
  messagingSenderId: "398840133886",
  appId: "1:398840133886:web:252f27385dba8acfe8cdaf",
  measurementId: "G-L938VST90Z",
});

const storage = firebase.storage();
const storageRef = storage.ref();

export const uploadFile = async (path, name, file) => {
  console.log("this far");
  const uploadTask = storageRef.child(`${path}/${name}`).put(file);
  let url;
  await uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
    url = downloadURL;
  });
  console.log(url);
  return url;
};

export { storageRef };
