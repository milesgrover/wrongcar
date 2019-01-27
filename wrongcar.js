// setlist
var setlistContainer = document.querySelector('.wc-setlist-container');

if (setlistContainer) {
    setlistContainer.addEventListener('click', (e) => {
        document.body.classList.remove('wc-modal-open');
        let showingElements = Array.from(document.getElementsByClassName('wc-setlist-show'));
        showingElements.forEach((el) => {
            el.classList.remove('wc-setlist-show');
        });
    });
}

function showSetlist(id) {
    let setlistElement = document.getElementById(id);

    setlistElement.addEventListener('click', (e) => {
        e.stopPropagation();
    })

    document.body.classList.add('wc-modal-open');
    setlistElement.classList.add('wc-setlist-show');
    setlistContainer.classList.add('wc-setlist-show');
}

// lyrics
var lyricLists = [
    {
        id: "faafw",
        album: "fourteen autumns & fifteen winters",
        songs: [
            "cold days from the birdhouse",
            "that summer, at home i had become the invisible boy",
            "walking for two hours",
            "last year's rain didn't fall quite so hard",
            "talking with fireworks / here, it never snowed",
            "mapped by what surrounded them",
            "and she would darken the memory",
            "i'm taking the train home",
            "watching that chair painted yellow (b-side)",
        ],
    },
    {
        id: "neversnowed",
        album: "here it never snowed, afterwards it did",
        songs: [
            "here it never snowed, afterwards it did",
        ]
    },
]
function generateLyricLists() {
    var container = document.getElementById("wc-all-lyrics");
    lyricLists.forEach((album) => {
        var albumGroup = document.createElement("div");
        var albumTitle = document.createElement("h3");
        var songList = document.createElement("ul");
        
        albumGroup.classList.add("wc-lyrics-album-group");
        albumGroup.classList.add(album.id);
        container.appendChild(albumGroup);
        albumTitle.textContent = album.album;
        albumGroup.appendChild(albumTitle);
        albumGroup.appendChild(songList);
        
        album.songs.forEach((song) => {
            var songListItem = document.createElement("li");
            var songButton = document.createElement("button");

            songList.appendChild(songListItem);
            songButton.textContent = song;
            songButton.addEventListener("click", lyricExpand);
            songListItem.appendChild(songButton);
        });
    })
};
generateLyricLists();

function lyricExpand(e) {
    console.log(e.target.dataset.album)
}

var lyricsAlbums = document.querySelector(".wc-lyrics-albums");
var lyricsAlbumsButtons = Array.from(lyricsAlbums.querySelectorAll("img"));
lyricsAlbumsButtons.forEach((button) => {
    button.addEventListener("click", lyricExpand);
});