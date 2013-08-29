var users;
var tasks;
var usersArray=[];
var tasksArray=[];
$(document).ready(function()
{
    start();
});

///////////find the owner by his id
function findOwnerById (id){
    for (var user in users){
        var u=users[user];
        if (u.id==id)
           return u.name;
        break;
        }
    }
    return "";
   
}

///////////find the worker by his id
function findWorkerById (id){
    for (var user in users){
        var u=users[user];
        if (u.id==id)
           return u.name;
        break;
        }
    }
    return "";
}

//////////find the workers by the owner's id


////////////find status name
/*function findStatusById(id) {
    switch (id) {
        case 0: return "waiting"; break;
        case 1: return "started"; break;
        default: return "finished"; break;
    }
    return "";
}*/

/////////////create the table
function createTable(tasks) {
    var tasksTable="<tr><th>Task Name</th><th>Task Order</th><th>Task Owner</th><th>Assigned To</th><th>Task Status</th><th>Show Task</th><th>Edit Task</th><th>Delete Task</th></tr>";
    /*for(i=0;i<tasks.length;i++) {
        tasksTable+="<tr id="+tasks[i].id+">"
        tasksTable+="<td>"+tasks[i].name+"</td>";
        tasksTable+="<td>"+tasks[i].order+"</td>";
        tasksTable+="<td>"+findOwnerById(tasks[i].owner)+"</td>";
        tasksTable+="<td>"+findWorkerById(tasks[i].assigned_to)+"</td>";
        tasksTable+="<td>"+findStatusById(tasks[i].status)+"</td></tr>";
        //לבדוק מה הבעיה....
        ;tasksTable+="<td><button class="tableButton">Show Task</button></td>";
        tasksTable+="<td><button class="tableButton">Edit Task</button></td>";
        tasksTable+="<td><button class="tableButton">Delete Task</button></td></tr>";*/
    for(var object in tasks){
        var obj=tasks[object];
        tasksTable+="<tr id="+obj.id+">"
        tasksTable+="<td>"+obj.name+"</td>";
        tasksTable+="<td>"+obj.order+"</td>";
        tasksTable+="<td>"+findOwnerById(obj.owner)+"</td>";
        tasksTable+="<td>"+findWorkerById(obj.assigned_to)+"</td>";
        tasksTable+="<td>"+findStatusById(obj.status)+"</td></tr>";
       // tasksTable+='<td><Button class="tableButton">'+Show Task+"</Button></td>";
       // tasksTable+='<td><Button class="tableButton">'+Edit Task+"</Button></td>";
        //tasksTable+='<td><Button class="tableButton">'+Delete Task+"</Button></td>";
        }
        $("#tasksTable").html(tasksTable);
    }


//////////////get the basic data
function start() {
    $.ajax({ 
    type: "GET",
    url: "/tasks",
    dataType: 'json',
    success:function(res){
            tasks=res[0];
            users=res[1];
            createTable(tasks);
           }
           
           
        });
}

