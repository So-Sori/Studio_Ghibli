let moviesContainer = document.getElementById("movies-container");
let displayMovies = document.getElementById("display-movies");


function fetchAllData() {
    fetch("js/api.json")
    .then(res => res.json())
    .then(data => {
        renderMovies(data);
    })
    
}

function renderMovies(data) {
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        div.setAttribute("id",`${i}`);
        div.classList = "container-fluid"
        div.innerHTML = `
            <p>${data[i].title}</p>
            <img src="${data[i].cover}" alt="">
            <button class="btn-display">display info ${i}</button>
        `;
        moviesContainer.appendChild(div);
    }
    let btnList = document.querySelectorAll(".btn-display");
    btnList.forEach(btn => {
        btn.addEventListener("click",(e)=>{
            let itemId = e.target.parentElement.id;
            fetchDisplayData(itemId);
        })
    })
}


function fetchDisplayData(id) {
    let div = document.createElement("div");
    displayMovies.innerHTML = " ";
    
    fetch("js/api.json")
    .then(res => res.json())
    .then(data => {
        div.setAttribute("id",`${id}`);
        div.classList = "container-fluid";
        let genreList = "";
        
        data[id].genres.forEach(genre => {
            genreList += `<p>${genre}</p>`;
        });

        div.innerHTML = `
            <div class="row">
                <div class="head">
                    <div class="head">
                        <img src="${data[id].cover}" alt="">
                    </div>
                    <p>${data[id].title}</p>
                    <p>${data[id].alternative_titles}</p>
                    <div class="container icons">
                        <i class='bx bxs-heart' id = "${id}"><span class="likes-num"><span></i>
                        <i class='bx bxs-comment' id = "comments"></i>
                    </div>
                </div>
                <div class="container">
                    <h2>Sinopsis</h2>
                    <div class="container">
                        <p>synopsis: ${data[id].synopsis}<p>
                        <img src="${data[id].cover}" alt="">
                        </div>
                        </div>
                <div class="container">
                <div class="container">
                        <img src="${data[id].cover}" alt="">
                        <ul>
                            <li>title: ${data[id].title}</li>
                            <li>original title: ${data[id].alternative_titles}</li>
                            <li>rating: ${data[id].rating}</li>
                            <li>duration: ${data[id].duration}</li>
                            <li>genres: ${genreList}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
        displayMovies.appendChild(div);
    })
    
}

const btnLikesList =  document.querySelectorAll(".bxs-heart"); 
btnLikesList.forEach(btn => {
    btn.addEventListener("click",(e)=>{
        let currentMovie = e.currentTarget.id;
        console.log(currentMovie);
    })
});

fetchAllData();


// function fetchDisplayData(id) {
//     let div = document.createElement("div");
//     displayMovies.innerHTML = " ";
    
//     fetch("js/api.json")
//     .then(res => res.json())
//     .then(data => {
//         div.setAttribute("id",`${id}`);
//         div.classList = "container-fluid";
//         let genreList = "";
        
//         data[id].genres.forEach(genre => {
//             genreList += `<p>${genre}</p>`;
//         });

//         div.innerHTML = `
//             <div class="row">
//                 <div class="head">
//                     <div class="head">
//                         <img src="${data[id].cover}" alt="">
//                     </div>
//                     <p>${data[id].title}</p>
//                     <p>${data[id].alternative_titles}</p>
//                     <div class="container icons">
//                         <i class='bx bxs-heart' id = "${id}"><span class="likes-num"><span></i>
//                         <i class='bx bxs-comment' id = "comments"></i>
//                     </div>
//                 </div>
//                 <div class="container">
//                     <h2>Sinopsis</h2>
//                     <div class="container">
//                         <p>synopsis: ${data[id].synopsis}<p>
//                         <img src="${data[id].cover}" alt="">
//                         </div>
//                         </div>
//                 <div class="container">
//                 <div class="container">
//                         <img src="${data[id].cover}" alt="">
//                         <ul>
//                             <li>title: ${data[id].title}</li>
//                             <li>original title: ${data[id].alternative_titles}</li>
//                             <li>rating: ${data[id].rating}</li>
//                             <li>duration: ${data[id].duration}</li>
//                             <li>genres: ${genreList}</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         `;
//         displayMovies.appendChild(div);
//     })
    
// }
