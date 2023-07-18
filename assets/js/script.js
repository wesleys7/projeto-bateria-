document.addEventListener('keydown',(event)=>{
    if(event.keyCode === 32 && document.activeElement !== boxText) {
        event.preventDefault()
    }
})

let boxText = document.querySelector('#input')

let areaLoading = document.querySelector('.background--loading')
let areaDisplay = document.querySelector('.area')

setTimeout(transitionOut, 6000)

setTimeout (()=>{
    document.querySelector('.background--loading').style.display = 'none'
    areaDisplay.style.display = 'block'
    
}, 7000)

function transitionOut() {
    areaLoading.classList.add("hidden")
    areaDisplay.classList.remove("hidden")
}


document.body.addEventListener('keyup', (event)=>{
   playSound(event.code.toLowerCase())
   showObject(event.code.toLowerCase())
}) 

document.querySelector('.play--button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value
    
    
    if(song !== '') {
        let songArray = song.split('')
        
        songArray = songArray.map((character)=>{
            if (character === ' ') {
                return 'space'
            } else {
                return character
            }
        })
        
        playComposition(songArray)
    }
})

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if(audioElement) {
        audioElement.currentTime = 0
        audioElement.play()
    }
    

    if(keyElement) {    
        keyElement.classList.add('active')
        setTimeout(()=>{
            keyElement.classList.remove('active')
        },200)
    }
}
function showObject(img) {
    let imgElement = document.querySelector(`#i_${img}`)
    if(imgElement) {
        imgElement.style.display = 'block'
        setTimeout(()=>{
            imgElement.style.display = 'none'
        },200)
    }
}

function playComposition(songArray) {
    let wait = 0

    for(let songItem of songArray) {
        setTimeout(()=>{
            if(songItem === 'space'){
                playSound(`${songItem}`)
                showObject(`${songItem}`)
            }else {
            playSound(`key${songItem}`)
            showObject(`key${songItem}`)
            }
        }, wait)  

        wait += 250     
    }
}

document.querySelector('.click--space').addEventListener('click', ()=>{
    playSound('space')
    showObject('space')
})
document.querySelector('.click--d').addEventListener('click', ()=>{
    playSound('keyd')
    showObject('keyd')
})
document.querySelector('.click--f').addEventListener('click', ()=>{
    playSound('keyf')
    showObject('keyf')
})
document.querySelector('.click--j').addEventListener('click', ()=>{
    playSound('keyj')
    showObject('keyj')
})
document.querySelector('.click--k').addEventListener('click', ()=>{
    playSound('keyk')
    showObject('keyk')
})
document.querySelector('.click--e').addEventListener('click', ()=>{
    playSound('keye')
    showObject('keye')
})
document.querySelector('.click--r').addEventListener('click', ()=>{
    playSound('keyr')
    showObject('keyr')
})
document.querySelector('.click--u').addEventListener('click', ()=>{
    playSound('keyu')
    showObject('keyu')
})





