<template>
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
</template>

<script>
export default {
  name: "HeaderMenu",
  created() {},
  data() {
    return {
      menuItems: [
        { menuItem: "Home", route: "#home" },
        { menuItem: "Projects", route: "#projects" },
        { menuItem: "Little Projects", route: "#little-projects" },
        { menuItem: "About", route: "#about" },
      ],
    };
  },
  props: {},
  methods: {},
};
</script>

<style scoped></style>
