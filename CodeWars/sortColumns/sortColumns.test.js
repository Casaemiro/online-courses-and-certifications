let sortColumns = require("./sortColumns");


var preSorting = "myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n"
+ "17945;10091;10088;3907;10132\n"
+ "2;12;13;48;11";
var postSorting = "Dentzil;myjinxin2015;raulbc777;smile67;SteffenVogel_79\n"
 + "3907;17945;10091;10088;10132\n"
 + "48;2;12;13;11";



test("should give us", ()=>{
    expect(sortColumns.sortCsvColumns(preSorting)).toBe(postSorting)
})










// it("BasicTests", function(){
//     var preSorting = "myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n"
//                    + "17945;10091;10088;3907;10132\n"
//                    + "2;12;13;48;11";
//     var postSorting = "Dentzil;myjinxin2015;raulbc777;smile67;SteffenVogel_79\n"
//                     + "3907;17945;10091;10088;10132\n"
//                     + "48;2;12;13;11";
//     Test.assertEquals(sortCsvColumns(preSorting), postSorting);
    
//     preSorting = "IronMan;Thor;Captain America;Hulk\n"
//                + "arrogant;divine;honorably;angry\n"
//                + "armor;hammer;shield;greenhorn\n"
//                + "Tony;Thor;Steven;Bruce";
//     postSorting = "Captain America;Hulk;IronMan;Thor\n"
//                 + "honorably;angry;arrogant;divine\n"
//                 + "shield;greenhorn;armor;hammer\n"
//                 + "Steven;Bruce;Tony;Thor";
//     Test.assertEquals(sortCsvColumns(preSorting), postSorting);    
//   });
// });