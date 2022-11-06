//   checkout dropdown section
const checkoutDropDown = document.querySelector('.checkout-section');
const cartBtn = document.querySelector('.avatar-and-cart .cart')

cartBtn.addEventListener('click', function () {
    checkoutDropDown.classList.toggle('show-checkout-dropdown')
})

//   Sidenav 

const sideNav = document.querySelector('.nav-list');
const OpenNav = document.querySelector('.menu');
const closeNav = document.querySelector('.closeBtn')

OpenNav.addEventListener('click', function () {
    sideNav.classList.add('show-nav-list')
})
closeNav.addEventListener('click', function () {
    sideNav.classList.remove('show-nav-list')

})

// quantity Btns

const btns = document.querySelectorAll('.btn');
const quantityBtn = document.querySelector('.quantity');
const submitBtn = document.querySelector('.add-to-cart');
const notifyAlert = document.querySelector('.avatar-and-cart .cart-notify');
const items = document.querySelector('.shoe-price .items');
const finalPrice = document.querySelector('.shoe-price .final-price');
const checkOutCard = document.querySelector('.checkout-card');
const checkoutPlaceholder = document.querySelector('.checkout-placeholder')
const trashIcon = document.querySelector('.trash')

let count = 0

function addingValue(e) {
    const btnValue = e.currentTarget.classList;
    if (btnValue.contains("plus")) {
        count++;
    }
    else if (btnValue.contains('minus')) {
        count = count > 0 ? --count : 0
    }
    else {
        count = 0
    }
    quantityBtn.textContent = count;

}

function addToCart() {
    if (count > 0) {
        notifyAlert.classList.add('show');
        notifyAlert.textContent = count;
        items.textContent = count;
        checkoutPlaceholder.classList.add('hide-placeholder');
        checkOutCard.classList.add('show-card')
    }
    const finalAmount = count * 125;
    finalPrice.innerHTML = `<span class="final-price">$${finalAmount}</span>`

}
function resetCart() {
    checkOutCard.classList.remove('show-card')
    checkoutPlaceholder.classList.remove('hide-placeholder');
    notifyAlert.classList.remove('show');

}

btns.forEach(btn => { btn.addEventListener("click", (e) => addingValue(e)) });
submitBtn.addEventListener('click', () => addToCart())
trashIcon.addEventListener('click', () => {
    resetCart()
})



// Slideshow Indicators


const imgs = document.querySelectorAll('.thumbnails-img a');
const imgBtns = [...imgs];

console.log(imgs)
console.log(imgBtns)

let currentImg = 1

imgs.forEach((imgItem) => {
    imgItem.addEventListener('click', (e) => {
        e.preventDefault()
        currentImg = imgItem.dataset.id
        slideImg()


    })
})


const slideImg = () => {
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth
    console.log(displayWidth)

    const data = document.querySelector('.img-showcase').style.transform = `translateX(${- (currentImg - 1) * displayWidth}px)`;

}

window.addEventListener('resize', slideImg);

// slider with arrow
const productImgs = document.querySelectorAll('.productImg')
console.log(productImgs)

const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')


let currentItem = 1

const id = () => {
    productImgs.forEach((imgs) => {
        currentImg = imgs.dataset.id

    })
}


nextBtn.addEventListener('click', () => {
    // currentItem++
    id()
    slideImg()
    console.log(currentItem)



})
// prevBtn.addEventListener('click', () => {
//     console.log('prev')
// })