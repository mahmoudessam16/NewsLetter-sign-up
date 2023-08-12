let app = document.querySelector(".sign-up-app")
let mainForm = document.querySelector(".main-input");
let input = document.querySelector('.main-input input');
let info = document.querySelector('.info');
let image = document.querySelector('.image');

mainForm.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(e.target.value)
    info.style.display = 'none';
    image.style.display = 'none';
    let success = document.createElement('div');
    success.className = "success";
    let successImg = document.createElement("img");
    successImg.src = "./assets/images/icon-success.svg";
    let h1 = document.createElement("h1");
    let h1Text = document.createTextNode("Thanks for subscribing!");
    h1.appendChild(h1Text);
    let paragra = document.createElement("p");
    paragra.innerHTML = `
    A confirmation email has been sent to <span class="value">${input.value}</span>. 
    Please open it and click the button inside to confirm your subscription.
    `;
    let button = document.createElement("button");
    button.textContent = "Dismiss message";
    success.append(successImg, h1, paragra, button);
    app.append(success);
    button.addEventListener("click", function () { 
        success.style.display = 'none';
        info.style.display = 'block';
        image.style.display = 'block';
    })
});

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.querySelector(".image img").src = "./assets/images/illustration-sign-up-mobile.svg"
    } else {
        document.querySelector(".image img").src = "./assets/images/illustration-sign-up-desktop.svg"
    }
}

var x = window.matchMedia("(max-width: 1000px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes