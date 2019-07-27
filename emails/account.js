
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
