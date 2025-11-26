const navBg = document.querySelector('.nav');
const myAd = 'https://ey43.com/4/10192059';
const popularAPI = "https://api.themoviedb.org/3/discover/movie";
const latestAPI = "https://api.themoviedb.org/3/discover/movie";
const topRatedAPI = "https://api.themoviedb.org/3/movie/top_rated";
const searchAPI = 'https://api.themoviedb.org/3/search/movie?api_key=';
const myAPI = "fc6800402ffd747e928d3b0837704dc4";
const saGitna = "?api_key=";
const originalImage = "https://image.tmdb.org/t/p/original";
const posterPath = "https://image.tmdb.org/t/p/w500";
const popularMovies = document.querySelectorAll('.popular-poster');
const popularRating = document.querySelectorAll('.popular-rating');
const popularTitle = document.querySelectorAll('.popular-title');
const latestMovies = document.querySelectorAll('.latest-poster');
const latestRating = document.querySelectorAll('.latest-rating');
const latestTitle = document.querySelectorAll('.latest-title');
const topRatedMovies = document.querySelectorAll('.topRated-poster');
const topRatedRating = document.querySelectorAll('.topRated-rating');
const topRatedTitle = document.querySelectorAll('.topRated-title');
const searchedMovies = document.querySelectorAll('.searched-poster');
const searchedRating = document.querySelectorAll('.searched-rating');
const searchedTitle = document.querySelectorAll('.searched-title');
const urlOne = `${popularAPI}${saGitna}${myAPI}&with_genres=27&sort_by=popularity.desc`;
const urlTwo = `${latestAPI}${saGitna}${myAPI}`;
const urlThree = `${topRatedAPI}${saGitna}${myAPI}`;
const morePageBtn = document.querySelector('.morePageBtn');
const prevPageCon = document.getElementById('prevPageCon');
const prevPageBtn = document.querySelector('.prevPageBtn');
const moreBtnLatest = document.querySelector('.moreBtnLatest');
const moreBtnTopRated = document.querySelector('.moreBtnTopRated');
const moreBtnSearched = document.querySelector('.moreBtnSearched');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');
const menu = document.querySelector('.burger-menu');
const closeBtn = document.querySelector('.closeBtn');
const sidebar = document.querySelector('.sidebar-wrapper');

//sa menua
menu.addEventListener('click', ()=> {
    sidebar.classList.add('show');
});

closeBtn.addEventListener('click', ()=> {
    sidebar.classList.remove('show');
});
const genreList = document.querySelectorAll('.genreHide');
const genreBtn = document.querySelector('.genreBtn');
genreBtn.addEventListener('click', ()=> {
    genreList.forEach(genre => {
        genre.style.display = genre.style.display === 'block' ? 'none' : 'block';
    });
});
const yearList = document.querySelectorAll('.yearHide');
const yearBtn = document.querySelector('.yearBtn');
yearBtn.addEventListener('click', ()=> {
    yearList.forEach(year => {
        year.style.display = year.style.display === 'block' ? 'none' : 'block';
    });
});

onLoad(popularMovies, popularRating, popularTitle);
onLoad(latestMovies, latestRating, latestTitle);
onLoad(topRatedMovies, topRatedRating, topRatedTitle);
saPagFetch(urlOne);

function saPagFetch(url){
    fetch(url)
     .then(response => response.json())
     .then(data => {
         //console.log(data);
         if(data.results && data.results.length > 0){
             posterFunc(popularMovies, data.results);
             ratingFunc(popularRating, data.results);
             titleFunc(popularTitle, data.results);
             
         }
     })
     .catch(error => console.error(error));
}

morePageButton(morePageBtn);
let currentCount = 1;
function secondFetch(url){
    fetch(url)
     .then(response => response.json())
     .then(data => {
         if(data.results && data.results.length > 0){
             posterFunc(popularMovies, data.results);
             ratingFunc(popularRating, data.results);
             titleFunc(popularTitle, data.results);
         }
     })
     .catch(error => console.error(error));
}

