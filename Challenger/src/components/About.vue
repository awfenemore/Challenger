<template>
<div id="about">
  <h1>About Challenger</h1>
  <div id="aboutInfo" v-for="section in about">
    <h2>{{section.head}}</h2>
    <p>{{section.body}}</p><br><br>
  </div>
  <div id="contact">{{'Any further questions can be handled at the '}} <a href="/contact">Contact Page</a></div>
  <br><br><br><br><br><br>
</div>


</template>









<script>
  import axios from 'axios';

  export default {
        name: "About",
      data() {
          return {
            about: []
          }
      },
      methods: {




  readAboutDetails: function () {
    axios.get('http://localhost:4941/api/v1/about')
      .then(response => {
        let about = response.data.split("*");
        for (let i = 0; i < response.data.split("*").length; i += 1) {
          let question = about[i].split("^");
          this.about.push({
            head: question[0],
            body: question[1]
          })
        }
      }).catch(e => {
      //do something with the error message
    })
        }
      },
      mounted: function () {
        this.readAboutDetails();
      }
    }
</script>





<style scoped>
  #about {
    background-color: darkgrey;
    border: 5px solid darkgrey;
    font-family: "Segoe UI";
    margin-bottom: -100px;
  }
  h1 {
    margin-left: 12px;
  }
  #aboutInfo {
    margin-left: 12px;
  }
  #contact {
    margin-left: 12px;
  }
</style>
