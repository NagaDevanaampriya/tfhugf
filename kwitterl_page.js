
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
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      
//Start code
console.log(firebase_message_id);
console.log(message_data);

name = message_data['name'];
measage = message_data['message'];
like = message_data['likes'];

name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'</h4>";
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
like_button = "<button class='btn btn-warning' onclick='updateLike(this.id)' values="+like+" id ="+firebase_message_id+">";
span_with_tag = "<span class= 'glyphicon glyphicon-thumbs-up'> Likes : "+like+"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
      
//End code
      } });  }); }




function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});

document.getElementById("msg").value = "";
}

function logout(){
      

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location = "index.html";

}

 function updateLike(message_id)
{
console.log("clicked on like button -"+message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(
  updated_likes    
);
firebase.database().ref(room_name).child(message_id).update({
      like : updated_likes
     });

}

