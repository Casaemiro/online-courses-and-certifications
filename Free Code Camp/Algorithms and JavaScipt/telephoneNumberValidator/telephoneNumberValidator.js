// // //Free Code Camp  Telephone Number Validator
// //_________________________________________________________________________________________________



// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

//     555-555-5555
//     (555)555-5555
//     (555) 555-5555
//     555 555 5555
//     5555555555
//     1 555 555 5555

// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
//STEPS
//___________________________________________________________________________________________________________


function telephoneCheck(str) {
    let regex1 = /[\d{3}]*[-]*[\d{3}]*[-]*[\d{4}]*/;  // true
    let regex2 = /[1][\s]*[(][\d{3}]*[)][\d{3}]*[-]*[{\d{4}]*/
    let regex3 = /[(][\d{3}]*[)][\s]*[\d{3}]*[-]*[\d{4}]*/;
    let regex4 = /\d{10}/;
    let regex5 = /[1]\s[\d{3}]*\s[\d{3}]*\s[{\d{4}]*/
    let regex6 =/[1]\s[\d{3}]*[-]*[\d{3}][-][{\d{4}]*/
    let brack = str.match(/[()]/g)
    let dash = str.match(/[-]/g)
    //console.log(brack)
    let numCountRegex = str.match(/[0-9]/g);  // = 10
    let numCount = str.match(/[0-9]/g).length
    if(str[0] == "(" && str[str.length - 1] == ")"){ 
        console.log(str)
        console.log(false)
        return false
        }
    if(brack != null){ 
        if(brack.length == 1 || brack.length == 3 || brack.length == 4){
            console.log(str)
        console.log(false)
        return false
    }}
    if(dash != null){ 
        if(dash.length > 2){
            console.log(str)
        console.log(false)
        return false
    }}
    if(regex1.test(str) && numCount == 10){
        console.log(str)
        console.log(true)
        return true
    }else if(regex2.test(str) && numCount == 11 && str[0] == "1"){
        console.log(str)
        console.log(true)
        return true
    }else if(regex3.test(str) && numCount == 10){
        console.log(str)
        console.log(true)
        return true
    }else if(regex4.test(str) && numCount == 10){
        console.log(str)
        console.log(true)
        return true
    }else if(regex5.test(str) && numCount == 11 && str[0] == "1"){
        console.log(str)
        console.log(true)
        return true
    }else if(regex6.test(str) && numCount == 11 && str[0] == "1"){
        console.log(str)
        console.log(true)
        return true
    }

    // console.log(numCountRegex);
    // console.log(numCount);
    console.log(str)
        console.log(false)
   // console.log(regex1.test(str));
    return false
  }
  

//TESTS

telephoneCheck("1 555-555-5555");

// telephoneCheck("1(555)555-5555") //should return true.
// telephoneCheck("1 555)555-5555") //should return false.

// telephoneCheck("(6054756961)") //should return false.
// telephoneCheck("-1 (757) 622-7382") //should return false.
// telephoneCheck("10 (757) 622-7382") //should return false.
// telephoneCheck("555)-555-5555") //should return false.
// telephoneCheck("(555-555-5555") //should return false.
// telephoneCheck("(555)5(55?)-5555") //should return false.
// telephoneCheck("55 55-55-555-5") //should return false.
// telephoneCheck("11 555-555-5555") //should return false.