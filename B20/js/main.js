const showData = (data) => {
    let sHtml = `
     <div class="img-title">
                    <img src="${data[0].thumb}" alt="default imgage">
                    <p class="description"> ${data[0].description}</p>
                    <i class="fas fa-light fa-heart"></i>
                    <div class="title-small">
                        <p class="time-title"> </p>
                        <p class="source-title"> </p>
                    </div>
                </div>
                 <div class="title-topic">
                    <p>${data[0].content} <span>...read more </span></p>
                </div>
            </div>
    `
    $('#main-news').html(sHtml);
}

const getData = async () => {
    const url = 'https://apiforlearning.zendvn.com/api/categories_news/2/articles?offset=0&limit=1&sort_by=id&sort_dir=desc'

    let res = await fetch(url)
    let data = await res.json()

    console.log(data);
    showData(data)
}

$(document).ready(function () {
    getData()

});


