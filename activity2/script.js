const image = document.getElementById("image")
const searchbox = document.getElementById("searchbox")
const button = document.getElementById("button")


button.addEventListener("click", (event) => {
    event.preventDefault();

    const url = searchbox.value;

    if (isValidurl(url)){
        image.src = url;
    }else{
        alert("please enter a valid url")
    }
});

function isValidurl(string) {
    try {
        new URL (string);
        return true;
    }catch (_) {
        return false;
    }
}