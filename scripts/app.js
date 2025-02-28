
let element = document.querySelector("#numberInput");
element.addEventListener("input", function() 
{
    if (element.value <= -10 || element.value >= 10)
    {
        alert("The number should be between -10 and 10");
    }
});

const fruit = {
    Name: "Grapes",
    Color: "Green",
    Taste: "Sweet"
};

let fruitName = document.querySelector("#fruitName");
let fruitColor = document.querySelector("#fruitColor");
let fruitTaste = document.querySelector("#fruitTaste");

fruitName.innerHTML = `Name: ${fruit.Name}`;
fruitColor.innerHTML = `Color: ${fruit.Color}`;
fruitTaste.innerHTML = `Taste: ${fruit.Taste}`;
