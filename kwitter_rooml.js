var firebaseConfig = {
      apiKey: "AIzaSyCsFvqmJpGaQQtHyNbMt1-9pSsKr61g_BI",
      authDomain: "nkam-60053.firebaseapp.com",
      databaseURL: "https://nkam-60053-default-rtdb.firebaseio.com",
      projectId: "nkam-60053",
      storageBucket: "nkam-60053.appspot.com",
      messagingSenderId: "810083938822",
      appId: "1:810083938822:web:135422d0fed46194d7c987"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome - "+ user_name+ "!";
//ADD YOUR FIREBASE LINKS HERE

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
           });

           localStorage.setItem("room_name", room_name);

           window.location = "kwitter_rooml.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" +Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names+ "</div><hr>";
     document.getElementById("output").innerHTML  +=row;
//End code
      });});}
getData();

 function redirectToRoomName(name){

      
      localStorage.setItem("room_name",name);
      window.location = "kwitterlv_page.html";

}

function logout(){
      

            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
      
            window.location = "index.html";
      
}

