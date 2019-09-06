const URL_TO_FETCH = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';
fetch(URL_TO_FETCH)
  .then(function(response){
    response.json().then(function(data){

        data.forEach(element => {
            const card = document.createElement("div");
        card.setAttribute("class","card");
        
        const titulo1 = document.createElement("div");
        titulo1.setAttribute("class","titulo1");
        var texto_titulo1 = document.createTextNode(element.property_type);
        titulo1.appendChild(texto_titulo1);

        const titulo2= document.createElement("div");
        titulo2.setAttribute("class","titulo2");
        var texto_titulo2 = document.createTextNode(element.name);
        titulo2.appendChild(texto_titulo2);

        const preco= document.createElement("div");
        preco.setAttribute("class","price");
        var texto_preco = document.createTextNode(element.price);
        preco.appendChild(texto_preco);

        const imagem= document.createElement("img");
        imagem.setAttribute("src",element.photo);
        imagem.setAttribute("class","imagem")

        card.appendChild(imagem);
        card.appendChild(titulo1);
        card.appendChild(titulo2);
        card.appendChild(preco);
        console.log(card);
        document.getElementById("lista").appendChild(card);
            
        });

        

      
    });
  })
  .catch(function(err){
    console.error('Failed retrieving information', err);
  });