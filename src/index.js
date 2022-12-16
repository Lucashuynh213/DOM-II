import './less/index.less'

// Your code goes here!


// 1 - Load.
window.onload = function (evt) {
    console.log(`event ${evt.type} fired! Ready to gooooo!}`)
    const heading = document.querySelector('h1');
    heading.textContent = "READY TO GO!!!!"

// 2- copy    
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
        .then(text => {
            console.log(text);
        })
    })
// 3 - click
    document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('mirror');
    })

// dlbclick
    document.body.addEventListener('dblclick', evt => {
        evt.target.innerHTML = ''
    })
// keydown
    window.addEventListener('keydown', evt => {
        if (evt.key == 6){
            document.body.innerHTML = '<H1>OOOPSSS!!!! WRONG NUMBER!!!!<h1>'
        }
    })

// mousemove
    // document.body.addEventListener('mousemove', evt => {
    //     const { clientX, clientY} = evt
        // console.log(`mouse is at ${clientX} and ${clientY}`)
    // })

// wheel
//     window.addEventListener('wheel', evt => {
//          console.log(evt);
//     })

//mouseenter and mouseleave
const destinations = document.querySelectorAll('.destination');
    console.log(destinations)
    for (let destination of destinations){
        destination.addEventListener('mouseenter', evt => {
        destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', () => {
            destination.style.fontWeight = 'initial'
        })
    }

//drag and drop

    document.body.addEventListener('drag', evt);
        console.log(evt);
}