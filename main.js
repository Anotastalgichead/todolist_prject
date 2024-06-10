const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");
const btn = document.getElementById("btn");

//here here we are creating a normal empty array like just like  cost task = [];
//but here there is a catch we are creating the empty array only is the conditon is false that if our task variable is empty 
//i.e here we are using ternary operator which is  used to perform  certain operations if the condition is true or false 
//here if:     "const task"  holds "localstorage.getitem("task") it will show the task object or array otherwise he will create a empty array 
//here we are using "json.parse(localstorage.getitems("task")" where json.parse is used to convert string into a object
const task= localStorage.getItem("task")? JSON.parse(localStorage.getItem("task")) : [];

//this will excute the showalltask function
showalltask();



function showalltask(){
  //here using foreach will iterate the whole task and will create all the below elements
  task.forEach((value,index)=>{
    const div = document.createElement("div");
    div.setAttribute("class","task");
 
    const innerdiv = document.createElement("div");
    div.append(innerdiv);

    const para = document.createElement("p");
    para.innerText= value.title;
    innerdiv.append(para);

    const span = document.createElement("span")
    span.innerText= value.description;
    innerdiv.append(span);


  const btn=document.createElement("button");
  btn.innerText = "-";

  //as soon as the button is clicked the removetask() function is called whose role is to remove the "task" class from the body
  btn.addEventListener("click",()=>{
    removetask();
  //splice will go the particular index and will delete it thats why it is written "task.splice(index,1)"
    task.splice(index,1);
  //once the particular occurance of the task class is deleted or we can say once the particular index is removed from the array if will store or we can say update the 
  //data in the local storage 
    localStorage.setItem("task",JSON.stringify(task));
  //and will show the array
    showalltask();
  });


  div.append(btn)
  container.append(div)
  });
}

//this will remove the particular task class
function removetask(){
  task.forEach((value,index)=>{
   const div = document.querySelector(".task");
   div.remove();
  });


}

//this one one of the main content as here the data is getting pushed into the array
form.addEventListener("submit",(e)=>{
 e.preventDefault();
 removetask();
 task.push({
    title : title.value,
    description : description.value,
 });
localStorage.setItem("task",JSON.stringify(task));
showalltask();
});





