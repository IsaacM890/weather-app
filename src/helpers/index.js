export const getDate = (item, type) => {
  const typePattern = {
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  const dateObj = new Date(item.DateTime);
  const fullDate = dateObj.toLocaleDateString('en-us', typePattern);
  const time = fullDate.slice(7);
  const date = fullDate.slice(0, 5);

  return type === 'time' ? time : date;
};

const helpersFuncs = {
  getDate,
};

export default helpersFuncs;
