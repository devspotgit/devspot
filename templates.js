

const api = require("./api.js")


// template parts

function side(){

    const categories=api.categories()

    let html=""
    
    categories.forEach(category => {
        html=`${html} <a href="/website-template-category/${category}">${category.split("-").join(" ")}</a>`
    })

    return `
        <div class="side">
            <div class="side-wrapper">
                <button></button>
                <a href="/">Devspot</a>
                <form method="get" action="/website-template-search">
                    <input type="text" name="keyword"/>
                    <button></button>
                </form>
                <div>
                    <a href="/website-template-category/all">all</a>
                    ${html}
                </div>
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
            <span>
                website template category - ${category.split("-").join(" ")}
            </span>
            <button></button>
        </div>
    `
}


function website_header(website){

    return `
        <div class="header">
            <span>
                website template - ${website.split("-").join(" ")}
            </span>
            <button></button>
        </div>    
    `
}

function search_header(keyword){

    return `
        <div class="header">
            <span>
                website template search - ${keyword}
            </span>
            <button></button>
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
            ${website}
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
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a odio mauris. Etiam sapien purus, molestie non tincidunt nec, condimentum eu odio. In vulputate quam vitae orci finibus, in pharetra arcu eleifend. Mauris nec dolor quis nibh venenatis luctus. Suspendisse vestibulum vitae quam nec gravida. Nullam viverra, lacus non sodales porta, purus dui faucibus ante, sed elementum erat nulla vel dolor. In rutrum, turpis vel rhoncus vestibulum, ante sapien venenatis velit, sed ornare felis eros luctus lacus.

Sed eget dui commodo, pulvinar lectus sed, blandit ipsum. Donec interdum feugiat viverra. Sed mollis tortor in mi tempus tincidunt. Donec feugiat bibendum augue placerat pellentesque. Aliquam erat volutpat. Curabitur risus dolor, dictum et rutrum sit amet, hendrerit a urna. Suspendisse ullamcorper luctus quam non auctor. Fusce sit amet nisl ipsum. Suspendisse porttitor tortor quis orci molestie, placerat tristique purus congue. Mauris in luctus dolor. Nunc magna massa, gravida quis porttitor sit amet, varius sit amet justo.

Quisque eget dolor ut quam pellentesque porttitor sed vitae enim. Nulla facilisi. Integer consequat vitae ante sed sodales. Proin placerat gravida vehicula. Nullam viverra neque a mollis mattis. Fusce justo tellus, varius in nibh sed, dictum aliquet velit. In varius mattis justo eu placerat. Nullam vel ipsum porta, tincidunt nunc sed, varius sem. Vestibulum quis fringilla nisi, sit amet efficitur tellus.

Quisque rutrum lectus tortor, id porttitor odio dignissim in. Nulla accumsan libero eget nisl volutpat scelerisque. Mauris suscipit quis velit et scelerisque. Fusce est magna, sollicitudin in nisi vitae, sollicitudin tincidunt massa. Integer enim dolor, pulvinar nec lectus vel, varius egestas enim. Sed commodo ipsum magna, quis egestas tellus bibendum vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas lobortis auctor tortor hendrerit faucibus. Quisque eleifend augue maximus sapien pretium, accumsan fringilla ligula pretium. Quisque ultricies enim in massa mollis venenatis. Morbi efficitur semper posuere. In at velit ornare, malesuada est mollis, cursus nulla.

Aenean a enim metus. Donec ultricies dictum nibh, id euismod velit vulputate dignissim. Maecenas a tempus metus. Nunc vel elit eu dolor scelerisque ornare. Pellentesque id enim vitae lacus fringilla pharetra nec in augue. Pellentesque varius lacus lorem, efficitur cursus sem rutrum in. Praesent tristique mollis luctus. In non aliquam ligula. Mauris quis commodo dui. Sed lobortis nulla ex, et vestibulum turpis laoreet suscipit. Aenean egestas nisl pulvinar, bibendum quam consectetur, vestibulum erat. Nam sit amet porttitor lectus. Maecenas fermentum dictum quam, at lobortis tortor lacinia sed.
        </div>
    `
}


function website_content(website){

    return `
        ${website_feature(website)}
    
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
                <div class="page">
                    ${category_header(category)}
                    ${side()}
                    ${website_list(list)}
                    ${footer()}
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
                <div class="page">
                    ${search_header(keyword)}
                    ${side()}
                    ${website_list(list)}
                    ${footer()}
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
                <div class="page">
                    ${website_header(website)}
                    ${side()}
                    ${website_content(website)}
                    ${footer()}
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



