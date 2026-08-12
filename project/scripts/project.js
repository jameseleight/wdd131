// declare a new date object and use it to display the Year
const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();

// declare a new date object created from the lastModified method string and display it as a formatted time
const lastMod = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = lastMod.toLocaleString("en-US", {
    year: "numeric",
    month:"long",
    day: "numeric",
    hour: "numeric",
    weekday: "long",
    timeZoneName: "short"
});

// Open and close hamburger menu when in mobile view
document.addEventListener('DOMContentLoaded', () => {
  const mainnav = document.querySelector('.samBaseball-navigation');
  const hambutton = document.querySelector('#menu');
  hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
  });
});

function renderPhotos(photoList) {
let listPhotos = "";
photoList.forEach(photoItem => {
    listPhotos += `<li>
                    <img class="photoImage" src=${photoItem.imageUrl} alt=${photoItem.caption} loading="lazy"></img>
                    <table class="cardTable"> 
                        <tbody class="cardBody">
                            <tr>
                                <td class="rowTitle">&#x2764 </td>
                                <td class="rowData">${photoItem.caption}</td>
                            </tr>
                        </tbody>
                    </table>
                </li>`
});
return listPhotos;
}

function renderPhotosHS(photoList, valueIndex) {
let listPhotos = "";
photoList.forEach(photoItem => {
if (valueIndex == 1) {
    listPhotos += `<li>
                    <img class="photoImage" src=${photoItem.imageUrl} alt=${photoItem.caption} loading="lazy"></img>
                    <table class="cardTable"> 
                    <tbody class="cardBody">
                            <tr>
                                <td class="rowTitle"><img class="capEmoji" src="images/emoji_cap.webp" alt="Cap Emoji" loading="lazy"></td>
                                <td class="rowData">${photoItem.caption}</td>
                            </tr>
                        </tbody>
                    </table>
                </li>`
} else if (valueIndex == 2) {
    listPhotos += `<li>
                    <img class="photoImage" src=${photoItem.imageUrl} alt=${photoItem.caption} loading="lazy"></img>
                    <table class="cardTable"> 
                    <tbody class="cardBody">
                            <tr>
                                <td class="rowTitle"><img class="eagleEmoji" src="images/eagle-patch.webp" alt="Eagle Patch" loading="lazy"></td>
                                <td class="rowData">${photoItem.caption}</td>
                            </tr>
                        </tbody>
                    </table>
                </li>`
}
});
return listPhotos;
}

// Track number of vistis for all the pages
let numberVisits = getNumberVisits() || 0;
numberVisits++;
setNumberVisits();

document.getElementById("siteVisits").innerHTML = numberVisits;

const siteVisits = document.querySelector('#siteVisits');
siteVisits.textContent.innerHTML = numberVisits;

function setNumberVisits() {
  localStorage.setItem('TotalNumberOfVisits', JSON.stringify(numberVisits));
}

function getNumberVisits() {
  return JSON.parse(localStorage.getItem('TotalNumberOfVisits'));
}   

// array for family photos
const familyPhotos = [
        {
            caption: "Leights at Dodgers Game",
            aspect: "landscape",
            imageUrl: "/wdd131/project/images/family-atgame-1.webp"
        },
        {
            caption: "Samuel and Dad and Manny Mota",
            aspect: "landscape",
            imageUrl:"/wdd131/project/images/james-samuel-manny-mota.webp"
        },
        {
            caption: "Samuel and Mom",
            aspect: "landscape",
            imageUrl: "/wdd131/project/images/midge-samuel-1.webp"
        },
        {
            caption: "Samuel and Nana",
            aspect: "landscape",
            imageUrl: "/wdd131/project/images/sam-nana.webp"
        },
        {
            caption: "Samuel and Ryan",
            aspect: "landscape",
            imageUrl: "/wdd131/project/images/samuel-ryan.webp"
        },
        {
            caption: "Samuel and Dad",
            aspect: "portrait",
            imageUrl: "/wdd131/project/images/james-samuel-angels.webp"
        },
        {
            caption: "Samuel and Dad and Steve Yeager",
            aspect: "portrait",
            imageUrl: "/wdd131/project/images/james-samuel-steve-yeager.webp"
        },
        {
            caption: "Samuel Watching Autographs",
            aspect: "portrait",
            imageUrl: "/wdd131/project/images/sam-autograph.webp"
        },
        {
            caption: "Samuel and Grandpa and NeiNei",
            aspect: "portrait",
            imageUrl: "/wdd131/project/images/sam-grandpa-neinei.webp"
        },
        {
            caption: "Samuel and Michael",
            aspect: "portrait",
            imageUrl: "/wdd131/project/images/sam-michael.webp"
        },
        {
            caption: "Samuel and Truman",
            aspect: "portrait",
            imageUrl: "/wdd131/project/images/samuel-truman-dodgers.webp"
        },
        {
            caption: "Samuel and Zach",
            aspect: "portrait",
            imageUrl: "/wdd131/project/images/sam-zach.webp"
        }       
      ];

