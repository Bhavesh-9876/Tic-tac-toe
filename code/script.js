let boxes=document.querySelectorAll(".btn");
let resetbtn =document.querySelector(".btn1");
let miswinner =document.querySelector(".win");
let msg = document.querySelector("#msg")
let turn = true ;

const Winpattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],];

boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        if(turn){
            box.innerHTML ="0";
            turn =false;
        } else{
            box.innerHTML ="X";
            turn =true;
        }
        box.disabled=true;

        winner();
    });
});
const disablebtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enablebtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const showwin =(winner) =>{
   msg.innerText='congratulation, winner is '+winner;
   miswinner.classList.remove("hide");
   disablebtn();
}
const winner=()=> {
    for(pattern of Winpattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                showwin(pos1val);
               
            }
        }

    }
}

const resetgame =()=>{
    turn=true;
    enablebtn();
    miswinner.classList.add("hide");

}
resetbtn.addEventListener("click",resetgame);