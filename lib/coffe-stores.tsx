import { createApi } from 'unsplash-js';


const unsplashApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY ,
 
});

// const unsplashApi = createApi({

//   accessKey: 'UNSPLASH_ACCESS_KEY' ,
  
// });
// const getUrlForCoffeeStores = (latLong:any, query:any, limit:any) => {
//   return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
// };

// export const fetchCoffeeStores = async () => {

//       const photos    =await unsplashApi.search.getPhotos({
//     query: "cat",
//     page: 1,
//     perPage: 10,
//     color: "green",
//     orientation: "portrait",
//   });
//   console.log({photos});

//   const options = {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       Authorization: process.env.FOURSQUARE_API_KEY,
//     },
//   };
//   const response = await fetch(
//     getUrlForCoffeeStores(
//       "43.653833032607096%2C-79.37896808855945",
//       "coffee",
//       6
//     ),
//     options
//   );
//   const data = await response.json();
//   return data.results;
// };



const getUrlForCoffeeStores = (latLong:any, query:any, limit:any) => {
    return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
  };


  const getListOfCoffeeStorePhotos = async () => {
    const photos = await unsplashApi.search.getPhotos({
      query: "coffee shop",
      perPage: 30,
    });
    console.log(photos);
   const unsplashResults = photos.response.results;
   return unsplashResults.map((result) => result.urls["small"]);
  };
  
  export const fetchCoffeeStores = async () => {
    const photos = await getListOfCoffeeStorePhotos();

    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: process.env.FOURSQUARE_API_KEY,
      },
    };
  
    const response = await fetch(
      getUrlForCoffeeStores(
        "43.653833032607096%2C-79.37896808855945",
        "coffee",
        9
      ),
      options
    );
    const data = await response.json();
    return data.results.map((result:any, idx:any) => {
      return {
        ...result,
        imgUrl: photos[idx],
      };
    });
  };
  export default unsplashApi;