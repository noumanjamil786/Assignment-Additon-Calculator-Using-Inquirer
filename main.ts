import inquirer from "inquirer";

let input1 = await inquirer.prompt({

       name : "Num1",
       type : "number",
       message : "Enter Your First Number",
})

let input2 = await inquirer.prompt({

      name : "Num2",
      type : "number",
      message : "Enter Your Second Number",
})

let totalSum : Number = input1.Num1 + input2.Num2;
console.log(totalSum);