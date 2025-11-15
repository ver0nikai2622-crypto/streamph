//burahin mo to
document.querySelectorAll('.alertMuna').forEach((pinindot)=>{
    pinindot.addEventListener('click', ()=> {
        alert('Not Available For Now');
    });
});
window.addEventListener('hashchange', ()=> {
    if(window.location.hash !== ''){
        document.getElementById('main').style.display = 'none';
        document.getElementById('modal-window').style.display = 'flex';
    }else{
    document.getElementById('myIframe').src = '';
        document.getElementById('main').style.display = 'block';
        document.getElementById('modal-window').style.display = 'none';
    }
});
//navigation
let showSidebar = document.getElementById('showSidebar');
          let hideSidebar = document.getElementById('hideSidebar');
          const sidebar = document.querySelector('.sidebar');
          
          showSidebar.addEventListener('click', ()=>{
          //window.location.hash = '#sidebarOpened';
              sidebar.style.display = 'flex';
          });
          
          hideSidebar.addEventListener('click', ()=>{
              sidebar.style.display = 'none';
          });
//end of nav
const myAdLink = 'http://ak.stikroltiltoowi.net/4/8771585';
let latestMovieText = document.querySelector('.latest-text');
const popularAPI = "https://api.themoviedb.org/3/movie/popular";
const latestAPI = "https://api.themoviedb.org/3/discover/movie";
const topRatedAPI = "https://api.themoviedb.org/3/movie/top_rated";
const myAPI = "fc6800402ffd747e928d3b0837704dc4";
const saGitna = "?api_key=";
let originalImage = "https://image.tmdb.org/t/p/original";
let posterPath = "https://image.tmdb.org/t/p/w500";
//pag fetch ng background
let navBg = document.getElementById('navBg');
fetch(`${popularAPI}${saGitna}${myAPI}`)
.then(res => res.json())
.then(data => {
    //console.log(data);
    navBg.style.backgroundImage = `url(${originalImage}${data.results[0].backdrop_path})`;
    
    
})//sa fetch to
.catch(err => console.error(err));
//end ng background fetch
//sa pagfetch ng latest Movies
let moviePosters = [document.getElementById('poster1'), document.getElementById('poster2'), document.getElementById('poster3'), document.getElementById('poster4'), document.getElementById('poster5'), document.getElementById('poster6'), document.getElementById('poster7'), document.getElementById('poster8'), document.getElementById('poster9'), document.getElementById('poster10'), document.getElementById('poster11'), document.getElementById('poster12'), document.getElementById('poster13'), document.getElementById('poster14'), document.getElementById('poster15'), document.getElementById('poster16'), document.getElementById('poster17'), document.getElementById('poster18'), document.getElementById('poster19'), document.getElementById('poster20')];
let movieTitle = [document.getElementById('movieTitle1'), document.getElementById('movieTitle2'), document.getElementById('movieTitle3'), document.getElementById('movieTitle4'), document.getElementById('movieTitle5'), document.getElementById('movieTitle6'), document.getElementById('movieTitle7'), document.getElementById('movieTitle8'), document.getElementById('movieTitle9'), document.getElementById('movieTitle10'), document.getElementById('movieTitle11'), document.getElementById('movieTitle12'), document.getElementById('movieTitle13'), document.getElementById('movieTitle14'), document.getElementById('movieTitle15'), document.getElementById('movieTitle16'), document.getElementById('movieTitle17'), document.getElementById('movieTitle18'), document.getElementById('movieTitle19'), document.getElementById('movieTitle20')];
let movieRate = [document.getElementById('rating1'), document.getElementById('rating2'), document.getElementById('rating3'), document.getElementById('rating4'), document.getElementById('rating5'), document.getElementById('rating6'), document.getElementById('rating7'), document.getElementById('rating8'), document.getElementById('rating9'), document.getElementById('rating10'), document.getElementById('rating11'), document.getElementById('rating12'), document.getElementById('rating13'), document.getElementById('rating14'), document.getElementById('rating15'), document.getElementById('rating16'), document.getElementById('rating17'), document.getElementById('rating18'), document.getElementById('rating19'), document.getElementById('rating20')];
let modal = document.getElementById('modal-window');
let closeBtn = document.getElementById('closeBtn');
let myIframe = document.getElementById('myIframe');
let serverTwo = document.getElementById('server2');
let serverThree = document.getElementById('server3');
let playingPoster = document.getElementById('playingPoster');
let playingTitle = document.getElementById('playingTitle');
let sypnosis = document.getElementById('sypnosis');
let movieGenre = document.getElementById('movieGenre');
let releaseDate = document.getElementById('releaseDate');
let playingRating = document.getElementById('playingRating');
const genreMap = {
  28: "Action",
  12: "Adveture",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "Tv Movie",
  53: "Thriller",
  10752: "War",
  37: "Western"
}
closeBtn.addEventListener('click', ()=> {
window.open(`${myAdLink}`);
    modal.style.display = 'none';
    document.getElementById('main').style.display = 'block';
});

