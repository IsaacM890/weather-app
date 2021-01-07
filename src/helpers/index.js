export const getDate = (datetime, type) => {
  const typePattern = {
    date: {
      month: 'numeric',
      day: 'numeric',
    },
    time: {
      hour: 'numeric',
      minute: 'numeric',
    },
    longDate: {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    },
  };
  const dateObj = new Date(datetime);

  const longdate = new Date().toLocaleDateString('en-us', typePattern.longDate);
  const date = dateObj.toLocaleDateString('en-us', typePattern.date);
  const time = dateObj.toLocaleTimeString('en-us', typePattern.time);

  switch (type) {
    case 'time':
      return time;
    case 'date':
      return date;
    default:
      return longdate;
  }
};

export const getWeatherIcon = (icon) => {
  return `http://vortex.accuweather.com/adc2010/images/slate/icons/${icon}.svg`;
};

const helpersFuncs = {
  getDate,
  getWeatherIcon,
};

export default helpersFuncs;
