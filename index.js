const   tmi = require("tmi.js");

const options = {
    options: {
      debug: true
    },
    connection: {
        cluster: 'aws',
      reconnect: true
    },
    identity: {
      username: "kel_bot",
      password: "oauth:s1ctua6ggq3bvlprav9mnns61uxqv3"
    },
    channels: ['flysquaree'],
  };
  // Edit channel name
  var chnl = "flysquaree";
  // Edit channel name

  const client = new tmi.client(options);

  client.connect();
  //bağlanma mesajı
client.on('connected', function (address, port) {
   client.action(chnl,'Çalışıyorum la sakin');
});

   client.on('chat', (channel, user, message, self) => {
    if(message === "!facebook" || message === "!fb"){
        client.action(chnl,'=> Facebook grubumuza katılarak her ortamdan bizden haberdar olabilirsin. https://www.facebook.com/ksinctwitchgrubu/');
    }else if(message === "!youtube" || message === "!yt"){
        client.action(chnl,'=> Eğer yayın yokken izleyicilerin yaptığı editleri izleyip vakit geçirmek istersen beni YouTube üzerinden takip edebilirsin. https://www.youtube.com/channel/UCKs4B7UNmHkZZEqbozjbqCQ');
    }else if(message === "!steam"){
        client.action(chnl,'=> Eğer sende bana skin,oyun veya hediye göndermek istersen steam adresime buradan ulaşabilirsin. https://steamcommunity.com/profiles/76561198053193040/');
    }else if(message === "!donate" || message === "!bynogame"){
        client.action(chnl,'=> Eğer sende bana bağış göndermek istersen bynogame adresime buradan ulaşabilirsin. https://www.bynogame.com/ksinctv');
        client.action(chnl,'=> Eğer sende bana skin,oyun veya hediye göndermek istersen steam adresime buradan ulaşabilirsin. https://www.durmaplay.com/tr/twitch/ksinctv');
    }else if(message === "!instagram" || message === "!ig"){
        client.action(chnl,'=> Yayın zamanlarını ve eğlenceli anlarımı takip etmek isterseniz Instagram üzerinden takip edebilirsiniz. https://www.instagram.com/tlhadmlu/');
    }else if(message === "!spotify" || message === "!playlist"){
        client.action(chnl,'=> Arkada çalan playlist işte burada. https://open.spotify.com/playlist/68yvE21YIFlUZwlkSwBl4z?si=z7ryCSZjR7SxpqAeYYvhcg');
    }else if(message === "!discord" || message === "!dc"){
        client.action(chnl,'=> Sunucuya gelerek sende benim o güzel sesim ile kulaklarını mutlu edebilirsin. https://discord.gg/mmXEJBN');
    }else if(message === "!com" || message === "!komutlar"){
        client.action(chnl,'=> !prime - !fb - !yt - !ig - !donate - !dc - !playlist - !steam');
    }else if(message === "!prime"){
        client.action(chnl,'=> Twitch prime ile ücretsiz abone olabilir ve bana destek verebilirsiniz https://twitch.amazon.com/tp ');
    }
});