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


// This is an array of strings (TV show titles)

// let Album1songs = [
//     {"Name": "May Lite Tot", "Duration": "3:43"},
//     {"Name": "Yat Sat Swar Pyone Tat Thaw", "Duration": "4:28"},
//     {"Name": "Khwint Ma Pyu", "Duration": "4:34"},
//     {"Name": "Nar Yi Paw Ka Myat Yay Sat Myar", "Duration": "3:17"},
//     {"Name": "Sate Dat Kin Sar", "Duration": "3:33"},
//     {"Name": "Ta Naye Naye Tot Chit Lar Laint Ml", "Duration": "3:50"},
//     {"Name": "Kyite Tha Lo Lote", "Duration": "4:03"},
//     {"Name": "Ma Yoe Tot Buu", "Duration": "2:31"},
//     {"Name": "Sway Pyi", "Duration": "2:59"},
//     {"Name": "Thi Chin Lay Thet Thay", "Duration": "3:52"},
//     {"Name": "Thu Nge Chin Atweet", "Duration": "Unknown"},
//     {"Name": "Way Thwar Tae A Khar", "Duration": "5:11"},
//     {"Name": "Nar Yi Yae Thichin", "Duration": "3:45"},
//     {"Name": "Chit", "Duration": "2:37"},
//     {"Name": "Nyi Lay Yay", "Duration": "4:10"},
//     {"Name": "Sain Yat Lay Arr", "Duration": "Unknown"}
// ];

// let titles = [
//     {"Name":"Naryi Baw Mha Myet Yay Set Myar -Tear Drops on the Clock", "year":1986, "listened":1468, "image": "https://i.scdn.co/image/ab67616d0000b2736ec10c07236cf35fa44db682", "songs":[...Album1songs]},
//     {"Name": "Mhaw Sayar Eainmet - Dream of a Wizard", "year":1988, "listened":1207, "image": "https://i.ytimg.com/vi/FDm3s2d23jQ/maxresdefault.jpg"},
//     {"Name": "Thet Nyein - Tranquillity", "year":1989, "listened":1450, "image": "https://i.ytimg.com/vi/-a6LFPAz_24/hqdefault.jpg"},
//     {"Name": "Atta Pon Saung Khae Myar - Crystal Of Ego", "year":1991, "listened":2340, "image": "https://th.bing.com/th/id/OIP.Hs15ORkP-QkZevIkYIEirAAAAA?rs=1&pid=ImgDetMain"},
//     {"Name": "Akyinna Eainmet Dream of Affection", "year":1991, "listened":7840, "image": "https://i.scdn.co/image/ab67616d0000b273aa96c90c62f988a4a6bbe86e"},
//     {"Name": "A Yin A Taing - Just Like Old Times", "year":1991, "listened":8145, "image": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/39/d5/a5/39d5a522-d09f-e1a5-5101-4ca65c19aa41/8720205504111.png/1200x1200bf-60.jpg"},
//     {"Name": "Zaga Lon Ma Shi Tae Kaungkin - Sky Without Words", "year":1995, "listened":1408, "image": "https://th.bing.com/th/id/OIP.8oMhFKKqKeUzibIuo8zlmgAAAA?rs=1&pid=ImgDetMain"},
//     {"Name": "Htoo Eain Thin Unplugged Live", "year":1996, "listened":5862, "image": "https://i.ytimg.com/vi/yM8F0zjwhLU/maxresdefault.jpg"},
//     {"Name": "Myo Pya La Yaung Tan Chin", "year":1996, "listened":4371, "image": "https://i.scdn.co/image/ab67616d0000b2735f40a9df186bbd7597d95f53"},
//     {"Name": "Win Yoe Sune Mee - Polar Flame", "year":1997, "listened":5479, "image": "https://i.scdn.co/image/ab67616d0000b2739de7a63da706368c28902cac"},
//     {"Name": "A May (Tho) A Kywin Mae Metta Taw Thi Chin - Mother (or) Owner Of Endless Love", "year":1997, "listened":3560, "image": "https://www.layeik.com/wp-content/uploads/edd/2017/06/Htoo-Eain-Thin-A-May-768x768.jpg"},
//     {"Name": "A Mhat Ta Ya Dan Ya Thi Chin Mya - Songs For Memorial Scars Of Life", "year":1999, "listened":8945, "image": "https://4.bp.blogspot.com/_qzszAXMm3BY/SA2Jmqx-4YI/AAAAAAAAAfc/ZAYE81R1St4/s400/HTOO+11.JPG"},
//     {"Name": "A Sein Yaung Yet Swe Myar - Green Dates ", "year":2001, "listened":7690, "image": "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/59/77/c4/5977c443-41f2-af15-c9b9-b509711ebf8c/8720205504081.png/1200x1200bf-60.jpg"},
//     {"Name": "Ta Nae Sar A Lwe Myar - Mistakes of the Day", "year":2003, "listened":8469, "image": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9b/c0/4e/9bc04e48-91a7-d6ea-4e9a-4d34566c5850/8720205504029.png/1200x1200bf-60.jpg"},
//     {"Name": "Chit Chin Ah Phyint - With Love", "year":2005, "listened":4267, "image": "https://th.bing.com/th/id/OIP.nyFIDh47jyFqh9aZ0v4EUAAAAA?rs=1&pid=ImgDetMain"},
//     {"Name": "Nhit Cho' Waing", "year":"(unreleased)", "listened":0, "image": "https://www.layeik.com/wp-content/uploads/Htoo-Eain-Thin-500x500.jpg"}
// ];

