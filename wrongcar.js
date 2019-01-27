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
            {
                name: "cold days from the birdhouse",
                lyrics: `another hotel with woolen plans
                romantic gesture with woolen plans
                and so you make it your own
                but this is where your arm can't go
                you make it your own
                
                another phone call with woolen plans
                romantic gesture with woolen plans
                and so you make it your own
                but this is where your arm can't go
                
                you make it your own
                but this is where your arm can't go
                
                and your red sky at night won't follow me
                it won't follow me now
                i won't wear your shoes
                and i won't clip your wings
                
                i see it when you lied
                we all look so surprised 
                and will you come back 
                will you come back 
                and breathing in smoke signs
                like a puppet told to drive
                and will you come back 
                will you come back 
                
                and your red sky at night won't follow me
                it won't follow me now
                
                and where are your mirrors
                so where are your mirrors`
            },
            {
                name: "that summer, at home i had become the invisible boy",
                lyrics: `and fourteen and you know
                that i'm looking the wrong way
                and is the past outside
                or in this lovely home
                
                a strong father figure
                and with a
                a heart of gold 
                a loving mother
                a loving mother 
                
                they're standing outside
                and they're
                they're looking
                they're standing outside
                and
                and they're looking in
                they're standing outside
                and
                and they're looking in
                
                the kids are on fire in the bedroom
                the cunt sits at his desk
                and
                and he's plotting away
                the kids are on fire in the bedroom
                
                and fourteen and you know
                that i've learned the easy way
                the stupid decisions
                and with a
                a broken heart
                
                and they're sitting around the table
                and they're talking behind your back
                a loving mother
                a loving mother
                
                they're standing outside
                and they're
                they're looking in
                they're standing outside
                and
                and they've
                they've broken in
                
                the kids are on fire in the bedroom
                the cunt sits at his desk
                and 
                and he's plotting away
                the kids are on fire in the bedroom
                `,
            },
            {
                name: "walking for two hours",
                lyrics: ``,
            },
            {
                name: "last year's rain didn't fall quite so hard",
                lyrics: ``,
            },
            {
                name: "talking with fireworks / here, it never snowed",
                lyrics: ``,
            },
            {
                name: "mapped by what surrounded them",
                lyrics: ``,
            },
            {
                name: "and she would darken the memory",
                lyrics: ``,
            },
            {
                name: "i'm taking the train home",
                lyrics: ``,
            },
            {
                name: "watching that chair painted yellow (b-side)",
                lyrics: ``,
            },
        ],
    },
    {
        id: "neversnowed",
        album: "here it never snowed, afterwards it did",
        songs: [
            {
                name: "here it never snowed, afterwards it did",
                lyrics: ``,
            },
        ]
    },
    {
        id: "ftna",
        album: "forget the night ahead",
        songs: [
            {
                name: "reflection of the television",
                lyrics: ``,
            },
            {
                name: "i became a prostitute",
                lyrics: ``,
            },
            {
                name: "seven years of letters",
                lyrics: ``,
            },
            {
                name: "made to disappear",
                lyrics: ``,
            },
            {
                name: "the room ",
                lyrics: ``,
            },
            {
                name: "that birthday present",
                lyrics: ``,
            },
            {
                name: "floorboards under the bed",
                lyrics: ``,
            },
            {
                name: "interrupted",
                lyrics: ``,
            },
            {
                name: "the neighbours can't breathe",
                lyrics: ``,
            },
            {
                name: "at the burnside",
                lyrics: ``,
            },
            {
                name: "in the blackout (b-side)",
                lyrics: ``,
            },
        ]
    },
    {
        id: "wrongcar",
        album: "the wrong car",
        songs: [
            {
                name: "the wrong car",
                lyrics: ``,
            },
            {
                name: "throw yourself into the water again",
                lyrics: ``,
            },
        ]
    },
    {
        id: "nocek",
        album: "no one can ever know",
        songs: [
            {
                name: "alphabet",
                lyrics: ``,
            },
            {
                name: "dead city",
                lyrics: ``,
            },
            {
                name: "sick",
                lyrics: ``,
            },
            {
                name: "don't move",
                lyrics: ``,
            },
            {
                name: "nil",
                lyrics: ``,
            },
            {
                name: "don't look at me",
                lyrics: ``,
            },
            {
                name: "not sleeping",
                lyrics: ``,
            },
            {
                name: "another bed",
                lyrics: ``,
            },
            {
                name: "kill it in the morning",
                lyrics: ``,
            },
            {
                name: "tell me when we're having fun (b-side)",
                lyrics: ``,
            },
        ]
    },
    {
        id: "nwtbhanwtl",
        album: "nobody wants to be here and nobody wants to leave",
        songs: [
            {
                name: "there's a girl in the corner",
                lyrics: ``,
            },
            {
                name: "last january",
                lyrics: ``,
            },
            {
                name: "i could give you all that you don't want",
                lyrics: ``,
            },
            {
                name: "it never was the same",
                lyrics: ``,
            },
            {
                name: "drown so i can watch",
                lyrics: ``,
            },
            {
                name: "in nowheres",
                lyrics: ``,
            },
            {
                name: "nobody wants to be here and nobody wants to leave",
                lyrics: ``,
            },
            {
                name: "pills i swallow",
                lyrics: ``,
            },
            {
                name: "leave the house",
                lyrics: ``,
            },
            {
                name: "sometimes i wished i could fall asleep",
                lyrics: ``,
            },
            {
                name: "airport (b-side)",
                lyrics: ``,
            },
        ]
    },
    {
        id: "iwbltatt",
        album: "it won/t be like this all the time",
        songs: [
            {
                name: "[10 good reasons for modern drugs]",
                lyrics: ``,
            },
            {
                name: "shooting dennis hopper shooting",
                lyrics: ``,
            },
            {
                name: "the arbor",
                lyrics: ``,
            },
            {
                name: "VTr",
                lyrics: ``,
            },
            {
                name: "sunday day13",
                lyrics: ``,
            },
            {
                name: "I/m not here [missing face]",
                lyrics: ``,
            },
            {
                name: "auge/maschine",
                lyrics: ``,
            },
            {
                name: "keep it all to myself",
                lyrics: ``,
            },
            {
                name: "girl chewing gum",
                lyrics: ``,
            },
            {
                name: "let/s get lost",
                lyrics: ``,
            },
            {
                name: "videograms",
                lyrics: ``,
            },
        ]
    }
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
            var songLyrics = document.createElement("div");

            songList.appendChild(songListItem);
            songButton.textContent = song.name;
            songButton.addEventListener("click", () => lyricExpand(songLyrics));
            songListItem.appendChild(songButton);
            songLyrics.classList.add("wc-lyrics-sheet");
            songLyrics.textContent = song.lyrics;
            songListItem.appendChild(songLyrics);
        });
    })
};
generateLyricLists();

function albumExpand(e) {
    $(`.wc-lyrics-album-group:not(.${e.target.dataset.album}):visible`).slideToggle();
    $(`.${e.target.dataset.album}`).slideToggle();
}

function lyricExpand(song) {
    $(song).slideToggle();
}

var lyricsAlbums = document.querySelector(".wc-lyrics-albums");
var lyricsAlbumsButtons = Array.from(lyricsAlbums.querySelectorAll("img"));
lyricsAlbumsButtons.forEach((button) => {
    button.addEventListener("click", albumExpand);
});