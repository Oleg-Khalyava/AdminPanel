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
 function getElms (){
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
function btnClickRemove (){
    event.preventDefault();
    commonObj = getElms();
    commonObj.obj.classList.remove(clViz);
    commonObj.opac.classList.remove(clOpac);    
};
//Обработчик события
function listenerBuyers (event){
    let action = event.target.dataset.action;
    switch (action) {
        case "open":
             btnClickAdd();
             break; 
         case "close": 
                btnClickRemove();
                break;
         default:
             break;
     }
};
let bodyBuyer = document.body;
bodyBuyer.addEventListener ("click", listenerBuyers);

}());


