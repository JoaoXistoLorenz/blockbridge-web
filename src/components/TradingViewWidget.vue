<template>
  <div class="tradingview-widget-container">
    <div :id="containerId" style="height:444px"></div>
    <div class="tradingview-widget-copyright">
      <!-- <a href="https://br.tradingview.com/" rel="noopener nofollow" target="_blank">
        <span class="blue-text">Monitore todos os mercados no TradingView</span>
      </a> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

declare global {
  interface Window {
    TradingView: any; 
  }
}

@Component({
  name: 'TradingViewWidget',
})
export default class TradingViewWidget extends Vue {
  private containerId = 'tradingview_32739';

  @Prop()
  public simbolo!: any;

  public async mounted(): Promise<any> {
    await this.loadTradingViewLibrary();
    this.initializeTradingViewWidget();
  }

  private loadTradingViewLibrary(): Promise<void> {
    return new Promise<void>((resolve) => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://s3.tradingview.com/tv.js';
      script.async = true;
      script.onload = () => {
        resolve();
      };
      document.head.appendChild(script);
    });
  }

  private initializeTradingViewWidget() {
    const widgetOptions = {
      autosize: true,
      symbol: this.simbolo,
      interval: '4H',
      timezone: 'Etc/UTC',
      theme: 'light',
      style: '3',
      locale: 'br',
      hide_volume: true,
      hide_legend: true,
      enable_publishing: false,
      allow_symbol_change: true,
      container_id: this.containerId,
    };
    new window.TradingView.widget(widgetOptions);
  }
}
</script>