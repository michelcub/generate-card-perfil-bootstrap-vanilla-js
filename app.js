const selectIncludeCover = document.querySelector('#selectIncludeCover')  ;
const inputFirstName = document.querySelector('#inputFirstName');
const inputLastName = document.querySelector('#inputLastName');
const selectPosition = document.querySelector('#selectPosition');
const inputTwitter = document.querySelector('#inputAcountTwitter');
const inputGithub = document.querySelector('#inputAcountGithub');
const inputLinkedin = document.querySelector('#inputAcountLinkedin');
const inputInstagram = document.querySelector('#inputAcountInstagram');
const selectRole = document.querySelector('#selectRole');
const selectCity = document.querySelector('#selectCity');
const selectCountry = document.querySelector('#selectCounty');
const content = document.querySelector('#content');

let coverStatus = '';
let lastName = '';
let firstName = '';
let position = '';
//let twitterUrl = '';
//let githubUrl = '';
//let linkedinUrl = '';
//let instagramUrl = '';
let role = '';
let city = '';
let country = '';

const render = (content, coverStatus, lastName, firstName, role, city, country) => {
    const showCover ={
        visible: 'visible',
        invisible: 'invisible'
    };
    let show = '';
    coverStatus === 'false'? show = showCover.invisible: show = showCover.visible;
    let widget = (`
       <article class="col-3 card mt-5 p-0 shadow">
           <div class="card-img-top w-100 h-50 d-flex justify-content-center">
               <img id="imgCover-card" class="w-100 h-50 ${show}" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mEIWZjRFdiO4YIkq790lTaNzTtCH6DcwrQ&usqp=CAU" alt="">
               <img class="position-absolute z-1 object-fit-cover rounded-circle w-50 mb align-self-end mt-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoxCqTqIkgZlqyTxeIT2MbGXLXMDLFM3sxMw&usqp=CAU" alt="" id="imgAvatar">
           </div>
           <div class="card-body text-center">
               <h1 class="card-title" id="fullName" >${lastName}, ${firstName}</h1>
               <p class="card-text fs-5" id="role">${role}</p>
               <p class="card-text text-secondary" id="location">${city}, ${country}</p>
           </div>
        </article>
        <aside class="col-1 d-flex flex-column fs-3 p-0">
            <div class="d-flex flex-column w-50 align-items-center bg-light shadow">
                <span><a href=""><i class="fa-brands fa-square-twitter fa-lg"></i></a></span>
                <span><a href=""><i class="fa-brands fa-square-github fa-lg"></i></a></span>
                <span><a href=""><i class="fa-brands fa-linkedin fa-lg"></i></a></span>
                <span><a href=""><i class="fa-brands fa-square-instagram fa-lg"></i></a></span>
            </div>  
        </aside>`)

    content.innerHTML  = widget;
    console.log(firstName)
}

const selectShowStatusCover = (selectIncludeCover) => `${selectIncludeCover}`;

const setFirstName = (inputFirstname) => `${inputFirstname}`;
const setLastName = (inputLastName) => `${inputLastName}`;

//const positionSM = (position) => position;



const setRole = (role) => role;

//const location = (city, country) => `${city}, ${country}`;



try{
    selectIncludeCover.addEventListener('change', () => {
        coverStatus = selectShowStatusCover(selectIncludeCover.value);
        render(content, coverStatus, lastName, firstName, role, city, country);
    });

    inputLastName.addEventListener('keyup', () => {
        lastName = setLastName(inputLastName.value);
        render(content, coverStatus, lastName, firstName, role, city, country);
    });

    inputFirstName.addEventListener('keyup', () => {
        firstName = setFirstName(inputFirstName.value);
        render(content, coverStatus, lastName, firstName, role, city, country);
    })

    //selectPosition.addEventListener('keyup', () => {
    //    position = positionSM(selectPosition.value);
    //    render(content, coverStatus, lastName, firstName,selectPosition);
    //})

    selectRole.addEventListener('change', () => {
        role = setRole(selectRole.value);
        render(content, coverStatus, lastName, firstName, role, city, country);
    })

    selectCity.addEventListener('change', () => {
        city = setFirstName(selectCity.value);
        render(content, coverStatus, lastName, firstName, role, city, country);
    })

    selectCountry.addEventListener('change', () => {
        country = setFirstName(selectCountry.value);
        render(content, coverStatus, lastName, firstName, role, city, country);
    })



    render(content, coverStatus, lastName, firstName, role, city, country);
    console.log(firstName)
}catch (e) {
    alert('error '+ e)
}
