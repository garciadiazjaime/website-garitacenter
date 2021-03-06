/* eslint max-len: [2, 500, 4] */
function printMinutes(data) {
  return (data < 10) ? `0${data}` : data;
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
  return response.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

export function timeSince(data) {
  const seconds = Math.floor((new Date() - new Date(data)) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval >= 1) {
    return `${interval} año${interval > 1 ? 's' : ''}`;
  }
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    return `${interval} mes${interval > 1 ? 'es' : ''}`;
  }
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    return `${interval} día${interval > 1 ? 's' : ''}`;
  }
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    return `${interval} hora${interval > 1 ? 's' : ''}`;
  }
  interval = Math.floor(seconds / 60);
  if (interval < 6) {
    return `5 minutos`;
  } else if (interval > 5) {
    return `${interval} minutos`;
  }
  return `1 minuto`;
}

export function printTime(value) {
  const now = new Date();
  const date = new Date(value);
  let hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let mins = date.getMinutes();
  if (mins < 10) {
    mins = `0${mins}`;
  }
  const period = date.getHours() > 12 ? 'PM' : 'AM';
  return {
    unity: date.getHours() === 1 || date.getHours() === 13,
    print: `${hour}:${mins} ${period}`,
    recent: parseInt(Math.abs(now - date) / 1000 / 60, 10),
  };
}
