const testContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userimage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
    {
        name: 'Ayeza Bashir',
        position: 'Frontend developer',
        photo: 'https://assets.leetcode.com/users/avatars/avatar_1682791920.png',
        text: 'Vestibulum auctor lorem a orci suscipit, ornare ultricies erat suscipit. Duis ante ex, rhoncus non hendrerit quis, fermentum sed odio. Sed nibh tortor, luctus ac mi id, tincidunt interdum ligula. Nam vestibulum ornare elit vitae molestie. Suspendisse ornare maximus enim, ac finibus dui euismod in. Etiam porttitor facilisis mi pellentesque ultrices. In pharetra sollicitudin ullamcorper. Curabitur lectus augue, vehicula eu magna et, ultricies tincidunt lectus'
    },
    {
        name: 'John Mayer',
        position: 'Marketing',
        photo: 'https://avatars.githubusercontent.com/u/135205679?v=4',
        text: 'Quisque risus erat, iaculis semper elit interdum, mollis auctor turpis. Donec scelerisque lorem turpis, quis congue magna pulvinar placerat. Nunc mollis neque eget tincidunt ultricies. Praesent malesuada vestibulum dui, et tristique nulla volutpat a. Mauris auctor diam sed egestas varius. Cras nec ex diam. Nulla consectetur egestas velit, quis porttitor nunc molestie nec. Duis molestie nec lacus sed dapibus.'
    },
    {
        name: 'Emma Roberts',
        position: 'Social Media Manager',
        photo: 'https://avatars.githubusercontent.com/u/111452090?v=4',
        text: 'Morbi hendrerit ex vitae pellentesque ultrices. Mauris eu sem eget massa suscipit venenatis. Nullam diam orci, ultricies a sagittis at, tristique a purus. Integer sollicitudin nisl orci, id hendrerit augue laoreet sed. Proin mollis consequat dui vitae fringilla. Vivamus ac orci sed nibh lacinia malesuada. '
    },
    {
        name: 'Robert Junior',
        position: 'Administrator',
        photo: 'https://avatars.githubusercontent.com/u/125119261?v=4',
        text: 'Ut sollicitudin, mauris in mattis blandit, ex ex finibus nisl, eget rhoncus arcu massa nec erat. Aenean ac nunc laoreet, posuere lorem quis, efficitur arcu. Morbi fringilla maximus felis. Donec a tellus ultricies, molestie urna at, porttitor velit. Maecenas convallis varius sapien at bibendum. Sed lacinia leo vehicula ante pulvinar, et facilisis ligula pulvinar.'
    },
    {
        name: 'Shawn Hardy',
        position: 'Marketing',
        photo: 'https://avatars.githubusercontent.com/u/138015685?s=100&v=4',
        text: 'Ut sollicitudin, mauris in mattis blandit, ex ex finibus nisl, eget rhoncus arcu massa nec erat. Aenean ac nunc laoreet, posuere lorem quis, efficitur arcu. Morbi fringilla maximus felis. Donec a tellus ultricies, molestie urna at, porttitor velit. Maecenas convallis varius sapien at bibendum. Sed lacinia leo vehicula ante pulvinar, et facilisis ligula pulvinar.'
    },
]

let idx = 1;
function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx];
    testimonial.innerText = text;
    userimage.src = photo;
    username.innerText = name;
    role.innerText = position;

    idx++;
    if (idx > testimonials.length - 1) {
        idx = 0;
    }
}

setInterval(() => {
    updateTestimonial();
}, 10000);
