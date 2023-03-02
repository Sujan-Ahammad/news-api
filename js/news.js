const fetchCategories = () => {
    const URL = `https://openapi.programming-hero.com/api/news/categories`
    fetch(URL)
        .then(res => res.json())
        .then(data => showcategories(data.data))

}
// fetchCategories()

const showcategories = (datas) => {
    const categoriesContainer = document.getElementById('categories-container');

    datas.news_category.forEach(newsHeader => {

        // Step 2-
        // categoriesContainer.innerHTML+=` <a class="nav-link" href="#">${newsHeader?.category_name}</a>`

        // console.log(newsHeader);
        const newsHeaderDiv = document.createElement('p')
        newsHeaderDiv.innerHTML = `
        <a class="nav-link" href="#" onclick="allNewsCategory('${newsHeader.category_id}', '${newsHeader.category_name}')">${newsHeader.category_name}</a>
        `
        categoriesContainer.appendChild(newsHeaderDiv)


    })

}

// fetch all newses available in a category

const allNewsCategory = (category_id, category_name) => {
    const URL = `https://openapi.programming-hero.com/api/news/category/${category_id} `
    fetch(URL)
        .then(res => res.json())
        .then(data => showALlNews(data.data, category_name))


    // console.log(URL);

}
const showALlNews = (data, category_name) => {

    // console.log(data, category_name);
    document.getElementById('news-count').innerText = data.length;
    document.getElementById('category-name').innerText = category_name

    const allNewsCard = document.getElementById('all-news');
    allNewsCard.innerHTML = '';
    data.forEach(news => {
        // console.log(news);
        const { _id, thumbnail_url, title, details, author, total_view, } = news
        const newsCardDiv = document.createElement('div')
        newsCardDiv.classList.add('card-div', 'mb-3')
        newsCardDiv.innerHTML = `
        <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${thumbnail_url}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8 d-flex flex-column">
                    <div class="card-body">
                      <h5 class="card-title">${title}</h5>
                      <p class="card-text">${details.slice(0, 300)}....</p>
                      <p class="card-text"><small class="text-muted"></small></p>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                    <div class=" d-flex gap-2">
                    <img src="${news.author.img}" class="img-fluid rounded-circle" alt="..." height="40" width="40">
                    <div>
                    <p class="m-0 p-0">${author.name}</p>
                    <p class="m-0 p-0">${author.published_date}</p>
                    </div>
                    </div>



                    <div class="d-flex align-items-center">
                    <i class="fas fa-eye"></i>
                    <p class="m-0 p-0">${total_view}</p>
                    
                    </div>
                    <div>
                    
                    <i class="fas fa-star"></i>
                    
                    </div>
                    <div>
                 <i class="fas fa-arrow-right"
                 onclick="fetchNewsDetails('${_id}')" data-bs-toggle="modal" data-bs-target="#exampleModal">
                 
                 </i>
                    
                    </div>
                    <div></div>
                    
                    </div>
                  </div>
                </div>
        `;
        allNewsCard.appendChild(newsCardDiv)
    });
};


// show News Details Section

const fetchNewsDetails = (news_id) => {


    const URL = `https://openapi.programming-hero.com/api/news/${news_id}`

    fetch(URL)
        .then(res => res.json())
        .then(data => showNewsDetails(data.data[0]))
}

const showNewsDetails = (modal) => {
    console.log(modal);
    const { _id, thumbnail_url, title, details, author, total_view, } = modal
    
    // 
    document.getElementById('modal-body').innerHTML= `
    <div class="card mb-3">
    
    <div class="row g-0">
    <div class="col-md-12 ">
      <img src="${thumbnail_url}" class="img-fluid w-full rounded-start" alt="...">
    </div>
    <div class="col-md-12 d-flex flex-column">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${details}....</p>
        <p class="card-text"><small class="text-muted"></small></p>
      </div>
      <div class="card-footer d-flex justify-content-between">
      <div class=" d-flex gap-2">
      <img src="${author.img}" class="img-fluid rounded-circle" alt="..." height="40" width="40">
      <div>
      <p class="m-0 p-0">${author.name}</p>
      <p class="m-0 p-0">${author.published_date}</p>
      </div>
      </div>



      <div class="d-flex align-items-center">
      <i class="fas fa-eye"></i>
      <p class="m-0 p-0">${total_view}</p>
      
      </div>
      <div>
      
      <i class="fas fa-star"></i>
      
      </div>
      
      <div></div>
      
      </div>
    </div>
  </div>
    </div>
    
    `
    

}

