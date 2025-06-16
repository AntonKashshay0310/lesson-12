const gallery_list = document.querySelector('#gallery__list')

const gallery = [
    {
        image:'',
        title:'',
    },
    {
        image:'',
        title:'',
    },
    {
        image:'',
        title:'',
    }
]

const markUp = gallery_list.map(({image, title}) => `<li class="card gallery__item" style="width: 18rem;">
            <img src= ${image} class="card-img-top" alt=${title}>
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </li>`).join('')

gallery_list.insertAdjacentHTML('beforeend', markUp)