



let classLibraryIndex = '';


renderClassLibrary();
function renderClassLibrary(){

    let classLibrary = document.createElement('div')
    classLibrary.innerHTML = classLibraryIndex;
    classLibrary.classList.add('classLibraryGroup')
    main.appendChild(classLibrary);

    lijstclassLibrary.forEach(namespace =>{
        classLibraryIndex +=
            `
<div class="namespace">
        <p>${namespace.namespaces}</p>     
        <p>${namespace.beschrijving}</p>  
</div>
       
       `
    })
    classLibrary.innerHTML =  classLibraryIndex;
}


