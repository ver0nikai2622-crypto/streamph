function checkHash() {

  if (window.location.hash !== '') {
    const movieId = window.location.hash.substring(1);
    
    // Fetch the single movie detail by ID
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${myAPI}`)
      .then(res => res.json())
      .then(movie => {
        if (movie && movie.id) {
          // Open Modal and populate data
          document.getElementById('main').style.display = 'none';
          document.getElementById('modal-window').style.display = 'flex';
          
          playingPoster.src = `${originalImage}${movie.backdrop_path}`;
          playingTitle.textContent = `${movie.title} (${movie.release_date.substring(0, 4)})`;
          sypnosis.textContent = `${movie.overview}`;
          
          // Use movie.genres for single movie detail endpoint
          const genreNames = movie.genres.map(genre => genre.name).join(', ');
          
          movieGenre.textContent = `Genre: ${genreNames}`;
          releaseDate.textContent = `Release Date: ${movie.release_date}`;
          playingRating.textContent = `Rating: ⭐${movie.vote_average.toFixed(1)}/10`;
          
          // Set the default iframe src
          myIframe.src = `https://111movies.com/movie/${movie.id}`;
          unaSrc(movie.id);
          const plusLink = `${movie.title.replace(/\s+/g, '-')}-${movie.release_date.substring(0, 4)}`;
          setTimeout(()=>{
              downloadBtn.style.backgroundColor = '#848484';
            downloadBtn.addEventListener('click', ()=> {
              window.open(`${downloadLink}download-${plusLink}`);
              myIframe.src = '';
              window.location.hash = '';
              window.location.href = `${myAdLink}`;
              
          });
          },10000);
          
          
        } else {
          // Movie not found
          console.error("Movie not found:", movie.status_message);
          window.location.hash = ''; // Trigger the 'else' block below
        }
      })
      .catch(err => {
        // Handle any network errors
        console.error('Error fetching movie details:', err);
        window.location.hash = ''; // Trigger the 'else' block below
      });
      
  } else {
    // This runs when the hash is empty (i.e., when the modal should be closed)
    
    // FIX for Iframe History Bug: Clear the iframe src immediately
    document.getElementById('myIframe').src = ''; 
    
    document.getElementById('main').style.display = 'block';
    document.getElementById('modal-window').style.display = 'none';
  }
}
document.addEventListener('DOMContentLoaded', ()=> {
    checkHash();
    window.addEventListener('hashchange', checkHash);
});

