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
