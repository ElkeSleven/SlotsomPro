




//renderYouTubeChannels();
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
    main.appendChild(channelGroup);
}