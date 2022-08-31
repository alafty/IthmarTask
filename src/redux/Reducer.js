import { insertData, insertMoreData } from "./Actions";

const initialState = {
    services: [],
    moreServices: [],
}

function userReducer(state = initialState, action){
        switch(action.type){
            case insertData:
            return{
                ...state, 
                services: fillData(action),
                favourites: []
            };
            case insertMoreData:
                return{
                    ...state,
                    services: fillData(action),
                    favourites: []
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
                    "logo": element.clients[i].serviceProviderLogo,
                    "subtitle": element.clients[i].bssName,
                });
            
        }
        
    })
    return returnData;
}

export default userReducer;