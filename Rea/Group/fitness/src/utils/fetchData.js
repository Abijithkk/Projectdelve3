export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'fce19b0143mshe8403531ea49b96p1ce3ecjsn26e5dcbc9101',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
    
};


export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};