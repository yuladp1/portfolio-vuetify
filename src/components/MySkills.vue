<template>
  <div>
      <v-container>
        <v-row justify="center" class="col-12 text-center">
          <p class="justify-center text-h3">Skills</p>
        </v-row>
      </v-container>

      <v-container>
        <v-row>
          <v-col class="col-6">
            <v-img src="../assets/i-hate-css.webp"></v-img>
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
    </div>
</template>

<script>
export default {
  name: "MySkills",
  created() {},
  data() {
    return {
      skills: ["HTML", "CSS", "SCSS", "GIT", "VUE", "Vuetify", "Gsap"],
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>