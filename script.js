const d = document;
let squares = d.querySelectorAll(".square");
let info = d.querySelector(".info")
let restartbtn= d.querySelector(".restart")

let att=0;
const data=Array(9).fill(null);
squares.forEach((square,idx)=> {
    square.addEventListener("click", ()=>{
        if([0,2,4,6,8].includes(att) && square.innerHTML.length == 0){
            square.innerHTML="X"
            data[idx]="X"
            att++
        }else if([1,3,5,7].includes(att) && square.innerHTML.length == 0){
            square.innerHTML="O"
            data[idx]="O"
            att++
        }
        detectwin()
    })
})

function detectwin() {
    
    const seri = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
    for (let i = 0; i < seri.length; i++) {
        const [a, b, c] = seri[i];
        if (data[a] && data[a] === data[b] && data[a] === data[c]) {
          
            squares.forEach(square=> {
                square.disabled = true;
            })

            info.innerHTML =`${data[a]} OYUNU KAZANDI`
            console.log(data[a])
        }
    }

    if(att>8){
        info.innerHTML ="BERABERE"
    }

}


restartbtn.addEventListener("click", gameOver)

function gameOver() {
    att=0;
    data.fill(null);
    squares.forEach(square=> {
        square.innerHTML = "";
        square.disabled = false;
    })

    info.innerHTML =""

}