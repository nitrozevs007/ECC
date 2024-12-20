let bottom = document.getElementById('bottom-btn')
let transparetn = document.getElementById('trnasparent-text')
let fullText = document.getElementById('full-text')

let isSecondPVisible = false;

const toggleParagraphs = (event) => {
    if (isSecondPVisible) {
        transparetn.classList.remove('hidden')
        fullText.classList.add('hidden')
        isSecondPVisible = false
        bottom.classList.add('hidden')
    } else {
        transparetn.classList.add('hidden')
        fullText.classList.remove('hidden')
        bottom.classList.add('hidden')
        isSecondPVisible = true

        // Stop event propagation to prevent immediate closing
        event.stopPropagation()
    }
}

const closeParagraph = () => {
    if (isSecondPVisible) {
        transparetn.classList.remove('hidden')
        fullText.classList.add('hidden')
        bottom.classList.remove('hidden')
        isSecondPVisible = false
    }
}


bottom.addEventListener('click', toggleParagraphs);
document.addEventListener('click', closeParagraph);
fullText.addEventListener('click', (event) => event.stopPropagation());


// bottom.addEventListener('click', () => {
//     transparetn.classList.toggle('hidden')
//     fullText.classList.toggle('hidden')
// })
