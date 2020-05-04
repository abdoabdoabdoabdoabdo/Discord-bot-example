const discord=require("discord.js")
const client=new discord.Client()
//installs the package
client.on("message", message =>{
if(message.content=="i hate you"){
// checks if a message is =i hate you
message.channel.send("Why?")
//sends the message

}

})
//checks if a message has been sent

client.login("yourbotoken")
//logs in to your bot account
