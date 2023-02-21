const addTask = document.querySelector('#add-task');
const taskText = document.querySelector('#task-text');
const tasksDiv = document.querySelector('#tasks'); 

addTask.onclick = function(){
    if(taskText.value.length == 0){
        alert("Please enter a task...")
    }
    else{
        tasksDiv.innerHTML += `
        <div class="taskDiv container">
            <div class="row mt-2 ml-0 p-2 align-items-center rounded-lg font-weight-bold" style="background-color:white;">
                <div class="col-10 m-0 p-0 align-items-center">
                <button class="taskDone rounded-lg border-0" onclick="taskDone()"><i class="fa fa-check" aria-hidden="true"></i>
                </button><span class="task text-info p-2" style="font-size:20px;">${taskText.value}</span>
                </div>
                <div class="col-2 justify-content-between m-0 p-0">
                    <button class="delete float-right bg-success rounded-lg border-0"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></button>               
                    <!--<button class="edit ml-2 mr-2 float-right bg-success rounded-lg border-0"><i class="fa fa-pencil fa-2x" aria-hidden="true"></i></button> -->               
                </div>
            </div>                
        </div>
        `;
        taskText.value = null;
        var deleteTasks = document.querySelectorAll(".delete");
        for(var i=0; i<deleteTasks.length; i++){
            deleteTasks[i].onclick = function(){
            this.parentNode.parentNode.remove();
        }
        }

        var doneTasks = document.querySelectorAll(".taskDone");
        for(var j=0; j<doneTasks.length; j++){
            doneTasks[j].onclick = function() {
                this.parentNode.parentNode.style.backgroundColor = "pink";
            }
        }
           
        }
    }


function darkMode() {
    document.body.style.backgroundColor = "#000000";
}
function lightMode() {
    document.body.style.backgroundColor = "white";
}
    

