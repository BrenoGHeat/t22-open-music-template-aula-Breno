

export async function apiMusicas (){

        const url = "https://openmusic-fake-api.onrender.com/api/musics";
        let array = []; 

       await fetch(url , {method:"GET"} )
        .then(response => {
            if ( !response.ok) {
                throw new Error("Erro ao carregar os dados da API.");
            }
            return response.json();
        })
            .then(data => {
               array = data ;
            })
            .catch(error =>{
                console.error('Houve um problema ao carregar os dados:', error);
            });
            console.log(array);
            return array;

};