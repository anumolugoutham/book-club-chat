
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
