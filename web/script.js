/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function gethiddenField() {
    var others = document.getElementById('myDropDown');
    var y = others.options[others.selectedIndex].value;
    if (y === "Others") {
        var field = document.getElementById("hiddenField").style.display = "block";
        field.type = 'text';
    } else if (y !== "Others") {
        var field = document.getElementById("hiddenField").style.display = "none";
    }
}

