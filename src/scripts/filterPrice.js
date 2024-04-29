export function filterPrice (renderCard , array){

    const span = document.querySelector(".span-title-price");
    const input = document.querySelector(".barra-price");

    span.innerHTML = `R$ ${input.value}`;


    input.addEventListener("input" , function (){
        console.log(input.value);



       const newArray = array.filter(function(album){
            return parseFloat(album.price) <= input.value; 
        });

         renderCard(newArray);

        span.innerHTML = `R$ ${input.value}`;

    });

} ;

