// //Free Code Camp /// CASH REGISTER
// //_____________________________________________________________________________________________



// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)

// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

//STEPS//________________________________________________________________________________________
//1.) subtract the price from cash to get the change expected
//2.) get sum of cash in drawer
//3.) If total cash in drawer is less than the change, return {status: "INSUFFICIENT_FUNDS", change: []}
//4.) return {status: "CLOSED", change: [...cid]} if cash in drawer equals change
//5.) else return change


function checkCashRegister(price, cash, cid) {
  
        let coinValue = [0.01,0.05,0.1,0.25,1,5,10,20,100]
    let finalObject = { "status" : "","change" : []};
    let change1 = cash - price;
    let changeArr = [];
    let tempMoney;
    sumCashInDrawer = (cid.reduce((sum,elem) => +sum + +elem[1],0)).toFixed(2)
    // console.log(sumCashInDrawer)
    // console.log(change1)
    
    if(sumCashInDrawer < change1 ){
        finalObject["status"] = "INSUFFICIENT_FUNDS"
        finalObject["change"] = [];
        console.log(finalObject)
        change1 = 0
    }else if(sumCashInDrawer == change1 ){
        finalObject["status"] = "CLOSED"
        finalObject["change"] = [...cid];
        console.log(finalObject)
        change1 = 0
        // console.log(change1)
    }else if(sumCashInDrawer >= change1){
        for(let i = cid.length - 1; i >= 0 ; i--){
            //console.log(coinsandBillsArray[i][1])
            if(change1 >= coinValue[i]){
                if(change1 % coinValue[i] == 0 && cid[i][1] != 0){
                    finalObject["change"].push([cid[i][0],change1])
                    change1 -= change1
                    if(i == 0){
                        // console.log("value of i is " + i)
                        // console.log("value of change is " + change1)
                    }
                    let tempSum = (cid.splice(0,(i + 1)).reduce((sum,elem) => +sum + +elem[1],0)).toFixed(2)//
                    // console.log("tempSum " + tempSum)
                    // console.log("change" + change1 + " " + i)
                    // console.log(coinValue[i])
                    if(tempSum < change1){
                        finalObject["status"] = "INSUFFICIENT_FUNDS"
                    }else{
                        finalObject["status"] = "OPEN"
                    }
                    
                   
                }else if(change1 > cid[i][1]){
                    change1 -= cid[i][1]
                    if(i == 0){
                        if(change1 > 0){
                            finalObject["change"] = []
                            finalObject["status"] = "INSUFFICIENT_FUNDS"
                            console.log(finalObject)
                            return finalObject
                        }
                        console.log("value of i is " + i)
                        console.log("value of change is " + change1)
                    }
                    // finalObject["change"].push([cid[i][0],cid[i][1]])
                    finalObject["change"].push([cid[i][0],cid[i][1]])
                    finalObject["status"] = "OPEN"
                }else if(change1 < cid[i][1] && change1 >= coinValue[i]){
                    let temp = (Math.floor(change1/coinValue[i])*(coinValue[i]))
                    change1 = change1 - (temp)
                    change1 = change1.toFixed(2)
                    if(i == 0){
                        // console.log("value of i is " + i)
                        // console.log("value of change is " + change1)
                    }
                    // console.log(change1.toFixed(2))
                    finalObject["change"].push([cid[i][0],temp])
                    finalObject["status"] = "OPEN"
                    // console.log(i)

                    // console.log(change1)
                }else if(change1 < cid[i][1] && change1 < coinValue[i]){
                    finalObject["change"].push(cid[i])
                    finalObject["status"] = "OPEN"
                }
                // change1 = change1 - coinValue[i];
                // finalObject["change"].push([cid[i][0],coinValue[i]])
                //finalObject["change"].unshift(cid[i])
            //    i++;
            }
            


        } 
             
            console.log(finalObject)
            // console.log(change1)
           
    }

    return finalObject;
  }
  



//TESTS//________________________________________________________________________________________

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) //should return an object.

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) //should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}