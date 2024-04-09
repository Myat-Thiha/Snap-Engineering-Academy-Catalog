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

let isAlbum = false;
let isSong = false;

let y80_90 = false;
let y90_00 = false;
let y00_10 = false;
let l10_30 = false;
let l30_60 = false;
let l60_00 = false;

let getTitles = titles;
let titles_buffer = [...getTitles];
let temp = [...titles_buffer];
let temp2 = [...getTitles];
//console.log("titles_buffer");
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.

//This function adds cards the page to display the data in the array

export function sortAtoZ() {
    titles_buffer.sort((a, b) => a.Name.localeCompare(b.Name));
    temp = titles_buffer;
    showCards();
}
window.sortAtoZ = sortAtoZ;

export function sortLatestYear()
{
    titles_buffer.sort((a, b) => b.year - a.year); // Sort in descending order of year (latest to oldest)
    temp = titles_buffer;
    showCards();
}
window.sortLatestYear = sortLatestYear;

function sortOldestYear()
{
    titles_buffer.sort((a, b) => a.year - b.year);
    temp = titles_buffer;
    showCards();
}
window.sortOldestYear = sortOldestYear;

export function sortZtoA()
{
    titles_buffer.sort((a, b) => b.Name.localeCompare(a.Name));
    temp = titles_buffer;
    showCards();
}
window.sortZtoA = sortZtoA;

export function sortMostListeners()
{
    titles_buffer.sort((a,b) => b.listened - a.listened );
    temp = titles_buffer;
    showCards();
}
window.sortMostListeners = sortMostListeners;

export function sortLeastListeners()
{
    titles_buffer.sort((a,b) => a.listened - b.listened );
    temp = titles_buffer;
    showCards();
}
window.sortLeastListeners = sortLeastListeners;

export function resetAll()
{
    titles_buffer=[...getTitles];
    temp = [...titles_buffer];
    showCards();
    y00_10 = false;
    y80_90 = false;
    y90_00 = false;
    l10_30 = false;
    l30_60 = false;
    l60_00 = false;
}
window.resetAll = resetAll;

function filter_year(y1,y2,y3)
{
    let sortarray=[];
    let array1 = getTitles.filter(item => item.year >= 1980 && item.year <= 1990);
    let array2 = getTitles.filter(item => item.year >=1990 && item.year <= 2000);
    let array3 = getTitles.filter (item => item.year >= 2000 && item.year <= 2010);
    if(y1==false && y2==false && y3==false)
    {
        if(l10_30==false && l30_60==false && l60_00==false)
        {
            return getTitles;
        }
        else
        {
            return filter_listener(l10_30,l30_60,l60_00);
        }
    }
    else
    {
        if(y1)
        {
            sortarray = Array.from(new Set(sortarray.concat(array1)));
        }
        if(y2)
        {
            sortarray = Array.from(new Set(sortarray.concat(array2)));
        }
        if(y3)
        {
            sortarray = Array.from(new Set(sortarray.concat(array3)));
        }
        return sortarray;
    }
}

function filter_listener(l1,l2,l3)
{
    let sortarray=[];
    let array1 = temp.filter (item => item.listened >= 1000 && item.listened <=3000);
    let array2 = temp.filter (item => item.listened >= 3000 && item.listened <= 6000);
    let array3 = temp.filter (item => item.listened >= 6000 && item.listened <= 10000);
    if(l1==false && l2==false && l3==false)
    {
        console.log("here");
        return temp2;
    }
    else
    {
        if(l1)
        {
            sortarray = Array.from(new Set(sortarray.concat(array1)));
        }
        if(l2)
        {
            sortarray = Array.from(new Set(sortarray.concat(array2)));
        }
        if(l3)
        {
            sortarray = Array.from(new Set(sortarray.concat(array3)));
        }
        return sortarray;
    }
}

function displayFilteredAlbums(filteredAlbums) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    const templateCard = document.querySelector(".card");

    filteredAlbums.forEach(album => {
        const nextCard = templateCard.cloneNode(true);
        editCardContent(nextCard, album, album.image);
        cardContainer.appendChild(nextCard);
    });
}

export function year_1980_1990() {
    y80_90 = !y80_90;
    const button = document.getElementById("btn-1980-1990");
    if (y80_90) {
        button.style.backgroundColor = "green";
    } else {
        button.style.backgroundColor = "gray";
    }
    titles_buffer = filter_year(y80_90, y90_00, y00_10);
    temp = [...titles_buffer];
    temp2 = [...titles_buffer];
    showCards();
}
window.year_1980_1990 = year_1980_1990;

