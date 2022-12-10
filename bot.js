const Discord = require('discord.js'); // Importamos la biblioteca Discord.js
const client = new Discord.Client(); // Creamos una instancia del cliente de Discord

const API_KEY = 'T6bd301b8b5d82921a331745ebfd9c94c'; // Tu API key de OpenWeatherMap
const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=`;
const token ='MTA1MDk2MTU4NDY4MTM5MDA4MA.G5F2Gf.mq2cFSOI59C7XBmV9s_K2k_-fu9T1NFBZrzF1A';
client.login(token); // Reemplazamos 'TU_TOKEN_AQUÍ' por nuestro token de autenticación

client.on('message', async (message) => {
  // Cuando el bot recibe un mensaje

  if (message.content.startsWith('!clima')) {
    // Si el mensaje comienza con "!clima"

    // Extraemos la ciudad del mensaje
    const city = message.content.split(' ')[1];

    // Hacemos una petición a la API de OpenWeatherMap para obtener el pronóstico del tiempo
    const response = await fetch(`${API_URL}${city}`);
    const data = await response.json();

    // Creamos un mensaje de respuesta con el pronóstico del tiempo
    const weatherEmbed = new Discord.MessageEmbed()
      .setTitle(`Clima en ${data.name}`)
      .setDescription(`Mañana estará ${data.weather[0].main} con una temperatura máxima de ${data.main.temp_max}°C y una mínima de ${data.main.temp_min}°C`)
      .setThumbnail(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

    // Enviamos el mensaje de respuesta al canal de Discord
    message.channel.send(weatherEmbed);
  }
});
