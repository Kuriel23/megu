const discord = require("discord.js");
const ImgurUpload = require("img-url-to-imgur");
const uploader = new ImgurUpload(process.env.imgur);

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("criar_anime")
    .setNameLocalizations({
      "pt-BR": "criar_anime",
      "en-US": "create_anime",
    })
    .setDescription("Crie as novas embeds de anime")
    .setDefaultMemberPermissions(discord.PermissionFlagsBits.Administrator)
    .addStringOption((option) =>
      option
        .setName("anime")
        .setDescription("Identifique o anime")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("link")
        .setDescription("Coloque o link para assistir")
        .setRequired(true)
    )
    .addRoleOption((option) =>
      option
        .setName("cargo")
        .setNameLocalizations({ "pt-BR": "cargo", "en-US": "role" })
        .setDescription("Identifique o cargo que será oferecido")
        .setRequired(true)
    )
    .addChannelOption((option) =>
      option
        .setName("canal")
        .setNameLocalizations({ "pt-BR": "canal", "en-US": "channel" })
        .setDescription(
          "Identifique o canal onde será enviada a embed para assistir"
        )
        .setRequired(true)
    )
    .addAttachmentOption((option) =>
      option
        .setName("imagem")
        .setNameLocalizations({ "pt-BR": "imagem", "en-US": "image" })
        .setDescription("Coloque uma imagem")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const anime = interaction.options.getString("anime");
    const role = interaction.options.getRole("cargo");
    const channel = interaction.options.getChannel("canal");
    const image = interaction.options.getAttachment("imagem");
    const link = interaction.options.getString("link");
    const img = await uploader.upload(image.proxyURL);
    const button = new discord.ButtonBuilder()
      .setLabel("Assistir")
      .setStyle(1)
      .setEmoji("1049357491181457408")
      .setCustomId("anime-" + role.id);
    const row = new discord.ActionRowBuilder().setComponents(button);
    const embed = new discord.EmbedBuilder()
      .setColor(client.cor)
      .setTitle(anime)
      .setDescription("Aperte no botão abaixo para assistir:")
      .setImage(img);
    const button2 = new discord.ButtonBuilder()
      .setStyle(5)
      .setLabel("Assistir os episódios")
      .setURL(link);
    const embed2 = new discord.EmbedBuilder()
      .setColor(client.cor)
      .setTitle(anime)
      .setDescription("Veja os episódios abaixo:")
      .setImage(img);
    const row2 = new discord.ActionRowBuilder().setComponents(button2);
    client.channels.cache
      .get("1049034690486620282")
      .send({ embeds: [embed], components: [row] });
    client.channels.cache
      .get(channel.id)
      .send({ embeds: [embed2], components: [row2] });
    interaction.reply({ content: "Criado com sucesso!" });
  },
};
