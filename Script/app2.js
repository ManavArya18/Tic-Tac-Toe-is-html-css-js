let turn = 1;
let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function check(){
    for(p of win){
        if(boxes[p[0]].innerText!=""&boxes[p[1]].innerText!=""&boxes[p[2]].innerText!=""){
            if(boxes[p[0]].innerText==boxes[p[1]].innerText&&boxes[p[1]].innerText==boxes[p[2]].innerText&& boxes[p[2]].innerText=="O"){
                alert("Player 2 wins!")
                location.reload()
            }
            else if(boxes[p[0]].innerText==boxes[p[1]].innerText&&boxes[p[1]].innerText==boxes[p[2]].innerText&& boxes[p[2]].innerText=="X"){
                alert("PLayer 1 wins")
                location.reload()
            }
        }
    }
};
let boxes = document.querySelectorAll('.box');
boxes.forEach(box =>{
    box.addEventListener("click", () =>{
        if(turn%2==1){
            box.innerText = "X"
        }
        else{
            box.innerText = "O"
        }
        box.disabled = true;
        turn++;
        dis.innerText = "Turn: "+Math.floor(turn/2);
        check();
    })
})  
let reset = document.querySelector('.reset');
reset.addEventListener("click",()=>{
    location.reload();
})
let dis = document.querySelector('.turn');