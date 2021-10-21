const previous = document.querySelector('.previous');
const next = document.querySelector('.next');

const image = document.createElement('img');
image.classList.add('square')
let count = 1;
previous.insertAdjacentElement("afterend", image)

image.src = `imgs/${count}.jpg`

const nextPic = () => {
    if(count > 17){
        count = 1;
    }else{
        image.src = `imgs/${count++}.jpg`;
    }
    return image;
}

const previousPic = () => {
    if(count < 1){
        count = 17;
    }else{
        image.src = `imgs/${count--}.jpg`
    }
    return image;
}
previous.addEventListener('click', previousPic)
next.addEventListener('click', nextPic)