function morePageButton(pindutan){
    pindutan.addEventListener('click', ()=> {
    prevPageCon.style.display = 'flex';
        onLoad(popularMovies, popularRating, popularTitle);
        currentCount++;
        let urlSecond = `${popularAPI}${saGitna}${myAPI}&with_genres=27&sort_by=popularity.desc&page=${currentCount}`;
        //pumunta sa secondfetch pag ka click
        secondFetch(urlSecond);
        popularScrollContainer.scrollBy({
            left: -5000,
            behavior: "smooth"            
        });
        
    });
}
//check kung ung mga page ay nasa 1
prevPageButton(prevPageBtn);
function prevPageButton(pindutan){
    if(currentCount >= 1){
        pindutan.addEventListener('click', ()=> {
        onLoad(popularMovies, popularRating, popularTitle);
            currentCount--;
            let urlSecondPrev = `${popularAPI}${saGitna}${myAPI}&with_genres=27&sort_by=popularity.desc&page=${currentCount}`;
            secondFetch(urlSecondPrev);
                popularScrollContainer.scrollBy({
                left: 5000,
                behavior: "smooth"              
            });
            prevButtonVisibility();
        });
    }
}
function prevButtonVisibility(){
    if(currentCount <= 1){
        prevPageCon.style.display = 'none';
    }else{
        prevPageCon.style.display = 'flex';
    }
}


sapagFetchLatest(urlTwo)
//sapagFetch ng latest
function sapagFetchLatest(url){
    fetch(url)
     .then(response => response.json())
     .then(data => {
     navBg.style.backgroundImage = `url(${originalImage}${data.results[0].backdrop_path})`
         if(data.results && data.results.length > 0){
             posterFunc(latestMovies, data.results);
             ratingFunc(latestRating, data.results);
             titleFunc(latestTitle, data.results);
         }
         morePageBtnLatest(moreBtnLatest);
     })
     .catch(error => console.error(error));
}

let latestCurrentCount = 1;
function morePageBtnLatest(pindutan){
    pindutan.addEventListener('click', ()=> {
        onLoad(latestMovies, latestRating, latestTitle);
        latestCurrentCount++;
        let latestUrl = `${popularAPI}${saGitna}${myAPI}&page=${latestCurrentCount}`
        sapagFetchLatest(latestUrl);
        latestScrollContainer.scrollBy({
            left: -5000,
            behavior: "smooth"
        });
        prevPageButtonLatestVisibility();
    });
}

const prevPageConLatest = document.getElementById('prevPageConLatest');
const prevPageBtnLatest = document.querySelector('.prevPageBtnLatest');

prevPageButtonLatest(prevPageBtnLatest);

function prevPageButtonLatest(pindutan){
    if(latestCurrentCount >= 1){
        pindutan.addEventListener('click', ()=> {
        onLoad(latestMovies, latestRating, latestTitle);
            latestCurrentCount--;
            let latestUrlPrev = `${popularAPI}${saGitna}${myAPI}&page=${latestCurrentCount}`
        sapagFetchLatest(latestUrlPrev);            
            latestScrollContainer.scrollBy({
                left: 5000,
                behavior: "smooth"           
            });
            prevPageButtonLatestVisibility();
        });
        
    }
}

function prevPageButtonLatestVisibility(){
    if(latestCurrentCount <= 1){
        prevPageConLatest.style.display = 'none';
    }else{
        prevPageConLatest.style.display = 'flex';
    }
}

sapagFetchTopRated(urlThree);
function sapagFetchTopRated(url){
    fetch(url)
     .then(response => response.json())
     .then(data => {
         if(data.results && data.results.length > 0){
             posterFunc(topRatedMovies, data.results);
             ratingFunc(topRatedRating, data.results);
             titleFunc(topRatedTitle, data.results);
         }
         morePageBtnTopRated(moreBtnTopRated);
     })
     .catch(error => console.error(error));
}
//sa top rated na btn
let topRatedCurrentCount = 1;
function morePageBtnTopRated(pindutan){
    pindutan.addEventListener('click', ()=> {
        onLoad(topRatedMovies, topRatedRating, topRatedTitle);
        topRatedCurrentCount++;
        let topRatedUrl = `${topRatedAPI}${saGitna}${myAPI}&page=${topRatedCurrentCount}`
        sapagFetchTopRated(topRatedUrl);
        topRatedScrollContainer.scrollBy({
            left: -5000,
            behavior: "smooth"
        });
        prevPageButtonTopRatedVisibility();
    });
}

