<template>
  <transition >
  <div >
    <v-container>
      <v-row justify="center" class="col-12 text-center">
        <p class="justify-center text-h3 projects" >Projects</p>
      </v-row>
    </v-container>
    <v-container>
      <v-row class="d-flex flex-wrap">
        <v-col  v-for="project in webProjects" :key="project.index" class=" web-projects__project">
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="align-end"
              height="200px"
              :src="project.img"
            >
            </v-img>
            <v-card-title>{{ project.webProjectName }}</v-card-title>
            <v-card-text class="text--primary overflow-y-auto web-projects__card-content">
              {{ project.description }}
            </v-card-text>
            <v-spacer />
            <v-card-actions class="d-flex flex-wrap px-2">
              <v-btn  color="green" :href="project.codeLink" target="blank" class="ma-2 web-projects__button">
                <v-icon>mdi-github</v-icon>
                source code
              </v-btn>
              <v-btn  color="green" :href="project.liveLink" target="blank" class="ma-2  web-projects__button">
                <v-icon>mdi-github</v-icon>
                live site
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    
  </div>
</transition>
</template>

<script>
import gsap from "gsap";

import  VSimpleScrollTrigger  from "gsap/ScrollTrigger";
gsap.registerPlugin(VSimpleScrollTrigger);


export default {
  name: "WebProjects",
  created() {},
  data() {
    return {
      webProjects: [
        {
          webProjectName: "Growfy",
          img: "'../src/assets/projects-image/growfy.png'",  
          codeLink: "https://github.com/yuladp1/growfy",
          liveLink: "https://yuladp1.github.io/growfy/",
          description:
            "This landing page was created using Vue CLI , divided into components. It some animations in this project. The layout was made using flex , the site is responsive The git version control system is used.",
        },

        {
          webProjectName: "RELVISE",
          img: "../assets/projects-image/relvise.png",
          codeLink: "https://github.com/yuladp1/relvise-vue",
          liveLink: "https://yuladp1.github.io/relvise-vue/",
          description:
            "This landing page was created using Vue CLI , divided into components. The layout was made using flex , the site is responsive The git version control system is used.",
        },

        {
          webProjectName: "CRYPTO",
          img: "../assets/projects-image/crypto.png",
          codeLink: "https://github.com/yuladp1/crypto-vue",
          liveLink: "https://yuladp1.github.io/crypto-vue/",
          description:
            "The page initially seemed very easy to develop, as a result, 70% of the work had to be redone. Difficulties arose at each stage: unable to scale images. Problem solved. it was necessary to create json and get data from it: done with fetch. it was necessary to implement drop-down blocks in the FAQ section - standard output method array in the loop was not suitable due to duplication of elements. Solution: pass an array object from App.vue to the FaqAnswers.vue component one by one, in the FaqAnswers.vue component, display the elements of the list through a loop.",
        },
      ],
    };
  },
  props: {},
   mounted() {
    gsap.from('.projects', {
        opacity: 0,
        x: -200,
      });
  gsap.to(
    ".projects",
   { scrollTrigger: ".projects", x: 0, duration: 3 }
   );


  gsap.from('.web-projects__project', {
        opacity: 0,
              });    

   gsap.to(".web-projects__project",
   { scrollTrigger: ".projects", 
   opacity: 1,
   duration: 2 });
},
  
}
</script>
	

<style >
.web-projects__project {
  min-width: 300px;
}

@media (max-width: 1263px) {
  .web-projects__button {
width: 100%;
  }
}
.web-projects__card-content {
  height: 150px;
}
</style>
