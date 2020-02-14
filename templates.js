const modal = document.querySelector(".modal-background");
modal.addEventListener("click", () => {
    modal.classList.add("hide");
});




function displayMeals(data) {

    const templateElement = document.querySelector("#template_modal").content;

    const myClone = templateElement.cloneNode(true);

    //Step 3: Change the content
    myClone.querySelector("#meal_text").textContent = data.name;
    myClone.querySelector(".meal-name").textContent = data.shortdescription;
    myClone.querySelector("#meal_price").textContent = data.price;

    if (data.discount) {
        myClone.querySelector("#discount_price").textContent = data.price - data.discount;
        myClone.querySelector("#discount_price").style = "color: green;"
        myClone.querySelector("#meal_price").style = "text-decoration: line-through; color: red;";

        myClone.querySelector("#discount_price").style.display = "inline";
        myClone.querySelector("#sold_out_status").style.display = "inline";
    }

    if (data.soldout) {
        myClone.querySelector("#sold_out").style.display = "inline";
    }
    if (data.vegetarian) {
        myClone.querySelector("#vegeterian").style.display = "inline";
    }
    if (data.alcohol) {
        myClone.querySelector("#alcohol").style.display = "inline";
    }

    //    if (data.discount) {
    //        myClone.querySelector(".price-discount span").textContent = data.price;
    //        const new_price = Math.round(data.price - data.price * data.discount / 100);
    //        myCloneclone.querySelector(".price-full span").textContent = new_price;
    //        
    //    } else {
    //        myClone.querySelector(".price-discount").remove();
    //        myClone.querySelector(".price-full span").textContent = data.price
    //    }
    myClone.querySelector(".button").addEventListener("click", () => {
        fetch(`https://kea-alt-del.dk/t5/api/product?id=${data.id}`)
            .then(res => res.json())
            .then(showDetails);
    });

    //...
    myClone.querySelector(".pic").src = "medium/" + data.image + "-md.jpg"



    //Step 4: Chose the new "parent" element
    //    const parentElement = document.querySelector("main");
    //    parentElement.appendChild(myClone);
    console.log(`#${data.category}`)
    document.querySelector(`#${data.category}`).appendChild(myClone)


    //Step 5: Add (Append) the clone to the DOM

}

if (displayMeals.discount) {
    clone.querySelector('.box-1').classList.add("discount");

}
if (displayMeals.discount) {
    let p = document.createElement('p');
    p.textContent = "I'm on sale";
    clone.appendChild(p);
}


fetch("https://kea-alt-del.dk/t5/api/categories")
    .then(res => res.json())
    .then(createCategories)

function createCategories(data) {
    console.log(data)
    data.forEach(function (oneCat) {
        const li = document.createElement("li");
        //create links
        const a = document.createElement("a");
        a.setAttribute('href', `#${oneCat}`);
        a.textContent = oneCat;
        a.classList.add("navButton");
        li.appendChild(a);
        document.querySelector("ul").appendChild(li);

        //create sections
        const section = document.createElement("section");
        section.id = oneCat;
        const h2 = document.createElement("h2");
        h2.textContent = oneCat;
        section.appendChild(h2);

        document.querySelector("main").appendChild(section);
    })

    getProducts();
}


function showDetails(data) {
    modal.querySelector(".modal-name").textContent = data.name;
    modal.querySelector(".modal-description").textContent = data.longdescription;
    //...
    modal.classList.remove("hide");
    modal.querySelector(".modal-image").src = "medium/" + data.image + "-md.jpg";
    modal.querySelector("modal-price span").textContent = data.price;

}


function getProducts() {
    fetch("https://kea-alt-del.dk/t5/api/productlist")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            data.forEach(displayMeals)
            showData(data)
        })
}

function showData(jsonData) {

    console.log(jsonData)
}
