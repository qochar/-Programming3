var matrix = []
var side = 10;
var xotArr = [];
var eatArr = [];
var gishArr = [];
var gevArr = [];
var patArr = [];
var erk = 50;
var bar = 100;
var xotCount = 300;
var eatCount = 30;


/*
var matrix = [
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 5, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 0, 0, 2, 0, 0, 1, 5, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 3, 3, 0, 1, 0, 2, 1, 3, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 3, 0, 1, 2, 0, 1, 0, 0, 1, 1, 3, 1, 1, 1],
    [2, 2, 2, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 3, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1, 1, 1, 1, 1, 1],
    [0, 0, 4, 4, 0, 1, 2, 0, 1, 0, 0, 1, 1, 3, 1, 1, 1],
    [2, 0, 0, 0, 0, 1, 0, 0, 1, 4, 1, 4, 1, 1, 1, 1, 1],
    [2, 0, 0, 0, 0, 1, 0, 1, 4, 2, 2, 2, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 0, 1, 2, 3, 2, 2, 1, 1, 1, 1, 1],
]
*/

function setup() {
    for (var i = 0; i < erk; i++)  {
        matrix.push([]);
        for (var j = 0; j < bar; j++) {
            matrix[i][j] = 0
        }
    }

var c = 0
while(c < xotCount) {
    var x = Math.floor(random(0,erk));
    var y = Math.floor(random(0,bar));
    if(matrix[x][y] == 0) {
        matrix[x][y] = 1;
        c++;
    }
 }

var c = 0
while (c < eatCount) {
    var x = Math.floor(random(0,erk));
    var y = Math.floor(random(0,bar));
    if(matrix[x][y] == 0) {
        matrix[x][y] = 2;
        c++;
    }
 }
 var c = 0
 while (c < eatCount) {
     var x = Math.floor(random(0,erk));
     var y = Math.floor(random(0,bar));
     if(matrix[x][y] == 0) {
         matrix[x][y] = 3;
         c++;
     }
  }

  var c = 0
  while (c < eatCount) {
      var x = Math.floor(random(0,erk));
      var y = Math.floor(random(0,bar));
      if(matrix[x][y] == 0) {
          matrix[x][y] = 4;
          c++;
      }
   }

   var c = 0
   while (c < eatCount) {
       var x = Math.floor(random(0,erk));
       var y = Math.floor(random(0,bar));
       if(matrix[x][y] == 0) {
           matrix[x][y] = 5;
           c++;
       }
    }

                      
    noStroke()
    //frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 2) {
                var eatgrass = new Eatgrass(j, i, 2);
                eatArr.push(eatgrass);
            } else if (matrix[i][j] == 1) {
                var grass = new Grass(j, i, 1);
                xotArr.push(grass);
            } else if (matrix[i][j] == 3) {
                var gishatich = new Gishatich(j, i, 3);
                gishArr.push(gishatich);
            } else if (matrix[i][j] == 4) {
                var gevorg = new Gevorg(j, i, 4);
                gevArr.push(gevorg);
                } else if (matrix[i][j] == 5) {
                var patnesh = new Patnesh(j, i, 4);
                patArr.push(patnesh);
            }
        }
    }

}



    function draw() {
        var f =  frameCount
          console.log(f);
        if(f%25>=0 && f%25<=10){
            
        background('#acacac');
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    fill("#0D7006  ");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill("#EF9E07  ");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill("#F50B15 ");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill("#000000  ");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#E4ED06' );
                    rect(j * side, i * side, side, side);
                }
            }
        }


        }else if(f%25>=10 && f%25<=20){
            
        background('#acacac');
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    fill("#E7F50B  ");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill("#7511CB");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill("#06A4ED  ");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill("#837CD2  ");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#D27C88  ');
                    rect(j * side, i * side, side, side);
                }
            }
        }


        }else if(f%25>=20 && f%25<=30){
            
        background('#acacac');
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    fill("#FCA004");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill("#CB117F");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill("#B5E9C9");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill("#7F7004");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#5B0411  ');
                    rect(j * side, i * side, side, side);
                }
            }
        }


        }else if(f%25>=30 && f%25<=40){
            
        background('#acacac');
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    fill("#8F8C8B");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill(" #0A231B  ");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill("#604A6C");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill("#581845");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#213D30  ');
                    rect(j * side, i * side, side, side);
                }
            }
        }


        }
     
     
     
     
     

        for (var i in xotArr) {
            xotArr[i].mul();
            
        }

        for (var i in eatArr) {
            eatArr[i].eat();
            
        }

        for (var i in gishArr) {
            gishArr[i].eat();
            
        }

        for (var i in gevArr) {
            gevArr[i].eat();
            
        }

    }


