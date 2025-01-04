

const api = require("./api.js")


// template parts

function side(){

    const categories=api.categories()

    let html=""
    
    categories.forEach(category => {
        let html=`${html} <a href="/website-template-category/${category}">${category.split("-").join(" ")}</a>`
    })

    return `
        <div class="side">
            <div>
                <a href="/">Devspot</a>
                <button></button>
            </div>
            <form method="get" action="/website-template-search">
                <input type="text" name="keyword"/>
                <button></button>
            </form>
            <div>
                <a href="/website-template-category/all">all</a>
                ${html}
            </div>
        </div>
    `
}


function footer(){

    return `
        <div class="footer">
            <a href="/">Devspot</a>
        </div>
    `
}


function category_header(category){

    return `
        <div class="header">
            website template category - ${category.split("-").join(" ")}
        </div>
    `
}


function website_header(website){

    return `
        <div class="header">
            website template - ${website.split("-").join(" ")}
        </div>    
    `
}

function search_header(keyword){

    return `
        <div class="header">
            website template search - ${keyword}
        </div>    
    `
}


function website_feature(website){

    return `
        <div class="feature">
            <button></button>
            <button></button>
            <button></button>
            <a href="/website-template-file/${website}"></a>
            <a href="/website-template-live/${website}"></a>
        </div>
    `
}


function website_card(website){

    return `
        <div class="card">
        
        </div>
    `
}


function website_list(list){

    let html=""

    list.forEach(item => {
        html=`${html} ${website_card(item.website)}`
    })

    return `
        <div class="list">
            ${html}
        </div>
    `
}


function website_content(website){

    return `
    
    `
}













// full templates

function home_page(){

    return `
        <!DOCTYPE html>
        <html>
            <head>
                <link rel="stylesheet" href="/css/main.css">
                <script src="/js/main.js" type="module"></script>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>free website templates</title>
            </head>
            <body>
                <div class="home">
                    <h1>Home</h1>
                </div>
            </body>
        </html>
    
    `
}


function category_page(category){

    let list

    if(category == "all"){
        list=api.all_websites()
        api.sort_websites(list)
    }
    else{
        list=api.category_websites(category)
        api.sort_websites(list)
    }

    return `
        <!DOCTYPE html>
        <html>
            <head>
                <link rel="stylesheet" href="/css/main.css">
                <script src="/js/main.js" type="module"></script>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>website template category - ${category.split("-").join(" ")}</title>
            </head>
            <body>
                <div class="category">
                    ${category_header(category)}
                    ${side()}
                    ${website_list(list)}
                    ${footer}
                </div>
            </body>
        </html>
    `
}


function search_page(keyword){

    const list=api.search_websites(keyword)

    api.sort_websites(list)

    return `
        <!DOCTYPE html>
        <html>
            <head>
                <link rel="stylesheet" href="/css/main.css">
                <script src="/js/main.js" type="module"></script>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>website template search - ${keyword}</title>
            </head>
            <body>
                <div class="search">
                    ${search_header(category)}
                    ${side()}
                    ${website_list(list)}
                    ${footer}
                </div>
            </body>
        </html>
    `
}


function website_page(website){

    return `
        <!DOCTYPE html>
        <html>
            <head>
                <link rel="stylesheet" href="/css/main.css">
                <script src="/js/main.js" type="module"></script>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>website template - ${website.split("-").join(" ")}</title>
            </head>
            <body>
                <div class="website">
                    ${website_header(website)}
                    ${website_feature(website)}
                    ${side()}
                    ${website_content(website)}
                    ${footer}
                </div>
            </body>
        </html>
    `
} 


module.exports = {
    home_page,
    category_page,
    website_page,
    search_page
}



