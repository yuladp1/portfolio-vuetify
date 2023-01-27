<template>
  <v-app>
    <v-app-bar app color="white" elevate-on-scroll elevation="6">
      <v-app-bar-title class="py-0 px-10"> Portfolio </v-app-bar-title>
      <v-spacer />
      <v-list class="d-flex align-center">
        <v-list-item link v-for="item in menuItems" :key="item.index">
          <v-list-title>{{ item.menuItem }}</v-list-title>
        </v-list-item>
      </v-list>

      <v-btn>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn color="success" outlined text> GO </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col d-flex class="align-stretch col-6">
            <h1 class="text-h1">Julia Romanovska</h1>
            <p class="text-h5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              similique sunt asperiores, cum dolorum molestias, veritatis cumque
              quasi eos porro tempore ea quis blanditiis aperiam excepturi.
              Autem corrupti assumenda cupiditate!
            </p>
            <v-btn href="www.linkedin.com/in/julia-romanovska" target="_blank">
              <v-icon>mdi-linkedin</v-icon>
              Linkedin
            </v-btn>
            <v-btn href="https://github.com/yuladp1" target="_blank">
              <v-icon>mdi-github</v-icon>
              Github
            </v-btn>
          </v-col>

          <v-col class="col-6">
            <v-img src="./assets/i-hate-programming.jpg"></v-img>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row justify="center" class="col-12 text-center">
          <p class="justify-center text-h3">About Me</p>
        </v-row>
      </v-container>

      <v-container>
        <v-row>
          <v-col class="col-6">
            <v-img src="./assets/i-hate-css.webp"></v-img>
          </v-col>
          <v-col class="col-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              autem. Alias perspiciatis illo molestiae in repellat aliquid amet
              ullam, aliquam voluptatem dolor quam veritatis nesciunt iusto aut
              deserunt maxime. Molestias.
            </p>
            <v-list>
              <v-list-item v-for="item in skills" :key="item.index">
                <v-icon color="success" class="pr-4">mdi-check-all</v-icon>
                <v-list-item-subtitle class="text-h6">{{
                  item
                }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>

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
                :src="project.img"
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
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    menuItems: [
      { menuItem: "Home", route: "#home" },
      { menuItem: "Projects", route: "#projects" },
      { menuItem: "Little Projects", route: "#little-projects" },
      { menuItem: "About", route: "#about" },
    ],
    skills: ["HTML", "CSS", "SCSS", "GIT", "VUE", "Vuetify", "Gsap"],
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
  }),
};
</script>
