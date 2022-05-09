// // Fee Code Camp CONVERTING HTML ENTITIES
// //____________________________________________________________________________________________________
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their 
// corresponding HTML entities.

//_______________________________________________________________________________________________________

//1.) Create set with elements to replace   (["&", "<", ">", "\"", "'"])
//2.) create another set with elements to replace with   (["&amp;","&lt;","&gt;","&quot;","&apos;"])
//3.) For each character in the given text, compare with all characters to replace.
//4.) If there is a match, replace with approppriate strings


function convertHTML(str) {
    let newStr = str;
    let finalStr;
    let removeArr = ["&", "<", ">", "\"", "'"]; //1.)
    let replaceArr = ["&amp;","&lt;","&gt;","&quot;","&apos;"]; //2.)
    for(let i=0;i<newStr.length;i++){   //3.()
        for(let j=0;j<removeArr.length;j++){
            if(newStr[i] == removeArr[j]){      //4.)
                newStr = newStr.replace(removeArr[j],replaceArr[j]);
            }
        }
    }
  console.log(newStr); // Print out result in console
    return newStr;
  }

  //TESTS
//_______________________________________________________________________________________________________
convertHTML("Dolce & Gabbana")              // return the string Dolce &amp; Gabbana.

convertHTML("Hamburgers < Pizza < Tacos")   // return the string Hamburgers &lt; Pizza &lt; Tacos.

convertHTML("Sixty > twelve")               // return the string Sixty &gt; twelve.

convertHTML('Stuff in "quotation marks"')   // return the string Stuff in &quot;quotation marks&quot;.

convertHTML("Schindler's List")             // return the string Schindler&apos;s List.