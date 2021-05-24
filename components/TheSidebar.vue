<template>
  <v-list nav shaped>
    <v-list-item-group v-model="activeItem" mandatory>
      <v-list-item
        v-for="{ icon, title, to } in menu"
        :key="to"
        :to="to"
        active-class="primary--text"
      >
        <template #default="{ active }">
          <v-list-item-icon>
            <v-icon v-text="getMenuItemIcon(icon, active)" />
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="title" />
          </v-list-item-content>
        </template>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue'

import { menu } from '~/config/menu'

export default Vue.extend({
  data: () => ({
    activeItem: null,
    menu,
  }),

  methods: {
    getMenuItemIcon(icon: string, isActive: boolean): string {
      const [active, inactive] = icon.split(':')

      return isActive ? active : inactive
    },
  },
})
</script>
