const textarea = document.getElementById('textarea');
const tagsElment = document.getElementById('tags');
textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if (e.key == "Enter") {

        setTimeout(() => {
            e.target.value = '';
        }, 10)

        randomSelect();
    }
})

function createTags(input) {
    const tags = input
        .split(',')
        .filter(tag => tag.trim() !== '')
        .map(tag => tag.trim());

    tagsElment.innerHTML = ""; // clearing tags
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsElment.appendChild(tagEl);
    })
}

function randomSelect() {
    const times = 30;

    // starts picking tags
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100)

    // stops at any tag
    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    // when we use querySelectorAll, it's a node list we bring in
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}

