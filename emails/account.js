
const smail=require("@sendgrid/mail")

smail.setApiKey("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")

const welcomemail=function(email,name){
smail.send({
  to:email,
  from:"anumolu.goutham@gmail.com",
  subject:"Book Club",
  text: name



})
}

module.exports=welcomemail
