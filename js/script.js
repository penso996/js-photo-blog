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
    })
    .catch(error => {
        cardContainer.innerHTML = "Errore nella richiesta. Riprova più tardi.";
    });


const card = document.querySelectorAll(".card");
const fullscreen = document.querySelectorAll(".fullscreen");
const button = document.querySelectorAll(".fullscreen-button");

card.addEventListener("click", () => {
    fullscreen.style.display = "block";
});

button.addEventListener("click", () => {
    fullscreen.style.display = "none";
});