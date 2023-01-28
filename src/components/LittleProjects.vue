<template>
  <div>
    <v-container>
      <v-row justify="center" class="col-12 text-center">
        <p class="justify-center text-h3">Little projects</p>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col cols="3" v-for="project in littleProjects" :key="project.index">
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="text-h5 mb-1">
                  {{ project.name }}
                </v-list-item-title>
                <v-list-item-subtitle>{{
                  project.description
                }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              ></v-list-item-avatar>
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
export default {
  name: "LittleProjects",
  created() {},
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

<style scoped></style>
