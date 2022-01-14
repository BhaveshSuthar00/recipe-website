async function getRandom(){
    try {
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        let data = await res.json()
        return data.meals[0];
    }
    catch(error){
        console.log('error in random recipe',error)
    }
}
function appendData(data, location) {
    console.log(data)
        let main_div = document.createElement('div');
        main_div.setAttribute('class','main_div');
        let div = document.createElement('div');
        div.setAttribute('class','img_div');
        
        let img = document.createElement('img')
        
        img.src = data.strMealThumb;
        
        div.append(img);

        let text_div = document.createElement('div');
        text_div.setAttribute('class','text_div');
        let p = document.createElement('p');
        p.textContent = `Dish name : ${data.strMeal}`;
        
        let cat = document.createElement('p');
        cat.innerText = `Category : ${data.strCategory}`;

        let origin = document.createElement('p');
        origin.innerText = `origin : ${data.strArea}`;
        let ingredient_div = document.createElement('div');
        let p2 = document.createElement('p');
        p2.innerText = "Ingredients :";
        let ul  = document.createElement('ul')
        ul.setAttribute('class','ingredient_list')
        let in1 = document.createElement('li');
        in1.innerText = data.strIngredient1;
        let in2 = document.createElement('li');
        in2.innerText = data.strIngredient2;

        let in3 = document.createElement('li');
        in3.innerText = data.strIngredient3;

        let in4 = document.createElement('li');
        in4.innerText = data.strIngredient4;

        let in5 = document.createElement('li');
        in5.innerText = data.strIngredient5;

        let in6 = document.createElement('li');
        in6.innerText = data.strIngredient6;

        let in7 = document.createElement('li');
        in7.innerText = data.strIngredient7;

        let in8 = document.createElement('li');
        in8.innerText = data.strIngredient8;
       
        let in9 = document.createElement('li');
        in9.innerText = data.strIngredient9;
       
        let in10 = document.createElement('li');
        in10.innerText = data.strIngredient10;
       

        ul.append(in1,in2,in3,in4,in5,in6,in7,in8,in9,in10);
        
        ingredient_div.append(p2,ul)
        
        let steps = document.createElement('div');
        steps.setAttribute('class','steps_div');
        steps.innerText = data.strInstructions;
        var k = data.strYoutube;
        var pj = k.split('=');
        console.log(pj)
        var kon = pj[1];
      let iframe = document.createElement('iframe');
        iframe.setAttribute('class','iframe');
        iframe.src = `https://www.youtube.com/embed/${kon}`;
        iframe.setAttribute('allowfullscreen',true);

        text_div.append(p,cat,origin,ingredient_div,steps,iframe)
        main_div.append(div,text_div);
        location.append(main_div);
}

export {getRandom,appendData};
