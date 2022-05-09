//Free Code Camp spinal case exercise
//_________________________________________________________________________________________
//Challenge

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

//End of challenge
//_________________________________________________________________________________________

function spinalCase(str) {
    // Create a variable for the white space and underscores.
    var regex = /\s+|_+/g;
  
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  
    // Replace space and underscore with -
    let n = str.replace(regex, "-").toLowerCase();
    console.log(n);
    return n;
  }
  
  spinalCase('AllThe-small Things');