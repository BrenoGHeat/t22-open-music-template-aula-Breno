function criarCardAlbum(album){

    const li = document.createElement('li');
    const img = document.createElement('img');
    const h3 = document.createElement ('h3');
    const divParagraphs = document.createElement('div');
    const paragraphAlbum = document.createElement('p');
    const paragraphStyle = document.createElement('p');
    const divButton = document.createElement('div');
    const paragraphPrice = document.createElement ('p');
    const button = document.createElement('button');
  

    h3.innerHTML = album.title;
    paragraphAlbum.innerHTML = album.band;
    paragraphStyle.innerHTML = album.genre;
    paragraphPrice.innerHTML = `R$${album.price}`;
    button.innerText = "Comprar";
    img.src = album.img;
    img.alt = `Capa ${album.title}`;
    

    li.classList.add('list-album-style');
    img.classList.add('img-style');
    h3.classList.add('title-style-album');
    divParagraphs.classList.add('paragraphs-album');
    paragraphAlbum.classList.add('paragraph-style-album');
    divButton.classList.add('button-price');
    paragraphPrice.classList.add('price-album');
    button.classList.add('button-comprar');
  
  
    divParagraphs.appendChild(paragraphAlbum);
    divParagraphs.appendChild(paragraphStyle);
    divButton.appendChild(paragraphPrice);
    divButton.appendChild(button);
    li.appendChild(img);
    li.appendChild(h3);
    li.appendChild(divParagraphs);
    li.appendChild(divButton);
  
  return li;
  
};

    export function renderCard (array){
        const ul = document.querySelector(".albuns-style");
            for(let i = 0 ; i < array.length ; i++){
                    
                   const li = criarCardAlbum(array[i])
                   ul.appendChild(li);
            }

    };

  