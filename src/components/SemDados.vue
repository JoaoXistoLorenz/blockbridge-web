<template>
  <el-card :body-style="{ padding: '0px' }">
    <div>
        Nenhum registro encontrado!
    </div>
  </el-card>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component({
    name: 'SemDados',
  })

  export default class SemDados extends Vue {

  }
</script>

<style scoped lang="scss">

</style>