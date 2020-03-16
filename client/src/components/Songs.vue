<template>
<Panel/>
</template>

<script>
import Panel from '@/components/Panel'
export default {
    components:{
        Panel
    }
}

</script>

<style scoped>

.container {
  height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 80vh 10vh;
}

</style>
