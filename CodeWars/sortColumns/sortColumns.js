// // codeWars kyu
// Before sorting:
// As table (only visualization):
// |myjinxin2015|raulbc777|smile67|Dentzil|SteffenVogel_79|
// |17945       |10091    |10088  |3907   |10132          |
// |2           |12       |13     |48     |11             |

// The csv-file:
// myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n
// 17945;10091;10088;3907;10132\n
// 2;12;13;48;11

// ----------------------------------

// After sorting:
// As table (only visualization):
// |Dentzil|myjinxin2015|raulbc777|smile67|SteffenVogel_79|
// |3907   |17945       |10091    |10088  |10132          |
// |48     |2           |12       |13     |11             |

// The csv-file:
// Dentzil;myjinxin2015;raulbc777;smile67;SteffenVogel_79\n
// 3907;17945;10091;10088;10132\n
// 48;2;12;13;11


// STEPS 
//__________________________________________________________________________
//1.)Group elements into columns
//2.)Sort the groups alphabetically
//3.)Combine the groups

function sortCsvColumns(csvFileContent) {
    let WholeArr = [];
    let splittedcsvFile = csvFileContent.split(/\n/g);
    let numberOfRows = splittedcsvFile.length;
    let numberOfColumns = splittedcsvFile[0].split(";").length;
    let seperatedArraysarray = splittedcsvFile.map(elem=>elem.split(";"))
    let sortingArray;
    finalSeparatedArray = []
    for(let j=0;j<numberOfColumns;j++){
        let trackingArray = []
        for(let i=0;i<numberOfRows;i++){
            trackingArray.push(seperatedArraysarray[i][j])
        }
        finalSeparatedArray.push(trackingArray);
    }
    sortingArray = finalSeparatedArray.map(elem=>elem[0].toLowerCase())
    let sortedArray = sortingArray.sort()
    console.log(finalSeparatedArray[3])
    let final = [];
    for(let j = 0; j < sortedArray.length; j++){
        for(let i = 0; i < sortedArray.length; i++){
            if(sortedArray[j] == finalSeparatedArray[i][0].toLowerCase()){
                final.push(finalSeparatedArray[i])
            }
        }
    }
    let newRow1 = final.map(elem => elem[0]).join(";");
    let newRow2 = final.map(elem => elem[1]).join(";");
    let newRow3 = final.map(elem => elem[2]).join(";");

    // return finalSeparatedArray[3].includes(sortedArray[0])
    let toBeExported = newRow1 + "\n" + newRow2 + "\n" + newRow3;
    console.log(toBeExported)
    return toBeExported;
}


exports.sortCsvColumns = sortCsvColumns;