let inputBox = document.querySelector("input")
let content = inputBox.value;

document.querySelector("#AC").addEventListener("click", clear);

function clear()
{
  inputBox.value = "";
  content = inputBox.value;
}

function display(value)
{
  if (!Number.parseInt(value))
  {
    content += value;
    inputBox.value = "";
  }
  else
  {
    content += value;
    inputBox.value += value
  }
}

document.querySelector("#calculate").addEventListener("click", () => {
  try
  {
    let output = eval(content);
    inputBox.value = output;  
  }
  catch(err)
  {
    console.log("check input");
    clear();
  }
});