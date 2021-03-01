module.exports = {
  name: 'clear',
  description: 'Clear cmd',
  async execute(message, args) {
    if(!args[0]) return messsage.reply("<a:Nope:799231638604218419> Devi mettere il numero dei messaggi che devo eliminare!");
    if(isNaN(args[0])) return message.reply("<a:Nope:799231638604218419> Devi mettere un numero reale");

    if(args[0] > 500) return message.reply("<a:Nope:799231638604218419> Non posso eliminare più die 500 messaggi");
    if(args[0] < 1) return message.reply("<a:Nope:799231638604218419> Non puoi eliminare 0 messaggi!");

    await message.channel.messages.fetch({limit: args[0]}).then(messages => {
      message.channel.bulkDelete(messages);
    });
  }
};