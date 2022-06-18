


let index = '';
window.onload = function (){
    getIndex()
    render();
}
function getIndex(){
    myLinks.forEach(linkgroup => {
        linkgroup.awesomeLinks.forEach(link => {
            index += makeLinkCard(link)
        })
        linkgroup.awesomeYouTubeChannels.forEach(link => {
            index += makeLinkCard(link)
        })
        linkgroup.awesomeYouTubeVideos.forEach(link => {
            index += makeLinkCard(link)
        })
    })


}
function makeLinkCard(link){
     return `
    <p>${link.naam}</p>
    <p>${link.reference}</p>
    <p>${link.omschrijving}</p>
    <p>${link.vak}</p>
    <p>${link.url}</p>
    `


}
function render(){
   let containerI =  document.createElement('div')
    containerI.innerHTML = index
    main.appendChild(containerI)
}