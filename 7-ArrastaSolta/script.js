// document.querySelector('.neutralArea').addEventListener('click',(e) =>{
//   console.log('Target', e.target);
//   console.log('CURRENT TARGET', e.currentTarget);
//   // e.target.style.border = '1px solid #FF0000'
// })

document.querySelectorAll('.item').forEach(item =>{
  item.addEventListener('dragstart',dragStart);
  item.addEventListener('dragend',dragEnd);
})

document.querySelectorAll('.area').forEach(area =>{
  area.addEventListener('dragover', dragOver);
  area.addEventListener('dragleave', dragLeave);
  area.addEventListener('drop',drop);
})

// Function item

function dragStart(e){
  e.currentTarget.classList.add('dragging');
}

function dragEnd(e){
  e.currentTarget.classList.remove('dragging')
}

//Functions Area

function dragOver(e){
  e.preventDefault();
  console.log('Passou por cima!');
}
function dragLeave(e){
  // console.log('Saiu de área dropavel!');
}
function drop(e){
  console.log('Soltou!')

}
