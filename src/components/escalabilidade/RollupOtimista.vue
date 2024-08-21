<template>
  <el-row>
    <el-card :body-style="{ padding: '20px', display: 'flex', alignItems: 'center' }">
      <el-row style="border: 1px solid #d9dadb; align-items: center;">
        <el-col :sm="24" :md="24" :lg="12" style="padding-right: 30px; padding-left: 20px">
          <h2 class="rollup-titulo">O Que é Rollup Otimista?</h2>
          <p class="rollup-descricao">
            Rollup Otimista é uma solução de escalabilidade para blockchain, projetada para aumentar a capacidade de transações e reduzir os custos sem comprometer a segurança. Funciona ao mover a maior parte do processamento de transações fora da cadeia principal (off-chain), enquanto ainda mantém um nível de segurança comparável ao da cadeia principal (on-chain). 
            O Rollup Otimista agrupa (ou "enrola") múltiplas transações em uma única transação e a processa fora da cadeia principal. Posteriormente, os dados condensados dessas transações são submetidos à blockchain principal para verificação e registro. Isso reduz significativamente a carga na cadeia principal, permitindo maior escalabilidade e menor custo por transação.
          </p>
          <p class="rollup-descricao">
          </p>

          <h2 class="rollup-titulo">Como Funcionam as transações?</h2>
          <ul class="rollup-lista">
            <li style="text-align: justify; padding-bottom: 5px">
              <strong style="color: #002c53">Envio Off-Chain:</strong> As transações são enviadas para um operador de rollup, que as processa off-chain. Este operador pode ser um único ente ou uma rede de operadores.
            </li>
            <li style="text-align: justify; padding-bottom: 5px">
              <strong style="color: #002c53">Agrupamento e Compressão:</strong> O operador agrupa várias transações em um único lote, aplica técnicas de compressão para minimizar o tamanho dos dados e cria uma prova de estado (state root), que é um resumo criptográfico do estado das transações.
            </li>
            <li style="text-align: justify; padding-bottom: 5px">
              <strong style="color: #002c53">Publicação On-Chain:</strong> A prova de estado e os dados condensados das transações agrupadas são enviados à blockchain principal. Isso permite que a blockchain principal mantenha um registro seguro e imutável das transações, sem precisar processar cada uma individualmente.
            </li>
            <li style="text-align: justify; padding-bottom: 20px">
              <strong style="color: #002c53">Período de Contestação:</strong> As transações são consideradas válidas "otimisticamente", isto é, assumindo-se que são válidas a menos que seja provado o contrário. Existe um período durante o qual qualquer pessoa pode contestar a validade das transações, apresentando provas de fraude se houver.
            </li>
          </ul>
        </el-col>
        <el-col :sm="24" :md="24" :lg="12" style="align-items: center;">
          <el-image :src="imageUrl('otimista.png')" style="margin-top: 30px"/>
        </el-col>
      </el-row>
    </el-card>
  </el-row>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component({
    name: 'RollupOtimista',
  })

  export default class RollupOtimista extends Vue {
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