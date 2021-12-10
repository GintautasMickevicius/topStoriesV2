let storySection = 'well';
const apiKey = 'J8pVafslaxxGiZLaCOtP2rnIYdyV2Mld';


const api = `https://api.nytimes.com/svc/topstories/v2/${storySection}.json?api-key=${apiKey}`;
fetch(api)
  .then((Response) => Response.json())
  .then((data) => { 
    
    if (storySection==='well') {
    let i = 0;   
    while (i < data.results.length) {
    const rootElement = document.querySelector('div');  
    const myImage = document.createElement('img');
    myImage.src = data.results[i].multimedia[0].url
    rootElement.appendChild(myImage); 
    const myTitle = document.createElement('p');
    myTitle.textContent = data.results[i].title;
    rootElement.appendChild(myTitle);
    i++
    }
}
});
   

