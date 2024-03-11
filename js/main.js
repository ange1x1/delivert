const restaurantsURL = "../db/partners.json"
const restaurantNode=document.querySelector(".restaurants")
const getData = async(URL) =>{
    const res = await fetch(URL,{
        method:"GET",
    });
    if(res.ok){
        const data = await res.json();
        return data;
    }
    throw new Error('error');
}
const openRestaurant = async(e)=>{
    const target = e.target
    const restaran = target.closest(".restaurant-card")
    console.log(restaran)
    const restaurantsUR2 = `../db/${restaran.getAttribute('data-product')}`
    const arr = await getData(restaurantsUR2)
    arr.map((restarant)=>{
        console.log(restarant.name)
       })
}

getData(restaurantsURL)
const createRestaurantsCards = ({name , kitchen, price, stars,time_of_delivery,image,products})=>{
    // const restaurantsArr = await getData(restaurantsURL)
    const restaurantsCard = `
    <div class="restaurant-card" data-product="${products}">
                <h3>${name}</h3>
                <span>${kitchen}</span>
                <ul>
                    <li>${price}</li>
                    <li>${stars}</li>
                    <li>${time_of_delivery}</li>
                </ul>
                <img src="${image}" alt="#">
            </div>  
    `
    restaurantNode.insertAdjacentHTML("beforeend",restaurantsCard)
};
const init =async ()=>{
   const restaurantsArr = await getData(restaurantsURL)
   restaurantsArr.map((restarant)=>{
    createRestaurantsCards(restarant)
   })
}
restaurantNode.addEventListener("click",openRestaurant)
init();
