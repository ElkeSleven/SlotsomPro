



let innerHtmlChannels = `<h3>Awesome YT-Channels</h3>`;
let innerHtmlAwesomeLinks =''
renderYouTubeChannels();
function renderYouTubeChannels(){
    awesomeYouTubeChannels.forEach(channel => {
        innerHtmlChannels +=
            `
        <a class="aweLink aweYT" href="${channel.url}" target="_blank">${channel.naam}</a>      
       `
    })
    let channelGroup = document.createElement('div')
    channelGroup.innerHTML =  innerHtmlChannels;
    channelGroup.classList.add('aweLink-box')
    channelGroup.classList.add('aweYT')
    main.appendChild(channelGroup);
}
renderAwesomeLinks();
function renderAwesomeLinks(){
    awesomeLinks.forEach(l => {
        innerHtmlAwesomeLinks +=
            `
<p>${l.naam}</p>
<p>${l.omschrijving}</p>
<p>${l.reference}</p>
        <a class="aweLink aweL" href="${l.url}" target="_blank">${l.naam}</a>      
       `
    })
    let channelGroup = document.createElement('div')
    channelGroup.innerHTML =  innerHtmlAwesomeLinks;
    channelGroup.classList.add('aweLink-box')
    channelGroup.classList.add('aweL')
    main.appendChild(channelGroup);
}

