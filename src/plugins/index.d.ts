import { VueConstructor } from 'vue';
import { AxiosInstance } from 'axios';
import Vue from 'vue'
import VueRouter, { NavigationGuard, Route } from 'vue-router';

declare global {
  interface Window {
    axios: AxiosInstance;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance;
    $router: VueRouter;
    $route: Route;
  }
  interface VueConstructor {
    $axios: AxiosInstance;
    $router: VueRouter;
    $route: Route;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    router?: VueRouter;
    beforeRouteEnter?: NavigationGuard<V>;
    beforeRouteLeave?: NavigationGuard<V>;
    beforeRouteUpdate?: NavigationGuard<V>;
  }
}