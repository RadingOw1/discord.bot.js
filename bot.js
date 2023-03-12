const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js');
const Discord = require('discord.js');
const cron = require('node-cron');
const client = new Discord.Client({
  intents: [Discord.GatewayIntentBits.Guilds , Discord.GatewayIntentBits.GuildMessages, Discord.GatewayIntentBits.GuildMembers, Discord.GatewayIntentBits.DirectMessages ]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
  const main = new EmbedBuilder()
    .setTitle('Добро пожаловть в дискорд-сервер ролевой площадки по вселенной World of Warcraft!')
    .setColor('#0099ff')
    .addFields(
      { name: 'Что делать?', value: '- Ознакомтесь с правилами нашего дискорда #основной.\n- Установите игровой клиент.\n- Загляните в \"Гитбук\" - в нем можно побольше узнать про РП и правила проекта в игровом мире.', inline: false},
      { name: 'Есть вопросы?', value: 'Обратитесь в наш дискорд и вам помогут!', inline: true},
      { name: 'Как получить роль игрока?', value: 'Подождите немного, наши модераторы скоро выдадут вам плашку.', inline: true },
    )
    .setFooter('avanarp.ru');
    const row = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
        // .setCustomId('primary')
        .setLabel('Я КНОПКА ВЪЕБИ ПО МНЕ!!!')
        .setURL('https://www.youtube.com/watch?v=03lO4XlgQYA&ab_channel=JorgeLopez')
        .setStyle(ButtonStyle.Link),
    );
    const buttoninfo = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
        // .setCustomId('primary')
        .setLabel('Я КНОПКА ВЪЕБИ ПО МНЕ!!!')
        .setURL('https://www.youtube.com/watch?v=03lO4XlgQYA&ab_channel=JorgeLopez')
        .setStyle(ButtonStyle.Link),
    );

  member.send({ 
    embeds: [main], 
    components: [row , buttoninfo]
  });
});



cron.schedule('40 0 * * * *', () => {
  const channel = client.channels.cache.get(1028577681433968650);
  channel.send('Вот гифка, которую я обещал', 'https://media3.giphy.com/media/H4DjXQXamtTiIuCcRU/giphy.gif?cid=ecf05e47kh8ou5iez5pvipt3ixgk8ihv7p7mdpk3f137n38e&rid=giphy.gif&ct=g');
});


client.login('BOT_TOKEN');


