import Vue from 'vue';
import { Mascaras } from '@/utils/Mascaras';

type MaskFunction = (value: string) => string;

Vue.filter('Mask', (value: string, executeFunction: keyof typeof Mascaras) => {
  const maskFunction = Mascaras[executeFunction] as MaskFunction;
  if (typeof maskFunction === 'function') {
    return maskFunction(value);
  } else {
    return value;
  }
});