const apiKey = 'zjUzevoV3gEmCeFtCfk6NOIabqhB80vA';
//Viene por defecto en los navegadores
const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion.then( res => res.json())
        .then(({data})=>
        {
            const {url} = data.images.original;
            // Retorn un htmlImageElement
            const img = document.createElement('img');
            img.src = url;

            document.body.append( img );

        })
        .catch(console.warn);


