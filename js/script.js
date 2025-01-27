const cardContainer = document.querySelector(".card-container");

axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => {
        const pictures = response.data;

        pictures.forEach(picture => {
            cardContainer.innerHTML += `
                <div class="card">
                    <div class="pin"></div>
                    <img class="img" src="${picture.url}" alt="${picture.title}">
                    <div class="img-description">
                        <h3>${picture.date}</h3>
                        <h2>${picture.title.toUpperCase()}</h2>
                    </div>
                </div>
                
                <div class="fullscreen-off">
                    <div class="image-container">
                        <button class="fullscreen-button">CHIUDI</button>
                        <img class="fullscreen-img" src="${picture.url}" alt="${picture.title}">
                    </div>
                </div>
            `;
        });

        const card = document.querySelectorAll(".card");
        const fullscreen = document.querySelectorAll(".fullscreen-off");
        const fullscreenButton = document.querySelectorAll(".fullscreen-button");

        card.forEach((singleCard, index) => {
            singleCard.addEventListener("click", () => {
                fullscreen[index].classList.remove("fullscreen-off");
                fullscreen[index].classList.add("fullscreen-on");
            });
        });

        fullscreenButton.forEach((singleButton, index) => {
            singleButton.addEventListener("click", () => {
                fullscreen[index].classList.remove("fullscreen-on");
                fullscreen[index].classList.add("fullscreen-off");
            });
        });
    })

    .catch(error => {
        cardContainer.innerHTML = "Errore nella richiesta. Riprova più tardi.";
    });