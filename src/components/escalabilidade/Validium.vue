<template>
  <el-row>
    <el-card :body-style="{ padding: '20px', display: 'flex', alignItems: 'center' }">
      <el-row style="border: 1px solid #d9dadb; align-items: center;">
        <el-col :sm="24" :md="24" :lg="12" style="padding-right: 30px; padding-left: 20px">
          <h2 class="rollup-titulo">O Que é Validium?</h2>
          <p class="rollup-descricao">
           Validium é uma solução de escalabilidade para blockchain, semelhante ao zk-Rollup, mas com uma diferença chave: os dados das transações são armazenados fora da blockchain (off-chain). Essa abordagem permite um aumento significativo na capacidade de transações, ao mesmo tempo em que mantém a segurança através do uso de provas de validade (validity proofs). A arquitetura do Validium permite processar um grande volume de transações com custos reduzidos e sem comprometer a segurança, o que é particularmente útil para aplicações que exigem alta escalabilidade e privacidade.
          </p>
          <p class="rollup-descricao">
          </p>

          <h2 class="rollup-titulo">Como Funcionam as transações?</h2>
          <ul class="rollup-lista">
            <li style="text-align: justify; padding-bottom: 5px">
              <strong style="color: #002c53">Processamento Off-chain:</strong>  No Validium, as transações são processadas fora da blockchain principal. Um conjunto de validadores processa essas transações e gera uma prova de validade que atesta a correção do processamento. Isso reduz drasticamente o custo e o tempo de execução, já que a blockchain principal não precisa armazenar todos os dados das transações.
            <li style="text-align: justify; padding-bottom: 5px">
              <strong style="color: #002c53">Provas de Validade:</strong> Após processar as transações off-chain, os validadores submetem uma prova de validade à blockchain principal. Esta prova é uma garantia criptográfica de que as transações foram processadas corretamente, mesmo sem armazenar os dados na blockchain. A blockchain principal verifica a prova e, uma vez validada, a transação é considerada segura e completa.
            </li>
            <li style="text-align: justify; padding-bottom: 5px">
              <strong style="color: #002c53">Segurança e Privacidade:</strong> Como os dados das transações não são armazenados on-chain, o Validium oferece uma camada extra de privacidade para os usuários. Além disso, a segurança é garantida pelas provas de validade, que impedem que transações inválidas sejam aceitas na blockchain.
            </li>
            <li style="text-align: justify; padding-bottom: 20px">
              <strong style="color: #002c53">Interação com a Blockchain Principal:</strong>Apesar de as transações serem processadas fora da blockchain, a conexão com a blockchain principal é mantida através das provas de validade. Isso garante que, em caso de qualquer problema com o sistema off-chain, a integridade das transações ainda pode ser assegurada pela blockchain principal.
            </li>
          </ul>
        </el-col>
        <el-col :sm="24" :md="24" :lg="12" style="align-items: center;">
          <el-image :src="imageUrl('validium.png')" style="padding: 30px"/>
        </el-col>
      </el-row>
    </el-card>
  </el-row>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component({
    name: 'Validium',
  })

  export default class Validium extends Vue {
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