const labels = document.querySelectorAll('.form-control label');

// Since this is node list we can use forEach() on it

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, index) =>
            `<span style="transition-delay:${index * 40}ms">${letter}</span>`
        )
        .join('')
})