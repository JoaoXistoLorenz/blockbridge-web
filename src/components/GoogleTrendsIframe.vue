<template>
  <div class="iframe-container">
    <iframe ref="iframe" class="trends-iframe"></iframe>
  </div>
</template>

<script lang="ts">
export default {
  name: "GoogleTrendsIframe",
  props: {
    keyword: {
      type: String,
      required: true,
    },
  },
  mounted(): void {
    this.createIframeContent();
  },
  methods: {
    createIframeContent(): void {
      const iframe = this.$refs.iframe as HTMLIFrameElement;
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;

      if (!iframeDoc) {
        console.error("Não foi possível acessar o documento do iframe.");
        return;
      }

      const scriptLoader = iframeDoc.createElement("script");
      scriptLoader.src = "https://ssl.gstatic.com/trends_nrtr/3826_RC01/embed_loader.js";
      scriptLoader.async = true;
      
      scriptLoader.onload = () => {
        console.log("Google Trends script loaded successfully.");

        const scriptContent = iframeDoc.createElement("script");
        scriptContent.type = "text/javascript";
        scriptContent.innerHTML = `
          trends.embed.renderExploreWidget(
            "TIMESERIES",
            {
              comparisonItem: [
                { "keyword": "${this.keyword}", "geo": "", "time": "today 12-m" }
              ],
              category: 0,
              property: ""
            },
            {
              exploreQuery: "q=${this.keyword}&hl=pt&date=today 12-m",
              guestPath: "https://trends.google.com.br:443/trends/embed/"
            }
          );
        `;
        iframeDoc.body.appendChild(scriptContent);

        setTimeout(() => {
          if (!iframeDoc.body.innerHTML.includes("trends.embed.renderExploreWidget")) {
            console.warn("Google Trends content did not load correctly.");
          }
        }, 3000);
      };

      scriptLoader.onerror = () => {
        console.error("Failed to load Google Trends script.");
      };

      iframeDoc.head.appendChild(scriptLoader);
    },
  },
};
</script>

<style scoped>
.iframe-container {
  width: 100%;
  height: 450px;
}

.trends-iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
