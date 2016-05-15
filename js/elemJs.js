var ball = [];
var figure = ['rectangle', 'triangle', 'triangle-2'];

function randomInteger(min, max) {
    var rand = min + Math.random() * (max - min)
    rand = Math.round(rand);
    console.log(rand);
    return rand;
}

for(var i = 0; i < 30; i++){
    var el = document.createElement('div');
    el.className = "c-element c-element--" + figure[randomInteger(0,2)];
    el.id = 'element-'+i;
    el.style.left = randomInteger(0, 100) + "%";
    el.style.top = randomInteger(0, 100) + "%";
    container.appendChild(el);
    console.log(el);
    ball.push({
        coordX : randomInteger(0, 100),
        coordY : randomInteger(0, 100),
        transform : randomInteger(20, 20) + "," + randomInteger(0, 20),
        element: document.getElementById('element-' + i),
    });
}

body.onmouseover = function(e) { // 1. отследить наведение

    function moveAt(e, ball) {
        for(var j = 0; j < ball.length; j++){
            ball[j].element.style.left = ball[j].coordX + "%";
            ball[j].element.style.top =  ball[j].coordY + "%" ;

            ball[j].element.style.transform = "matrix(1, 0, 0, 1, " + (e.pageX - body.offsetWidth/2)+ ", "+ (e.pageY - body.offsetHeight/2) +")";
        }
    }

    // 3, перемещать по экрану
    document.onmousemove = function(e) {
        moveAt(e, ball);
    }

    // 4. отследить окончание переноса
    // ball.onmouseup = function() {
    //     document.onmousemove = null;
    //     ball.onmouseup = null;
    // }
};