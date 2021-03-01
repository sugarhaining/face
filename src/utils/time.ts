import dayjs from 'dayjs';

export const geneWelcomeMessage = () => {
  const hour = dayjs().get('hour');

  if (hour < 12) {
    return '早上好';
  } else if (hour === 12) {
    return '中午好';
  } else if (hour > 12 && hour < 19) {
    return '下午好';
  } else if (hour >= 19) {
    return '晚上好';
  } else {
    return '早上好';
  }
};
