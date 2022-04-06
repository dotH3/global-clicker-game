const socket = io();
const serverStatus = document.getElementById('serverStatus');
const usersCount = document.getElementById('usersCount');
const pointScore = document.getElementById('points');
const addBtn = document.getElementById('btn')

socket.on('connect',()=>{
    serverStatus.innerText = "Online"
    serverStatus.classList.add('text-success');
    serverStatus.classList.remove('text-danger');
    
})
socket.on('disconnect',()=>{
    serverStatus.innerText = "Offline"
    serverStatus.classList.add('text-danger');
    serverStatus.classList.remove('text-success');
})
socket.on('usersCount',(el)=>{
    usersCount.innerText=el
});
socket.on('addPoint',(el)=>{
    pointScore.innerText="AAA"
})


window.onload=()=>{
    addBtn.addEventListener('click',()=>{
        socket.emit('addPoint')
    })
}