
// Add vanilla event to sidebar
document.getElementById('navbarToggler').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('opened');
})

document.getElementById('overlay').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('opened');
})