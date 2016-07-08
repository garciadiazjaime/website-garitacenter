
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

export function timeSince(data) {
  const seconds = Math.floor((new Date() - new Date(data)) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return `${interval} años`;
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return `${interval} meses`;
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return `${interval} días`;
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return `${interval} horas`;
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return `${interval} minutos`;
  }
  return `${Math.floor(seconds)} segundos`;
}
