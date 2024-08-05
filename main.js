import _ from 'lodash';
import axios from 'axios';

/** 영화 정보 불러오기 */

const myMovieKey = 'API 키는 공개할 수 없으므로 삭제함';

function getMovies(keyword) {
    axios.get(`${ myMovieKey }&s=${ keyword }`)
        .then(response => {
            const searchResult = response.data.Search[0];
            console.log(searchResult);

            const movieTitle = document.getElementById('movieTitle');
            const moviePoster = document.querySelector('.movie-poster');

            movieTitle.textContent = searchResult.Title;
            moviePoster.src = searchResult.Poster;
            moviePoster.alt = `${ searchTitle.Title }, ${searchTitle.Year}`
        })
        .catch((error) => {
            // console.error(error);
        })
        .finally(() => {
            console.info(`"${ keyword }" 검색어로 찾기 완료`);
        });
}

getMovies('aliens');

/** 공공 데이터 불러오기 */

const myCycleKey = 'API 키는 공개할 수 없으므로 삭제함';

async function getCycleData(from = 1, to = 5) {
    const fetchURL = `http://openapi.seoul.go.kr:8088/${ myCycleKey }/json/bikeList/${ from }/${ to }/`;
    const response = await fetch(fetchURL).then(response => response.json());

    console.log(response);
}

getCycleData(1, 10);