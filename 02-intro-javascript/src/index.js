const apiKey = 'zjUzevoV3gEmCeFtCfk6NOIabqhB80vA';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion.then( res => res.json())
        .then(({data})=>
        {
            const {url} = data.images.original;
            const img = document.createElement('img');
        })
        .catch(console.warn);


