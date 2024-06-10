//here here we are creating a normal empty array like just like  cost task = [];
//but here there is a catch we are creating the empty array only is the conditon is false that if our task variable is empty 
//i.e here we are using ternary operator which is  used to perform  certain operations if the condition is true or false 
//here if:     "const task"  holds "localstorage.getitem("task") it will show the task object or array otherwise he will create a empty array 
//here we are using "json.parse(localstorage.getitems("task")" where json.parse is used to convert string into a object



const task= localStorage.getItem("task")? JSON.parse(localStorage.getItem("task")) : [];



//understand this ternary operator 
//like we have created  a variable to check greatest of 2 number 

const some = 10>5 ? True : False;

// 10>5 is the condition 
//which means if 10 is greater than 5 print true else false 
//so here the output would be True


//but if we write 
const some = 10<5 ? True : False;

//which means the condition is false as 10 is not smaller than 5
//so here False will get printed 


**Similary**
// here 
const task= localStorage.getItem("task")? JSON.parse(localStorage.getItem("task")) : [];


 //if localstorage.get hold "task" or we can say if the condition is true it will provide JSON.parse(localStorage.getItem("task")) 

 //other which is the 1st instance of the program where the condition is false it will create a empty array














