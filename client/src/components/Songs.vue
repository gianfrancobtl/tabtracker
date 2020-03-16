<template>
  <v-layout>
    <v-flex xs4>
      <panel class="container">
        <div v-for="song in songs" :key="song.id">
          {{song.title}}
          {{song.album}}
          {{song.artist}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from "@/components/Panel";
import SongsService from "@/services/SongsService";
export default {
  components: {
    Panel
  },
  data() {
    return {
      songs: null
    };
  },
  async mounted() {
    //do a request for all songs:
    this.songs = (await SongsService.index()).data;
    console.log("songs", this.songs);
  }
};
</script>

<style scoped>
.container {
  height: 90vh;
}
</style>
