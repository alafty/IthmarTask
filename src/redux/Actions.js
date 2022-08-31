export const addFavourite = 'addFav';
export const removeFavourite = 'remFav';
export const insertData = 'insertData';
export const insertMoreData = 'insertMoreData';

const API_URL = 'http://165.22.1.13:9081/client-city/3?size=6';
const API_MORE_URL = 'http://165.22.1.13:9081/client-city/3?size=10';

export const fetchData = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: insertData,
                    payload: json
                });
                //console.warn(json);
            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export const fetchMoreData = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_MORE_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: insertMoreData,
                    payload: json
                });
                console.warn(json);
            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error);
    }
}