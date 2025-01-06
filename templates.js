

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
                <title>Free Website Templates</title>
            </head>
            <body>
                <div class="home">
                    <div class="hero"> 
                        <a href="">DevSpot</a>
                        <span>Free Html Website Templates</span>
                        <span>Get accessed to a vast collection of templates with modern design</span>
                        <form action="/website-template-search/" method="get">
                            <input type="text" placeholder="Search Templates..."/>
                            <button></button>
                        </form>
                        <div>
                            <span>Built with the latest HTML standards for better performance, accessibility, and search engine optimization (SEO)</span>
                            <span>Leveraging the latest CSS features for advanced styling and animations.</span>
                            <span>Designed with mobile devices in mind, ensuring optimal viewing on smaller screens.</span>
                            <span>Includes features like clean code, proper headings, and meta descriptions to improve search engine rankings.</span>
                        </div>
                        <a href="/website-template-category/all">All Templates</a> 
                    </div>
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



