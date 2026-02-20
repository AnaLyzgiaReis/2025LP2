let div = document.getElementById("contagem");

function contador() {

    for (let i = 0; i <= 100; i++) {

        let p = document.createElement("p");
        
        p.textContent = i;
        p.style.backgroundColor = "lightblue";
        div.appendChild(p)

    }
}

contador()