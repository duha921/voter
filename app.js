/*document.addEventListener('DOMContentLoaded', ()=> {
    getNews()
})
function getNews(){

    fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=4d66c55e4c80495a8bd3419aa8ea9be3')
.then((Response)=>{
    return Response.json()
  }).then(function(data) {
    let result = data.articles.map(createarticle).join("\n");
    UpdateUI(result);
    console.log(result);
});

}
function createarticle(article){
    return `
<article>
            

<img width="124px" height="124px" src="${article.urlToImage}">
<div>
    <h1>${article.title} </h1>
    <p>${article.description}</p>
    <time>${article.publishedAt}</time>
</div>

</article>`
}
function UpdateUI (content){
    document.getElementById("news").innerHTML =content;
 }*/