
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
