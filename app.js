loadEvents();
function loadEvents()
{
    document.querySelectorAll('.drum').forEach(function(d)
    {
        d.addEventListener('click',function()
        {
            const letter=d.innerHTML;
            addAudio(letter);
            findbutton(letter);
        })
    })
    document.addEventListener('keydown',function(e)
    {
      let k=e.key;
      k=k.toUpperCase();
      addAudio(k);
      findbutton(e.key);
    })
        
}
function addAudio(letter)
{
    switch(letter)
    {
        case 'W':
            const w=new Audio("sounds/tom-1.mp3");
            w.play();
            break;
        case 'A':
            const a=new Audio("sounds/tom-2.mp3");
            a.play();
            break;
        case 'S':
            const s=new Audio("sounds/tom-3.mp3");
             s.play();
             break;
        case 'D':
            const d=new Audio("sounds/tom-4.mp3");
            d.play();
            break;
        case 'J':
            const j=new Audio("sounds/crash.mp3");
            j.play();
            break;
        case 'K':
            const k=new Audio("sounds/kick-bass.mp3");
            k.play();
            break;
        case 'L':
            const l=new Audio("sounds/snare.mp3");
            l.play();
            break;    
        default:
            console.log("Wrong");
    }
}
function findbutton(d)
{
  d=d.toUpperCase();
  
  document.querySelectorAll('.drum').forEach(function(i)
  { 
      
      if(i.innerHTML===d)
      {
        
        animations(i);
      }
  })
} 
  function animations(d)
  {
  d.classList.add("transistions");
  setTimeout(function()
  {
      d.classList.remove("transistions");
  },1000);
 }
