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
                <div class="fullscreen">
                    <button class="fullscreen-button">CHIUDI</button>
                    <img class="img" src="${picture.url}" alt="${picture.title}">
                </div>
            `;
        });

        const card = document.querySelectorAll(".card");
        const fullscreen = document.querySelectorAll(".fullscreen");
        const fullscreenButton = document.querySelectorAll(".fullscreen-button");

        card.forEach((card, index) => {
            card.addEventListener("click", () => {
                fullscreen[index].style.display = "block";
            });
        });

        // button.addEventListener("click", () => {
        //     fullscreen.style.display = "none";
        // });
    })

    .catch(error => {
        cardContainer.innerHTML = "Errore nella richiesta. Riprova più tardi.";
    });