const prevPageConTopRated = document.getElementById('prevPageConTopRated');
const prevPageBtnTopRated = document.querySelector('.prevPageBtnTopRated');
prevPageButtonTopRated(prevPageBtnTopRated);

function prevPageButtonTopRated(pindutan){
    if(topRatedCurrentCount >= 1){
        pindutan.addEventListener('click', ()=> {
            onLoad(topRatedMovies, topRatedRating, topRatedTitle);
        topRatedCurrentCount--;
        let topRatedUrlPrev = `${topRatedAPI}${saGitna}${myAPI}&page=${topRatedCurrentCount}`
        sapagFetchTopRated(topRatedUrlPrev);
        topRatedScrollContainer.scrollBy({
                left: 5000,
                behavior: "smooth"
            });
            prevPageButtonTopRatedVisibility();
        });
    }
}

function prevPageButtonTopRatedVisibility(){
    if(topRatedCurrentCount <= 1){
        prevPageConTopRated.style.display = 'none';
    }else{
        prevPageConTopRated.style.display = 'flex';
    }
}

// sapag fetch ng search
let keyword = '';
let resultPage = 1;
searchBtnClicked(searchBtn);
function sapagFetchSearch(){
keyword = searchInput.value;
    fetch(`${searchAPI}${myAPI}&query=${encodeURIComponent(keyword)}&page=${resultPage}`)
     .then(response => response.json())
     .then(data => {
         if(data.results && data.results.length > 0){
             posterFunc(searchedMovies, data.results);
             ratingFunc(searchedRating, data.results);
             titleFunc(searchedTitle, data.results);
         }
         
     })
     .catch(error => console.error(error));
}

//eto ung sa search icon
function searchBtnClicked(pindutan){
    pindutan.addEventListener('click', ()=> {
        document.querySelector('.slider-searched').style.display = 'block';
        //console.log('hello world');
        sapagFetchSearch();
    });
}

morePageBtnSearched(moreBtnSearched);
function morePageBtnSearched(pindutan){
    pindutan.addEventListener('click', ()=> {
        onLoad(searchedMovies, searchedRating, searchedTitle);
        resultPage++;
        sapagFetchSearch();
        
        searchedScrollContainer.scrollBy({
            left: -5000,
            behavior: "smooth"
        });
       prevPageButtonSearchedVisibility();
    });
}
//
const prevPageConSearched = document.getElementById('prevPageConSearched');
const prevPageBtnSearched = document.querySelector('.prevPageBtnSearched');

prevPageButtonSearched(prevPageBtnSearched);
function prevPageButtonSearched(pindutan){
    if(resultPage >= 1){
        pindutan.addEventListener('click', ()=> {
            onLoad(searchedMovies, searchedRating, searchedTitle);
            resultPage--;
            sapagFetchSearch();
            searchedScrollContainer.scrollBy({
                left: 5000,
                behavior: "smooth"
            });
            prevPageButtonSearchedVisibility();
        });
    }
}

function prevPageButtonSearchedVisibility(){
    if(resultPage <= 1){
        prevPageConSearched.style.display = 'none';
    }else{
        prevPageConSearched.style.display = 'flex';
    }
}

//function nowPlaying(){
 //   playing.addEventListener('click')
//}
//modal
const main = document.querySelector('.main');
const modal = document.querySelector('.modal-window');

//myIframe
const myIframe = document.getElementById('myIframe');
const playingTitle = document.getElementById('playing-title');
const playingYear = document.querySelector('.playing-year');
const firstGenre = document.querySelector('.first-genre');
const isAdult = document.querySelector('.isAdult');
const copyLink = document.querySelector('.copyLinkBtn');
const playBtn = document.getElementById('playBtn');
const mySource = `https://aged-river-e48a.ver0nikai2622.workers.dev/?destination=https://moviesapi.club/movie/`;
const downloadBtn = document.getElementById('downloadBtn');
const downloadLink = 'https://vdl.np-downloader.com/sdm_downloads/';
//download-christmas-in-the-ballroom-2025/';
const sypnopsis = document.getElementById('sypnosis');
const playingRating = document.getElementById('playing-rating');
const playingGenre = document.getElementById('playing-genre');
const playingReleaseDate = document.getElementById('playing-releaseDate');
const playingLanguage = document.getElementById('language');
const production = document.getElementById('production');
const playingBudget = document.getElementById('budget');
const revenue = document.getElementById('revenue');
//const cast = document.getElementById('cast');
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
const languageMap = {
  en: "English",
  ja: "Japanese",
  es: "Spanish",
  fr: "French",
  de: "German",
  ko: "Korean",
  it: "Italian",
  // Add any other languages you need here
};


