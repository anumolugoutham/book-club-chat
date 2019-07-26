
const smail=require("@sendgrid/mail")
// const r=require("../public/index.html")

// console.log(username)
smail.setApiKey("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")

const welcomemail=function(email,name,x){
smail.send({
  to:email,
  from:x,
  subject:"Book Club",
  text: "Interseted in one of your books . You can contact me through this email . My Location "+name



})
}

module.exports=welcomemail
