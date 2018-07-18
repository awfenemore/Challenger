<!-- On all pages --->

<template>
  <div id="app">

    <div id="horizontalBar" class="border-top">
    <!-- Logo for site,login and user details, then buttons for routing --->

    </div>

    <div id="verticalBar" class="border-right">
    <!-- Advertising --->

    </div>

    <div id="userInfoBox" class="hl">
      <h1 id="username">UserName</h1>                                                     <!-- TO CHANGE     {{this.currentUser.username}} --->
      <img id="profilePic" src="./assets/logo.png">                                     <!-- :src=this.currentUser.profilePic --->
      <img id="goldTrophy" src="./assets/GoldCup2.png">
      <div id="numGolds">{{2}}</div>                                                     <!-- {{this.currentUser.numGolds}} -->
      <img id="bronzeTrophy" src="./assets/BronzeCup2.png">
      <div id="numBronzes">{{0}}</div>                                                   <!-- {{this.currentUser.numBronzes}} -->
      <a id="currentUserChallengers" href="/users/currentChallengers">Current Challengers</a>
      <a id="manageAccount" href="/users/myaccount">My Account</a>
    </div>

    <router-view/>
  </div>
</template>



<script>
export default {
  name: 'App'
}
</script>

<style>
  /* Borders on top and right hand side */
  #horizontalBar {
    background-color: #293b59;
    height: 200px;
    width: 100%;
    position: absolute;
    top: 0%;
    margin-left: -20px;
  }
  #verticalBar {
    background-color: #293b59;
    height: 100%;
    width: 250px;
    position: absolute;
    right: 0%;
    margin-top: -20px;
    margin-bottom: 20px;
  }


  /* User information box */
  #userInfoBox {
    height: 150px;
    width: 300px;
    position: absolute;
    right: 1%;
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
</style>
