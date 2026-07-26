document.addEventListener('DOMContentLoaded', () => {
  // Open and close menu when in mobile view
  const mainnav = document.querySelector('.temples-navigation');
  const hambutton = document.querySelector('#menu');
  hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
  });
    
  // Determine active page and dispaly filtered photos starting at Home
  const navheader = document.querySelector('#current-page');
  const navItemLink = document.querySelectorAll(".temples-navigation li a");
  navItemLink.forEach(item => {
      const temples = [
        {
          templeName: "Aba Nigeria",
          location: "Aba, Nigeria",
          dedicated: "2005, August, 7",
          area: 11500,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
          templeName: "Manti Utah",
          location: "Manti, Utah, United States",
          dedicated: "1888, May, 21",
          area: 74792,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
          templeName: "Payson Utah",
          location: "Payson, Utah, United States",
          dedicated: "2015, June, 7",
          area: 96630,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
          templeName: "Yigo Guam",
          location: "Yigo, Guam",
          dedicated: "2020, May, 2",
          area: 6861,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
          templeName: "Washington D.C.",
          location: "Kensington, Maryland, United States",
          dedicated: "1974, November, 19",
          area: 156558,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
          templeName: "Lima Perú",
          location: "Lima, Perú",
          dedicated: "1986, January, 10",
          area: 9600,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
          templeName: "Mexico City Mexico",
          location: "Mexico City, Mexico",
          dedicated: "1983, December, 2",
          area: 116642,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
          templeName: "Redlands California",
          location: "Redlands, California, United States",
          dedicated: "2003, September, 14",
          area: 17300,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/redlands-california/800x500/redlands-temple-lds-766820-wallpaper.jpg"
        }, 
        {
          templeName: "Cedar City Utah",
          location: "Cedar City, Utah, United States",
          dedicated: "2017, December, 10",
          area: 42657,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cedar-city-utah/400x225/Cedar-City-1978603.jpg"
        },
        {
          templeName: "Los Angeles California",
          location: "Los Angeles, California, United States",
          dedicated: "1956, March, 11-14",
          area: 190614,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/los-angeles-california/800x500/los-angeles-california-temple-1079458-wallpaper.jpg"
        }
      ];
      renderTempleCards(temples);
      item.addEventListener('click', (e) => {
          e.preventDefault();
          navheader.textContent = item.textContent;
        if (navheader.textContent == "Home") {
            renderTempleCards(temples);
        } else if (navheader.textContent == "Old") {
            const filteredTemples = temples.filter(temple => (parseInt(temple.dedicated.slice(0, 5), 10)) <= 1900);
            renderTempleCards(filteredTemples);
        } else if (navheader.textContent == "New") {
            const filteredTemples = temples.filter(temple => (parseInt(temple.dedicated.slice(0, 5), 10)) >= 2000);
            renderTempleCards(filteredTemples);
        } else if (navheader.textContent == "Large") {
            const filteredTemples = temples.filter(temple => (parseInt(temple.area, 10)) >= 90000);
            renderTempleCards(filteredTemples);
        } else if (navheader.textContent == "Small")  {
            const filteredTemples = temples.filter(temple => (parseInt(temple.area, 10)) <= 10000);
            renderTempleCards(filteredTemples);
        }
    });
  });

    function renderTempleCards(templeList) {
    let listCards = "";
    const templesList = document.getElementById("templeListDisplay");
    templeList.forEach(templeItem => {
        listCards += `<li>
                        <h2>${templeItem.templeName}</h2>                
                        <table class="cardTable"> 
                            <tbody class="cardBody">
                                <tr>
                                    <td class="rowTitle">Location: </td>
                                    <td class="rowData">${templeItem.location}</td>
                                </tr>
                                <tr>
                                    <td class="rowTitle">Dedicated: </td>
                                    <td class="rowData">${templeItem.dedicated}</td>
                                </tr>
                                <tr>
                                    <td class="rowTitle">Size: </td>
                                    <td class="rowData">${templeItem.area} sq ft</td>
                                </tr>
                            </tbody>
                        </table>
                        <img src=${templeItem.imageUrl} alt=${templeItem.templeName} loading="lazy"></img>
                    </li>`
    });
    return templesList.innerHTML = listCards;
    }
});