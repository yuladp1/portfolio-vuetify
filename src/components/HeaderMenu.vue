<template>
  <v-app-bar app color="white" elevate-on-scroll elevation="6" class="px-10">
    <div class="header-menu__title">Portfolio</div>
    <v-spacer />
    <v-list class="d-flex align-center">
      <v-list-item
        link
        v-for="item in menuItems"
        :key="item.index"
        :href="item.route"
        @click="showcontacts(item.menuItem)"
      >
        <v-list-title>{{ item.menuItem }}</v-list-title>
      </v-list-item>
    </v-list>

    <div class="header-menu__contacts">
      <v-dialog v-model="dialog" width="500" v-on="dialog">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Contact Information
          </v-card-title>

          <v-card-text class="text-h4">
            <a
              target="blank"
              href="https://www.linkedin.com/in/julia-romanovska/"
              >Me on LinkedIn</a
            >
            <br />
            <p>My email: yuladp1@gmail.com</p>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderMenu",
  created() {},
  data() {
    return {
      dialog: false,
      menuItems: [
        { menuItem: "Home", route: "#home" },
        { menuItem: "Projects", route: "#projects" },
        { menuItem: "Mini-projects", route: "#mini-projects" },
        { menuItem: "Contacts", route: "" },
      ],
    };
  },
  props: {},
  methods: {
    showcontacts(variable) {
      if (variable == "Contacts") {
        this.dialog = true;
      }
    },
  },
};
</script>

<style>
.header-menu__title {
  min-width: fit-content;
}
</style>
