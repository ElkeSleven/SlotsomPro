


let index = '';
window.onload = function (){
    makeLinkCard();
    renderLinks();
}

function makeLinkCard(){
    awesomeLinks.forEach(link => {

        index += `
<div class="linkCard">
 <div class="linkCard--inner" >
 <a href="${link.url}">
    <div class="linkCard__link">
        <div>${link.naam}</div>
        <div>${link.language}</div>
    </div>
    <div class="linkCard__oms">
        <div>${link.omschrijving}</div>
        <div>${link.group}</div>
    </div>
 </a>
 </div>
</div>     
    `  })


}
function renderLinks(){
    let containerP =  document.createElement('div');
    containerP.classList.add(('linkContainer'))
    main.appendChild(containerP)
   let containerI =  document.createElement('div')
    containerI.classList.add(('linkBox'))
    containerI.innerHTML = index
    containerP.appendChild(containerI)
}