// Display Family photos with the home page
if (window.location.pathname.includes("/project/index.html")) {
    const photosList = document.getElementById("familyListDisplay");
    photosList.innerHTML = renderPhotos(familyPhotos);
}

// array for high school photos
const hsPhotos = [
        {
            caption: "Samuel and Coach Cookie",
            aspect: "portrait",
            category: "baseball",
            imageUrl: "/wdd131/project/images/IMG_0068.webp"
        },
        {
            caption: "Samuel Slugger",
            aspect: "landscape",
            category: "baseball",
            imageUrl:"/wdd131/project/images/IMG_0434.webp"
        },
        {
            caption: "Samuel at Second",
            aspect: "landscape",
            category: "baseball",
            imageUrl: "/wdd131/project/images/IMG_0467.webp"
        },
        {
            caption: "Coach Time Out Conference",
            aspect: "landscape",
            category: "baseball",
            imageUrl: "/wdd131/project/images/IMG_0471.webp"
        },
        {
            caption: "Samuel and Mom and Dad",
            aspect: "landscape",
            category: "baseball",
            imageUrl: "/wdd131/project/images/IMG_0513.webp"
        },
        {
            caption: "Cookie Taking Care of the Dirt",
            aspect: "landscape",
            category: "baseball",
            imageUrl: "/wdd131/project/images/IMG_0514.webp"
        },
        {
            caption: "Samuel in the Field",
            aspect: "landscape",
            category: "baseball",
            imageUrl: "/wdd131/project/images/IMG_0558.webp"
        },
        {
            caption: "Honoring a Teammate",
            aspect: "landscape",
            category: "baseball",
            imageUrl: "/wdd131/project/images/IMG_0603A.webp"
        },
        {
            caption: "Samuel and Mom",
            aspect: "portrait",
            category: "baseball",
            imageUrl: "/wdd131/project/images/IMG_0931.webp"
        },
        {
            caption: "Samuel Pitching",
            aspect: "portrait",
            category: "baseball",
            imageUrl: "/wdd131/project/images/IMG_0974.webp"
        },
        {
            caption: "Champions of the Pioneer League",
            aspect: "landscape",
            category: "baseball",
            imageUrl: "/wdd131/project/images/IMG_1146.webp"
        },
        {
            caption: "After Practice",
            aspect: "portrait",
            category: "baseball",
            imageUrl: "/wdd131/project/images/IMG_1515.webp"
        },
        {
            caption: "Striking a Pose",
            aspect: "portrait",
            category: "baseball",
            imageUrl: "/wdd131/project/images/IMG_1516.webp"
        },
        {
            caption: "Ready for the Plate",
            aspect: "landscape",
            category: "baseball",
            imageUrl: "/wdd131/project/images/IMG_1570.webp"
        },
        {
            caption: "Samuel and Coach Blume and Coach Sain",
            aspect: "portrait",
            category: "baseball",
            imageUrl: "/wdd131/project/images/IMG_2339.webp"
        },
        {
            caption: "Focused on the Game",
            aspect: "landscape",
            category: "baseball",
            imageUrl: "/wdd131/project/images/IMG_5713.webp"
        },
        {
            caption: "Ready at Bat",
            aspect: "landscape",
            category: "baseball",
            imageUrl: "/wdd131/project/images/IMG_5869.webp"
        },
        {
            caption: "On Base",
            aspect: "landscape",
            category: "baseball",
            imageUrl: "/wdd131/project/images/IMG_5879.webp"
        },
        {
            caption: "Safe!",
            aspect: "landscape",
            category: "baseball",
            imageUrl: "/wdd131/project/images/IMG_5883.webp"
        },
        {
            caption: "Back to the Dugout",
            aspect: "landscape",
            category: "baseball",
            imageUrl: "/wdd131/project/images/IMG_7183.webp"
        },
        {
            caption: "Challenge, Commit, Compete",
            aspect: "landscape",
            category: "baseball",
            imageUrl: "/wdd131/project/images/IMG_9067.webp"
        },
        {
            caption: "Batting Practice",
            aspect: "portrait",
            category: "baseball",
            imageUrl: "/wdd131/project/images/IMG_9684.webp"
        },
        {
            caption: "With Teammates and Classmates",
            aspect: "landscape",
            category: "baseball",
            imageUrl: "/wdd131/project/images/IMG_9734.webp"
        },
        {
            caption: "Laying Down the Bunt",
            aspect: "landscape",
            category: "baseball",
            imageUrl: "/wdd131/project/images/IMG_9909.webp"
        },
        {
            caption: "Out in the Field",
            aspect: "landscape",
            category: "baseball",
            imageUrl: "/wdd131/project/images/IMG_9989.webp"
        },
        {
            caption: "The Handsome Man",
            aspect: "landscape",
            category: "baseball",
            imageUrl: "/wdd131/project/images/IMG_9996.webp"
        },
        {
            caption: "Sam Loves His Mom",
            aspect: "landscape",
            category: "baseball",
            imageUrl: "/wdd131/project/images/P4272693.webp"
        },
        {
            caption: "Teammate Shenanigans",
            aspect: "portrait",
            category: "baseball",
            imageUrl: "/wdd131/project/images/IMG_1510.webp"
        },
        {
            caption: "Sam and Mom and Before",
            aspect: "landscape",
            category: "eagle",
            imageUrl: "/wdd131/project/images/IMG_0688.webp"
        },
        {
            caption: "Sam and Neinei and Partial",
            aspect: "landscape",
            category: "eagle",
            imageUrl: "/wdd131/project/images/IMG_0696.webp"
        },
        {
            caption: "Taking a Break",
            aspect: "landscape",
            category: "eagle",
            imageUrl: "/wdd131/project/images/IMG_0700.webp"
        },
        {
            caption: "Getting a Precise Cut",
            aspect: "landscape",
            category: "eagle",
            imageUrl: "/wdd131/project/images/IMG_0721.webp"
        },
        {
            caption: "Stencil Going Up",
            aspect: "landscape",
            category: "eagle",
            imageUrl: "/wdd131/project/images/IMG_0776.webp"
        },
        {
            caption: "All Done with Mom",
            aspect: "landscape",
            category: "eagle",
            imageUrl: "/wdd131/project/images/IMG_0835.webp"
        },
        {
            caption: "Batbox is Done",
            aspect: "portrait",
            category: "eagle",
            imageUrl: "/wdd131/project/images/IMG_0851.webp"
        },
        {
            caption: "Thanks to Learned Lumber",
            aspect: "landscape",
            category: "eagle",
            imageUrl: "/wdd131/project/images/IMG_0879.webp"
        },
        {
            caption: "Thanks to Catalina Paints",
            aspect: "portrait",
            category: "eagle",
            imageUrl: "/wdd131/project/images/IMG_0887.webp"
        },
        {
            caption: "End of a Great Season",
            aspect: "landscape",
            category: "eagle",
            imageUrl: "/wdd131/project/images/IMG_1157.webp"
        },
        {
            caption: "Sam and Grandpa",
            aspect: "portrait",
            category: "eagle",
            imageUrl: "/wdd131/project/images/IMG_3111.webp"
        },
        {
            caption: "Teammates Helping Out",
            aspect: "portrait",
            category: "eagle",
            imageUrl: "/wdd131/project/images/IMG_3116.webp"
        },
        {
            caption: "Everyone is Working Hard",
            aspect: "landscape",
            category: "eagle",
            imageUrl: "/wdd131/project/images/IMG_3123.webp"
        },
        {
            caption: "A Great Eagle Project",
            aspect: "landscape",
            category: "eagle",
            imageUrl: "/wdd131/project/images/IMG_3127.webp"
        },
        {
            caption: "All Done with Dad",
            aspect: "landscape",
            category: "eagle",
            imageUrl: "/wdd131/project/images/IMG_3664.webp"
        },
        {
            caption: "Placing the Eagle Plaque",
            aspect: "portrait",
            category: "eagle",
            imageUrl: "/wdd131/project/images/IMG_3752.webp"
        }    
      ];

      // Determine which photos to display for high school page
