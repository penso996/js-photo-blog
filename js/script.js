const card = document.querySelector(".card");

axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => {
        const pictures = response.data;

        for (let i = 0; i < pictures.length; i++) {
            let picture = pictures[i];
            console.log(picture);
        }

    })