const fetchCategories = () => {
    const URL=`https://openapi.programming-hero.com/api/news/categories`
    fetch(URL)
    .then(res=>res.json())
    .then(data=>showcategories(data.data))

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
    const URL=`https://openapi.programming-hero.com/api/news/category/${category_id} `
    fetch(URL)
    .then(res=>res.json())
    .then(data=>showALlNews(data.data, category_name))


    // console.log(URL);

}
const showALlNews = (data,category_name) => {
    
    console.log(data,category_name);
    document.getElementById('news-count').innerText = data.length;
    document.getElementById('category-name').innerText=category_name

    data.forEach(news => {
        console.log(news);
    })



}

