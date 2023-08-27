import moment from 'moment';

export abstract class Mascaras {

  public static DATE(value: string): string {
    if (value?.length === 10) {
      return moment(value, 'YYYY-MM-DD').format('DD/MM/YYYY');
    } else {
      return ' - ';
    }
  }

  public static DATETIME(value: string): string {
    if (value?.length === 24 || value?.length === 19) {
      return moment(value).format('DD/MM/YYYY - HH:mm:ss');
    }
    return ' - ';
  }

  public static REAIS(value: string): string {
    const parsedValue = parseFloat(value.replace(',', '.'));
    if (!isNaN(parsedValue)) {
      const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
      return formatter.format(parsedValue);
    } else {
      return 'R$ 0,00';
    }
  }

  public static PORCENTAGEM(value: string): string {
    const parsedValue = parseFloat(value.replace(',', '.'));
    if (!isNaN(parsedValue)) {
      return `${parsedValue}%`;
    }
    return '0%';
  }
}