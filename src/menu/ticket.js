const discord = require("discord.js");

module.exports = async (client, interaction) => {
  const tagger = interaction.user.tag;
  if (interaction.guild.channels.cache.find((c) => c.name === `${tagger}`)) {
    const c = interaction.guild.channels.cache.find(
      (c) => c.name === `${tagger}-${interaction.values[0].toLowerCase()}`
    );
    interaction.reply({
      content: `Você já possui um ticket aberto em ${c}.`,
      ephemeral: true,
    });
  } else {
    interaction.guild.channels
      .create({
        name: `${tagger}-${interaction.values[0].toLowerCase()}`,
        type: 0,
        parent: "1049031176314163260",
        permissionOverwrites: [
          {
            id: interaction.guild.id,
            deny: [discord.PermissionFlagsBits.ViewChannel],
          },
          {
            id: interaction.user.id,
            allow: [
              discord.PermissionFlagsBits.ViewChannel,
              discord.PermissionFlagsBits.SendMessages,
              discord.PermissionFlagsBits.AttachFiles,
              discord.PermissionFlagsBits.AddReactions,
            ],
          },
          {
            id: "1049075972995022920",
            allow: [
              discord.PermissionFlagsBits.ViewChannel,
              discord.PermissionFlagsBits.SendMessages,
              discord.PermissionFlagsBits.AttachFiles,
              discord.PermissionFlagsBits.AddReactions,
            ],
          },
          {
            id: "1049076009800052736",
            allow: [
              discord.PermissionFlagsBits.ViewChannel,
              discord.PermissionFlagsBits.SendMessages,
              discord.PermissionFlagsBits.AttachFiles,
              discord.PermissionFlagsBits.AddReactions,
            ],
          },
        ],
      })
      .then((c) => {
        interaction.reply({
          content: `Seu ticket foi aberto em ${c}.`,
          ephemeral: true,
        });

        const embed = new discord.EmbedBuilder()
          .setAuthor({
            name: interaction.guild.name,
            iconURL: interaction.guild.iconURL({ dynamic: true }),
          })
          .setColor(client.cor)
          .setDescription(
            `Olá, ${
              interaction.user.username
            }, boas vindas ao seu ticket!\nAguarde alguns instantes para analisarmos a sua ${interaction.values[0].toLowerCase()}, enquanto isso faça favor de mandar algumas das informações!`
          );

        const botao = new discord.ActionRowBuilder().addComponents(
          new discord.ButtonBuilder()
            .setCustomId("ft")
            .setEmoji("🔒")
            .setLabel("Fechar Ticket")
            .setStyle(2)
        );

        c.send({
          embeds: [embed],
          components: [botao],
        }).then((msg) => msg.pin());
      });
  }
};
