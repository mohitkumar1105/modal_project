const card = document.querySelector("#cards")
const sharebtn = document.getElementById("shareButton")
const removeModal = document.getElementById("removeModal")
const followbtn = document.getElementById("button")



function shareprofile(){
card.style.cssText ="display:block; opacity:1; scale:1",
document.getElementById('wrapper').style.cssText= "filter:blur(1px); background-color: rgba(0, 0, 0, 0.5); ";
}


const remove = () =>{
  card.style.cssText = "display:none"
  document.getElementById('wrapper').style.cssText= "filter:blur(0); background-color: black; ";
}


const following = () => {

  if(followbtn.innerHTML === "Follow"){
    followbtn.innerText = "Following"
    
    document.getElementById("notifi").classList.add("notification-active")
    notificationRing()

    setTimeout(()=>{
      document.getElementById("notifi").classList.remove("notification-active")
    },5000)
    
  }else if(followbtn.innerHTML === "Following"){
    followbtn.innerText = "Follow"
    document.getElementById("notifi").classList.remove("notification-active")
    
  }

}

const notificationRing = () =>{
  let audio = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/alien_shoot.wav');
  audio.play();

}

removeModal.addEventListener("click",remove)
sharebtn.addEventListener("click",shareprofile)

