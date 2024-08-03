// functions/Log.ts
import moment from 'moment';

export async function Log(message: string, level: string) {
  const HHmmssDDMMYYYY = moment().format('HH:mm:ss DD/MM/YYYY');
  switch (level) {
    case 'info':
      console.log(`(info - ${HHmmssDDMMYYYY}) ${message}`);
      break;
    case 'error':
      console.error(`(error - ${HHmmssDDMMYYYY}) ${message}`);
      break;
    case 'warn':
      console.warn(`(warn - ${HHmmssDDMMYYYY}) ${message}`);
      break;
    default:
      console.log(`(log - ${HHmmssDDMMYYYY}) ${message}`);
  }
}
