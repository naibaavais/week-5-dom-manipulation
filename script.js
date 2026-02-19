let articleCounter = 4;

function showFilter() {
    document.getElementById("filterContent").style.display = "block";
    document.getElementById("newContent").style.display = "none";
}

function showAddNew() {
    document.getElementById("filterContent").style.display = "none";
    document.getElementById("newContent").style.display = "flex";
}

function filterArticles() {

    let showOpinion = document.getElementById("opinionCheckbox").checked;
    let showRecipe = document.getElementById("recipeCheckbox").checked;
    let showUpdate = document.getElementById("updateCheckbox").checked;

    let articles = document.querySelectorAll("#articleList article");

    articles.forEach(article => {

        if (article.classList.contains("opinion")) {
            article.style.display = showOpinion ? "block" : "none";
        }

        if (article.classList.contains("recipe")) {
            article.style.display = showRecipe ? "block" : "none";
        }

        if (article.classList.contains("update")) {
            article.style.display = showUpdate ? "block" : "none";
        }

    });
}

function addNewArticle() {

    let title = document.getElementById("inputHeader").value.trim();
    let text = document.getElementById("inputArticle").value.trim();

    if (title === "" || text === "") {
        alert("Please fill out all fields.");
        return;
    }

    let typeClass = "";
    let typeLabel = "";

    if (document.getElementById("opinionRadio").checked) {
        typeClass = "opinion";
        typeLabel = "Opinion";
    }
    else if (document.getElementById("recipeRadio").checked) {
        typeClass = "recipe";
        typeLabel = "Recipe";
    }
    else if (document.getElementById("lifeRadio").checked) {
        typeClass = "update";
        typeLabel = "Update";
    }
    else {
        alert("Please select an article type.");
        return;
    }

    let article = document.createElement("article");
    article.className = typeClass;
    article.id = "a" + articleCounter++;

    article.innerHTML = `
        <span class="marker">${typeLabel}</span>
        <h2>${title}</h2>
        <p>${text}</p>
        <p><a href="#">Read more...</a></p>
    `;

    document.getElementById("articleList").appendChild(article);

    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    document.querySelectorAll('input[name="articleType"]').forEach(r => r.checked = false);

    showFilter();
    filterArticles();
}

