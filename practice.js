//Arquivo em branco para realizar a atividade

// 1) ADICIONE SEUS LINKS FIREBASE:
const firebaseConfig = {
  apiKey: "AIzaSyCM0mBZD7fRwcD7_Dr8FS_jdFIzS2RkBd4",
  authDomain: "vamosconversar-3775b.firebaseapp.com",
  databaseURL: "https://vamosconversar-3775b-default-rtdb.firebaseio.com",
  projectId: "vamosconversar-3775b",
  storageBucket: "vamosconversar-3775b.appspot.com",
  messagingSenderId: "256427620731",
  appId: "1:256427620731:web:0a2ede58e323809912e5de"
};


// 2) Initialize Firebase (adicione a inicialização do firebse):
firebase.initializeApp(firebaseConfig);

// 3) Programe a função addUser():
function addUser()
{
userName = document.getElementById("userName").value;
firebase.database().ref("/").child(userName).update({
purpose:"adding user"    
});


}