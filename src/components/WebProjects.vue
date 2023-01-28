<template>
  <div>
    <v-container>
      <v-row justify="center" class="col-12 text-center">
        <p class="justify-center text-h3">Projects</p>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="4" v-for="project in webProjects" :key="project.index">
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="'project.img'"
            >
            </v-img>
            <v-card-title>{{ project.webProjectName }}</v-card-title>
            <v-card-text class="text--primary">
              {{ project.description }}
            </v-card-text>
            <v-card-actions>
              <v-btn color="orange" :href="project.codeLink" target="blank">
                <v-icon>mdi-github</v-icon>
                source code
              </v-btn>
              <v-btn color="orange" :href="project.liveLink" target="blank">
                <v-icon>mdi-github</v-icon>
                live site
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "WebProjects",
  created() {},
  data() {
    return {
      webProjects: [
        {
          webProjectName: "Growfy",
          img: "../src/assets/projects-image/growfy.png",
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
  methods: {},
};
</script>

<style scoped></style>
