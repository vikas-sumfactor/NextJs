export const isEmpty=(obj:any)=>{
    return obj && Object.keys(obj).length===0;
}
export const fetcher = (url:any) => fetch(url).then((res) => res.json());