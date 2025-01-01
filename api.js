

const data = require("./data.js")


// return all the website types 
function types(){

    const _types=[]

    for(let i=0; i<data.length; i++){
        let j=0
        for(j; j<_types.length; j++){
            if(data[i].type == _types[j]){
                break
            }
        }
        if(j==_types.length){
            _types.push(data[i].type)
        }
    }

    return _types

}


// return all the websites topics
function topics(){

    const _topics=[]

    for(let i=0; i<data.length; i++){
        for(let j=0; j<data[i].topics.length; j++){
            let k=0
            for(k; k<_topics.length; k++){
                if(data[i].topics[j] == _topics[k]){
                    break
                }
            }
            if(k==_topics.length){
                _topics.push(data[i].topics[j])
            }
        }
    }

    return _topics

}


// return websites for specific type
function type_websites(type){

    const websites = []

    for(let i=0; i<data.length; i++){
        if(data[i].type == type){
            websites.push(data[i])
        }
    }

    return websites
}


// list websites for a specific topic
function topic_websites(topic){

    const websites = []

    for(let i=0; i<data.length; i++){
        for(let j=0; j<data[i].topics.length; j++){
            if(data[i].topics[j] == topic){
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
        if(data[i].type.includes(keyword)){
            websites.push(data[i])
        }
        else{
            for(let j=0; j<data[i].topics.length; j++){
                if(data[i].topics[j].includes(keyword)){
                    websites.push(data[i])
                    break
                }
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
    types,
    topics,
    type_websites,
    topic_websites,
    sort_websites,
    search_websites,
    all_websites
}






