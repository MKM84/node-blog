


document.addEventListener("DOMContentLoaded",function(){
    let articleComplete = document.getElementsByClassName('contenu');
    let articleTable = [];
        articleTable = [...articleComplete] ;

        newContentTable = articleTable.map(parag => {
            let content = parag.innerText;
                newContent = content.substr(0, 150);
                return newContent;
        });

        for (let i = 0; i < articleComplete.length; i++){
            articleComplete[i].innerHTML = newContentTable[i] +'... ';
        }

});

