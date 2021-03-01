const figlet = require('figlet');

module.exports = {
    name: "ascii",
    description: "Ascii cmd",

    execute(message, args) {
        if(!args[0]) return message.channel.send('<a:Nope:799231638604218419> Devi mettere un testo');

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('<a:Nope:799231638604218419> Errore');
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('<a:Nope:799231638604218419> Il testo devo avere massimo 2000 caratteri')

            message.channel.send('```' + data + '```')
        })
    }
}