if (window.location.pathname.includes("/project/high-school.html")) {
    const hsPhotoHeader = document.querySelector('#hs-current-page');
    const hsPhotoButton = document.querySelector(".wf1");
    let photosSelected = 0;
    hsPhotoButton.addEventListener('submit', (e) => {
        e.preventDefault();
        const hsPhotosShown = document.querySelector("#hsListDisplay");
        photosSelected = document.querySelector('input[name="photoDispaly"]:checked').value;
        if (photosSelected == 1) {
            hsPhotoHeader.textContent = "Baseball Photos Selected";
            const filteredPhotos = hsPhotos.filter(item => (item.category == "baseball"));
            hsPhotosShown.innerHTML = renderPhotosHS(filteredPhotos, photosSelected);
        }
        else if (photosSelected == 2) {
            hsPhotoHeader.textContent = "Eagle Project Photos Selected";
            const filteredPhotos = hsPhotos.filter(item => (item.category == "eagle"));
            hsPhotosShown.innerHTML = renderPhotosHS(filteredPhotos, photosSelected);
        }    
    });
}
// array for little league photos
const llPhotos = [
        {
            caption: "Samuel in T-Ball",
            aspect: "portrait",
            category: "cubs",
            imageUrl: "/wdd131/project/images/IMG_1505.webp"
        },
        {
            caption: "Samuel at Catcher",
            aspect: "landscape",
            category: "knights",
            imageUrl:"/wdd131/project/images/IMG_8998.webp"
        },
        {
            caption: "Saying the Pledge",
            aspect: "landscape",
            category: "knights",
            imageUrl: "/wdd131/project/images/IMG_9323.webp"
        },
        {
            caption: "Calling the Play",
            aspect: "landscape",
            category: "knights",
            imageUrl: "/wdd131/project/images/IMG_9325.webp"
        },
        {
            caption: "Making Contact",
            aspect: "portrait",
            category: "knights",
            imageUrl: "/wdd131/project/images/IMG_9365.webp"
        },
        {
            caption: "Samuel Pitching",
            aspect: "portrait",
            category: "knights",
            imageUrl: "/wdd131/project/images/IMG_9379.webp"
        },
        {
            caption: "Samuel Making the Throw",
            aspect: "landscape",
            category: "knights",
            imageUrl: "/wdd131/project/images/IMG_9441.webp"
        },
        {
            caption: "Samuel All Smiles",
            aspect: "landscape",
            category: "knights",
            imageUrl: "/wdd131/project/images/IMG_9502.webp"
        },
        {
            caption: "Samuel Warming Up",
            aspect: "landscape",
            category: "knights",
            imageUrl: "/wdd131/project/images/IMG_9527.webp"
        },
        {
            caption: "Samuel Catching",
            aspect: "landscape",
            category: "knights",
            imageUrl: "/wdd131/project/images/IMG_9607.webp"
        },
        {
            caption: "Samuel Making the Play at First",
            aspect: "landscape",
            category: "knights",
            imageUrl: "/wdd131/project/images/IMG_9681.webp"
        },
        {
            caption: "Samuel with his Teammates",
            aspect: "landscape",
            category: "knights",
            imageUrl: "/wdd131/project/images/IMG_9710.webp"
        },
        {
            caption: "Team Huddle",
            aspect: "landscape",
            category: "knights",
            imageUrl: "/wdd131/project/images/IMG_9711.webp"
        },
        {
            caption: "Team Silly Photo",
            aspect: "landscape",
            category: "pirates",
            imageUrl: "/wdd131/project/images/20140222_092044.webp"
        },
        {
            caption: "Samuel Portrait",
            aspect: "portrait",
            category: "pirates",
            imageUrl: "/wdd131/project/images/DSC_0029.webp"
        },
        {
            caption: "Samuel at the Plate",
            aspect: "landscape",
            category: "pirates",
            imageUrl: "/wdd131/project/images/IMG_5593.webp"
        },
        {
            caption: "Dad Setting up the Field",
            aspect: "portrait",
            category: "pirates",
            imageUrl: "/wdd131/project/images/IMG_5769.webp"
        },
        {
            caption: "Samuel Winding Up",
            aspect: "portrait",
            category: "pirates",
            imageUrl: "/wdd131/project/images/IMG_5789.webp"
        },
        {
            caption: "Mom in the Stands",
            aspect: "portrait",
            category: "pirates",
            imageUrl: "/wdd131/project/images/IMG_5793.webp"
        },
        {
            caption: "Samuel Leading Off",
            aspect: "landscape",
            category: "pirates",
            imageUrl: "/wdd131/project/images/IMG_5830.webp"
        },
        {
            caption: "Samuel in the Infield",
            aspect: "landscape",
            category: "pirates",
            imageUrl: "/wdd131/project/images/IMG_5999.webp"
        },
        {
            caption: "Samuel in the Tunnel",
            aspect: "portrait",
            category: "pirates",
            imageUrl: "/wdd131/project/images/IMG_6033.webp"
        },
        {
            caption: "Samuel and Samuel",
            aspect: "portrait",
            category: "pirates",
            imageUrl: "/wdd131/project/images/IMG_6149.webp"
        },
        {
            caption: "A Great Season Together",
            aspect: "portrait",
            category: "pirates",
            imageUrl: "/wdd131/project/images/IMG_6244.webp"
        },
        {
            caption: "Pirtes Family",
            aspect: "landscape",
            category: "pirates",
            imageUrl: "/wdd131/project/images/IMG_6246.webp"
        },
        {
            caption: "Samuel for Royals Portrait",
            aspect: "portrait",
            category: "royals",
            imageUrl: "/wdd131/project/images/P1010003.webp"
        },
        {
            caption: "Royals Team Photo",
            aspect: "landscape",
            category: "royals",
            imageUrl: "/wdd131/project/images/P1010017.webp"
        },
        {
            caption: "Samuel at Third",
            aspect: "landscape",
            category: "royals",
            imageUrl: "/wdd131/project/images/P1010062.webp"
        },
        {
            caption: "Samuel Learning to Catch",
            aspect: "portrait",
            category: "royals",
            imageUrl: "/wdd131/project/images/P1010065.webp"
        },
        {
            caption: "Samuel Ready to Catch",
            aspect: "portrait",
            category: "royals",
            imageUrl: "/wdd131/project/images/P1010075.webp"
        },
        {
            caption: "Samuel in a Crouch",
            aspect: "portrait",
            category: "royals",
            imageUrl: "/wdd131/project/images/P1010076.webp"
        },
        {
            caption: "Samuel in the Field",
            aspect: "portrait",
            category: "royals",
            imageUrl: "/wdd131/project/images/P1010077.webp"
        },
        {
            caption: "Samuel and Dad in the Field",
            aspect: "landscape",
            category: "royals",
            imageUrl: "/wdd131/project/images/P1010078.webp"
        },
        {
            caption: "Samuel Getting Some Motion",
            aspect: "landscape",
            category: "royals",
            imageUrl: "/wdd131/project/images/P1010084.webp"
        },
        {
            caption: "Samuel at the Plate",
            aspect: "portrait",
            category: "royals",
            imageUrl: "/wdd131/project/images/P1010096.webp"
        },
        {
            caption: "Samuel Making Contact",
            aspect: "portrait",
            category: "royals",
            imageUrl: "/wdd131/project/images/P1010097.webp"
        },
        {
            caption: "Samuel off to First",
            aspect: "landscape",
            category: "royals",
            imageUrl: "/wdd131/project/images/P1010099.webp"
        }   
      ];

    function renderPhotosLL(photoList) {
        let listPhotos = "";
        photoList.forEach(photoItem => {
            listPhotos += `<li>
                                <img class="photoImage" src=${photoItem.imageUrl} alt=${photoItem.caption} loading="lazy"></img>
                                <table class="cardTable"> 
                                    <tbody class="cardBody">
                                        <tr>
                                            <td class="rowData">${photoItem.caption}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                </li>`
        });
        return listPhotos;
    }

