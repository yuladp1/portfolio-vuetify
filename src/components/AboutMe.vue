<template>
  <v-container>
    <v-parallax src="../assets/background.jpg">
      <v-row class="about-me__wrapper py-16">
        <v-col class="d-flex flex-column align-stretch col-12 about-me">
          <h1 class="about-me__title">Julia Romanovska</h1>
          <p class="text-h5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
            similique sunt asperiores, cum dolorum molestias, veritatis cumque
            quasi eos porro tempore ea quis blanditiis aperiam excepturi. Autem
            corrupti assumenda cupiditate!
          </p>
          <div class="about-me__buttons d-flex">
            <v-btn
              elevation="7"
              x-large
              color="white"
              class="mr-5"
              href="www.linkedin.com/in/julia-romanovska"
              target="_blank"
            >
              <v-icon>mdi-linkedin</v-icon>
              Linkedin
            </v-btn>
            <v-btn
              elevation="7"
              x-large
              color="white"
              href="https://github.com/yuladp1"
              target="_blank"
            >
              <v-icon>mdi-github</v-icon>
              Github
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-parallax>
  </v-container>
</template>

<script>
export default {
  name: "AboutMe",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
@import url(//db.onlinewebfonts.com/c/a4745f4b1d04fa025c6a05d891ed0126?family=Monument+Extended+Ultrabold);

.about-me>*:not(:last-child) {
  margin-bottom: 20px;
}
.about-me__title {
  font-family: "Monument Extended Ultrabold";
  letter-spacing: 5px;
  text-transform: uppercase;
  font-size: 6rem;
  line-height: 7rem;
  color: white;
  text-shadow:
    -0  -1px  0   #000000,
    0   -1px  0   #000000,
    -0   1px  0   #000000,
    0    1px  0   #000000,
    -1px -0   0   #000000,
    1px  -0   0   #000000,
    -1px  0   0   #000000,
    1px   0   0   #000000,
    -1px -1px 0   #000000,
    1px  -1px 0   #000000,
    -1px  1px 0   #000000,
    1px   1px 0   #000000,
    -1px -1px 0   #000000,
    1px  -1px 0   #000000,
    -1px  1px 0   #000000,
    1px   1px 0   #000000;
}


</style>
