const onClickBasic = () => {
    const buttonElement = document.getElementById("blm");
    
    if (buttonElement.classList.contains("basic-learn-more-clicked"))
        buttonElement.classList.remove("basic-learn-more-clicked");
    else
        buttonElement.classList.add("basic-learn-more-clicked")
}

const onClickPro = () => {
    const buttonElement = document.getElementById("plm");
    
    if (buttonElement.classList.contains("pro-learn-more-clicked"))
        buttonElement.classList.remove("pro-learn-more-clicked");
    else
        buttonElement.classList.add("pro-learn-more-clicked")
}

const onClickMaster = () => {
    const buttonElement = document.getElementById("mlm");
    
    if (buttonElement.classList.contains("master-learn-more-clicked"))
        buttonElement.classList.remove("master-learn-more-clicked");
    else
        buttonElement.classList.add("master-learn-more-clicked")
}

const membershipChange = () => {
    const buttonElementContainer = document.querySelector(".option-container")
    const basicPrice = document.querySelector(".basic-price")
    const proPrice = document.querySelector(".pro-price")
    const masterPrice = document.querySelector(".master-price")
    
    
    if (buttonElementContainer.classList.contains("option-container-clicked")) {
        buttonElementContainer.classList.remove("option-container-clicked");
        basicPrice.innerHTML = "19.99";
        proPrice.innerHTML = "24.99";
        masterPrice.innerHTML = "39.99";
    }
    else {
        buttonElementContainer.classList.add("option-container-clicked");
        basicPrice.innerHTML = "199.99";
        proPrice.innerHTML = "249.99";
        masterPrice.innerHTML = "399.99";
    }
}