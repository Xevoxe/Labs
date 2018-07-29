
//Setup Event handlers for form submits
$(".frm").submit(function (e) {
    e.preventDefault();
    createShape(e)});


    function createShape(e){
        
        let frm = $(e.currentTarget);
        let shape_type = frm.find("h3").text();
        let shape = null;
        
        switch(shape_type){
             case "Circle" : shape = new Circle(frm.find("input[name='radius']").val()).draw();
             break;
             case "Square" : shape = new Square(frm.find("input[name='side-length']").val()).draw();
             break;
             case "Triangle" : shape = new Triangle(frm.find("input[name='height']").val()).draw();
             break;
             case "Rectangle" : shape = new Rectangle(frm.find("input[name='width']").val(),frm.find("input[name='height']").val()).draw();
             break;
             default:
             shape.$div
         }
         //Add clicking functionality
         let singleClick = () => {
             shape.describe($("#info-panel"));
         }

         let dblClick = () => {
             return shape.remove();
         }

         shape.click(createClickHandler(shape,singleClick,dblClick))        
    }

    function createClickHandler(object, single, double){
    
        let timer = null;
        let delay = 200;
        let prevent = false;
    
        function handler(){
                //If no click event has been triggered track click event and if it has, prevent single click event from triggering
                if(!prevent){       
                timer = setTimeout( () => {
                        single();
                        prevent = false;
                    },delay);
                    prevent = true;
                }
                else if(prevent){
                     clearTimeout(timer);
                     prevent = false;
                     double();
                }
    
        }
        return handler;
    }