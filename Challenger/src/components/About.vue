<template>
<div id="about">
  <h1>About Challenger</h1>
  {{this.about}}
</div>


</template>









<script>
  export default {
        name: "About",
      data() {
          return {
            about: ""
          }
      },
      methods: {
          readAboutDetails: function () {
            alert('calling');
            this.$http.get('http://localhost:4941/api/v1/about')
              .then(function (response) {
                alert('inside');
                this.about = response.data;
                alert(this.about);
              });
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
  }
</style>
