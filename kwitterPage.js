//LINKS FIREBASE
//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
      apiKey: "AIzaSyCM0mBZD7fRwcD7_Dr8FS_jdFIzS2RkBd4",
      authDomain: "vamosconversar-3775b.firebaseapp.com",
      databaseURL: "https://vamosconversar-3775b-default-rtdb.firebaseio.com",
      projectId: "vamosconversar-3775b",
      storageBucket: "vamosconversar-3775b.appspot.com",
      messagingSenderId: "256427620731",
      appId: "1:256427620731:web:0a2ede58e323809912e5de"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
     userName = localStorage.getItem("userName");
     roomName = localStorage.getItem("roomName");
     function send()
      {
        msg = document.getElementById("msg").value;
        firebase.database().ref(roomName).push({;
        name:userName,
        message:msg,
        like:0
      }
      
function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código

//Fim do código
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
          window.location. = "index.html";
      }

