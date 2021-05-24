<template>
  <v-app>
    <v-app-bar app fixed flat>
      <v-toolbar-title class="overline" v-text="'Gerenciamento de Filas'" />
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row>
          <v-col md="3">
            <BaseSection>
              <TheSidebar />
            </BaseSection>
          </v-col>

          <v-col>
            <BaseSection>
              <v-card-text>
                <nuxt />
              </v-card-text>
            </BaseSection>
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
}
</script>
