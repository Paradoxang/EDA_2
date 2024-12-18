export const getGifs = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=iBGI64JcBBVodlCcaYzdfHpyj7zd4bnL&q=category&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const resp = await fetch (url)
    const {data} = await resp.json()
    
    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.fixed_height_small.url,
      }));
    
      return gifs;
    }

export	default getGifs 
