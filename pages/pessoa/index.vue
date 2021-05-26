<template>
  <v-form ref="form" v-model="valid" @submit.prevent="submit">
    <v-row>
      <v-col cols="12" md="6">
        <CoreTextInput v-model="name" label="Nome*" clearable required />
      </v-col>

      <v-col cols="12" md="6">
        <CoreTextInput v-model="cpf" label="CPF" clearable />
      </v-col>

      <v-col cols="12" md="6">
        <CoreTextInput
          v-model="birthCertificate"
          label="Certidão de Nascimento"
          clearable
        />
      </v-col>

      <v-col cols="12" md="6">
        <CoreTextInput v-model="motherName" label="Filiação 1" clearable />
      </v-col>

      <v-col cols="12" md="6">
        <CoreTextInput v-model="motherCpf" label="CPF Filiação 1" clearable />
      </v-col>

      <v-col cols="12" md="6">
        <CoreTextInput v-model="fatherName" label="Filiação 2" clearable />
      </v-col>

      <v-col cols="12" md="6">
        <CoreTextInput v-model="fatherCpf" label="CPF Filiação 2" clearable />
      </v-col>
    </v-row>

    <v-row justify="end">
      <v-col cols="12" md="auto">
        <CoreBtn
          label="Salvar"
          type="submit"
          icon="mdi-magnify"
          :disabled="!valid"
          :hint="!valid && 'Preencha os campos corretamente'"
        />
      </v-col>
    </v-row>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FormCreatePerson',

  data: () => ({
    name: null,
    birthday: null,
    cpf: null,
    birthCertificate: null,
    motherName: null,
    motherCpf: null,
    fatherName: null,
    fatherCpf: null,
    valid: true,
  }),

  computed: {
    form(): Vue & { validate: () => boolean } {
      return this.$refs.form as Vue & { validate: () => boolean }
    },
  },

  methods: {
    submit() {
      if (!this.form.validate())
        alert('Ops! Parece que você esqueceu de inserir alguma informação')
    },
  },
})
</script>
