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
  };
  debugger;
  const dateObj = new Date(datetime);

  const date = dateObj.toLocaleDateString('en-us', typePattern.date);
  const time = dateObj.toLocaleTimeString('en-us', typePattern.time);

  return type === 'time' ? time : date;
};

export const getWeatherIcon = (icon) => {
  return `http://vortex.accuweather.com/adc2010/images/slate/icons/${icon}.svg`;
};

const helpersFuncs = {
  getDate,
  getWeatherIcon,
};

export default helpersFuncs;
