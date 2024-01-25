Basandote en la imagen asociada, crea componentes para cada uno de los marcos con exactamente el mismo nombre que tengan abajo a la izquierda. EJ: El marco amarillo describe el componente "Heading".

Todos los componentes deberán recibir información como `props` siguiendo la estructura del siguiente json. Donde la información que le pases a cada componente es la información de la propiedad con el mismo nombre en minúscula. 

```js

const data = {
    reviews: [
        {
            review: {
                avatar: "https://gaming-cdn.com/images/avatars/23110039-1706014521.jpg",
                rating:5,
                title: "Assassin's Creed Odyssey Deluxe",
                description:"Perfecto, una oferta increíble: Edición Deluxe 13,99 (con IVA). Comprado por Bizum y al instante he recibido el código de activación.",
                date: "hace 22 horas"
            }
        },{
            review: {
                avatar: "https://gaming-cdn.com/images/avatars/23110039-1706014521.jpg",
                rating:5,
                title: "Assassin's Creed Odyssey Deluxe",
                description:"Perfecto, una oferta increíble: Edición Deluxe 13,99 (con IVA). Comprado por Bizum y al instante he recibido el código de activación.",
                date: "Ayer"
            }
        },{
            review: {
                avatar: "https://gaming-cdn.com/images/avatars/23110039-1706014521.jpg",
                rating:5,
                title: "Assassin's Creed Odyssey Deluxe",
                description:"Maravilla de juego!.",
                date: "Ayer"
            }
        },{
            review: {
                avatar: "https://gaming-cdn.com/images/avatars/23110039-1706014521.jpg",
                rating:5,
                title: "Assetto Corsa Ultimate Edition",
                description:"Como siempre!",
                date: "Hace 2 dias"
            }
        },{
            review: {
                avatar: "https://gaming-cdn.com/images/avatars/23110039-1706014521.jpg",
                rating:5,
                title: "River city girls",
                description:"Excelente calidad.",
                date: "hace 3 dias"
            }
        },
    ]

}

```


PD: Si alguna imagen no funcionara, sustituirla por otra

