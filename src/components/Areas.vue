<template>
   <el-row>
      <el-col v-if="page !== 1" :xs="24" :sm="24" :md="12" :lg="6" :xl="6" style="padding: 5px">
        <el-card :body-style="{ padding: '0px' }"  class="round">
          <div @click="goToPage(1)">
            <el-card :shadow="'never'" class="rede-social explore round">
             <div class="rede-social-div icon-color-red" >
                <font-awesome-icon icon="layer-group" class="color-white"/>
              </div>
              <div>Escalabilidade</div>
            </el-card>
          </div>
        </el-card>
      </el-col>
      <el-col v-if="page !== 2" :xs="24" :sm="24" :md="12" :lg="6" :xl="6" style="padding: 5px">
        <el-card :body-style="{ padding: '0px' }"  class="round">
          <div @click="goToPage(2)">
            <el-card :shadow="'never'" class="rede-social explore round" >
             <div class="rede-social-div icon-color-red" >
                <font-awesome-icon icon="desktop" class="color-white"/>
              </div>
              <div>Dexs</div>
            </el-card>
          </div>
        </el-card>
      </el-col>
      <el-col v-if="page !== 3" :xs="24" :sm="24" :md="12" :lg="6" :xl="6" style="padding: 5px">
        <el-card :body-style="{ padding: '0px' }" class="round">
          <div @click="goToPage(3)">
            <el-card :shadow="'never'" class="rede-social explore round">
             <div class="rede-social-div icon-color-red">
                <font-awesome-icon icon="sack-dollar" class="color-white"/>
              </div>
              <div>Lending</div>
            </el-card>
          </div>
        </el-card>
      </el-col>
      <el-col v-if="page !== 4" :xs="24" :sm="24" :md="12" :lg="6" :xl="6" style="padding: 5px">
        <el-card :body-style="{ padding: '0px' }" class="round">
          <div @click="goToPage(4)">
            <el-card :shadow="'never'" class="rede-social explore round">
             <div class="rede-social-div icon-color-red">
                <font-awesome-icon icon="money-check-dollar" class="color-white"/>
              </div>
              <div>Liquid Staking</div>
            </el-card>
          </div>
        </el-card>
      </el-col>
      <el-col v-if="page !== 5" :xs="24" :sm="24" :md="12" :lg="6" :xl="6" style="padding: 5px">
        <el-card :body-style="{ padding: '0px' }" class="round">
          <div @click="goToPage(5)">
            <el-card :shadow="'never'" class="rede-social explore round" >
             <div class="rede-social-div icon-color-red">
                <font-awesome-icon icon="cubes" class="color-white"/>
              </div>
              <div>Parachains</div>
            </el-card>
          </div>
        </el-card>
      </el-col>
    </el-row>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component({
    name: 'Areas',
  })

  export default class Areas extends Vue {
    @Prop()
    public page!: number;

    public goToPage(num: number): void {
      try {
        const pages = ['Home', 'Dexs', 'Lending', 'LiquidStaking', 'Parachain' ]
        const paths = ['/', '/dexs', '/lending', '/liquid-staking', '/parachain' ]
        if (this.$router.currentRoute.name !== pages[num - 1]) {
          this.$router.push({ path: paths[num - 1], replace: true });
        }
      } catch (e) {
        return;
      }
    }
  }
</script>

<style scoped lang="scss">
.explore {
  height: 190px !important;
  font-size: 1.1rem;
  padding-top: 50px;
  background: #F5F7FA; 
}

.round {
  border-radius: 30px;
}
</style>