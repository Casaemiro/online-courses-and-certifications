// This is the first part of this kata series. Second part is here.

// We want to create a simple interpreter of assembler which will support the following instructions:

//     mov x y - copies y (either a constant value or the content of a register) into register x
//     inc x - increases the content of the register x by one
//     dec x - decreases the content of the register x by one
//     jnz x y - jumps to an instruction y steps away (positive means forward, negative means backward, y can be a register or a constant), but only if x (a constant or a register) is not zero

// Register names are alphabetical (letters only). Constants are always integers (positive or negative).

// Note: the jnz instruction moves relative to itself. For example, an offset of -1 would continue at the previous instruction, while an offset of 2 would skip over the next instruction.

// The function will take an input list with the sequence of the program instructions and will execute them. The program ends when there are no more instructions to execute, then it returns a dictionary (a table in COBOL) with the contents of the registers.

// Also, every inc/dec/jnz on a register will always be preceeded by a mov on the register first, so you don't need to worry about uninitialized registers.
// Example

// SimpleAssembler.interpret(List("mov a 5","inc a","dec a","dec a","jnz a -1","inc a"))

// ''' visualized:
// mov a 5
// inc a
// dec a
// dec a
// jnz a -1
// inc a
// ''''

// The above code will:

//     set register a to 5,
//     increase its value by 1,
//     decrease its value by 2,
//     then decrease its value until it is zero (jnz a -1 jumps to the previous instruction if a is not zero)
//     and then increase its value by 1, leaving register a at 1

// So, the function should return

// Map("a"->1)

// ```ocaml simple_assembler ["mov a 5"; "inc a"; "dec a"; "dec a"; "jnz a -1"; "inc a"]

// ''' visualized: mov a 5 inc a dec a dec a jnz a -1 inc a '''

// This kata is based on the Advent of Code 2016 - day 12


function simple_assembler(program) {
	/* return a dictionary with the registers */
    let register = [];
    let regis = {};
    for (let i = 0; i < program.length; i++) {
        command = program[i].split(" ")
        // console.log(command)


        


        switch(command[0])
        {
            case "mov":
                
                // let wow;
                
                if(typeof(+command[2]) == "number"){
                register.push([`${command[1]}`,`${+command[2]}`])
                // console.log(typeof(+command[2]) == "number")

                }else{
                    console.log("wooooooooo")
                //     for(let j = 0;j<register.length; j++){
                //     if(command[2] == register[j][0] && register[j][0]!= null){
                //         wow = register[j][1];
                //         register.push([`${command[1]}`,wow])
                //     }
                // }
                }
                break
            case 'inc':
                for(let j = 0;j<register.length; j++){
                        if(command[1] == register[j][0]){
                            // console.log(register[j][1])
                            register[j][1]+=1;
                        }
                }
                break
            case 'dec':
                for(let j = 0;j<register.length; j++){
                    if(command[1] == register[j][0]){
                        register[j][1] -= 1;
                    }
            }
            break
            case 'jnz':
                for(let j = 0;j<register.length; j++){
                    if(command[1] == register[j][0] && register[j][1] != 0){
                        // if(+command[2] < 0){
                            i += +command[2] - 1;
                        // }else{
                        //     i += +command[2]
                        // }
                    }
                }
                break
            
        }

    //    console.log(register)
    } 

        for(let j = 0;j<register.length; j++){
           regis[`${register[j][0]}`] = register[j][1];
        }
	return regis;
}

console.log(simple_assembler(['mov a -10','mov b a','inc a','dec b','jnz a -2']))
// console.log(simple_assembler(['mov a 5','inc a','dec a','dec a','jnz a -1', 'inc a']))
// function simple_assembler(program) {
// 	/* return a dictionary with the registers */
//     let register = [];
//     for (let i = 0; i < program.length; i++) {
//         command = program[i].split(" ")
//         console.log(command)
//         switch(command[0])
//         {
//             case "mov":
//                 register.push([command[1],+command[2]])
//                 break
//             case 'inc':
//                 for(let j = 0;j<register.length; j++){
//                         if(command[1] == register[j][0]){
//                             console.log(register[j][1])
//                             register[j][1]+=1;
//                         }
//                 }
//                 break
//             case 'dec':
//                 for(let j = 0;j<register.length; j++){
//                     if(command[1] == register[j][0]){
//                         register[j][1] -= 1;
//                     }
//             }
//             break
//             case 'jnz':
//                 for(let j = 0;j<register.length; j++){
//                     if(command[1] == register[j][0] && register[j][1] != 0){
//                         // if(+command[2] < 0){
//                             i += +command[2] - 1;
//                         // }else{
//                         //     i += +command[2]
//                         // }
                        
//                         console.log(i)
//                     }
//                 }
//                 break
            
//         }
       
       
//     } let regis = {};
//         for(let j = 0;j<register.length; j++){
//            regis[`${register[j][0]}`] = register[j][1];
//         } console.log(regis)
// 	return regis;
// }