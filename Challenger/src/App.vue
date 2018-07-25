<!-- On all pages --->





<!-- Stylesheets in to separate files, a links into router links --->






<template>
  <div id="app">

    <div id="horizontalTopBar" class="border-top">
    <!-- Logo for site,login and user details, then buttons for routing --->
      <a id="loginButton" href="/login" class="button loginButton">Login</a>
      <a id="logoutButton" href="/logout" class="button">Logout</a>
      <a id="registerButton" href="/register" class="button">Register</a>

      <div id="userInfoBox" class="hl">
        <h1 id="username">UserName</h1>                                                     <!-- TO CHANGE     {{this.currentUser.username}} --->
        <img id="profilePic" src="./assets/logo.png">                                     <!-- :src=this.currentUser.profilePic --->
        <img id="goldTrophy" src="./assets/GoldCup2.png">
        <div id="numGolds">{{2}}</div>                                                     <!-- {{this.currentUser.numGolds}} -->
        <img id="bronzeTrophy" src="./assets/BronzeCup2.png">
        <div id="numBronzes">{{0}}</div>                                                   <!-- {{this.currentUser.numBronzes}} -->
        <a id="currentUserChallengers" href="/users/currentChallengers">My Current Challengers</a>
        <a id="manageAccount" href="/users/myaccount">My Account</a>
      </div>

    </div>

    <div id="verticalBar" class="border-right">
    <!-- Advertising --->

    </div>



    <div>
      <ul id="menuBar">
        <li><a id="menuCurrent" class="active" href="/challenges/current" onclick="setActive('curr')">Current Challenges</a></li>
        <li><a id="menuPrevious" href="/challenges/previous" onclick="setActive('prev')">Previous Challenges</a></li>
        <li><a id="menuFuture" href="/challenges/future" onclick="setActive('fut')">Future Challenges</a></li>
        <li><a id="menuAbout" href="/about" onclick="setActive('about')">About</a></li>
        <li><a id="menuContact" href="/contact" onclick="setActive('contact')">Contact</a></li>
      </ul>
    </div>

    <div id="content">
      <router-view> </router-view>
    </div>

  </div>
</template>






<script>
export default {
  name: 'App',

  data() {
  },

  mounted: function() {
    this.setActive(window.location.pathname);
  },

  methods: {

    setActive: function (activeItem) {
      //Sets the designated menu item to active and the rest to inactive
      document.getElementById("menuCurrent").className = "";
      document.getElementById("menuPrevious").className = "";
      document.getElementById("menuFuture").className = "";
      document.getElementById("menuAbout").className = "";
      document.getElementById("menuContact").className = "";

      switch (activeItem) {
        case "/challenges/current": document.getElementById("menuCurrent").className = "active"; break;
        case "/challenges/previous": document.getElementById("menuPrevious").className = "active"; break;
        case "/challenges/future": document.getElementById("menuFuture").className = "active"; break;
        case "/about": document.getElementById("menuAbout").className = "active"; break;
        case "/contact": document.getElementById("menuContact").className = "active"; break;
      }
    }


  }
}
</script>



<style>
  /* Borders on top and right hand side */
  #horizontalTopBar {
    background-color: #293b59;
    height: 200px;
    width: 100%;
    position: absolute;
    top: 0;
    margin-left: -20px;
  }
  #verticalBar {
    background-color: #293b59;
    top: 0;
    bottom: -10px;
    width: 250px;
    position: fixed;
    right: 0;
    margin-top: -25px;
    margin-bottom: 10px;
    z-index: -1;
  }


  /* Buttons for login logout and register */
  #loginButton {
    font-family: "Segoe UI";
    font-weight: bold;
    color: white;
    position: absolute;
    right: 330px;
    top: 10%;
    text-align: center;
    text-decoration: none;
    background-color: #333;
    padding: 8px 20px;
    border: 1px solid white;
    border-radius: 3px;
    width: 60px;
  }
  #loginButton:hover {
    background-color: #111;
  }
  #logoutButton {
    font-family: "Segoe UI";
    font-weight: bold;
    color: white;
    position: absolute;
    right: 330px;
    top: 35%;
    text-align: center;
    text-decoration: none;
    background-color: #333;
    padding: 8px 20px;
    border: 1px solid white;
    border-radius: 3px;
    width: 60px;
  }
  #logoutButton:hover {
    background-color: #111;
  }
  #registerButton {
    font-family: "Segoe UI";
    font-weight: bold;
    color: white;
    position: absolute;
    right: 330px;
    top: 60%;
    text-align: center;
    text-decoration: none;
    background-color: #333;
    padding: 8px 20px;
    border: 1px solid white;
    border-radius: 3px;
    width: 60px;
  }
  #registerButton:hover {
    background-color: #111;
  }




  /* User information box */
  #userInfoBox {
    height: 150px;
    width: 300px;
    position: absolute;
    right: 1%;
    top: 5%;
  }
  #username {
    font-family: "Segoe UI";
    margin-top: 0px;
    margin-left: 1px;
    font-size: 25px;
  }
  #profilePic {
    width: 80px;
    height: 80px;
    position: absolute;
    right: 1%;
    top: 1%;
    border: 1px solid black;
    background-color: white;
  }
  #goldTrophy {
    width: 18px;
    height: 18px;
    position: absolute;
    left: 2%;
    top: 30%;
  }
  #bronzeTrophy {
    width: 18px;
    height: 18px;
    position: absolute;
    left: 2%;
    top: 50%;
  }
  #numGolds {
    font-family: "Segoe UI";
    font-weight: bold;
    position: absolute;
    left: 10%;
    top : 30%;
  }
  #numBronzes {
    font-family: "Segoe UI";
    font-weight: bold;
    position: absolute;
    left: 10%;
    top: 50%;
  }
  #manageAccount {
    font-family: "Segoe UI";
    text-decoration: underline;
    color: black;
    font-weight: bold;
    position: absolute;
    left: 2%;
    top: 90%;
  }
  #currentUserChallengers {
    font-family: "Segoe UI";
    text-decoration: underline;
    color: black;
    font-weight: bold;
    position: absolute;
    left: 2%;
    top: 70%;
  }


  /* Menu horizontal navigation bar */
  #menuBar {
    font-family: "Segoe UI";
    font-weight: bold;
    position: absolute;
    top: 180px;
    left: 0%;
    right: 250px;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    list-style-type: none;
    margin: 0;
    border-top: 1px solid white;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
  }
  li {
    float: left;
    display: inline;
  }
  li a {
    text-align: center;
    display: block;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
  }
  li a:hover:not(.active) {
    background-color: #111;
  }

  .active {
    background-color: #293b59;
  }

  #content {
    padding-right: 243px;
    padding-top: 210px;
    margin-left: -10px;
    padding-bottom: 10px;
  }

</style>
