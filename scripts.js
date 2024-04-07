/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


const FRESH_PRINCE_URL = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (TV show titles)
let titles = [
    {"Name":"Naryi Baw Mha Myet Yay Set Myar -Tear Drops on the Clock", "year":"(1986)", "listened":"100"},
{"Name": "Mhaw Sayar Eainmet - Dream of a Wizard", "year":"(1988)", "listened":"100"},
{"Name": "Thet Nyein - Tranquillity", "year":"(1989)", "listened":"100"},
{"Name": "Atta Pon Saung Khae Myar - Crystal Of Ego", "year":" (1991)", "listened":"100"},
{"Name": "Akyinna Eainmet Dream of Affection", "year":"(1991)", "listened":"100"},
{"Name": "A Yin A Taing - Just Like Old Times", "year":"(1991)", "listened":"100"},
{"Name": "Zaga Lon Ma Shi Tae Kaungkin - Sky Without Words", "year":"(1995)", "listened":"100"},
{"Name": "Htoo Eain Thin Unplugged Live", "year":"(1996)", "listened":"100"},
{"Name": "Myo Pya La Yaung Tan Chin", "year":"(1996)", "listened":"100"},
{"Name": "Win Yoe Sune Mee - Polar Flame", "year":"(1997)", "listened":"100"},
{"Name": "A May (Tho) A Kywin Mae Metta Taw Thi Chin - Mother (or) Owner Of Endless Love", "year":"(1997)", "listened":"100"},
{"Name": "A Mhat Ta Ya Dan Ya Thi Chin Mya - Songs For Memorial Scars Of Life", "year":"(1999)", "listened":"100"},
{"Name": "A Sein Yaung Yet Swe Myar - Green Dates ", "year":"(2001)", "listened":"100"},
{"Name": "Ta Nae Sar A Lwe Myar - Mistakes of the Day", "year":"(2003)", "listened":"100"},
{"Name": "Chit Chin Ah Phyint - With Love", "year":"(2005)", "listened":"100"},
{"Name": "Nhit Cho' Waing", "year":"(unreleased)", "listened":"100"}
];

let imageList = [
    "https://i.scdn.co/image/ab67616d0000b2736ec10c07236cf35fa44db682",
    "https://i.ytimg.com/vi/FDm3s2d23jQ/maxresdefault.jpg",
    "https://i.ytimg.com/vi/-a6LFPAz_24/hqdefault.jpg",
    "https://th.bing.com/th/id/OIP.Hs15ORkP-QkZevIkYIEirAAAAA?rs=1&pid=ImgDetMain",
    "https://i.scdn.co/image/ab67616d0000b273aa96c90c62f988a4a6bbe86e",
    "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/39/d5/a5/39d5a522-d09f-e1a5-5101-4ca65c19aa41/8720205504111.png/1200x1200bf-60.jpg",
    "https://th.bing.com/th/id/OIP.8oMhFKKqKeUzibIuo8zlmgAAAA?rs=1&pid=ImgDetMain",
    "https://i.ytimg.com/vi/yM8F0zjwhLU/maxresdefault.jpg",
    "https://i.scdn.co/image/ab67616d0000b2735f40a9df186bbd7597d95f53",
    "https://i.scdn.co/image/ab67616d0000b2739de7a63da706368c28902cac",
    "https://www.layeik.com/wp-content/uploads/edd/2017/06/Htoo-Eain-Thin-A-May-768x768.jpg",
    "https://4.bp.blogspot.com/_qzszAXMm3BY/SA2Jmqx-4YI/AAAAAAAAAfc/ZAYE81R1St4/s400/HTOO+11.JPG",
    "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/59/77/c4/5977c443-41f2-af15-c9b9-b509711ebf8c/8720205504081.png/1200x1200bf-60.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9b/c0/4e/9bc04e48-91a7-d6ea-4e9a-4d34566c5850/8720205504029.png/1200x1200bf-60.jpg",
    "https://th.bing.com/th/id/OIP.nyFIDh47jyFqh9aZ0v4EUAAAAA?rs=1&pid=ImgDetMain",
    "https://www.layeik.com/wp-content/uploads/Htoo-Eain-Thin-500x500.jpg"
];
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.

//This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < titles.length; i++) {
        let title = titles[i];

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.

        let imageSrc = imageList[i]; // Assuming the images are in the same order as titles

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageSrc); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container

    }
}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle.Name;

    const cardlist = card.querySelectorAll("li");
    cardlist[0].textContent = "released in: " + newTitle.year;
    cardlist[1].textContent = "listeners in a month " + newTitle.listened;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle.Name + " Poster";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
