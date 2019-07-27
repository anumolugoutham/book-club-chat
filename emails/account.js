
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
