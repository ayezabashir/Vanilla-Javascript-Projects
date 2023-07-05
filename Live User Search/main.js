const filter = document.getElementById('filter');
const result = document.getElementById('result');
let listItems= [];
getUsers()
async function getUsers(){
    const res = await fetch('https://randomuser.me/api?results=20');
    const {results} = await res.json();
    // console.log(data);
    result.innerHTML ='';

    results.forEach(el => {
        let listEl=  document.createElement('li');
        listItems.push(listEl);

        listEl.innerHTML=`
        <img src="${el.picture.large}" alt="${el.name.first}" />
          <div class="user-info">
                <h4>${el.name.first} ${el.name.last}</h4>
                <p>${el.location.city} ${el.location.country}</p>
          </div>
        `;

        result.appendChild(listEl);

    });
}