export function year_1990_2000() {
    y90_00 = !y90_00;
    const button = document.getElementById("btn-1990-2000");
    if (y90_00) {
        button.style.backgroundColor = "green";
    } else {
        button.style.backgroundColor = "gray";
    }
    titles_buffer = filter_year(y80_90, y90_00, y00_10);
    temp = [...titles_buffer];
    temp2 = [...titles_buffer];
    showCards();
}
window.year_1990_2000 = year_1990_2000;

export function year_2000_2010() {
    y00_10 = !y00_10;
    const button = document.getElementById("btn-2000-2010");
    if (y00_10) {
        button.style.backgroundColor = "green";
    } else {
        button.style.backgroundColor = "gray";
    }
    titles_buffer = filter_year(y80_90, y90_00, y00_10);
    temp = [...titles_buffer];
    temp2 = [...titles_buffer];
    showCards();
}
window.year_2000_2010 = year_2000_2010;

export function ls_1000_3000() {
    l10_30 = !l10_30;
    const button = document.getElementById("btn-1000-3000");
    if (l10_30) {
        button.style.backgroundColor = "green";
    } else {
        button.style.backgroundColor = "gray";
    }
    titles_buffer = filter_listener(l10_30, l30_60, l60_00);
    //temp = [...titles_buffer];
    showCards();
}
window.ls_1000_3000 = ls_1000_3000;

export function ls_3000_6000() {
    l30_60 = !l30_60;
    const button = document.getElementById("btn-3000-6000");
    if (l30_60) {
        button.style.backgroundColor = "green";
    } else {
        button.style.backgroundColor = "gray";
    }
    titles_buffer = filter_listener(l10_30, l30_60, l60_00);
    //temp = [...titles_buffer];
    showCards();
}
window.ls_3000_6000 = ls_3000_6000;

export function ls_6000_10000() {
    l60_00 = !l60_00;
    const button = document.getElementById("btn-6000-10000");
    if (l60_00) {
        button.style.backgroundColor = "green";
    } else {
        button.style.backgroundColor = "gray";
    }
    titles_buffer = filter_listener(l10_30, l30_60, l60_00);
    //temp = [...titles_buffer];
    showCards();
}
window.ls_6000_10000 = ls_6000_10000;

export function back()
{
    document.getElementById("Album-container").style.display = "block";
    document.getElementById("song-container").style.display = "none";
    isAlbum = true;
    isSong = false;
    console.log("isAlbum: "+ isAlbum +" isSong: "+isSong);
}
window.back = back;

export function searchAlbum() {
    const searchInput = document.getElementById("searchAlbum").value.trim().toLowerCase();
    
    if (searchInput === "") {
        // If the search input is empty, reset the display to show all albums
        titles_buffer = [...temp2];
        showCards();
        temp = [...titles_buffer];
        return;
    }

    const filteredAlbums = titles_buffer.filter(album => {
        // Check if the album name contains the search input
        return album.Name.toLowerCase().startsWith(searchInput);
    });

    titles_buffer = filteredAlbums;
    showCards();
    //displayFilteredAlbums(filteredAlbums);
    temp = [...titles_buffer];
}
window.searchAlbum = searchAlbum;


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
    document.getElementById("Album-container").style.display = "none";
    document.getElementById("song-container").style.display = "block";
    // Set the album title on the song page
    document.getElementById("album-title").textContent = album.Name;

    // Get the song list container
    const songList = document.getElementById("song-list");
    songList.innerHTML = ""; // Clear previous song list

    // Add songs of the clicked album to the song list
    for (let song of album.songs) {
        const listItem = document.createElement("li");
        listItem.textContent = `${song.Name} - ${song.Duration}`;
        songList.appendChild(listItem);
        isAlbum = false;
        isSong = true;
        console.log("isAlbum: "+ isAlbum +" isSong: "+isSong);
    }
}

export function searchSongs() {
    const searchInput = document.getElementById("searchSongInput").value.trim().toLowerCase();
    const albumTitle = document.getElementById("album-title").textContent.toLowerCase(); // Assuming album title is stored in an element with id "album-title"
    const songList = document.getElementById("song-list");
    const songs = songList.querySelectorAll("li");

    for (let song of songs) {
        const songName = song.textContent.toLowerCase();
        if (songName.startsWith(searchInput) && albumTitle.includes(searchInput)) {
            song.style.display = "block"; // Show the song if it matches the search
        } else {
            song.style.display = "none"; // Hide the song if it doesn't match the search
        }
    }
}
window.searchSongs = searchSongs;

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