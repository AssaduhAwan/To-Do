#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todos:string[]=[]
let loop=true

while(loop){
  let answers:{
   ToDo:string
   addmore:boolean
  }=await inquirer.prompt([
    {
      type:"input",
      name:"ToDo",
      message:(chalk.cyan`What do you want to add in your todo ?`)
    },  
    {
      type:"confirm",
      name:"addmore",
      message:(chalk.red`Do you want to add more todo ?`),
      default:false
    }
  ])
let {ToDo,addmore} = answers 
console.log(answers)
 loop =addmore
 if(ToDo){
 todos.push(ToDo)
 }else{
  console.log((chalk.yellow`kindly add valid input`))
 }
}
if(todos.length > 0){
  console.log((chalk.blue`your ToDo list :`))
  todos.forEach(todos =>{
    console.log(todos)
  })

}else{
  console.log((chalk.green`No todos found`))
}