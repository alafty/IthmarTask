import { insertData, login, logout} from "./Actions";

const initialState = {
    services: [],
    username: null,
    token: null,
    loggedIn: false
}

function userReducer(state = initialState, action){
        switch(action.type){
            case insertData:
            return{
                ...state, 
                services: fillData(action),
                favourites: []
            };
            case login:
                return{
                    ...state,
                    username: action.payload,
                    loggedIn: true,
                    token: requestFakeAPI()
                }
            case logout:
                return{
                    ...state,
                    username: null,
                    loggedIn: false,
                    token: null
                }
            default: return state;
    }
}

function fillData(action) {
    var sectorName = action.payload.data[0].businessSector.businessSectorName;
    var returnData= [{[sectorName]: []}];
    var sectorCount = 0;
    //console.warn(action.payload.data[1].clients[2]);
    action.payload.data.forEach(element => {
        if(element.businessSector.businessSectorName != sectorName){
            sectorName = element.businessSector.businessSectorName;
            returnData.push({[sectorName]: []});
            sectorCount++;
        }
        for (let i = 0; i < element.clients.length; i++) {
            returnData[sectorCount][sectorName].push(
                {
                    "key": element.clients[i].serviceProviderKey,
                    "name": element.clients[i].serviceProviderName,
                    "branches": element.clients[i].noOfBranches,
                    "logo": getImageURL(element.clients[i].serviceProviderLogo) ,
                    "subtitle": element.clients[i].bssName,
                });
            
        }
        
    })
    return returnData;
}

function getImageURL(path){
    return 'http://165.22.1.13:9081/images' + path;
}

function requestFakeAPI(){
    var token = ''
    var alphabetPool = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','Z','X','F']
    for (let index = 0; index < 25; index++) {
        token += alphabetPool[Math.floor(Math.random() * alphabetPool.length)]
    }
    return token;
}

export default userReducer;