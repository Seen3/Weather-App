
function getMouseCoords(e) {
    var e = e || window.event;
    try{
    document.getElementById('container').innerHTML = e.clientX + ', ' +
      e.clientY + '<br>' + e.screenX + ', ' + e.screenY;
    }catch{};
  }
  var followCursor = (function() {

    var s = document.createElement('div');
    s.id='pointer';
    s.style.position = 'absolute';
    s.style.margin = '0';
    s.style.padding = '5px';
    s.style.fontSize="10em";
    s.style.transition="all 15s";
    s.style.zIndex=999;
    s.style.color='yellow';
    s.innerText="☀";
    return {
      init: function(t) {
        s.innerText=t;
        document.body.appendChild(s);
      },
      
      run: function(e) {
        var e = e || window.event;
        s.style.left = (e.clientX - 5) + 'px';
        s.style.top = (e.clientY - 5) + 'px';
        getMouseCoords(e);
      }
    };
  }());
  
  
  export default followCursor;