const discord = require("discord.js");

module.exports = async (client, message) => {
  message.delete();
  const embed = new discord.EmbedBuilder()
    .setColor(client.cor)
    .setDescription(
      "Olá, aqui você encontra o sistema de **suporte** de nosso servidor! Caso queira **sanar dúvidas**, **fazer uma denúncia**, **fechar uma parceria**, **patrocinar um sorteio** ou receber **ajuda** com nosso **sistema de animes**, está no lugar certo, apenas abra um ticket selecionando uma das opções dispostas abaixo. \n\nPedimos para que não abra tickets sem motivos plausíveis, poderá resultar em punição!"
    )
    .setImage("https://i.imgur.com/VIgT0lO.png");
  const menu = new discord.StringSelectMenuBuilder()
    .setCustomId("ticket")
    .setMaxValues(1)
    .setOptions([
      { label: "Dúvidas", value: "Dúvidas" },
      { label: "Denúncias", value: "Denúncias" },
      { label: "Parcerias", value: "Parcerias" },
      { label: "Patrocínio", value: "Patrocínio" },
      { label: "Suporte Animes", value: "Suporte Animes" },
    ]);
  const row = new discord.ActionRowBuilder().setComponents(menu);

  await message.channel.send("https://i.imgur.com/KGXLes5.png");
  message.channel.send({
    embeds: [embed],
    components: [row],
  });
};
