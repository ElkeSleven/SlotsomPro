


let index = '';
window.onload = function (){
    getIndex();
    renderLinks();
}
function getIndex(){
    myLinks.forEach(linkgroup => {
        linkgroup.awesomeLinks.forEach(link => {
            let group = 'awesomeLinks'
            index += makeLinkCard(link , group)

        })
       linkgroup.awesomeYouTubeChannels.forEach(link => {
           let group = 'awesomeYouTubeChannels'
           index += makeLinkCard(link, group)
        })
        linkgroup.awesomeYouTubeVideos.forEach(link => {
            let group = 'awesomeYouTubeVideos'
            index += makeLinkCard(link, group)
        })
    })


}
function makeLinkCard(link, group){
     return `
    <div class="linkCard">
    <div class="linkCard--inner">
<div class="linkCard__oms">
<div>${group}</div>
<div>${link.vak}</div>
</div>
<div class="linkCard__vb">
<a href="${link.url}">${link.naam}</a><br>
<a href="${link.url}">${link.omschrijving}</a>
</div>
</div> </div>     
    `


}
function renderLinks(){
   let containerI =  document.createElement('div')
    containerI.classList.add(('linkCointainer'))
    containerI.innerHTML = index
    main.appendChild(containerI)
}