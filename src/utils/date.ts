import dayjs from 'dayjs';

export const formatDate = (date: string) => {
  return dayjs(date).format('DD MMM, YYYY');
};

export const getDay = (date: string) => {
  return dayjs(date).format('DD');
};

export const getMonth = (date: string) => {
  return dayjs(date).format('MMM');
};

export const getTime = (time: string) => {
  return dayjs(time).format('hh:mm A');
};

export const formatTime = (time: string) => {
  const hour = time.split(':')[0];
  const minute = time.split(':')[1];
  const ampm = parseInt(hour) >= 12 ? 'PM' : 'AM';
  if (ampm === 'PM') {
    return `${parseInt(hour) - 12}:${minute} ${ampm}`;
  } else {
    return `${parseInt(hour)}:${minute} ${ampm}`;
  }
};

export const diffInDaysAndHours = (date: string) => {
  const now = dayjs();
  const then = dayjs(date);

  const diff = then.diff(now, 'day');
  const hours = then.diff(now, 'hour');
  return `${diff} days, ${hours - diff * 24} hrs left`;
};
