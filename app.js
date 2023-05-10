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
let twitterUrl = '';
let githubUrl = '';
let linkedinUrl = '';
let instagramUrl = '';
let role = '';
let city = '';
let country = '';

const render = (content, coverStatus, lastName, firstName, twitter, github, linkedin, instagram, role, city, country) => {
    const showStatus ={
        visible: 'visible',
        invisible: 'invisible'
    };
    const showTwitter = () => twitter.length === 0? showStatus.invisible : showStatus.visible;
    const showGitHub = () => github.length === 0? showStatus.invisible : showStatus.visible;
    const showLinkedin = () => linkedin.length === 0? showStatus.invisible : showStatus.visible;
    const showInstagram = () => instagram.length === 0? showStatus.invisible : showStatus.visible;

    let show = '';
    coverStatus === 'false'? show = showStatus.invisible: show = showStatus.visible;
    let widgetCard = (`
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
                <span class="${showTwitter()}"><a href="${twitter}"><i class="fa-brands fa-square-twitter fa-lg"></i></a></span>
                <span class="${showGitHub()}"><a href="${github}"><i class="fa-brands fa-square-github fa-lg"></i></a></span>
                <span class="${showLinkedin()}"><a href="${linkedin}"><i class="fa-brands fa-linkedin fa-lg"></i></a></span>
                <span class="${showInstagram()}"><a href="${instagram}"><i class="fa-brands fa-square-instagram fa-lg"></i></a></span>
            </div>  
        </aside>`)

    content.innerHTML  = widgetCard;
    console.log(firstName)
}

const selectShowStatusCover = (selectIncludeCover) => `${selectIncludeCover}`;

const setFirstName = (inputFirstname) => `${inputFirstname}`;
const setLastName = (inputLastName) => `${inputLastName}`;

//const positionSM = (position) => position;

const setTwitter = (inputTwitter) => `${inputTwitter}`;
const setGitHub = (inputGithub) => `${inputGithub}`;
const setLinkedin = (inputLinkedin) => `${inputLinkedin}`;
const setInstagram = (inputInstagram) => `${inputInstagram}`;


const setRole = (role) => role;


try{
    selectIncludeCover.addEventListener('change', () => {
        coverStatus = selectShowStatusCover(selectIncludeCover.value);
        render(content, coverStatus, lastName, firstName, twitterUrl, githubUrl, linkedinUrl, instagramUrl, role, city, country);
    });

    inputLastName.addEventListener('keyup', () => {
        lastName = setLastName(inputLastName.value);
        render(content, coverStatus, lastName, firstName, twitterUrl, githubUrl, linkedinUrl, instagramUrl, role, city, country);
    });

    inputFirstName.addEventListener('keyup', () => {
        firstName = setFirstName(inputFirstName.value);
        render(content, coverStatus, lastName, firstName, twitterUrl, githubUrl, linkedinUrl, instagramUrl, role, city, country);
    })

    //selectPosition.addEventListener('keyup', () => {
    //    position = positionSM(selectPosition.value);
    //    render(content, coverStatus, lastName, firstName,selectPosition);
    //})

    inputTwitter.addEventListener('keyup', () => {
        twitterUrl = setTwitter(inputTwitter.value);
        render(content, coverStatus, lastName, firstName, twitterUrl, githubUrl, linkedinUrl, instagramUrl, role, city, country);
    })

    inputGithub.addEventListener('keyup', () => {
        githubUrl = setGitHub(inputGithub.value);
        render(content, coverStatus, lastName, firstName, twitterUrl, githubUrl, linkedinUrl, instagramUrl, role, city, country);
    })

    inputLinkedin.addEventListener('keyup', () => {
        linkedinUrl = setLinkedin(inputLinkedin.value);
        render(content, coverStatus, lastName, firstName, twitterUrl, githubUrl, linkedinUrl, instagramUrl, role, city, country);
    })

    inputInstagram.addEventListener('keyup', () => {
        instagramUrl = setInstagram(inputInstagram.value);
        render(content, coverStatus, lastName, firstName, twitterUrl, githubUrl, linkedinUrl, instagramUrl, role, city, country);
    })

    selectRole.addEventListener('change', () => {
        role = setRole(selectRole.value);
        render(content, coverStatus, lastName, firstName, twitterUrl, githubUrl, linkedinUrl, instagramUrl, role, city, country);
    })

    selectCity.addEventListener('change', () => {
        city = setFirstName(selectCity.value);
        render(content, coverStatus, lastName, firstName, twitterUrl, githubUrl, linkedinUrl, instagramUrl, role, city, country);
    })

    selectCountry.addEventListener('change', () => {
        country = setFirstName(selectCountry.value);
        render(content, coverStatus, lastName, firstName, twitterUrl, githubUrl, linkedinUrl, instagramUrl, role, city, country);
    })



    render(content, coverStatus, lastName, firstName, twitterUrl, githubUrl, linkedinUrl, instagramUrl, role, city, country);
    console.log(firstName)
}catch (e) {
    alert('error '+ e)
}
