


let innderHtmlLinksAside = '';


renderAwesomeLinks()
function renderAwesomeLinks(){

    let linkGroup = document.createElement('div')
    linkGroup.innerHTML = innderHtmlLinksAside;
    linkGroup.classList.add('linkGroup')
    aside.appendChild(linkGroup);

    viewlinks.forEach(link =>{
        innderHtmlLinksAside +=
            `
        <a href="${link.href}" >${link.naam}</a>      
       `
    })

    linkGroup.innerHTML = 'View Links' + innderHtmlLinksAside;

}



