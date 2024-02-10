let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");

let img = document.querySelector("#result");

btn.addEventListener("click", async () => {
    let imageURL = await getImage();
    img.setAttribute("src", imageURL);
})

async function getImage() {
    try {
        let image = await axios.get(url);
        return image.data.message;
    }
    catch (err) {
        console.log("ERROR CAUGHT : ", err);
        return "/";
    }
}   