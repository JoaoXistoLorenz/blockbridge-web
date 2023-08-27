import Vue from 'vue';
import {dom, library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(fas);

dom.watch();

Vue.component('font-awesome-icon', FontAwesomeIcon);
