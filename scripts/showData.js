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
        // let onclick_div = document.querySelector('.main_div');
        // showData_name(strMeal)
        main_div.addEventListener('click',async function(){
            let name = strMeal;
            try {
                let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
                let data = await response.json();
                console.log(data)
                let meal = data.meals[0];
                localStorage.setItem('items_r',JSON.stringify(meal));
                window.location.href = 'display.html';
            }
            catch (error) {
                console.log('error in getting name recipe',error);
            }
        
        })
        let div = document.createElement('div');
        div.setAttribute('class','img_div');
        
        let img = document.createElement('img')
        
        img.src = strMealThumb;
        
        div.append(img);

        let text_div = document.createElement('div');
        text_div.setAttribute('class','text_div');
        let p = document.createElement('p');
        p.setAttribute('class','meal_name')
        
        p.textContent = strMeal;
        
        text_div.append(p);
        
        main_div.append(div,text_div);
        location.append(main_div);
    })
}

export { getData,appendData }