


let innderHtmlChannels = '';
let innderHtmlLinks = '';
let aside = document.createElement('aside')
main.appendChild(aside);

renderAwesomeLinks()
function renderAwesomeLinks(){

    let linkGroup = document.createElement('div')
    linkGroup.innerHTML = innderHtmlLinks;
    linkGroup.classList.add('linkGroup')
    aside.appendChild(linkGroup);

    awesomeLinks.forEach(link =>{
        innderHtmlLinks +=
            `
        <a href="${link.url}" target="_blank">${link.naam}</a>      
       `


    })

    linkGroup.innerHTML = 'Awesome Links' + innderHtmlLinks;

}


renderYouTubeChannels();
function renderYouTubeChannels(){
    awesomeYouTubeChannels.forEach(channel => {
        innderHtmlChannels +=
            `
        <a href="${channel.url}" target="_blank">${channel.naam}</a>      
       `
    })
   let channelGroup = document.createElement('div')
    channelGroup.innerHTML = 'Awesome YT-Channels' + innderHtmlChannels;
    channelGroup.classList.add('linkGroup')
    aside.appendChild(channelGroup);
}