//burahin mo to
document.querySelectorAll('.alertMuna').forEach((pinindot)=>{
    pinindot.addEventListener('click', ()=> {
        alert('Not Available For Now');
    });
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
let downloadBtn = document.getElementById('download');
let downloadLink = 'https://vdl.np-downloader.com/sdm_downloads/';
//download-christmas-in-the-ballroom-2025/';
const myAdLink = 'https://ey43.com/4/10192059';
let latestMovieText = document.querySelector('.latest-text');
const popularAPI = "https://api.themoviedb.org/3/movie/popular";
const latestAPI = "https://api.themoviedb.org/3/discover/movie";
const topRatedAPI = "https://api.themoviedb.org/3/movie/top_rated";
const myAPI = "fc6800402ffd747e928d3b0837704dc4";
const saGitna = "?api_key=";
let originalImage = "https://image.tmdb.org/t/p/original";
let posterPath = "https://image.tmdb.org/t/p/w500";

//sa pagfetch ng latest Movies
let moviePosters = [document.getElementById('poster1'), document.getElementById('poster2'), document.getElementById('poster3'), document.getElementById('poster4'), document.getElementById('poster5'), document.getElementById('poster6'), document.getElementById('poster7'), document.getElementById('poster8'), document.getElementById('poster9'), document.getElementById('poster10'), document.getElementById('poster11'), document.getElementById('poster12'), document.getElementById('poster13'), document.getElementById('poster14'), document.getElementById('poster15'), document.getElementById('poster16'), document.getElementById('poster17'), document.getElementById('poster18'), document.getElementById('poster19'), document.getElementById('poster20')];
let movieTitle = [document.getElementById('movieTitle1'), document.getElementById('movieTitle2'), document.getElementById('movieTitle3'), document.getElementById('movieTitle4'), document.getElementById('movieTitle5'), document.getElementById('movieTitle6'), document.getElementById('movieTitle7'), document.getElementById('movieTitle8'), document.getElementById('movieTitle9'), document.getElementById('movieTitle10'), document.getElementById('movieTitle11'), document.getElementById('movieTitle12'), document.getElementById('movieTitle13'), document.getElementById('movieTitle14'), document.getElementById('movieTitle15'), document.getElementById('movieTitle16'), document.getElementById('movieTitle17'), document.getElementById('movieTitle18'), document.getElementById('movieTitle19'), document.getElementById('movieTitle20')];
let movieRate = [document.getElementById('rating1'), document.getElementById('rating2'), document.getElementById('rating3'), document.getElementById('rating4'), document.getElementById('rating5'), document.getElementById('rating6'), document.getElementById('rating7'), document.getElementById('rating8'), document.getElementById('rating9'), document.getElementById('rating10'), document.getElementById('rating11'), document.getElementById('rating12'), document.getElementById('rating13'), document.getElementById('rating14'), document.getElementById('rating15'), document.getElementById('rating16'), document.getElementById('rating17'), document.getElementById('rating18'), document.getElementById('rating19'), document.getElementById('rating20')];
let modal = document.getElementById('modal-window');
let closeBtn = document.getElementById('closeBtn');
let myIframe = document.getElementById('myIframe');
let serverOne = document.getElementById('server1');
let serverTwo = document.getElementById('server2');
let serverThree = document.getElementById('server3');
let download = document.getElementById('download');
let copyLink = document.getElementById('copy');
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
function unaSrc(movieId){
    if(myIframe.src !== ''){
    if(myIframe.src === `https://111movies.com/movie/${movieId}`){
        serverOne.textContent = 'In Use...';
        serverOne.style.backgroundColor = 'green';
    }
}else{
    window.location.hash = '';
    }
}

serverOne.addEventListener('click', () => {
  // Get the movie ID from the URL hash
  const movieId = window.location.hash.substring(1);
  if (movieId) {
    myIframe.src = '';
    myIframe.src = `https://111movies.com/movie/${movieId}`;
    window.open(myAdLink);
    
    // Optional: Style the "In Use" button
    serverOne.textContent = 'In Use...';
    serverOne.style.backgroundColor = 'green';
    serverTwo.textContent = serverTwo.dataset.original || 'Server 2';
    serverTwo.style.backgroundColor = '#848484';
    serverThree.textContent = serverThree.dataset.original || 'Server 3';
    serverThree.style.backgroundColor = '#848484';
  }
});

serverTwo.addEventListener('click', () => {
  const movieId = window.location.hash.substring(1);
  if (movieId) {
    myIframe.src = '';
    myIframe.src = `https://vidfast.pro/movie/${movieId}`;
    window.open(myAdLink);

    // Optional: Style the "In Use" button
    serverOne.textContent = serverOne.dataset.original || 'Server 1';
    serverOne.style.backgroundColor = '#848484';
    serverTwo.textContent = 'In Use...';
    serverTwo.style.backgroundColor = 'green';
    serverThree.textContent = serverThree.dataset.original || 'Server 3';
    serverThree.style.backgroundColor = '#848484';
  }
});

serverThree.addEventListener('click', () => {
  const movieId = window.location.hash.substring(1);
  if (movieId) {
    myIframe.src = '';
    myIframe.src = `https://vidsrc-embed.ru/movie/${movieId}`;
    window.open(myAdLink);

    // Optional: Style the "In Use" button
    serverOne.textContent = serverOne.dataset.original || 'Server 1';
    serverOne.style.backgroundColor = '#848484';
    serverTwo.textContent = serverTwo.dataset.original || 'Server 2';
    serverTwo.style.backgroundColor = '#848484';
    serverThree.textContent = 'In Use...';
    serverThree.style.backgroundColor = 'green';
  }
});
copyLink.addEventListener('click', () => {
  navigator.clipboard.writeText(window.location.href);
  copyLink.style.backgroundColor = 'green';
  setTimeout(() => {
    copyLink.style.backgroundColor = '#848484';
  }, 2000);
});
fetch(`${popularAPI}${saGitna}${myAPI}`)
 .then(res => res.json())
 .then(laman => {
     //console.log(laman);
     navBg.style.backgroundImage = `url(${originalImage}${laman.results[0].backdrop_path})`;
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
            
         playingTitle.textContent = `${laman.results[index].title} (${laman.results[index].release_date.substring(0,4)})`;
         sypnosis.textContent = `${laman.results[index].overview}`;
         const genreIds = laman.results[index].genre_ids;
        const genreNames = genreIds.map(id => genreMap[id]).join(', ');
         movieGenre.textContent = `Genre: ${genreNames}`;
         releaseDate.textContent = `Release Date: ${laman.results[index].release_date}`;
         playingRating.textContent = `Rating: ⭐${laman.results[index].vote_average.toFixed(1)}/10`;
              myIframe.src = `https://111movies.com/movie/${laman.results[index].id}`;
              
         });
      
         
         
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
            
         playingTitle.textContent = `${sunod.results[index].title} (${sunod.results[index].release_date.substring(0,4)})`;
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
            
         playingTitle.textContent = `${search.results[index].title} (${search.results[index].release_date.substring(0,4)})`;
         sypnosis.textContent = `${search.results[index].overview}`;
         const genreIds = search.results[index].genre_ids;
        const genreNames = genreIds.map(id => genreMap[id]).join(', ');
         movieGenre.textContent = `Genre: ${genreNames}`;
         releaseDate.textContent = `Release Date: ${search.results[index].release_date}`;
         playingRating.textContent = `Rating: ⭐${search.results[index].vote_average.toFixed(1)}/10`;
              myIframe.src = `https://111movies.com/movie/${search.results[index].id}`;
              downloadBtn.addEventListener('click', ()=> {
              window.open(`${downloadLink}download-${search.results[index].title.replace(/\s+/g, '-')}-${search.results[index].release_date.substring(0, 4)}`)
          });
             
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




//