// Determine active page and dispaly the selected set of photos above for little league
if (window.location.pathname.includes("/project/little-league.html")) {
    const photoHeader = document.querySelector('#ll-current-page');
    const navItemLinkLL = document.querySelectorAll(".llPictures-navigation li a");
    const photosDisplay = document.getElementById("llListDisplay");
    navItemLinkLL.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            photoHeader.textContent = item.textContent + " Photos Selected";
            if (item.textContent == "Cubs") {
                const filteredPhotos = llPhotos.filter(photo => (photo.category == "cubs"));
                photosDisplay.innerHTML = renderPhotosLL(filteredPhotos);
            } else if (item.textContent == "Royals") {
                const filteredPhotos = llPhotos.filter(photo => (photo.category == "royals"));
                photosDisplay.innerHTML = renderPhotosLL(filteredPhotos);
            } else if (item.textContent == "Knights") {
                const filteredPhotos = llPhotos.filter(photo => (photo.category == "knights"));
                photosDisplay.innerHTML = renderPhotosLL(filteredPhotos);
            } else if (item.textContent == "Pirates") {
                const filteredPhotos = llPhotos.filter(photo => (photo.category == "pirates"));
                photosDisplay.innerHTML = renderPhotosLL(filteredPhotos);
            }
        });
    });
}