<template>
  <v-app>
    <v-app-bar app fixed flat>
      <v-toolbar-title class="overline" v-text="'Gerenciamento de Filas'" />

      <v-spacer />

      <v-btn icon @click="darkTheme = !darkTheme">
        <v-icon
          v-text="darkTheme ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
        />
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row>
          <v-col md="3">
            <CoreSection>
              <TheSidebar />
            </CoreSection>
          </v-col>

          <v-col>
            <CoreSection>
              <v-card-text>
                <nuxt />
              </v-card-text>
            </CoreSection>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
  }),
  computed: {
    darkTheme: {
      get() {
        return this.$vuetify.theme.isDark
      },
      set(status) {
        this.$vuetify.theme.isDark = status
      },
    },
  },
}
</script>
