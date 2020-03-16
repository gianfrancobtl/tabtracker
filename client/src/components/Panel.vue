<template>
  <v-layout class="container">
    <v-flex xs6 offset-xs3 class="fill-height" fluid>
      <v-row>
        <v-col align="center">
            <slot></slot>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
export default {}
</script>

<style scoped>
</style>