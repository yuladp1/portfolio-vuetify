<template>
  <div>
      <v-container>
        <v-row >
          <p class="mx-auto my-16 text-h3 skills">Skills</p>
        </v-row>
      </v-container>

      <v-container>
        <v-row>
          <v-col class="col-6">
            <v-img src="../assets/i-hate-css.webp" class="skills__image"></v-img>
          </v-col>
          <v-col class="col-6 skills__content">
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
import gsap from "gsap";
export default {
  name: "MySkills",
  created() {},
  data() {
    return {
      skills: ["HTML", "CSS", "SCSS", "GIT", "VUE", "Vuetify", "Gsap"],
    };
  },
  mounted() {
    gsap.from('.skills', {
        opacity: 0,
        x: -200,
      });
  gsap.to(
    ".skills",
   { scrollTrigger: ".skills", x: 0, duration: 3 }
   );


  gsap.from('.skills__image', {
            scaleX: 0,
        scaleY: 0
              });    

   gsap.to(".skills__image",
   { scrollTrigger: ".skills__image", 
     scaleX: 1,
   scaleY: 1,
   duration: 2 });




   gsap.from('.skills__content', {
          x: +200,
              });    

   gsap.to(".skills__content",
   { scrollTrigger: ".skills__content", 
  x: 0,
   duration: 2 });

},
};
</script>

<style lang="scss" scoped></style>