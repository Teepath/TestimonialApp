import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import InputForm from "./components/InputForn";
import ViewPage from "./components/ViewPage";
import config from "./config/config";

const storage = config.storage;
const db = config.firestore;

const App = () => {
  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };
  const [is_load, setLoad] = useState(false);

  const id = Math.round(Math.random() * 10000000).toString();
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);

  const [userData, setUserDate] = useState([]);

  const handleUploadFile = () => {
    const uploadTask = storage.ref(`/images/profiles/${id}`).put(imageAsFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(`profiles/${id}`)
          .getDownloadURL()
          .then((url) => {
            setImageAsUrl(url);
          });
      }
    );
  };

  const [state, setState] = useState({
    fullname: "",
    location: "",
    usertype: "",
    experience: "",
  });
  console.log(imageAsFile);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    setLoad(true);
    db.collection("testimonials").doc().set({
      fullname: state.fullname,
      location: state.location,
      usertype: state.usertype,
      experience: state.experience,
      imageUrl: imageAsUrl,
    });

    const data = {
      fullname: state.fullname,
      location: state.location,
      usertype: state.usertype,
      experience: state.experience,
      imageUrl: imageAsUrl,
    };

    setUserDate((prevState) => [...prevState, data]);
    setState({
      fullname: "",
      location: "",
      usertype: "",
      experience: "",
    });
    setImageAsFile(" ");
    setLoad(false);
  };

  console.log(state);

  useEffect(() => {
    if (imageAsFile) {
      handleUploadFile();
    }
  }, [id, imageAsFile]);
  useEffect(() => {
    let display = displayUserData();
  }, []);

  const displayUserData = () => {
    db.collection("testimonials")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          let document = { id: doc.id, ...doc.data() };
          setUserDate((prevState) => [...prevState, document]);
        });
        // console.log(documents);
      });
  };

  return (
    <div>
      <Header />
      <InputForm
        setState={setState}
        state={state}
        handleSubmit={handleSubmit}
        handleImageAsFile={handleImageAsFile}
      />
      <ViewPage load={is_load} userData={userData} />
    </div>
  );
};

export default App;
