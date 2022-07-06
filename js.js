
  1
  2
  3
  4
  5
  6
  7
  8
  9
 10
 11
 12
 13
 14
 15
 16
 17
 18
 19
 20
 21
 22
 23
 24
 25
 26
 27
 28
 29
 30
 31
 32
 33
 34
 35
 36
 37
 38
 39
 40
 41
 42
 43
 44
 45
 46
 47
 48
 49
 50
 51
 52
 53
 54
 55
 56
 57
 58
 59
 60
 61
 62
 63
 64
 65
 66
 67
 68
 69
 70
 71
 72
 73
 74
 75
 76
 77
 78
 79
 80
 81
 82
 83
 84
 85
 86
 87
 88
 89
 90
 91
 92
 93
 94
 95
 96
 97
 98
 99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
//declare container
const container = document.querySelector("#container");

//custom grid
const customGrid = document.querySelector(".customGrid");

customGrid.addEventListener(`click`, (e) =>{

    let el = document.querySelector("#container");
    while (el.firstChild) el.removeChild (el.firstChild);

    let userGrid = prompt("How many rows across / down?");

    gridAmount = userGrid;


    for (i = 0; i < (gridAmount * gridAmount); i++){
        const grid = document.createElement("div");
        grid.classList.add("grid");
        document.getElementById("container").appendChild(grid);
        grid.addEventListener(`mouseover`, function (e) {
            grid.style.backgroundColor = "#AA0000";
        });
    }

        document.documentElement.style.setProperty(
            "--container-grid-template-columns", userGrid
        )


})




//16 button
const sixteen = document.querySelector(".sixteen");

sixteen.addEventListener(`click`, (e)=>{

let el = document.querySelector("#container");
while (el.firstChild) el.removeChild (el.firstChild);

gridAmount = 16;


        for (i = 0; i < (gridAmount * gridAmount); i++){
            const grid = document.createElement("div");
            grid.classList.add("grid");
            document.getElementById("container").appendChild(grid);
            grid.addEventListener(`mouseover`, function (e) {
                grid.style.backgroundColor = "#AA0000";
            });
        }

        document.documentElement.style.setProperty(
            "--container-grid-template-columns", "16"
        )


}
)



//100 button
const hundred = document.querySelector(".hundred");

hundred.addEventListener(`click`, (e) => {

    let el = document.querySelector("#container");
    while (el.firstChild) el.removeChild (el.firstChild);

    gridAmount = 100;
    
        for (i = 0; i < (gridAmount * gridAmount); i++){
            const grid = document.createElement("div");
            grid.classList.add("grid");
            document.getElementById("container").appendChild(grid);
            grid.addEventListener(`mouseover`, (e) => {
                grid.style.backgroundColor = "#AA0000";
            });
        }

        document.documentElement.style.setProperty(
            "--container-grid-template-columns", "100"
        )

            console.log(gridAmount);
    })

    /*
//clear button
const clear = document.querySelector(".clear");
    clear.addEventListener(`click`, window.location.reload());
*/



//create a grid
for (i = 0; i < (10*10); i++){
    let grid = document.createElement("div");
    grid.classList.add("grid");
    document.getElementById("container").appendChild(grid);
    grid.addEventListener(`mouseover`, (e) => {
        grid.style.backgroundColor = "#AA0000";
    });
}

document.documentElement.style.setProperty(
    "--container-grid-template-columns", "10"
)


/*
sizePrompt.addEventListener(`click`, (e) => {
    gridAmount = prompt("How many squares per row/column?");   
   
   
   if (gridAmount> 100){
       alert("Too big, guy. Refresh and do less than 100")
   } else {
    window.location.reload();

    for (i = 0; i < (Math.pow(gridAmount, 2)); i++){
        let grid = document.createElement("div");
        grid.classList.add("grid");
        document.getElementById("container").appendChild(grid);
        grid.addEventListener(`mouseover`, (e) => {
            grid.style.backgroundColor = "#AA0000";
        });
    }

   }
   */








//add a reset button

/*
newGame.addEventListener(`click`, (e) => {
    grid.style.backgroundColor = "#FFFFFF";
})
*/
