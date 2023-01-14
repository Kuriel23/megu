const discord = require("discord.js");

module.exports = async (client, message) => {
  message.delete();
  const embed = new discord.EmbedBuilder()
    .setColor("#FF5202")
    .setDescription(
      "Boas vindas ao registro automático do Arcane! Para isso, basta descrever-se selecionando as opções em cada aba disposta abaixo. Aqui, você poderá completar seu perfil, escollher uma cor e as notificações que deseja receber. Caso tenha dúvidas com o funcionamento do registro, entre em contato com o suporte."
    )
    .setImage("https://i.imgur.com/Nu9ZNOV.png");
  const pronomes = new discord.StringSelectMenuBuilder()
    .setCustomId("pronomes")
    .setPlaceholder("Pronomes")
    .setMaxValues(1)
    .setOptions([
      { label: "Ele/dele", value: "Ele/dele" },
      { label: "Ela/dela", value: "Ela/dela" },
      { label: "Elu/delu", value: "Elu/delu" },
    ]);
  const idade = new discord.StringSelectMenuBuilder()
    .setCustomId("idade")
    .setPlaceholder("Idade")
    .setMaxValues(1)
    .setOptions([
      { label: "+18", value: "+18" },
      { label: "-18", value: "-18" },
    ]);
  const cores = new discord.StringSelectMenuBuilder()
    .setCustomId("cores")
    .setPlaceholder("Cores")
    .setMaxValues(1)
    .setOptions([
      { label: "Branco", value: "Branco" },
      { label: "Preto", value: "Preto" },
      { label: "Vermelho", value: "Vermelho" },
      { label: "Laranja", value: "Laranja" },
      { label: "Amarelo", value: "Amarelo" },
      { label: "Verde", value: "Verde" },
      { label: "Azul", value: "Azul" },
      { label: "Roxo", value: "Roxo" },
      { label: "Rosa", value: "Rosa" },
    ]);
  const pings = new discord.StringSelectMenuBuilder()
    .setCustomId("pings")
    .setPlaceholder("Pings")
    .setMaxValues(1)
    .setOptions([
      { label: "Sorteios", value: "Sorteios" },
      { label: "Parcerias", value: "Parcerias" },
      { label: "Anúncios", value: "Anúncios" },
      { label: "Eventos", value: "Eventos" },
      { label: "Mudae", value: "Mudae" },
      { label: "Jogos", value: "Jogos" },
      { label: "Reviver Chat", value: "Reviver Chat" },
      { label: "Assistir Animes", value: "Assistir Animes" },
    ]);
    const row = new discord.ActionRowBuilder().setComponents(pronomes);
    const row2 = new discord.ActionRowBuilder().setComponents(idade);
    const row3 = new discord.ActionRowBuilder().setComponents(cores);
    const row4 = new discord.ActionRowBuilder().setComponents(pings);

  await message.channel.send("https://i.imgur.com/xgGSpcp.png");
  message.channel.send({
    embeds: [embed],
    components: [row, row2, row3, row4],
  });
};
