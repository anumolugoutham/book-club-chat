
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
