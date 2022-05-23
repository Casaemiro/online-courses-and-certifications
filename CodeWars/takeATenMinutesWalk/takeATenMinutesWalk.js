// //CodeWars  // TAKE A TEN MINUTES WALK  6kyu
// //__________________________________________________________________________________________________________________
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an 
// appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk 
// Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing 
// directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know 
// it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you 
// will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point.
//  Return false otherwise.

//     Note: you will always receive a valid array (string in COBOL) containing a random assortment of direction letters
//      ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

//STEPS
//1.) get the number of entries in the input dataset.
//2.) if length of array is different from 10, return false. otherwise true
//___________________________________________________________________________________________________________________

function isValidWalk(walk) {
    let walkLength = walk.length
    console.log(walk);
    console.log(walkLength);
    let nlength = walk.join("").match(/n/g)
    let slength = walk.join("").match(/s/g)
    let elength = walk.join("").match(/e/g)
    let wlength = walk.join("").match(/w/g)
    console.log(nlength);
    console.log(slength);
    console.log(elength);
    console.log(wlength);
    //first case if both north and south counts are equal
    if(nlength !=null && slength != null && wlength == null && wlength == null){
        if(walkLength == 10 && nlength.length == slength.length){
            console.log(true);
            return true
        }
        else{
            console.log(false);
            return false
        }
    }else if(elength !=null && wlength != null && nlength == null && slength == null){
        if(walkLength == 10 &&  elength.length == wlength.length){
            console.log(true);
            return true
        }
        else{
            console.log(false);
            return false
        }
    }else if(nlength !=null && slength != null && wlength != null && wlength != null){
        if(walkLength == 10 && (elength.length == wlength.length && nlength.length == slength.length)){
            console.log(true);
            return true
        }
        else{
            console.log(false);
            return false
        }
    }else if(walkLength != 10){
        console.log(false);
       return false
    }
    else{
        console.log(false);
        return false
    }
  }


  //Tests

  isValidWalk(['n','s','n','s','n','s','n','s','n','s'])//, 'should return true');
  isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])//, 'should return false');
  isValidWalk(['w'])//, 'should return false');
  isValidWalk(['n','n','n','s','n','s','n','s','n','s'])//, 'should return false');