function serverBtns(fetchArgs, index){
    if(myIframe.src !== `$https://111movies.com/movie/${fetchArgs.results[index].id}`){
         serverTwo.addEventListener('click', ()=> {
         serverTwo.style.color = 'white';
             serverTwo.style.backgroundColor = 'green';
             serverThree.style.color = '#d9d9d9';
             serverThree.style.backgroundColor = '#848484';
             
             myIframe.src = `https://vidfast.pro/movie/${laman.results[index].id}`;
         });
         serverThree.addEventListener('click', ()=> {
         serverThree.style.color = 'white';
             serverThree.style.backgroundColor = 'green';
             serverTwo.style.color = '#d9d9d9';
             serverTwo.style.backgroundColor = '#848484';
             
             myIframe.src = `https://vidsrc.xyz/embed/movie/${laman.results[index].id}`;
         });
    }//dulo ng if
}
fetch(`${popularAPI}${saGitna}${myAPI}`)
 .then(res => res.json())
 .then(laman => {
     //console.log(laman);
     moviePosters.forEach((images, index)=>{
         if(laman.results && laman.results[index] && laman.results[index].poster_path){
    
             images.src = `${posterPath}${laman.results[index].poster_path}`;
             images.classList.remove('skeleton');
         }
         //pagpinindot
         images.addEventListener('click', ()=> {
         window.open(`${myAdLink}`);
         scrollTo({top:0, behavior: 'smooth'});
             window.location.hash = `#${laman.results[index].id}`;
             playingPoster.src = `${originalImage}${laman.results[index].backdrop_path}`;
            
         playingTitle.textContent = `${laman.results[index].title}`;
         sypnosis.textContent = `${laman.results[index].overview}`;
         const genreIds = laman.results[index].genre_ids;
        const genreNames = genreIds.map(id => genreMap[id]).join(', ');
         movieGenre.textContent = `Genre: ${genreNames}`;
         releaseDate.textContent = `Release Date: ${laman.results[index].release_date}`;
         playingRating.textContent = `Rating: ⭐${laman.results[index].vote_average.toFixed(1)}/10`;
              myIframe.src = `https://111movies.com/movie/${laman.results[index].id}`;
             
         });
         //buttons sa server
         serverBtns(laman, index);
         
         
     });//dulo ng forEach
     movieTitle.forEach((titles, index) => {
         if(laman.results && laman.results[index] && laman.results[index].title){
             titles.textContent = `${laman.results[index].title} (${laman.results[index].release_date.substring(0, 4)})`;
         }
     });//dulo ng forEach
     movieRate.forEach((rate, index) => {
         if(laman.results && laman.results[index] && laman.results[index].vote_average){
             rate.textContent = `⭐${laman.results[index].vote_average.toFixed(1)}/10`;
         }
     });//dulo ng forEach
 })//dulo ng fetch
 .catch(err => console.error(err));

let prevBtn = document.getElementById('prev');
let currentPage = document.getElementById('currentPage');
let nextBtn = document.getElementById('next');
let currentCount = 1;

nextBtn.addEventListener('click', ()=> {
    window.scrollTo({top: 0, behavior: 'smooth'});
         resetPosters();
         nextBtnHandler(currentCount++, karentPage);
         currentPage.textContent = currentCount;
});

prevBtn.addEventListener('click', ()=> {
         if(currentCount > 1){
             window.scrollTo({top: 0, behavior: 'smooth'});
             currentCount--;
             resetPosters();
             karentPage();
             currentPage.textContent = currentCount;
         }
     });
     
function nextBtnHandler(kasalukuyanBilang, kasalukuyanPage){
         kasalukuyanBilang;  
         kasalukuyanPage();
}

