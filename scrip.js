//----------------- varibale -----------------//

let body = document.querySelector('body');

let element  = document.getElementById('theDiv');

let dragVal ;

//--------------------- event listener ---------------------//

function move(id)
{
    element.style.position = 'absolute';
    element.addEventListener('mousedown',mouceDown);
    document.addEventListener('mousemove',mouceMove);
    document.addEventListener('mouseup',mouceUp);

}


//---------------------function ---------------------//
function mouceDown()
{
   dragVal = element ;
}
function mouceUp()
{
    dragVal = null;
}
function mouceMove(event)
{
    let x = event.pageX ;
    let y = event.pageY;
    dragVal.style.left = x + 'px';
    dragVal.style.top = y + 'px';
}
