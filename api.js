

const data = require("./data.js")





// return all categories
function categories(){

    const _categories=[]

    for(let i=0; i<data.length; i++){
        for(let j=0; j<data[i].categories.length; j++){
            let k=0
            for(k; k<_categories.length; k++){
                if(data[i].categories[j] == _categories[k]){
                    break
                }
            }
            if(k==_categories.length){
                _categories.push(data[i].categories[j])
            }
        }
    }

    return _categories

}


// list websites for a specific category
function category_websites(category){

    const websites = []

    for(let i=0; i<data.length; i++){
        for(let j=0; j<data[i].categories.length; j++){
            if(data[i].categories[j] == category){
                websites.push(data[i])
                break
            }
        }
    }

    return websites

}



// list websites from search
function search_websites(keyword){

    const websites = []

    for(let i=0; i<data.length; i++){
        for(let j=0; j<data[i].categories.length; j++){
            if(data[i].categories[j].includes(keyword)){
                websites.push(data[i])
                break
            }
        }
    }

    return websites

}



// return the most recent website posted
function compare(website_1, website_2){

    if(parseInt(website_1.date.split("-")[0]) > parseInt(website_2.date.split("-")[0])){
        return 1
    }
    else if(parseInt(website_1.date.split("-")[0]) < parseInt(website_2.date.split("-")[0])){
        return 2
    }
    else{
        if(parseInt(website_1.date.split("-")[1]) > parseInt(website_2.date.split("-")[1])){
            return 1
        }
        else if(parseInt(website_1.date.split("-")[1]) < parseInt(website_2.date.split("-")[1])){
            return 2
        }
        else{
            if(parseInt(website_1.date.split("-")[2]) > parseInt(website_2.date.split("-")[2])){
                return 1
            }
            else if(parseInt(website_1.date.split("-")[2]) < parseInt(website_2.date.split("-")[2])){
                return 2
            }
            else{
                return 0
            }
        }
    }
}



// sort websites from the oldest to the newest
function sort_websites(websites){

    let count = websites.length-1

    while(count >= 0){
        for(let i=0; i<count; i++){
            if(compare(websites[i], websites[i+1]) == 2){
                temp=websites[i]
                websites[i]=websites[i+1]
                websites[i+1]=temp
            }
        }
        count--
    }

}

// return all websites posted
function all_websites(){

    return data
}



module.exports = {
    categories,
    category_websites,
    sort_websites,
    search_websites,
    all_websites
}






