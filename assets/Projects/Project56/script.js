//button 1
const button1 = document.querySelector(".button1");
button1.addEventListener("click", () => {
    button1.classList.add("active");
    setTimeout(() => {
        button1.classList.remove("active");
        button1.querySelector("i").classList.replace("bx-cloud-download", "bx-check-circle")
        button1.querySelector("span").innerText = "Completed";
    }, 6000);
});

//button 2
const button2 = document.querySelector(".button2"),
    text = document.querySelector(".text");

button2.addEventListener("click", () => {
    button2.classList.add("progress");
    text.innerText = "Uploading...";

    setTimeout(() => {
        button2.classList.remove("progress"); //remove progress after 6s
        text.innerText = "Uploaded";
    }, 6000); //1000ms = 1s (6000 = 6s)

});