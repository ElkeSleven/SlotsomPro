

let linkContainer =  document.createElement('div');
linkContainer.classList.add(('linkContainer'))

main.appendChild(linkContainer)
let index = '';
window.onload = function (){
    //createSearchBar()
    makeLinkCard();

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
    `})
    linkContainer.innerHTML = index

}
