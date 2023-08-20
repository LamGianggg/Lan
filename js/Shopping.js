const vietnam = document.querySelector('.Vietnamese');
const china = document.querySelector('.Chinese');
const japan = document.querySelector('.Japanese');
const shopping = document.getElementById('shopping');
const down = document.querySelector('.fa-chevron-down');

shopping.addEventListener('mouseover', ()=>{
    down.style.transform = 'RotateX(180deg)';
})

shopping.addEventListener('mouseout', ()=>{
    down.style.transform = 'none';
})

vietnam.addEventListener('mouseout', ()=>{
    down.style.transform = 'none';
})

vietnam.addEventListener('mouseover', ()=>{
    down.style.transform = 'RotateX(180deg)';
})

japan.addEventListener('mouseout', ()=>{
    down.style.transform = 'none';
})

japan.addEventListener('mouseover', ()=>{
    down.style.transform = 'RotateX(180deg)';
})

china.addEventListener('mouseout', ()=>{
    down.style.transform = 'none';
})

china.addEventListener('mouseover', ()=>{
    down.style.transform = 'RotateX(180deg)';
})