


codeSnippers.forEach(x => {
    console.log(x.title)
    let snippers = x.snippers
    console.log(snippers.length)

    let card = document.createElement('div')
    let title = document.createElement('h5')
    title.innerHTML = `${x.title}`
    card.appendChild(title)
    let snipperContainer = document.createElement('div')
    card.appendChild(snipperContainer)
    snippers.forEach(snip => {
        console.log(snip.snipper)
        let snipper = document.createElement('div')
        snipper.classList.add('card_snipper')
        snipper.innerHTML = `${snip.snipper}`
        snipperContainer.appendChild(snipper)

    })

    document.body.appendChild(card)







})