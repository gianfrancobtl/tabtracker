<template>
  <v-layout class="container">
    <v-flex xs4>
      <panel title="Datos principales">
        <v-text-field label="Título" required :rules="[required]" v-model="song.title"></v-text-field>

        <v-text-field label="Intérprete" placeholder= "Eric Clapton, Maddona,..." required :rules="[required]" v-model="song.artist"></v-text-field>

        <v-text-field label="Género" placeholder= "Rock, pop, clásica,..." required :rules="[required]" v-model="song.genre"></v-text-field>

        <v-text-field label="Album" required :rules="[required]" v-model="song.album"></v-text-field>

        <v-text-field
          label="URL de la imagen del álbum"
          required
          :rules="[required]"
          v-model="song.albumImageUrl"
        ></v-text-field>

        <v-text-field label="YouTube ID" required :rules="[required]" v-model="song.youtubeId"></v-text-field>
      </panel>
    </v-flex>

    <v-flex xs8>
      <panel title="Estructura de la canción" class="ml-2">
        <v-textarea
          v-model="song.tab"
          required
          label="Tabs"
          placeholder="Ingrese aquí los tabs de su canción"
          :rules="[required]"
        ></v-textarea>

        <v-textarea
          v-model="song.lyrics"
          required
          label="Lyrics"
          placeholder="Ingrese aquí la letra de su canción"
          :rules="[required]"
        ></v-textarea>
      </panel>
      <br>
      <div class="mx-auto danger-alert" v-if="error">{{error}}</div>
      <br>
      <v-btn dark class="mx-auto cyan" @click="create">Crear canción</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from "@/services/SongsService";
export default {
  data: () => ({
    song: {
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImageUrl: null,
      youtubeId: null,
      lyrics: null,
      tab: null
    },
    error: null,
    required: value => !!value || "Campo obligatorio",
    placeholder: "Ingrese aquí la letra de su canción"
  }),
  methods: {
    async create() {
      this.error = null;
      const areAllFieldsFilledIn = Object.keys(this.song).every(
        key => !!this.song[key]
      );
      if (!areAllFieldsFilledIn) {
        this.error = "Por favor rellene todos los campos obligatorios";
        return;
      }
      try {
        await SongsService.post(this.song);
        this.$router.push({
          name: "songs"
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style scoped>
.container {
  height: 90vh;
  grid-template-rows: 80vh 10vh;
}
</style>