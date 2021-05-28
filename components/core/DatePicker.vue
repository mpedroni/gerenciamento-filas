<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template #activator="{ on, attrs }">
      <CoreTextInput
        v-model="formatedDate"
        label="Data de Nascimento"
        prepend-inner-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
      />
    </template>

    <v-date-picker
      v-model="date"
      v-bind="$attrs"
      :active-picker.sync="activePicker"
      locale="pt-br"
      :max="new Date().toISOString().substr(0, 10)"
      min="1950-01-01"
      @change="menu = false"
      v-on="$listeners"
    />
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue'
import { format, parseISO } from 'date-fns'

export default Vue.extend({
  name: 'CoreDatePicker',

  data: () => ({
    date: '',
    menu: false,
    activePicker: '',
  }),

  computed: {
    formatedDate() {
      return this.date ? format(parseISO(this.date), 'dd/MM/yyyy') : null
    },
  },

  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
  },
})
</script>
