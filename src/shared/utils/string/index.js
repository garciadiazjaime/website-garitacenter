
function printMinutes(data) {
  if (data < 10) {
    return `0${data}`;
  }
  return data;
}

export function minsToHrs(data) {
  if (data) {
    const hours = Math.floor(data / 60);
    const minutes = data % 60;
    return `${hours}:${printMinutes(minutes)}`;
  }
  return data;
}

export function toTitleCase(data) {
  const response = data.replace(/_/g, ' ');
  return response.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
