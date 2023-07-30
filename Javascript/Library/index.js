const url = "https://www.googleapis.com/books/v1/volumes?q="

const fetchBook = async() => {
    let content = ``;
    let bookTitle = document.getElementById('bookTitle').value;
    let queryParams = bookTitle.trim().length > 0 ? bookTitle : "StarWar";
    if(bookTitle.trim().length == 0){
        document.getElementById('error').innerText = "Please Enter Search Query";
    }
    if(bookTitle.trim().length > 0){
        document.getElementById('error').innerText = "";
    }

    let response = await fetch(`${url}?q=${queryParams}`,{method:'GET'})
    let data = await response.json();
    let displayData = data.items.map((item) => {
        console.log(">>>",item.volumeInfo.imageLinks.thumbnail)
        return(
            `<div class="card">
                <div class="imgDiv">
                    <img src="${item.volumeInfo.imageLinks.thumbnail}" alt="${item.volumeInfo.title}"/>
                </div>
                <div class="contentDiv">
                    <h2>${item.volumeInfo.title}</h2>
                    <p>Publisher: ${item.volumeInfo.publisher}</p>
                    <p> ${item.volumeInfo.description}</p>
                </div>
            </div>  `
        )
    })
    content += displayData

    document.getElementById('content').innerHTML = content
}