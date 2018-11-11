/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Объявление функций:
/*используется как обработчик события(клик кнопки) добавляет два класса 
(clViz - делает видимым модальное окно, clOpac - затемняет задний фон)*/

function btnClickAdd (clViz, clOpac){
         return (function (event){
         let id = event.target.dataset.id;
         let obj = document.getElementById(id);
         let opac = document.getElementById("opac");
         obj.classList.add(clViz);
         opac.classList.add(clOpac);
         });
};
function btnClickRemove (clViz, clOpac){
         return (function (event){
         event.preventDefault();
         let id = event.target.dataset.id;
         let obj = document.getElementById(id);
         let opac = document.getElementById("opac");
         obj.classList.remove(clViz);
         opac.classList.remove(clOpac);
         });
};
//функция очистки формы 
function clearForm (event){
    let id = event.target.dataset.form;
    let form = document.getElementById(id);
    form.reset();
};
//обработчики событий 
let buttonAddProducts = document.getElementById("productsadd");
buttonAddProducts.addEventListener ("click", btnClickAdd ("z-visible", "opacity"));
let closeModalProductAdd = document.getElementById("close-modal-productadd");
closeModalProductAdd.addEventListener("click",btnClickRemove("z-visible", "opacity"));
closeModalProductAdd.addEventListener("click",clearForm);
let buttonAddProduct = document.getElementById("productadd");
buttonAddProduct.addEventListener ("click", btnClickRemove ("z-visible", "opacity"));
buttonAddProduct.addEventListener ("click", clearForm);
let iconsChangeProduct = document.querySelectorAll("#icon-change-product");
for (let i = 0; i<iconsChangeProduct.length; i++){
iconsChangeProduct[i].addEventListener ("click", btnClickAdd ("z-visible", "opacity"));
};
let iconCloseProductChange = document.getElementById("close-modal-productchange");
iconCloseProductChange.addEventListener("click", btnClickRemove("z-visible", "opacity"));
iconCloseProductChange.addEventListener("click", clearForm);
let buttonProductChange = document.getElementById("productchange-button");
buttonProductChange.addEventListener ("click", btnClickRemove ("z-visible", "opacity"));
buttonProductChange.addEventListener ("click", clearForm);


