const Second = document.querySelector('#sec')
const Minute = document.querySelector('#min')
const Hour = document.querySelector('#hour')
const startBtn = document.querySelector('#start')
const pauseBtn = document.querySelector('#pause')
const resetBtn = document.querySelector('#reset')
let id
startBtn.addEventListener('click',start)
function start(){
    if(!isStart){
        id = setInterval(setTimer,1000)
        isStart = true
        isPause = true
        // startBtn.classList.toggle("stop")
        // startBtn.innerText="Stop"
    }
}
pauseBtn.addEventListener('click',()=>{
    if(isStart){
        if(!isResume){
            pauseBtn.innerText = "Resume"
            isResume = true
            clearInterval(id)
            i++
        }
        if(isResume && i==0){
            pauseBtn.innerText="Pause"
            isStart=false
            start()
            isResume=false
            }
            i=0
        }
    }
)
resetBtn.addEventListener('click',()=>{
    isStart = false
    clearInterval(id)
    isResume = false
    pauseBtn.innerText = "Pause"
    Second.innerText = "00"
    Minute.innerText = "00"
    Hour.innerText = "00"
    sec = 1
    min = 1
    hour = 1
})
let i = 1
let sec = 1
let min = 1
let hour = 1
let isStart = false
let isPause = false
let isResume = false
// let isStop = false
function setTimer(){
    if(sec === 60){
        sec = 0
        startMinutes()
    }
    Second.innerText = sec<10? '0'+sec : sec
    sec++
}
function startMinutes(){
    if(min === 60){
        min = 0
        startHours()
    }
    Minute.innerText = min<10? '0'+min : min
    min++
}
function startHours(){
    if(hour === 24){
        hour = 0
    }
    Hour.innerText = hour<10? '0'+hour : hour
    hour++
}