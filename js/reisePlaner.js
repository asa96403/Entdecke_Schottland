let orte = ["Edinburgh Castle", //0
     "Oban", "Isle of Mull, Iona, Staffa", "Tobermory", //1, 2, 3
     "Dundee", "Royal Research Ship Dundee", "V&A Dundee", "Science Center Dundee", "Caird Hall Dundee", // 4, 5, 6, 7, 8
     "Samye Ling",  // 9
     "Steall Falls",    // 10
     "Glenfinnan-Viadukt"]; // 11
//Graph in Adjaszenzlistendarstellung
let graph = [
    [[1, 121], [4, 56.1], [9, 57.2], [10, 139], [11, 160]],    //Adj Edinburgh              0
    [[0, 123], [2, 20],[3, 31.9], [4, 116], [9, 170], [10, 50.8], [11, 60.5]],    //Adj Oban                   1
    [[1, 20]],     //Adj Mull, Iona, Staffa    2
    [[1, 31.8]],     //Adj Tobermory             3
    [[0, 56.1], [1, 116], [5, 0.5], [6, 0.5], [7, 0.5], [8, 0.2], [9, 109], [10, 132], [11, 139]],    //Adj Dundee                 4
    [[4, 0.5], [6, 0.043], [7, 0.3], [8, 0.3]],     //Adj Royal Research Ship   5
    [[4, 0.5], [5, 0.043], [7, 0.4], [8, 0.3]],     //Adj V&A                   6
    [[4, 0.5], [5, 0.3], [6, 0.4], [8, 0.4]],     //Adj Science Center        7
    [[4, 0.2], [5, 0.3], [6, 0.3], [7, 0.4]],     //Adj Caird Hall            8
    [[0, 56.6], [1, 175], [4, 114], [10, 193], [11, 202]],    //Adj Samye Ling             9
    [[0, 140], [1, 50.8], [4, 132], [9, 194], [11, 22.6]],    //Adj Steall Falls           10
    [[0, 160], [1, 60.5], [4, 139], [9, 204], [10, 22.6] ],    //Glenfinnan-Viadukt         11
]        