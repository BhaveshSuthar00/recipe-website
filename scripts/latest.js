async function getData(url) {

    try {
        let res = await fetch(url)
        let data = await res.json();
        return data
    }
    catch(e) {
        console.log("error in sthowDAta.js");
    }
}

function appendData(data, location) {

    data.forEach(({strMeal,strMealThumb})=>{
        let main_div = document.createElement('div');
        main_div.setAttribute('class','main_div');
        let div = document.createElement('div');
        div.setAttribute('class','img_div');
        
        let img = document.createElement('img')
        
        img.src = strMealThumb;
        
        div.append(img);

        let text_div = document.createElement('div');
        text_div.setAttribute('class','text_div');
        let p = document.createElement('p');
        
        p.textContent = strMeal;
        
        text_div.append(p);
        
        main_div.append(div,text_div);
        location.append(main_div);
    })
}

export { getData,appendData }