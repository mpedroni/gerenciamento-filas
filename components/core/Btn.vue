<template>
  <v-btn
    v-bind="$attrs"
    text
    outlined
    color="primary"
    @click="$emit('click', $event)"
  >
    <v-icon v-if="icon" left v-text="icon" />
    {{ label }}
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CoreButton',

  props: {
    icon: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      required: true,
    },
  },
})
</script>
