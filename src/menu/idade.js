module.exports = async (client, interaction) => {
  const member = interaction.member
  let role
  switch (interaction.values[0]) {
    case '-18':
      role = interaction.guild.roles.cache.get("1049098802444898314");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role)
      } else {
        member.roles.add(role)
      }
      break
    case '+18':
      role = interaction.guild.roles.cache.get("1049099048583450635");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role)
      } else {
        member.roles.add(role)
      }
      break
  }
  interaction.reply({
    content: 'Operação realizada com sucesso.',
    ephemeral: true
  })
}
