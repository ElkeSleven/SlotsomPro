


let index = '';
window.onload = function (){
    getIndex();
    renderLinks();
}
function getIndex(){
    myLinks.forEach(linkgroup => {
        linkgroup.awesomeLinks.forEach(link => {
            let group = 'Website Links'
            index += makeLinkCard(link , group)

        })
       linkgroup.awesomeYouTubeChannels.forEach(link => {
           let group = 'YT-Channels'
           index += makeLinkCard(link, group)
        })
        linkgroup.awesomeYouTubeVideos.forEach(link => {
            let group = 'YT-Videos'
            index += makeLinkCard(link, group)
        })
    })


}
function makeLinkCard(link, group){
     return `
    <div class="linkCard">
    <div class="linkCard--inner">
<div class="linkCard__oms">
<div>${link.vak}</div>
<div>${group}</div>
</div>
<div class="linkCard__link">
<a href="${link.url}" target="_blank"><div >${link.naam}</div>
<div>${link.omschrijving}</div>
</a></div>
</div> </div>     
    `


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