function resetPosters() {
  moviePosters.forEach(images => {
    images.src = '';
    images.classList.add('skeleton');
  });
  
  movieTitle.forEach(titles => {
    titles.textContent = '';
  });
  
  movieRate.forEach(rate => {
    rate.textContent = '⭐0/0';
  });
}
karentPage();
function karentPage(){
    fetch(`${popularAPI}${saGitna}${myAPI}&page=${currentCount}`)
     .then(res => res.json())
     .then(sunod => {
         //console.log(sunod);
                  moviePosters.forEach((images, index)=>{
         if(sunod.results && sunod.results[index] && sunod.results[index].poster_path){
             images.src = `${posterPath}${sunod.results[index].poster_path}`;
             images.classList.remove('skeleton');
             
         }
         images.addEventListener('click', ()=> {
         
         scrollTo({top:0, behavior: 'smooth'});
             window.location.hash = `#${sunod.results[index].id}`;
             playingPoster.src = `${originalImage}${sunod.results[index].backdrop_path}`;
            
         playingTitle.textContent = `${sunod.results[index].title}`;
         sypnosis.textContent = `${sunod.results[index].overview}`;
         const genreIds = sunod.results[index].genre_ids;
        const genreNames = genreIds.map(id => genreMap[id]).join(', ');
         movieGenre.textContent = `Genre: ${genreNames}`;
         releaseDate.textContent = `Release Date: ${sunod.results[index].release_date}`;
         playingRating.textContent = `Rating: ⭐${sunod.results[index].vote_average.toFixed(1)}/10`;
              myIframe.src = `https://111movies.com/movie/${sunod.results[index].id}`;
             
         });
     });//dulo ng forEach
     movieTitle.forEach((titles, index) => {
         if(sunod.results && sunod.results[index] && sunod.results[index].title){
             titles.textContent = `${sunod.results[index].title} (${sunod.results[index].release_date.substring(0, 4)})`;
         }
     });//dulo ng forEach
     movieRate.forEach((rate, index) => {
         if(sunod.results && sunod.results[index] && sunod.results[index].vote_average){
             rate.textContent = `⭐${sunod.results[index].vote_average.toFixed(1)}/10`;
         }
     });//dulo ng forEach
     })//sa fetch
     .catch(err => console.err(err))
}
//para sa search
let searchInput = document.getElementById('search-input');
let searchBtn = document.getElementById('search-btn');
let resultPage = 1;
const searchApi = 'https://api.themoviedb.org/3/search/movie?api_key=';

searchBtn.addEventListener('click', ()=> {
    //console.log(searchInput.value);  
    if(searchInput.value === '' || null) {
        alert('please type movie');
    }else{
        document.querySelector('.latest-text').textContent = searchInput.value;
        resetPosters();
        searchFetch();
        currentCount = 1;
        currentPage.textContent = currentCount;
    }
});
function searchFetch(){
    let keyword = searchInput.value;
    fetch(`${searchApi}${myAPI}&query=${encodeURIComponent(keyword)}&page=${resultPage}`)
    .then(res => res.json())
    .then(search => {
        //console.log(search);
        resetPosters();
        moviePosters.forEach((images, index) => {
            if(search.results && search.results[index] && search.results[index].poster_path){
                images.src = `${posterPath}${search.results[index].poster_path}`;
                images.classList.remove('skeleton');
            }
            images.addEventListener('click', ()=> {
         
         scrollTo({top:0, behavior: 'smooth'});
             window.location.hash = `#${search.results[index].id}`;
             playingPoster.src = `${originalImage}${search.results[index].backdrop_path}`;
            
         playingTitle.textContent = `${search.results[index].title}`;
         sypnosis.textContent = `${search.results[index].overview}`;
         const genreIds = search.results[index].genre_ids;
        const genreNames = genreIds.map(id => genreMap[id]).join(', ');
         movieGenre.textContent = `Genre: ${genreNames}`;
         releaseDate.textContent = `Release Date: ${search.results[index].release_date}`;
         playingRating.textContent = `Rating: ⭐${search.results[index].vote_average.toFixed(1)}/10`;
              myIframe.src = `https://111movies.com/movie/${sunod.results[index].id}`;
             
         });
         movieTitle.forEach((titles, index) => {
         titles.textContent = `Loading`;
         if(search.results && search.results[index] && search.results[index].title){
             titles.textContent = `${search.results[index].title} (${search.results[index].release_date.substring(0, 4)})`;
         }
     });//dulo ng forEach
     movieRate.forEach((rate, index) => {
     rate.textContent = 'N/A';
         if(search.results && search.results[index] && search.results[index].vote_average){
             rate.textContent = `⭐${search.results[index].vote_average.toFixed(1)}/10`;
         }
     });//dulo ng forEach
        });//dulo ng forEach
        
        //to navigate page
   nextBtn.addEventListener('click', ()=> {
   window.scrollTo({top: 0, behavior: 'smooth'});
         resetPosters();
         nextBtnHandler(resultPage++, searchFetch);
         //currentPage.textContent = currentCount;
   
});
        
     prevBtn.addEventListener('click', ()=> {
         if(resultPage > 1){
             window.scrollTo({top: 0, behavior: 'smooth'});
             resultPage--;
             resetPosters();
             searchFetch();
             currentPage.textContent = resultPage;
         }
     }); 
                
    })
    .catch(err => console.log(err));
}


//problem to solve
//ung nextBtn nag 1 2 4 8 16 malapit na




//