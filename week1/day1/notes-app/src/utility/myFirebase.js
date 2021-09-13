import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = { 
	apiKey: "Your apiKey",
	authDomain: "Your authDomain",
	databaseURL: "Your databaseURL",
	projectId: "Your projectID",
	storageBucket: "Your storageBucket",
	meshsagingSenderId: "Your meshasginSenderID",
	appId: "Your appID",
	measurementId: "Your G-measurementId"
  }

  initializeApp(firebaseConfig);

  function getFireBaseRef(refPath){
	  return ref(getDatabase(), refPath);
  }

  export default{
	  getFireBaseRef: getFireBaseRef
  };