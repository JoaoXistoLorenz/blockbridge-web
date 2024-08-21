<template>
  <el-row>
    <el-card :body-style="{ padding: '20px', display: 'flex', alignItems: 'center' }">
      <el-row style="border: 1px solid #d9dadb; align-items: center;">
        <el-col :sm="24" :md="24" :lg="12" style="padding-right: 30px; padding-left: 20px">
          <h2 class="rollup-titulo">O Que é zk-Rollup?</h2>
          <p class="rollup-descricao">
            Zk-Rollup é uma solução de escalabilidade para blockchain, projetada para aumentar a capacidade de transações e reduzir os custos sem comprometer a segurança. Funciona ao mover a maior parte do processamento de transações fora da cadeia principal (off-chain), enquanto ainda mantém um nível de segurança comparável ao da cadeia principal (on-chain). O zk-Rollup agrupa (ou "enrola") múltiplas transações em uma única transação e a processa fora da cadeia principal. Posteriormente, os dados condensados dessas transações são submetidos à blockchain principal para verificação e registro usando provas de conhecimento zero (zk-SNARKs). Isso reduz significativamente a carga na cadeia principal, permitindo maior escalabilidade e menor custo por transação.
          </p>
          <p class="rollup-descricao">
          </p>

          <h2 class="rollup-titulo">Como Funcionam as transações?</h2>
          <ul class="rollup-lista">
            <li style="text-align: justify; padding-bottom: 5px">
              <strong style="color: #002c53">Envio Off-Chain:</strong> As transações são enviadas para um operador de zk-rollup, que as processa off-chain. Este operador pode ser um único ente ou uma rede de operadores.
            </li>
            <li style="text-align: justify; padding-bottom: 5px">
              <strong style="color: #002c53">Agrupamento e Compressão:</strong> O operador agrupa várias transações em um único lote e cria uma prova criptográfica (zk-SNARK) que garante a validade das transações sem revelar informações sobre elas.
            </li>
            <li style="text-align: justify; padding-bottom: 5px">
              <strong style="color: #002c53">Publicação On-Chain:</strong> A prova de conhecimento zero (zk-SNARK) e os dados condensados das transações agrupadas são enviados à blockchain principal. Isso permite que a blockchain principal mantenha um registro seguro e imutável das transações, verificando a prova sem precisar processar cada transação individualmente.
            </li>
            <li style="text-align: justify; padding-bottom: 20px">
              <strong style="color: #002c53">Verificação Instantânea:</strong> Diferente do Rollup Otimista, as transações no zk-Rollup são imediatamente consideradas válidas após a verificação da prova criptográfica na blockchain principal, eliminando a necessidade de um período de contestação.
            </li>
          </ul>
        </el-col>
        <el-col :sm="24" :md="24" :lg="12" style="align-items: center;">
          <el-image :src="imageUrl('zk.png')" style="margin-top: 5%; width: 90%; height: 90%; margin-left: 5%"/>
        </el-col>
      </el-row>
    </el-card>
  </el-row>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component({
    name: 'RollupZK',
  })

  export default class RollupZK extends Vue {
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