onload = function () {
    var el, r, c, k, j;
    el = document.getElementById("tab").appendChild(document.createElement("table"));
    for (k = 0; k != 9; k++) {
        r = el.insertRow(k);
        for (j = 0; j != 9; j++) {
            if (k == 0) {
                c = r.appendChild(document.createElement("th"));
                c.innerHTML = (j != 0) ? j + 1 : '&nbsp;';
            }
            else {
                if (j == 0) {
                    c = r.appendChild(document.createElement("th"));
                    c.innerHTML = k + 1;
                }
                else {
                    c = r.insertCell(j);
                    c.innerHTML = (j + 1) * (k + 1);
                }
            }
        }
    };

};