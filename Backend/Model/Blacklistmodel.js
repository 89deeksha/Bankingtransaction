const mongoose=require('mongoose')

const blackListTokenSchema=new mongoose.Schema({
    token: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
    
    
)

const tokenblacklist=mongoose.model("blacklisttoken",blackListTokenSchema)
module.exports=tokenblacklist