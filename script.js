let str = document.getElementById('show');
let result = 0;

let expr = "";

let x = Array.from(document.getElementsByClassName('btn'));
x.forEach(e => {
    e.addEventListener('click', (e) => {
        if (e.target.innerHTML == "AC") {
            expr = ""
            str.value = expr;
        }

        else if ((str.value == 0) && (e.target.innerHTML == "%" || e.target.innerHTML == "X" || e.target.innerHTML == "/")) {
        }

        else if (e.target.innerHTML == "DEL") {
            expr = expr.slice(0, expr.length - 1);
            str.value = expr;
        }
        else if (e.target.innerHTML == "=") {
            str.value = eval(expr);
            expr = str.value;
        }
        else {
            expr = expr + e.target.value;
            str.value = expr;
        }
    })
});