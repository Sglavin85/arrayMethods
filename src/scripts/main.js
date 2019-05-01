let ex1 = document.querySelector("#ex1")
let ex2 = document.querySelector("#ex2")
let lightning1 = document.querySelector("#lightning1")
let ex3 = document.querySelector("#ex3")
let ex5 = document.querySelector("#ex5")

function createBusinessDom (name, address, state, city, zip) {
   return `<div class="business">
        <h3>${name}</h3>
        <span></span>
        <p>${address}</p>
        <p>${city}, ${state} ${zip}</p>
    </div>
    <hr>`
}

function pushToDom (toBeAdded, container) {
    container.innerHTML += toBeAdded
}

function businessDomLoop(businesses, container) {
    businesses.forEach(business => {
        let name = business.companyName
        let address = business.addressFullStreet
        let state = business.addressStateCode
        let city = business.addressCity
        let zip = business.addressZipCode
        let businessDom = createBusinessDom(name, address, state, city, zip)
        pushToDom(businessDom, container)
    })
}

const newYorkBusinesses = businesses.filter(business => {
    let inNewYork = false
    if(business.addressStateCode === "NY") {
        inNewYork = true
    }
    return inNewYork
})

const manufacturingBusinesses = businesses.filter(business => {
    let manufacturing = false
    if(business.companyIndustry === "Manufacturing") {
        manufacturing = true
    }
    return manufacturing
})

businessDomLoop(businesses, ex1)
businessDomLoop(newYorkBusinesses, ex2)
businessDomLoop(manufacturingBusinesses,lightning1)

const agents = businesses.map(business => {
    return{  nameFirst: business.purchasingAgent.nameFirst,
             nameLast: business.purchasingAgent.nameLast,
             company: business.companyName,
             phoneWork: business.phoneWork
    }
})

agents.forEach(agent => {
    ex3.innerHTML +=`<div class="agent">
                            <h3>${agent.company}</h3>
                            <p>${agent.nameFirst} ${agent.nameLast}</p>
                            <p>${agent.phoneWork}</p>
                        </div>`;
    ex3.innerHTML += `<hr>`;
})

document.querySelector("#companySearch").addEventListener("keyup", event => {
    if(event.keyCode === 13) {
        let queryVal = document.querySelector("#companySearch").value
        ex4.innerHTML = " "
        if(queryVal === ""){
            ex4.innerHTML = `<h3>No Results Found</h3>`
        }else{
        console.log(queryVal)
        businessDomLoop([businesses.find(business => business.companyName.includes(queryVal))], ex4)
        }
    }
})

function checkOrders(order){
    return order < 9000
}

const bigSpenders = businesses.filter(business => {
    let spenderCheck = business.orders.every(checkOrders)
    if(!spenderCheck) {
        businessDomLoop([business], ex5)
    }
})
