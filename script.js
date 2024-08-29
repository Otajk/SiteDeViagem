function search(){
    let input = document.getElementById('caixadetexto').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('elements');
    let y = document.querySelectorAll(".pais")
    let z = document.getElementsByClassName('conteudoPais')
    let p = document.getElementsByClassName('imagem')
    let g = document.querySelector(".paises")

    for(let i = 0; i < x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            y[i].style.display = "none";
            

            
        }
                else{
                y[i].style.display = "flex";
                g.style.justifyContent = "flex-start";
                z[i].style.display = "flex";
        }
    }
}