// Variables
const facades = document.querySelector('.facades')
const interiors = document.querySelector('.interiors')

const spheres_tab = document.querySelectorAll('.spheres-tab')
const spheres_tabscontent = document.querySelectorAll('.spheres-tabscontent')

const glide__slides = document.querySelector('.glide__slides')

const test = document.querySelector('.test')


// Funtions
let load_facades_interiors = (e) => {
    for (let i = 1; i <= 16; i++) {
        let facade = `<div class="facade">
        <a href="/assets/img/facades/facade${String(i).padStart(2, '0')}.jpg">
            <img src="/assets/img/facades/facade${String(i).padStart(2, '0')}.jpg" alt="facade">
        </a>
    </div>`
        facades.innerHTML += facade
    }

    for (let i = 1; i <= 3; i++) {
        let interior = `<div class="interior">
        <a href="/assets/img/interiors/interior${String(i).padStart(2, '0')}.jpg">
            <img src="/assets/img/interiors/interior${String(i).padStart(2, '0')}.jpg" alt="interior">
        </a>
    </div>`
        interiors.innerHTML += interior
    }
}

let change_sphere = (e) => {
    spheres_tab.forEach(el => {
        el.classList.toggle("active");
    })
    spheres_tabscontent.forEach(el => {
        el.classList.toggle("active");
    })
}

let load_bricks = (e) => {
    for (let i = 1; i <= 17; i += 3) {
        let slide = `<li class="glide__slide">
    <div>
        <a href="/assets/img/bricks/brick${String(i).padStart(2, '0')}.jpg">
            <img src="/assets/img/bricks/brick${String(i).padStart(2, '0')}.jpg" alt="brick">
        </a>
    </div>
    <div>
        <a href="/assets/img/bricks/brick${String(i + 1).padStart(2, '0')}.jpg">
            <img src="/assets/img/bricks/brick${String(i + 1).padStart(2, '0')}.jpg" alt="brick">
        </a>
    </div>
    <div>
        <a href="/assets/img/bricks/brick${String(i + 2).padStart(2, '0')}.jpg">
            <img src="/assets/img/bricks/brick${String(i + 2).padStart(2, '0')}.jpg" alt="brick">
        </a>
    </div>
</li>`
        glide__slides.innerHTML += slide
    }
}


// Event Listeners
spheres_tab.forEach(el => {
    el.addEventListener("click", change_sphere)
});

document.addEventListener("DOMContentLoaded", load_facades_interiors);


// Tectures Glider
let bricks_glide = new Glide('.glide', {
    type: 'carousel',
    perView: 3
})
bricks_glide.on('mount.before', load_bricks)
bricks_glide.mount()
