


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

    viewlinks.forEach(link =>{
        innderHtmlLinks +=
            `
        <a href="${link.href}" target="_blank">${link.naam}</a>      
       `
    })

    linkGroup.innerHTML = 'View Links' + innderHtmlLinks;

}



