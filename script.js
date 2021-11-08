
document.querySelector('.male-button').addEventListener('click', ()=>{
    maleGenerator('https://randomuser.me/api/?results=1&gender=male')
})
document.querySelector('.female-button').addEventListener('click', ()=>{
    maleGenerator('https://randomuser.me/api/?results=1&gender=female')
})


const maleGenerator = (url)=>{
    document.querySelector('.container').classList.add('container--visible')
    fetch(url)
        .then(response =>  {
            

            return response.json()
        })
        .then(data => {
            // console.log(data.results)
            showMale(data.results)
        })
        .catch(err => console.log(err))
}



const showMale = (users)=>{
    console.log(users)
    const malePicture = document.querySelector('.picture');
    const maleName = document.querySelector('.name')
    const maleSurname = document.querySelector('.surname')
    const maleStreet = document.querySelector('.street');
    const maleCity = document.querySelector('.city')
    const maleCountry = document.querySelector('.country');
    const maleMail = document.querySelector('.mail');
    const maleTel = document.querySelector('.phone');
        users.forEach(user => {
        malePicture.src = user.picture.medium;
        maleName.textContent = user.name.first;
        maleSurname.textContent = user.name.last;
        maleStreet.textContent = `${user.location.street.name} ${user.location.street.number}`;
        maleCity.textContent = user.location.city;
        maleCountry.textContent = user.location.country;
        maleMail.textContent = user.email;
        maleTel.textContent = `tel: ${user.cell}`
        })  
    }
