import _ from 'lodash';
import axios from 'axios';

/** 영화 정보 불러오기 */

const txtSearch = document.getElementById('txtSearch');
const btnSearch = document.getElementById('btnSearch');
const secSearchResult = document.getElementById('secSearchResult');

const myMovieKey = 'API 키는 공개할 수 없으므로 삭제함';

function getMovies(keyword) {
    axios.get(`${ myMovieKey }&s=${ keyword }`)
        .then(response => {
            const searchResult = response.data.Search;

            console.log(searchResult);

            secSearchResult.innerHTML = '';

            if (searchResult && searchResult.length > 0) {
                searchResult.forEach(movie => {
                    const movieContainer = document.createElement('article');
                    const movieTitleEl = document.createElement('h1');
                    const moviePosterEl = document.createElement('img');
                    const movieYearEl = document.createElement('p');
                    const movieTypeEl = document.createElement('p');

                    movieContainer.appendChild(movieTitleEl);
                    movieContainer.appendChild(moviePosterEl);
                    movieContainer.appendChild(movieYearEl);
                    movieContainer.appendChild(movieTypeEl);
                    secSearchResult.appendChild(movieContainer);

                    movieTitleEl.textContent = movie.Title;
                    moviePosterEl.src = movie.Poster;
                    moviePosterEl.alt = `${ movie.Title }, ${movie.Year}`;
                    movieYearEl.textContent = movie.Year;
                    movieTypeEl.textContent = movie.Type;
                });
            } else {
                secSearchResult.textContent = `"${ keyword }" 검색어로 검색된 결과가 없습니다.`;
            }
        })
        .catch((error) => {
            // console.error(error);
        })
        .finally(() => {
            console.info(`"${ keyword }" 검색어로 찾기 완료`);
        });
}

txtSearch.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') getMovies(txtSearch.value);
});

btnSearch.addEventListener('click', () => getMovies(txtSearch.value));

// btnSearch.addEventListener('click', getMovies(txtSearch.value));

/** 공공 데이터 불러오기 */

const myCycleKey = 'API 키는 공개할 수 없으므로 삭제함';

async function getCycleData(from = 1, to = 5) {
    const fetchURL = `http://openapi.seoul.go.kr:8088/${ myCycleKey }/json/bikeList/${ from }/${ to }/`;
    const response = await fetch(fetchURL).then(response => response.json());

    console.log(response);
}