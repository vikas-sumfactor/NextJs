import { createApi } from 'unsplash-js';
// console.log(process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY, "about unspalsh");

const abc:any = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY
// console.log(abc);
const unsplashApi = createApi({
  accessKey: abc
});





const getUrlForCoffeeStores = (latLong:any, query:any, limit:any) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
};
const getListOfCoffeeStorePhotos = async () => {
  const photos = await unsplashApi.search.getPhotos({
    query: "coffee shop",
    perPage: 30,
  });
  console.log({photos})
  const unsplashResults = photos.response?.results || [];
  
  return unsplashResults.map((result:any) => result.urls["small"]);
}; 
export const fetchCoffeeStores = async ( latLong = "43.653833032607096%2C-79.37896808855945",limit = 6) => {
  const photos = await getListOfCoffeeStorePhotos();
  const options:any = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
    },
  };
  const response = await fetch(
    getUrlForCoffeeStores(latLong, "coffee", limit),
    options
  );
  const data = await response.json();
  return data.results.map((result:any, idx:any) => {
    const neighborhood = result.location.neighborhood;
    return {
      id: result.fsq_id,
      address: result.location.address,
      name: result.name,
      neighbourhood: neighborhood?.length > 0 ? neighborhood[0] : "",
      imgUrl: photos.length > 0 ? photos[idx] : null,
    };
  });

    
          
            
    

          
   
    
    
  
};
  export default unsplashApi;