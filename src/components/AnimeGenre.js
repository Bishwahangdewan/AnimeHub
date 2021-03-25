import React, { useState } from 'react';
import SingleGenre from './layouts/SingleGenre';
import ShowGenre from './layouts/ShowGenre';


function AnimeGenre() {
    const [genre, setGenre] = useState([
        { genre_id: 1, anime: "Action" },
        { genre_id: 2, anime: "Adventure" },
        { genre_id: 3, anime: "Cars" },
        { genre_id: 4, anime: "Comedy" },
        { genre_id: 5, anime: "Dementia" },
        { genre_id: 6, anime: "Demons" },
        { genre_id: 7, anime: "Mystery" },
        { genre_id: 8, anime: "Drama" },
        { genre_id: 9, anime: "Ecchi" },
        { genre_id: 10, anime: "Fantasy" },
        { genre_id: 11, anime: "Game" },
        { genre_id: 12, anime: "Hentai" },
        { genre_id: 13, anime: "Historical" },
        { genre_id: 14, anime: "Horror" },
        { genre_id: 15, anime: "Kids" },
        { genre_id: 16, anime: "Magic" },
        { genre_id: 17, anime: "Martial Arts" },
        { genre_id: 18, anime: "Mecha" },
        { genre_id: 19, anime: "Music" },
        { genre_id: 20, anime: "Parody" },
        { genre_id: 21, anime: "Samurai" },
        { genre_id: 22, anime: "Romance" },
        { genre_id: 23, anime: "School" },
        { genre_id: 24, anime: "Si-Fi" },
        { genre_id: 25, anime: "Shoujo" },
        { genre_id: 26, anime: "Shoujo Ai" },
        { genre_id: 27, anime: "Shounen" },
        { genre_id: 28, anime: "Shounen Ai" },
        { genre_id: 29, anime: "Space" },
        { genre_id: 30, anime: "Sports" },
        { genre_id: 31, anime: "Super Power" },
        { genre_id: 32, anime: "Vampire" },
        { genre_id: 33, anime: "Yaoi" },
        { genre_id: 34, anime: "Yuri" },
        { genre_id: 35, anime: "Harem" },
        { genre_id: 36, anime: "Slice of Life" },
        { genre_id: 37, anime: "Supernatural" },
        { genre_id: 38, anime: "Military" },
        { genre_id: 39, anime: "Police" },
        { genre_id: 40, anime: "Psycological" },
        { genre_id: 41, anime: "Thriller" },
        { genre_id: 42, anime: "Seinen" },
        { genre_id: 43, anime: "Josei" }
    ]);

    //display genre
    const displayGenre = (
        genre.map(eachGenre => {
            return (
                <tr>
                    <td>{eachGenre.genre_id}</td>
                    <td><SingleGenre id={eachGenre.genre_id} anime={eachGenre.anime} /></td>
                </tr>
            )
        })
    )

    return (
        <div>
            <div className="anime-genre-container">
                <div className="container">
                    <h1>Anime <span className="yellow"> Genre</span></h1>
                    <p>List of all anime Genre's.</p>
                    <div class="text-center"><a href="#Top"><i class="fas fa-chevron-down down-icon"></i></a></div>
                </div>
            </div>
            <div id="Top" className="genre container">
                <h1>Choose Your <span className="yellow">Genre</span></h1>
                <p>Each and every Anime show comes with a set of specific genres. There’s a multitude out there when it comes to anime—action, drama, and horror just to name a few.</p>
                <div className="flex space-between">
                    <table>
                        <tr>
                            <th>No</th>
                            <th>Anime</th>
                        </tr>

                        {displayGenre}
                    </table>
                    <ShowGenre />
                </div>
            </div>
        </div >
    )
}

export default AnimeGenre;