//checkHash
function checkHash(){
    if(window.location.hash !== ''){
        const newMovieId = window.location.hash.substring(1);
        //hude search container
        
        document.querySelector('.play-icon').style.display = 'block';
        playBtn.style.backgroundColor = 'white';
       document.querySelector('.slider-searched').style.display = 'none';
        fetch(`https://api.themoviedb.org/3/movie/${newMovieId}?api_key=${myAPI}`)
         .then(res => res.json())
         .then(movie => {
             if(movie && newMovieId){
                 main.style.display = 'none';
                 modal.style.display = 'flex';
                 myIframe.style.backgroundImage = `url(${originalImage}${movie.backdrop_path})`;
                 playingTitle.textContent = `${movie.title}`;
                 playingTitle.textContent = `${movie.title}`;
             playingYear.textContent = `${movie.release_date.substring(0, 4)}`;
             isAdult.textContent = movie.adult ? "18+" : "PG√";
             copyLink.addEventListener('click', ()=> {
               navigator.clipboard.writeText(`https://streamph.site/#${newMovieId}`);
            });
            playBtn.addEventListener('click', ()=> {
            playBtn.style.backgroundColor = 'gold';
            document.querySelector('.play-icon').style.display = 'none';
            myIframe.style.backgroundImage = '';
                myIframe.src = `${mySource}${movie.id}`;
                window.open(myAd);
            });
            const plusLink = `${movie.title.replace(/\s+/g, '-').replace(/'/g, '').replace(/:/g, '')}-${movie.release_date.substring(0, 4)}`;
            downloadBtn.addEventListener('click', ()=> {
                window.open(`${downloadLink}download-${plusLink}`);
                window.location.href = myAd;
            });
                 sypnosis.textContent = `${movie.overview}`;
          
          if(movie.genres && movie.genres.length > 0){
              firstGenre.textContent = movie.genres[0].name;
              const genreNames = movie.genres.map(genre => genre.name).join(', ');
              playingGenre.textContent = `Genre: ${genreNames}`;
          }else{
              firstGenre.textContent = "Movie";
              playingGenre.textContent = "Genre: Not Listed";
          }
          
          playingReleaseDate.textContent = `Release Date: ${movie.release_date}`;
          playingRating.textContent = `Rating: ⭐${movie.vote_average.toFixed(1)}/10`;
          
          const langCode = movie.original_language;
            playingLanguage.textContent =
            `Language: ${languageMap[langCode] || langCode}`;
            if(movie.production_companies && movie.production_companies > 0){
                production.textContent = `Production: ${movie.production_companies[0].name}`;
            }else{
                production.textContent = 'Production: N/A';
            }
            playingBudget.textContent = `Budget: $ ${movie.budget > 0 ? movie.budget.toLocaleString('en-US') : 'Not Disclosed'}`;
            revenue.textContent = `Revenue: $ ${movie.revenue > 0 ? movie.revenue.toLocaleString('en-US') : 'Not Disclosed'}`;
           castFunc(newMovieId);
           document.title = `${movie.title} (${movie.release_date.substring(0, 4)})`;
            
             }else{
                 console.error("Movie not found:", movie.status_message);
          window.location.hash = ''; // Trigger the 'else' block below
             }
         })
         .catch(err => {
             console.log('Error fetching movie details:', err);
             window.location.hash = ''; // Trigger the 'else' block below
         });
    }else{
        // This runs when the hash is empty (i.e., when the modal should be closed)
    
    // FIX for Iframe History Bug: Clear the iframe src immediately
    document.querySelector('.play-icon').style.display = 'block';
    myIframe.src = ''; 
    
    main.style.display = 'flex';
    modal.style.display = 'none';
    }
}
document.addEventListener('DOMContentLoaded', ()=> {
    checkHash();
    window.addEventListener('hashchange', checkHash);
});

