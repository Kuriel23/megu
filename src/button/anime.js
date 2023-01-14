module.exports = (client, interaction) => {
  const role = interaction.customId.replace("anime-", "");
  interaction.member.roles.add(role);
  interaction.reply({
    content: "Prontinho, você recebeu o seu cargo!",
    ephemeral: true,
  });
};
