
const smail=require("@sendgrid/mail")

smail.setApiKey("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")

const welcomemail=function(email,name,x){
smail.send({
  to:email,
  from:x,
  subject:"Book Club",
  text: "Interseted in one of your books . You can contact me with this email . My Location "+name



})
}

module.exports=welcomemail