//fetch for the casts
function castFunc(movieCrewId){
  fetch(`https://api.themoviedb.org/3/movie/${movieCrewId}/credits?api_key=${myAPI}`)
     .then(res => res.json())
     .then(data => {
         // 1. Slice the 'cast' array to get only the first 10 objects
         const topFiveCast = data.cast.slice(0, 5); 

         // 2. Map the names from the new, smaller array
         const actorNames = topFiveCast.map(actor => actor.name);

         // 3. Display the result
         cast.textContent = "Actors: " + actorNames.join(', ');
     })
     .catch(err => console.error(err));
}

function onLoad(palitanMovies, palitanRating, palitanTitle){
    palitanMovies.forEach(loadPoster => {
        loadPoster.classList.add('skeleton');
        //loadPoster.style.backgroundImage = '';
        //loadPoster.style.backgroundColor = 'grey';
    });
    palitanRating.forEach(loadRating => {
        loadRating.textContent = '';
        loadRating.classList.add('skeleton');
    });
    palitanTitle.forEach(loadTitle => {
        loadTitle.textContent = '';
        loadTitle.classList.add('skeleton');
    });
}

function ratingFunc(rating, movieData){
    rating.forEach((rate,index) => {
        if(movieData[index] && movieData[index].vote_average){
            rate.classList.remove('skeleton');
            rate.textContent = `⭐${movieData[index].vote_average.toFixed(1)}/10`;
        }else{
            rate.textContent = 'N/A';
        }
    });
}

function posterFunc(posters, movieData){
    posters.forEach((poster, index) => {
        if(movieData[index] && movieData[index].poster_path){
            poster.classList.remove('skeleton');
            poster.src = `${posterPath}${movieData[index].poster_path}`;
            poster.addEventListener('click', ()=> {
                window.location.hash = `#${movieData[index].id}`;
                scrollTo({top:0, behavior: 'smooth'});
            });
        }else{
            poster.src = '';
        }
    });
}

function titleFunc(titles, movieData){
    titles.forEach((title, index) => {
        if(movieData[index] && movieData[index].title){
        title.classList.remove('skeleton');
            title.textContent = `${movieData[index].title} (${movieData[index].release_date.substring(0, 4)})`
        }else{
            title.textContent = '';
        }
    });
}

//sa scrolling
    const popularScrollContainer = document.querySelector(".popular-wrapper");
    const latestScrollContainer = document.querySelector(".latest-wrapper");
    const topRatedScrollContainer = document.querySelector(".topRated-wrapper");
    const searchedScrollContainer = document.querySelector(".searched-wrapper");

function popularScrollR() {
    // Scroll left by 300 pixels
    popularScrollContainer.scrollBy({
        left: -300, 
        behavior: "smooth"
    });
}

function popularScrollL() {
    // Scroll right by 300 pixels
    popularScrollContainer.scrollBy({
        left: 300, 
        behavior: "smooth"
    });
}

function latestScrollR() {
    // Scroll left by 300 pixels
    latestScrollContainer.scrollBy({
        left: -300, 
        behavior: "smooth"
    });
}

function latestScrollL() {
    // Scroll right by 300 pixels
    latestScrollContainer.scrollBy({
        left: 300, 
        behavior: "smooth"
    });
}

function topRatedScrollR() {
    // Scroll left by 300 pixels
    topRatedScrollContainer.scrollBy({
        left: -300, 
        behavior: "smooth"
    });
}

function topRatedScrollL() {
    // Scroll right by 300 pixels
    topRatedScrollContainer.scrollBy({
        left: 300, 
        behavior: "smooth"
    });
}

function searchedScrollR() {
    // Scroll left by 300 pixels
    searchedScrollContainer.scrollBy({
        left: -300, 
        behavior: "smooth"
    });
}

function searchedScrollL() {
    // Scroll right by 300 pixels
    searchedScrollContainer.scrollBy({
        left: 300, 
        behavior: "smooth"
    });
}

//sorry alert
function sorryAlert(){
    alert('Sorry, Im still Coding The Website, Please use Mobile Version for Now');
}