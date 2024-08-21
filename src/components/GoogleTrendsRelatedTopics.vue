<template>
  <div class="iframe-container">
    <iframe ref="iframe" class="trends-iframe"></iframe>
  </div>
</template>

<script>
export default {
  name: "GoogleTrendsRelatedTopics",
  props: {
    keyword: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.createIframeContent();
  },
  methods: {
    createIframeContent() {
      const iframe = this.$refs.iframe;
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

      const scriptLoader = iframeDoc.createElement("script");

      scriptLoader.src = "https://ssl.gstatic.com/trends_nrtr/3815_RC01/embed_loader.js";
      iframeDoc.head.appendChild(scriptLoader);

      // Adiciona tratamento de erro aqui
      scriptLoader.onerror = () => {
        console.error("Falha ao carregar o script do Google Trend.");
      };

      scriptLoader.onload = () => {
        const scriptContent = iframeDoc.createElement("script");
        scriptContent.type = "text/javascript";
        scriptContent.innerHTML = `
          trends.embed.renderExploreWidget(
            "RELATED_TOPICS",
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
      };
    },
  },
};
</script>

<style scoped>
.iframe-container {
  width: 100%;
  height: 100%;
}

.trends-iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>