import titles from './titles.js';

let getTitles = titles;
let titles_buffer = [...getTitles];
//console.log("titles_buffer");
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.

//This function adds cards the page to display the data in the array

export function sortAtoZ() {
    titles_buffer.sort((a, b) => a.Name.localeCompare(b.Name));
    showCards();
}
window.sortAtoZ = sortAtoZ;

export function sortLatestYear()
{
    titles_buffer.sort((a, b) => b.year - a.year); // Sort in descending order of year (latest to oldest)
    showCards();
}
window.sortLatestYear = sortLatestYear;

function sortOldestYear()
{
    titles_buffer.sort((a, b) => a.year - b.year);
    showCards();
}
window.sortOldestYear = sortOldestYear;

export function sortZtoA()
{
    titles_buffer.sort((a, b) => b.Name.localeCompare(a.Name));
    showCards();
}
window.sortZtoA = sortZtoA;

export function sortMostListeners()
{
    titles_buffer.sort((a,b) => b.listened - a.listened );
    showCards();
}
window.sortMostListeners = sortMostListeners;

export function sortLeastListeners()
{
    titles_buffer.sort((a,b) => a.listened - b.listened );
    showCards();
}
window.sortLeastListeners = sortLeastListeners;

export function resetAll()
{
    titles_buffer=[...getTitles];
    showCards();
}
window.resetAll = resetAll;

export function year_1980_1990()
{
    titles_buffer = getTitles.filter(item => item.year >= 1980 && item.year <= 1990);
    showCards();
}
window.year_1980_1990 = year_1980_1990;

export function year_1990_2000()
{
    titles_buffer = getTitles.filter(item => item.year >=1990 && item.year <= 2000);
    showCards();
    console.log(titles_buffer);
}
window.year_1990_2000 = year_1990_2000;

export function year_2000_2010()
{
    titles_buffer = getTitles.filter (item => item.year >= 2000 && item.year <= 2010);
    showCards();
}
window.year_2000_2010 = year_2000_2010;

export function ls_1000_3000()
{
    titles_buffer = getTitles.filter (item => item.listened >= 1000 && item.listened <=3000);
    showCards();
}
window.ls_1000_3000 = ls_1000_3000;

export function ls_3000_6000()
{
    titles_buffer = getTitles.filter (item => item.listened >= 3000 && item.listened <= 6000);
    showCards();
}
window.ls_3000_6000 = ls_3000_6000;

export function ls_6000_10000()
{
    titles_buffer = getTitles.filter (item => item.listened >= 6000 && item.listened <= 10000);
    showCards();
}
window.ls_6000_10000 = ls_6000_10000;

function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    

    for (let i = 0; i < titles_buffer.length; i++) {
        let title = titles_buffer[i];

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, title.image); // Edit title and image
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
