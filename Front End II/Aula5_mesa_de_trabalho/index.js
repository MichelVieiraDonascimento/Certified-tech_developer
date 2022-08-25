

let cards = document.getElementsByClassName('imgs')
// console.log(cards);



function insert(n){
    if(n !== -1){
    let url = prompt ('coloque a URL da imagem')
    cards[n].removeAttribute("src")
    cards[n].setAttribute ('src', url)

}else {
    alert('algo deu errado')
}

    console.log(n);

}


