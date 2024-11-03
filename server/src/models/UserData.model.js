import mongoose from "mongoose"
import Balance from "../../utils/update-balance.js"



let UserDataSchema = new mongoose.Schema({
    Date:{
        type:String,
        
    },
    Product:{
        type:String,
        required:true,
    },
    Expense:{
        type:Number,
        required:true,
    },
    Income:{
        type:Number,
    },
   Balance:{
    type:Number,
    default:0,
   },
   UserId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
   }
}
,{timestamps:true})

UserDataSchema.pre("save",async function (){
let UserData = await Balance(this.UserId)
let populateData = await UserData.populate("Data")
let Data = populateData.Data
if(Data.length==0){
    this.Balance=this.Income-this.Expense
}
let Expense = [];
let Income = []
for (let i = 0; i < Data.length; i++) {
    Expense[i]=Data[i].Expense
    Income[i]=Data[i].Income
    
}
let ExpenseSum = 0;
let IncomeSum= 0;
for (let i = 0; i < Expense.length; i++) {
    ExpenseSum+=Expense[i]
    IncomeSum+=Income[i]
    
}
console.log(ExpenseSum);
console.log(IncomeSum);
let UserIncome=this.Income
let UserExpense=this.Expense
console.log(UserIncome,UserExpense);



 let total=(IncomeSum+UserIncome)-(ExpenseSum+UserExpense)
 this.Balance=total
 

})

export const UserData = mongoose.model("UserData",UserDataSchema)