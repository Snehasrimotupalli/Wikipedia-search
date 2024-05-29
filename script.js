let inputsearch = document.getElementById("searchInput");
let results = document.getElementById("searchResults");
let thespinner = document.getElementById("spinner");

function search(event) {
    if (event.key === "Enter") {
    results.textContent = "";
        thespinner.classList.toggle("d-none");
        let word = inputsearch.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + word;
        let options = {
            method: "GET"

        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsondata) {
                let {
                    search_results
                } = jsondata;
                thespinner.classList.toggle("d-none");
                for (let search of search_results) {
                    console.log(search);
                    let {
                        title,
                        link,
                        description
                    } = search;
                    let item = document.createElement("div");
                    item.classList.add("result-item");
                    results.appendChild(item);

                    let result_title = document.createElement("a");
                    result_title.href = link;
                    result_title.target = "_blank";
                    result_title.textContent = title;
                    result_title.classList.add("result-title");
                    item.appendChild(result_title);
                    let brelement1 = document.createElement("br");
                    item.appendChild(brelement1);

                    let result_link = document.createElement("a");
                    result_link.href = link;
                    result_link.target = "_blank";
                    result_link.textContent = link;
                    result_link.classList.add("result-url");
                    item.appendChild(result_link);

                    let brelement2 = document.createElement("br");
                    item.appendChild(brelement2);

                    let data = document.createElement("p");
                    data.textContent = description;
                    data.classList.add("link-description");
                    item.appendChild(data);
                    inputsearch.value = "";

                }
            });
    }
}
inputsearch.addEventListener("keydown", search);