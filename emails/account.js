
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
