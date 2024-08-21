<template>
  <el-row>
    <el-card :body-style="{ padding: '20px', display: 'flex', alignItems: 'center' }">
      <el-row style="border: 1px solid #d9dadb; align-items: center;">
        <el-col :sm="24" :md="24" :lg="12" style="padding-right: 30px; padding-left: 20px">
          <h2 class="rollup-titulo">O Que é Sidechain?</h2>
          <p class="rollup-descricao">
            Sidechain é uma solução de escalabilidade para blockchain, projetada para aumentar a capacidade de transações e reduzir os custos sem comprometer a segurança. Funciona ao criar uma blockchain secundária que opera de forma paralela à blockchain principal, permitindo que transações e dados sejam transferidos entre as duas cadeias. A sidechain tem suas próprias regras de consenso e pode ser otimizada para diferentes casos de uso, enquanto a blockchain principal continua a fornecer segurança robusta e imutabilidade.

A sidechain permite maior escalabilidade ao aliviar a carga da blockchain principal, processando transações de maneira mais eficiente e econômica. Isso é particularmente útil para aplicativos que necessitam de alta capacidade de transação e baixa latência.
          </p>
          <p class="rollup-descricao">
          </p>

          <h2 class="rollup-titulo">Como Funcionam as transações?</h2>
          <ul class="rollup-lista">
            <li style="text-align: justify; padding-bottom: 5px">
              <strong style="color: #002c53">Transferência para a Sidechain:</strong> Os usuários transferem ativos da blockchain principal para a sidechain através de um processo conhecido como "pegging". Esse processo bloqueia os ativos na blockchain principal e libera um valor equivalente na sidechain.
            <li style="text-align: justify; padding-bottom: 5px">
              <strong style="color: #002c53">Processamento na Sidechain:</strong> Dentro da sidechain, as transações são processadas de acordo com suas próprias regras de consenso, que podem ser mais rápidas e menos custosas. Isso permite maior flexibilidade e eficiência.
            </li>
            <li style="text-align: justify; padding-bottom: 5px">
              <strong style="color: #002c53">Interação entre Cadeias:</strong> A sidechain é conectada à blockchain principal, permitindo que ativos e dados sejam transferidos de volta quando necessário. Essa interação é segura e garante que os ativos mantenham seu valor original.
            </li>
            <li style="text-align: justify; padding-bottom: 20px">
              <strong style="color: #002c53">Retorno à Blockchain Principal:</strong> Quando os usuários desejam retornar à blockchain principal, eles podem transferir os ativos de volta, desbloqueando os valores originais. Este processo assegura que as transações realizadas na sidechain sejam refletidas de forma segura na blockchain principal.
            </li>
          </ul>
        </el-col>
        <el-col :sm="24" :md="24" :lg="12" style="align-items: center;">
          <el-image :src="imageUrl('sidechain.png')" style="padding: 30px"/>
        </el-col>
      </el-row>
    </el-card>
  </el-row>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component({
    name: 'Sidechain',
  })

  export default class Sidechain extends Vue {
    public imageUrl(img: string): any {
      return require(`@/assets/${img}`);
    }
  }
</script>

<style scoped lang="scss">
.rollup-titulo {
  font-size: 24px;
  font-weight: bold;
  color: #002c53;
  margin-top: 20px;
  margin-bottom: 10px;
}

.rollup-subtitulo {
  font-size: 20px;
  font-weight: bold;
  color: #555;
  margin-top: 15px;
  margin-bottom: 10px;
}

.rollup-descricao {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 10px;
  text-align: justify;
}

.rollup-lista {
  padding-left: 20px;
  margin-bottom: 10px;
}

.rollup-lista li {
  margin-bottom: 5px;
}
</style>