<template>
  <div id="mini-projects">
    <v-container>
      <v-row justify="center">
        <p class="mx-auto my-16 text-h3 mini-projects">Mini-projects</p>
      </v-row>
    </v-container>

    <v-container>
      <v-row class="d-flex flex-wrap">
        <v-col
          v-for="project in littleProjects"
          :key="project.index"
          class="d-flex flex-wrap mini-projects__project"
        >
          <v-card
            cols="3"
            class="mx-auto little-projects__project"
            max-width="344"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="text-h5 mb-1">
                  {{ project.name }}
                </v-list-item-title>
                <v-list-item-subtitle>{{
                  project.description
                }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="80" color="grey">
                <v-img
                  src="../assets/Junior-Front-End-Developer_Blog-scaled.jpeg"
                ></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn outlined rounded text :src="project.codeLink">
                Code
              </v-btn>
              <v-btn outlined rounded text :src="project.liveLink">
                Live page
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "MiniProjects",
  mounted() {
    gsap.from(".mini-projects", {
      opacity: 0,
      x: -200,
    });
    gsap.to(".mini-projects", {
      scrollTrigger: ".mini-projects",
      x: 0,
      duration: 3,
    });

    gsap.from(".mini-projects__project", {
      scaleX: 0,
      scaleY: 0,
    });

    gsap.to(".mini-projects__project", {
      scrollTrigger: ".mini-projects__project",
      scaleX: 1,
      scaleY: 1,
      duration: 2,
    });
  },
  data() {
    return {
      littleProjects: [
        {
          name: "Reaction timer (Vue)",
          description: " description",
          codeLink: "",
          liveLink: "",
          img: "",
        },
        {
          name: "TODO app",
          description: " description",
          codeLink: "",
          liveLink: "",
          img: "",
        },
        {
          name: "Web forms",
          description: " description",
          codeLink: "",
          liveLink: "",
          img: "",
        },
        {
          name: "Project1",
          description: " description",
          codeLink: "",
          liveLink: "",
          img: "",
        },
      ],
    };
  },
  props: {},
  methods: {},
};
</script>

<style>
.little-projects__project {
  width: 300px;
}
</style>
