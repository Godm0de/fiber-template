// Add event to sidebar
document.getElementById('navbarToggler').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('opened');
})

document.getElementById('overlay').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('opened');
})

// Add ripple effect
document.querySelectorAll('.ripple').forEach( element => {
    element.addEventListener('click', (event) => {
        let x = event.clientX - event.target.offsetLeft;
        let y = event.clientY - event.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        ripples.classList += 'ripple__element';
        console.log(ripples);
        element.appendChild(ripples);

        
        setTimeout(()=>{
            ripples.remove();
        }, 1000);
    })
})
