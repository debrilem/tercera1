console.log("Cargando Cards");

const dataCards = [
    {
        "tittle": "Campañas de vacunación",
        "url_image": "./img/vacunacioncr.jpeg",
        "desc": "Conozca las próximas campañas nacionales de vacunación y sus beneficios para la comunidad.",
        "cta": "Más información",
        "link": "./vacunacion.php"
    },
    {
        "tittle": "Bienestar y hábitos saludables",
        "url_image": "./img/bienestarcr.jpg",
        "desc": "Consejos para mantener un estilo de vida equilibrado y prevenir enfermedades",
        "cta": "Más información",
        "link": "./bienestar.php"
    },
    {
        "tittle": "Salud Pública",
        "url_image": "./img/saludcr.webp",
        "desc": "Programas y proyectos del Ministerio de Salud que fortalecen la integridad de la población.",
        "cta": "Más información",
        "link": "./salud_publica.php"
    },
    {
        "tittle": "Noticias sector salud",
        "url_image": "./img/noticiascr.jpg",
        "desc": "Manténgase informado sobre los avances en salud, investigaciones recientes y comunicados del Ministerio de Salud.",
        "cta": "Más información",
        "link": "./noticias.php"
    },
    {
        "tittle": "Vacunación en Costa Rica",
        "url_image": "./img/vacunacion_cr.jpg",
        "desc": "Conozca la importancia de la vacunación, los esquemas nacionales y su impacto en la salud pública.",
        "cta": "Más información",
        "link": "./vacunacion.php"
    },
    {
        "tittle": "Directorio",
        "url_image": "./img/directorio.png",
        "desc": "Encuentre información de contacto de diferentes centros de salud.",
        "cta": "Más información",
        "link": "./noticias.php"
    }
];

(function () {
    let CARD = {
        init: function () {
            let _self = this;
            this.insertData(_self);
        },

        insertData: function (_self) {
            dataCards.map(function (item, index) {
                document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index))
            })
        },
        tplCardItem: function (item, index) {
            return (`<div class='card-item 'id=' card-number-${index}'>
                <img src='${item.url_image}'>
                <div class= 'card-info'>
                <p class= 'card-tittle'>${item.tittle}</p>
                <p class='card-desc'>${item.desc}</p>
                <a class='card-cta' target='blank' href='${item.link}'>${item.cta}</a>
                </div>
                </div>`)

        },
    }
    CARD.init();
})();