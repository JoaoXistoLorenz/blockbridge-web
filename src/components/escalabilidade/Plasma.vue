<template>
  <el-row>
    <el-card :body-style="{ padding: '20px', display: 'flex', alignItems: 'center' }">
      <el-row style="border: 1px solid #d9dadb; align-items: center;">
        <el-col :sm="24" :md="24" :lg="12" style="padding-right: 30px; padding-left: 20px">
          <h2 class="rollup-titulo">O Que é Plasma?</h2>
          <p class="rollup-descricao">
           Plasma é uma solução de escalabilidade para blockchain, projetada para aumentar a capacidade de transações e reduzir os custos sem comprometer a segurança. Funciona criando várias "child chains" (cadeias-filhas) que operam de forma paralela à blockchain principal (chamada de "root chain"). Essas child chains processam transações independentemente, mas ainda estão ancoradas à root chain para garantir segurança e integridade dos dados. O Plasma permite maior escalabilidade ao processar transações de maneira mais eficiente e econômica fora da blockchain principal, enquanto ainda aproveita a segurança robusta da root chain.
          </p>
          <p class="rollup-descricao">
          </p>

          <h2 class="rollup-titulo">Como Funcionam as transações?</h2>
          <ul class="rollup-lista">
            <li style="text-align: justify; padding-bottom: 5px">
              <strong style="color: #002c53">Criação de Child Chains:</strong>  O Plasma cria child chains que são essencialmente blockchains menores, projetadas para processar um grande número de transações rapidamente. Cada child chain opera com suas próprias regras de consenso, mas está ligada à root chain para garantir que todas as transações possam ser verificadas e validadas de maneira segura.
            <li style="text-align: justify; padding-bottom: 5px">
              <strong style="color: #002c53">Processamento de Transações nas Child Chains: </strong>Dentro de uma child chain, as transações são processadas de acordo com regras de consenso mais rápidas e menos custosas do que as da root chain. Isso permite maior flexibilidade e uma capacidade significativamente maior de transações por segundo.
            </li>
            <li style="text-align: justify; padding-bottom: 5px">
              <strong style="color: #002c53">Interação entre Cadeias:</strong> As child chains periodicamente enviam um "checkpoint" para a root chain, que é um resumo das transações realizadas. Isso permite que a root chain mantenha uma visão global da integridade das child chains sem precisar processar todas as transações diretamente.
            </li>
            <li style="text-align: justify; padding-bottom: 20px">
              <strong style="color: #002c53">Retorno à Blockchain Principal:</strong> Se necessário, os usuários podem sair de uma child chain e retornar à root chain, garantindo que seus ativos sejam preservados e que as transações sejam refletidas de maneira segura na blockchain principal. Este processo garante que, mesmo que uma child chain falhe, os ativos dos usuários na root chain permaneçam seguros.
            </li>
          </ul>
        </el-col>
        <el-col :sm="24" :md="24" :lg="12" style="align-items: center;">
          <el-image :src="imageUrl('plasma_d.png')" style="padding: 30px"/>
        </el-col>
      </el-row>
    </el-card>
  </el-row>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component({
    name: 'Plasma',
  })

  export default class Plasma extends Vue {
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