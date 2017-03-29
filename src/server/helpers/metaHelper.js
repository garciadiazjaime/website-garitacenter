/* eslint max-len: [2, 500, 4] */

export default function (url) {
  if (url === '/reporte-usuario') {
    return {
      title: 'GaritaCenter - Reporte de Usuarios para San Ysidro y Otay | Tijuana',
      description: 'Información reportada por la comunidad de GaritaCenter.',
    };
  } else if (url === '/encuesta') {
    return {
      title: 'GaritaCenter - Encuesta. Reporta el tiempo en espera que llevas en garita.',
      description: '¿Cómo te va en la línea? Da tu reporte de garitas aquí y ayuda a los demás',
    };
  }
  return {
    title: 'GaritaCenter - Reporte de Garitas para San Ysidro y Otay | Tijuana',
    description: 'Reporte de Garitas en Tijuana / San Diego para la Garita de San Ysidrio y Otay. Garitacenter, tiempo en línea fronteriza.',
  };
}
