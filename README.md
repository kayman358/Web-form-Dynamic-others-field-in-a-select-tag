# Web-form-Dynamic-others-field-in-a-select-tag

A javascript plugin that provides a dynamic free textfield for the input that can accommodate Users who have just selected "others" in a 
dropdown select tag.

Over time, I have seen forms with static "others" textfields which may be eventually left unfilled if the user finds what is applicable to 
him/her in the dropdown menu.

In order to make things look neater, I have decided to take this challenge upon myself to see how we can make the lives of our users better 
with a better User Experience when filling a form. 

A user should select "Others" and magically see a field for him/her to input his/her opinion and when the user's mind changes and he/she 
selects another option from the dropdown the field goes away. Awesome right?


HOW TO USE

Import the "script.js" and "style.css" files into your project and on the select tag on your webform add an onchange javascript function to it 
and call the function "gethiddenField()".


Add the hidden field as follows in your project, wherever you want the field to appear on selection of "Others" in your dropdown.
Then you are good to go.

Create a div element and give it an id of "hiddenField" and inside the div element create your input type of text.

OPTIONAL

It is fine to import Bootstrap to improve the User Interface.

NB:

This plugin is in it's early version, together we can make it mindblowing. 

Cheers guys!!!

CODE SAMPLE

```<h1>Demo</h1><br/><br/>
        <select id ="myDropDown" class="form-control" onchange="gethiddenField()">
            <option value="" selected="selected">--Choose--</option>
            <option value="My name">My name</option>
            <option value="My name">My name</option>
            <option value="My name">My name</option>
            <option value="Others">Others</option>
        </select><br/>
          <div id = "hiddenField">
              <input type="text" class="form-control"  placeholder="Others (Specify)">
                    </div>```

JAVASCRIPT

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

