/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Объявление функций:
/*используется как обработчик события(клик кнопки) добавляет два класса 
(clViz - делает видимым модальное окно, clOpac - затемняет задний фон)*/
(function (){
 let clViz = "z-visible";
 let clOpac = "opacity"; 
 function getElms (event){
     let id = event.target.dataset.id;
     let commonObj = {obj:null,opac: null};
     commonObj.obj = document.getElementById(id);
     commonObj.opac = document.getElementById("opac");
     return commonObj;
 };
 // Функция открытия модального окна
function btnClickAdd (){
    commonObj = getElms();
    commonObj.obj.classList.add(clViz);
    commonObj.opac.classList.add(clOpac);
};
//Функция закрытия модального окна
function btnClickRemove (event){
    event.preventDefault();
    commonObj = getElms();
    commonObj.obj.classList.remove(clViz);
    commonObj.opac.classList.remove(clOpac);    
};
// отображение блока создания акции 
function actionCreateVisible (){
    let mainAction = document.getElementById("main-action");
    let mainActionCreate = document.getElementById("main-action-create");
    mainAction.style.display = "none";
    mainActionCreate.style.display = "block";
}
// скрытие блока создания акции 
function actionCreateHidden (){
    let mainAction = document.getElementById("main-action");
    let mainActionCreate = document.getElementById("main-action-create");
    mainActionCreate.style.display = "none";
    mainAction.style.display = "block";;
}

    function visibleOrHidden (event){
        let id = event.target.dataset.id;
        let idIcon = event.target.dataset.idicon;
        let icon = document.getElementById(idIcon);
        let obj = document.getElementById(id);
        let iconCl = icon.classList;
        let cl = obj.classList;
        iconCl.toggle("rotate");
        if (cl.contains ("hidden")){
            cl.remove ("hidden");
            cl.add("visible");
        }
        else {
            cl.add ("hidden");
            cl.remove("visible");
        }
    } 

//Обработчик события
function listenerBuyers (event){
    let action = event.target.dataset.action;
    switch (action) {
        case "open":
             btnClickAdd();
             break; 
         case "close": 
                btnClickRemove(event);
                break;
            case "open-close":
                visibleOrHidden(event);
                break;
            case "action-create-visible":
                actionCreateVisible();
                break;
             case "action-create-hidden":
                actionCreateHidden();
                break;
         default:
             break;
     }
};
let bodyBuyer = document.body;
bodyBuyer.addEventListener ("click", listenerBuyers);

}());


