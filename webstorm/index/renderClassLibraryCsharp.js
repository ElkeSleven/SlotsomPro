



let classLibraryIndex = '';
let main = document.createElement('main')
document.body.appendChild(main);

renderClassLibrary();
function renderClassLibrary(){

    let classLibrary = document.createElement('div')
    classLibrary.innerHTML = classLibraryIndex;
    classLibrary.classList.add('classLibraryGroup')
    main.appendChild(classLibrary);

    lijstclassLibrary.forEach(namespace =>{
        classLibraryIndex +=
            `
        <p>${namespace.namespaces}</p>     
        <p>${namespace.beschrijving}</p>     
    
       `


    })

    classLibrary.innerHTML =  classLibraryIndex;

}
