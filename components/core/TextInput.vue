<template>
  <v-text-field
    v-model="input"
    v-bind="$attrs"
    outlined
    :rules="getRules"
    v-on="$listeners"
  />
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'CoreTextInput',

  props: {
    disableUppercase: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: Array as PropType<Array<Function>>,
      default: () => [],
    },
    value: {
      type: [String, Number],
      default: null,
    },
  },

  computed: {
    getRules(): Function[] {
      const rules = []

      if (this.required)
        rules.push((v: string | number) => !!v || 'Este campo é obrigatório')

      rules.push(...this.rules)

      return rules
    },
    input: {
      get(): string | number {
        return this.value
      },
      set(value: string) {
        this.$emit(
          'input',
          !this.disableUppercase && typeof value === 'string'
            ? value.toUpperCase()
            : value
        )
      },
    },
  },
})
</script>
