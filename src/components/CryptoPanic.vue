<template>
  <div>
    <div v-html="src"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'CryptoPanic',
})
export default class CryptoPanic extends Vue {

  @Prop()
  public src!: any;
}
</script>