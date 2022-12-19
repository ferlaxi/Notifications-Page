let leido = document.querySelector('.leido');

let markFondo = document.getElementById('Mark');
let puntoMark = document.querySelector('.dot1');
let angelaFondo = document.getElementById('Angela');
let puntoAngela = document.querySelector('.dot2');
let jacobFondo = document.getElementById('Jacob');
let puntoJacob = document.querySelector('.dot3');

let noti = document.getElementById('num')

leido.addEventListener('click', () => {
    markFondo.style.backgroundColor = 'transparent';
    angelaFondo.style.backgroundColor = 'transparent';
    jacobFondo.style.background = 'transparent';
    puntoMark.style.display = 'none';
    puntoAngela.style.display = 'none';
    puntoJacob.style.display = 'none';
    noti.innerText = '0'
})

let link = document.querySelectorAll('.link');
const listalink = [...link];  

listalink.map(a => { 
    a.addEventListener('click', () => { 
        a.style.color = 'hsl(219, 12%, 42%)';
    }) 
});

