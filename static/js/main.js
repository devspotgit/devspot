


window.addEventListener("load",()=>{



    document.querySelector(".side-wrapper > button").addEventListener("click",()=>{
        document.querySelector(".page").style.transform="translateX(-300px)"
    })

    document.querySelector(".header > button").addEventListener("click",()=>{
        document.querySelector(".page").style.transform="translateX(0px)"
    })

    const observer = new ResizeObserver((items)=>{
        items.forEach(item =>{
            if(item.target == document.querySelector(".page")){
                if(parseInt(item.target.clientWidth) >= 600){
                    item.target.style.transform="translateX(0px)"
                }
                else{
                    item.target.style.transform="translateX(-300px)"
                }
            }
        })
            
    })

    observer.observe(document.querySelector(".page"))


})




