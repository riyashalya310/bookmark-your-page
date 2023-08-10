// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let bookmarksList = document.getElementById("bookmarksList");
bookmarksList.classList.toggle("form");
let siteNameInput = document.getElementById("siteNameInput");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlInput = document.getElementById("siteUrlInput");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
let submitBtn = document.getElementById("submitBtn");
let bookmarkFormEl = document.getElementById("bookmarkForm");

function createItem(siteNameInput, siteUrlInput) {
    let liItem = document.createElement("li");
    bookmarksList.appendChild(liItem);

    let para = document.createElement("h1");
    para.textContent = siteNameInput.value;
    para.style.fontColor="15px";
    liItem.appendChild(para);

    let aEle = document.createElement("a");
    aEle.setAttribute("target", "_blank");
    aEle.textContent = siteUrlInput.value;
    aEle.setAttribute("href", siteUrlInput.value);
    liItem.appendChild(aEle);
}

siteNameInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsg.textContent = "Required*";
    }
});
siteUrlInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    }
});
bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (siteNameInput.value === "") {
        siteNameErrMsg.textContent = "Required*";
    }
    if (siteUrlInput.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else if (siteNameInput.value !== "" & siteUrlInput.value !== "") {
        bookmarksList.classList.toggle("form");
        createItem(siteNameInput, siteUrlInput);
    }
});