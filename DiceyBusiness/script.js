class Dice {
    constructor () {
        this.value = null;
        this.$div = $(`<div><p></p></div>`).addClass('dice')
        $("#container-2").prepend(this.$div);
        this.roll();
        this.id = Dice.generateID();
        Dice.list.push(this);
    }
    roll(){
        this.value = Math.floor((Math.random()*6)+1);
        this.$div.text(this.value);
    }

}
Dice.list = [];
//Initialize starting id number
Dice.ids = 0;
Dice.generateID = ()=>{
    Dice.ids = Dice.ids + 1;
    return Dice.ids;
}

Dice.remove = (die)=>{
    die.$div.remove();
    for(let i = 0; i < Dice.list.length; i++){
        if(Dice.list[i].id == die.id){
            Dice.list.splice(i,1);
        }
    }
}

Dice.sum = () => {
    let sum = 0;
    for(let i = 0; i < Dice.list.length; i++){
        sum = Dice.list[i].value + sum;
    }
    return sum;
}


$(document).ready(function (){

    $("#btn-Generate").click(()=> {

        //Add Die Roll button if there is no dice on the board
        if(Dice.list.length === 0){
            let btn = $(`<button>Roll Dice!</button>`).click(()=>{
                for(let i = 0; i < Dice.list.length; i++){
                    Dice.list[i].roll();
                }
            });
            $("#container-1").append(btn);

            //Add Sum button
            btn = $(`<button>Sum Dice!</button>`).click(()=> alert(Dice.sum()));
            $("#container-1").append(btn);

        }

        let die = new Dice();

        //Handle click events for dice elements
        let clickHandler = createClickHandler(die);
        die.$div.click(clickHandler);
    
    })
});

function createClickHandler(die){
    
    let timer = null;
    let delay = 200;
    let prevent = false;

    function handler(){
            //If no click event has been triggered track click event and if it has, prevent single click event from triggering
            if(!prevent){       
            timer = setTimeout( () => {
                    die.roll();
                    prevent = false;
                },delay);
                prevent = true;
            }
            else if(prevent){
                 clearTimeout(timer);
                 prevent = false;
                 Dice.remove(die);
            }

    }
    return handler;
}
