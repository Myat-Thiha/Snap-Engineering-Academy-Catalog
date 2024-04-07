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

export function back()
{
    document.getElementById("card-container").style.display = "block";
    document.getElementById("song-container").style.display = "none";
}
window.back = back;

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
        nextCard.addEventListener("click", function() {
            // Navigate to the song page for the clicked album
            navigateToSongPage(title);
        });
    }
}

function navigateToSongPage(album) {
    // Hide the card container and show the song container
    document.getElementById("card-container").style.display = "none";
    document.getElementById("song-container").style.display = "block";
    // Set the album title on the song page
    document.getElementById("album-title").textContent = album.songs.Name;

    // Get the song list container
    const songList = document.getElementById("song-list");
    songList.innerHTML = ""; // Clear previous song list

    // Add songs of the clicked album to the song list
    for (let song of album.songs) {
        const listItem = document.createElement("li");
        listItem.textContent = `${song.Name} - ${song.Duration}`;
        songList.appendChild(listItem);
        console.log("clicked");
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
