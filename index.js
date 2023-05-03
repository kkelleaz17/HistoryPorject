
document.getElementById('HAM').addEventListener('click',(e)=>{
  const NAVBAR = document.getElementById('LINKS');
  
  NAVBAR.className = (NAVBAR.className !== 'CLOSE')? 'CLOSE' : 'OPEN'


//   if(NAVBAR.className === 'CLOSE'){
//     NAVBAR.className = 'OPEN'
//     return;
//   }else if(NAVBAR.className === 'OPEN'){
//     NAVBAR.className = 'CLOSE'
//     return;
//   }
})