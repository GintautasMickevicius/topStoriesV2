const rootElement = document.querySelector("div");
rootElement.style = "text-align: center";
const root = document.getElementById("root");
const navi = document.querySelector("nav");
const apiKey = "J8pVafslaxxGiZLaCOtP2rnIYdyV2Mld";
let storySection = "home";
const all = document.getElementById("all");
const world = document.getElementById("world");
const us = document.getElementById("us");
const arts = document.getElementById("arts");
const business = document.getElementById("business");
const well = document.getElementById("well");
const opinion = document.getElementById("opinion");
const api = `https://api.nytimes.com/svc/topstories/v2/${storySection}.json?api-key=${apiKey}`;
fetch(api)
  .then((Response) => Response.json())
  .then((data) => {
    all.addEventListener("click", myAllFunction);
    function myAllFunction() {
      sectionHome();
    }

    world.addEventListener("click", myWorldFunction);
    function myWorldFunction() {
      sectionWorld();
    }

    us.addEventListener("click", myUsFunction);
    function myUsFunction() {
      sectionUs();
    }
    arts.addEventListener("click", myArtsFunction);
    function myArtsFunction() {
      sectionArts();
    }
    business.addEventListener("click", myBusinessFunction);
    function myBusinessFunction() {
      sectionBusiness();
    }
    well.addEventListener("click", myWellFunction);
    function myWellFunction() {
      sectionWell();
    }
    opinion.addEventListener("click", myOpinionFunction);
    function myOpinionFunction() {
      sectionOpinion();
    }
    function sectionHome() {
      rootElement.innerText = " ";
      storySection = "home";

      if (storySection === "home") {
        let i = 0;
        while (i < data.results.length) {
          let div = document.createElement("div");
          div.className = "card shadow cursor-pointer bg-danger";
          const mySection = document.createElement("h6");
          mySection.textContent = data.results[i].section;
          const myImage = document.createElement("img");
          myImage.src = data.results[i].multimedia[0].url;
          const myTitle = document.createElement("p");
          const myContent = document.createElement("p");
          myContent.textContent = data.results[i].abstract;
          const readMore = document.createElement("a");
          readMore.textContent = "Read more...";
          readMore.style = "text-decoration: none";
          readMore.style = "color: black";
          readMore.href = data.results[i].url;
          myTitle.className = "card-title";
          myTitle.textContent = data.results[i].title;
          // appendinu visus elementus i divus.
          rootElement.appendChild(div);
          div.append(mySection, myImage, myTitle, myContent, readMore);
          i++;
        }
      }
    }

    function sectionWorld() {
      rootElement.innerText = " ";
      storySection = "world";
      const originalArray = data.results;
      const filteredArray = originalArray.filter(function (item) {
        return item.section === "world";
      });

      if (storySection === filteredArray[0].section) {
        let i = 0;
        while (i < filteredArray.length) {
          let div = document.createElement("div");
          div.className = "card shadow cursor-pointer bg-info";
          const mySection = document.createElement("h6");
          mySection.textContent = filteredArray[i].section;
          const myImage = document.createElement("img");
          myImage.src = filteredArray[i].multimedia[0].url;
          const myTitle = document.createElement("p");
          const myContent = document.createElement("p");
          myContent.textContent = filteredArray[i].abstract;
          const readMore = document.createElement("a");
          readMore.textContent = "Read more...";
          readMore.style = "text-decoration: none";
          readMore.style = "color: black";
          readMore.href = filteredArray[i].url;
          myTitle.className = "card-title";
          myTitle.textContent = filteredArray[i].title;
          // appendinu visus elementus i divus.
          rootElement.appendChild(div);
          div.append(mySection, myImage, myTitle, myContent, readMore);
          i++;
        }
      }
    }
    function sectionUs() {
      rootElement.innerText = " ";
      storySection = "us";
      const originalArray = data.results;
      const filteredArray = originalArray.filter(function (item) {
        return item.section === "us";
      });

      if (storySection === filteredArray[0].section) {
        let i = 0;
        while (i < filteredArray.length) {
          let div = document.createElement("div");
          div.className = "card shadow cursor-pointer bg-warning";
          const mySection = document.createElement("h6");
          mySection.textContent = filteredArray[i].section;
          const myImage = document.createElement("img");
          myImage.src = filteredArray[i].multimedia[0].url;
          const myTitle = document.createElement("p");
          const myContent = document.createElement("p");
          myContent.textContent = filteredArray[i].abstract;
          const readMore = document.createElement("a");
          readMore.textContent = "Read more...";
          readMore.style = "text-decoration: none";
          readMore.style = "color: black";
          readMore.href = filteredArray[i].url;
          myTitle.className = "card-title";
          myTitle.textContent = filteredArray[i].title;
          // appendinu visus elementus i divus.
          rootElement.appendChild(div);
          div.append(mySection, myImage, myTitle, myContent, readMore);
          i++;
        }
      }
    }
    function sectionArts() {
      rootElement.innerText = " ";
      storySection = "arts";
      const originalArray = data.results;
      const filteredArray = originalArray.filter(function (item) {
        return item.section === "arts";
      });

      if (storySection === filteredArray[0].section) {
        let i = 0;
        while (i < filteredArray.length) {
          let div = document.createElement("div");
          div.className = "card shadow cursor-pointer bg-success";
          const mySection = document.createElement("h6");
          mySection.textContent = filteredArray[i].section;
          const myImage = document.createElement("img");
          myImage.src = filteredArray[i].multimedia[0].url;
          const myTitle = document.createElement("p");
          const myContent = document.createElement("p");
          myContent.textContent = filteredArray[i].abstract;
          const readMore = document.createElement("a");
          readMore.textContent = "Read more...";
          readMore.style = "text-decoration: none";
          readMore.style = "color: black";
          readMore.href = filteredArray[i].url;
          myTitle.className = "card-title";
          myTitle.textContent = filteredArray[i].title;
          // appendinu visus elementus i divus.
          rootElement.appendChild(div);
          div.append(mySection, myImage, myTitle, myContent, readMore);
          i++;
        }
      }
    }
    function sectionBusiness() {
      rootElement.innerText = " ";
      storySection = "business";
      const originalArray = data.results;
      const filteredArray = originalArray.filter(function (item) {
        return item.section === "business";
      });

      if (storySection === filteredArray[0].section) {
        let i = 0;
        while (i < filteredArray.length) {
          let div = document.createElement("div");
          div.className = "card shadow cursor-pointer bg-secondary";
          const mySection = document.createElement("h6");
          mySection.textContent = filteredArray[i].section;
          const myImage = document.createElement("img");
          myImage.src = filteredArray[i].multimedia[0].url;
          const myTitle = document.createElement("p");
          const myContent = document.createElement("p");
          myContent.textContent = filteredArray[i].abstract;
          const readMore = document.createElement("a");
          readMore.textContent = "Read more...";
          readMore.style = "text-decoration: none";
          readMore.style = "color: black";
          readMore.href = filteredArray[i].url;
          myTitle.className = "card-title";
          myTitle.textContent = filteredArray[i].title;
          // appendinu visus elementus i divus.
          rootElement.appendChild(div);
          div.append(mySection, myImage, myTitle, myContent, readMore);
          i++;
        }
      }
    }
    function sectionWell() {
      rootElement.innerText = " ";
      storySection = "well";
      const originalArray = data.results;
      const filteredArray = originalArray.filter(function (item) {
        return item.section === "well";
      });

      if (storySection === filteredArray[0].section) {
        let i = 0;
        while (i < filteredArray.length) {
          let div = document.createElement("div");
          div.className = "card shadow cursor-pointer bg-primary";
          const mySection = document.createElement("h6");
          mySection.textContent = filteredArray[i].section;
          const myImage = document.createElement("img");
          myImage.src = filteredArray[i].multimedia[0].url;
          const myTitle = document.createElement("p");
          const myContent = document.createElement("p");
          myContent.textContent = filteredArray[i].abstract;
          const readMore = document.createElement("a");
          readMore.textContent = "Read more...";
          readMore.style = "text-decoration: none";
          readMore.style = "color: black";
          readMore.href = filteredArray[i].url;
          myTitle.className = "card-title";
          myTitle.textContent = filteredArray[i].title;
          // appendinu visus elementus i divus.
          rootElement.appendChild(div);
          div.append(mySection, myImage, myTitle, myContent, readMore);
          i++;
        }
      }
    }
    function sectionOpinion() {
      rootElement.innerText = " ";
      storySection = "opinion";
      const originalArray = data.results;
      const filteredArray = originalArray.filter(function (item) {
        return item.section === "opinion";
      });

      if (storySection === filteredArray[0].section) {
        let i = 0;
        while (i < filteredArray.length) {
          let div = document.createElement("div");
          div.className = "card shadow cursor-pointer bg-light";
          const mySection = document.createElement("h6");
          mySection.textContent = filteredArray[i].section;
          const myImage = document.createElement("img");
          myImage.src = filteredArray[i].multimedia[0].url;
          const myTitle = document.createElement("p");
          const myContent = document.createElement("p");
          myContent.textContent = filteredArray[i].abstract;
          const readMore = document.createElement("a");
          readMore.textContent = "Read more...";
          readMore.style = "text-decoration: none";
          readMore.style = "color: black";
          readMore.href = filteredArray[i].url;
          myTitle.className = "card-title";
          myTitle.textContent = filteredArray[i].title;
          // appendinu visus elementus i divus.
          rootElement.appendChild(div);
          div.append(mySection, myImage, myTitle, myContent, readMore);
          i++;
        }
      }
    }
  });
