
document.addEventListener("DOMContentLoaded", function () {
    var friends = ["Chelsea", "Roxy", "Carmindy", "Joey", "Joe"];
    var weapons = [ "gun", "bat", "razor", "ball", "hampster", 
                    "file", "stick","towel","pizza","hotdog",
                    "sword","finger","cup","computer","pen",
                    "door", "window", "knife" ,"shotgun","rocket launcher"];
    var locations = ["tub", "closet", "car" ,"bed", "toilet",
                        "kitchen", "garage", "pool","dog house","shower"]
    
    
    for( var i = 0 ; i < 100; i++){

    var elementH3 = document.createElement('h3');
    elementH3.innerHTML = `Accusation ${i+1}`;
    var name = friends[i%5];
    var weapon = weapons[i%20];
    var location = locations[i%10];

    function makeaccuse() {
        var name = friends[i%5];
        var weapon = weapons[i%20];
        var location = locations[i%10];
        var num = i+1
        function accuse() {
            alert(`Accusation ${num}: I accuse ${name}, with the ${weapon} in the ${location}!`);
        }
        
        return accuse;
    }

    var func = makeaccuse();
    elementH3.addEventListener("click", func);
    document.body.appendChild(elementH3);
}
})

