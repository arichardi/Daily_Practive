const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

//control how many steps are active
let currentActive = 1


//add the event listener in the buttons
next.addEventListener('click', () => {
    currentActive ++

    if(currentActive > circles.length){
        currentActive = circles.length
    }

    update();
})

prev.addEventListener('click', () => {
    currentActive --

    if(currentActive < 1){
        currentActive = 1
    }

    update();

})

//function execute each click
function update(){
    //use the index to know how button we are, and add or remove the class active
    circles.forEach((circle, index) => {
        if(index < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    //update the line
    const actives = document.querySelectorAll('.active')
    console.log(((actives.length - 1) / 4  ) * 100)
    progress.style.width = (((actives.length - 1) / 3  ) * 100) + '%'

    //enable or disable the buttons
    if(currentActive === 1){
        prev.disabled = true
    }else {
        prev.disabled = false
    }

    if(currentActive === circles.length){
        next.disabled = true
    }else {
        next.disabled = false
    }

}
