export const insertData = 'insertData';
export const login = 'login';
export const logout = 'logout';

const API_URL = 'http://165.22.1.13:9081/client-city/3?size=6';

//fetch data from endpoint
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