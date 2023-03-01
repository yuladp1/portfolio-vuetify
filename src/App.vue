<template>
  <v-app>
    <HeaderMenu />
    <v-main>
      <AboutMe />
      <MySkills />
      <WebProjects />
      <MiniProjects />
    </v-main>
  </v-app>
</template>

<script>
import HeaderMenu from "./components/HeaderMenu.vue";
import AboutMe from "./components/AboutMe.vue";
import MySkills from "./components/MySkills.vue";
import WebProjects from "./components/WebProjects.vue";
import MiniProjects from "./components/MiniProjects.vue";

export default {
  name: "App",
  components: {
    HeaderMenu,
    AboutMe,
    MySkills,
    WebProjects,
    MiniProjects,
  },
  data: () => ({}),
};
</script>
<style>
@import url(//db.onlinewebfonts.com/c/a4745f4b1d04fa025c6a05d891ed0126?family=Monument+Extended+Ultrabold);
v-footer {
  width: 100%;
}
</style>
