<template>
  
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

.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
