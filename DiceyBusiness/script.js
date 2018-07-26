class Dice {
    constructor () {
        this.value = null;
        this.$div = $(`<div><p></p></div>`).addClass('dice')
        this.$div.click(()=> {
            this.roll();
        });
        this.$div.dblclick(()=>{
            Dice.remove(this);
        });
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
Dice.generateID = ()=>{
    Dice.ids = Dice.ids + 1;
    return Dice.ids;
}

Dice.remove = (die)=>{
    die.$div.remove();
}


$(document).ready(function (){

    let ids = 0;

    $("#btn-Generate").click(()=> {

        //Add Die Roll button if there is not dice on the board
        if(Dice.list.length === 0){
            let btn = $(`<button>Roll Dice!</button>`);
            btn.click(()=>{
                for(let i = 0; i < Dice.list.length; i++){
                    Dice.list[i].roll();
                }
            });
            $("#container-1").append(btn);

            //Add Sum button
            btn = $(`<button>Sum Dice!</button>`);
            btn.click(()=> {
                let sum = 0;
                for(let i = 0; i < Dice.list.length; i++){
                    sum = Dice.list[i].value + sum;
                }
                alert(sum);
            });

            $("#container-1").append(btn)
        }

        let die = new Dice();
    
    })
});

