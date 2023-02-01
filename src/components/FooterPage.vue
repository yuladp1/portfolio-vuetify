<template>
  <div class="footer__wrapper">
    <v-footer dark padless>
      <v-card flat tile class="grey darken-3 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
        </v-card-text>
        <v-container>
          <v-row>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              class="mx-auto py-3"
            >
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail:"
                required
              ></v-text-field>

              <v-textarea
                v-model="text"
                label="Message:"
                row-height="15"
                required
              ></v-textarea>

              <v-btn color="error" class="mr-4" @click="reset">
                Reset Form
              </v-btn>

              <v-btn color="success"> Submit </v-btn>
            </v-form>
          </v-row>
        </v-container>
        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "FooterPage",
  created() {},
  data() {
    return {
      icons: ["mdi-facebook", "mdi-github", "mdi-linkedin"],
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      select: null,
    };
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style></style>
