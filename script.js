// script.js — MCU Timeline logic

// ── DATA ──────────────────────────────────────────────────────────────────

const MOVIES = [
  // ── PHASE 1 ──
  {
    id: "iron-man",
    title: "Iron Man",
    year: 2008,
    phase: 1,
    releaseOrder: 1,
    chronologicalOrder: 6,
    poster: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
    posterFallback: "#8b1a1a",
    imdb: 7.9,
    description: "Billionaire industrialist Tony Stark is kidnapped and forced to build a weapon. Instead, he creates an advanced suit of armor to escape captivity and becomes the world's first Iron Man.",
    heroes: ["Iron Man", "Pepper Potts", "James Rhodes"],
    infinityStone: null,
    comingSoon: false,
    duration: "2h 6m",
    director: "Jon Favreau",
    watchOrderNote: null
  },
  {
    id: "incredible-hulk",
    title: "The Incredible Hulk",
    year: 2008,
    phase: 1,
    releaseOrder: 2,
    chronologicalOrder: 7,
    poster: "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMzg2OTk1MQ@@._V1_SX300.jpg",
    posterFallback: "#1a4a1a",
    imdb: 6.7,
    description: "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.",
    heroes: ["Hulk", "Betty Ross"],
    infinityStone: null,
    comingSoon: false,
    duration: "1h 52m",
    director: "Louis Leterrier",
    watchOrderNote: null
  },
  {
    id: "iron-man-2",
    title: "Iron Man 2",
    year: 2010,
    phase: 1,
    releaseOrder: 3,
    chronologicalOrder: 8,
    poster: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg",
    posterFallback: "#8b2a1a",
    imdb: 7.0,
    description: "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad scientist who wants to use his technology to destroy him.",
    heroes: ["Iron Man", "War Machine", "Black Widow", "Pepper Potts"],
    infinityStone: null,
    comingSoon: false,
    duration: "2h 4m",
    director: "Jon Favreau",
    watchOrderNote: null
  },
  {
    id: "thor",
    title: "Thor",
    year: 2011,
    phase: 1,
    releaseOrder: 4,
    chronologicalOrder: 9,
    poster: "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    posterFallback: "#1a1a8b",
    imdb: 7.0,
    description: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard, where he soon becomes one of their finest defenders.",
    heroes: ["Thor", "Loki", "Jane Foster"],
    infinityStone: "space",
    comingSoon: false,
    duration: "1h 55m",
    director: "Kenneth Branagh",
    watchOrderNote: null
  },
  {
    id: "captain-america-first-avenger",
    title: "Captain America: The First Avenger",
    year: 2011,
    phase: 1,
    releaseOrder: 5,
    chronologicalOrder: 1,
    poster: "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg",
    posterFallback: "#1a3a6b",
    imdb: 6.9,
    description: "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a Super Soldier Serum. He must stop the Red Skull and the Tesseract.",
    heroes: ["Captain America", "Bucky Barnes", "Peggy Carter"],
    infinityStone: "space",
    comingSoon: false,
    duration: "2h 4m",
    director: "Joe Johnston",
    watchOrderNote: "Chronologically the first MCU story, set in WWII 1943-1945"
  },
  {
    id: "avengers",
    title: "The Avengers",
    year: 2012,
    phase: 1,
    releaseOrder: 6,
    chronologicalOrder: 10,
    poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGM2NTFkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    posterFallback: "#6b1a1a",
    imdb: 8.0,
    description: "Nick Fury of S.H.I.E.L.D. assembles a team of superhumans to save the world from Loki and his army using the Tesseract.",
    heroes: ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye"],
    infinityStone: "space",
    comingSoon: false,
    duration: "2h 23m",
    director: "Joss Whedon",
    watchOrderNote: null
  },
  // ── PHASE 2 ──
  {
    id: "iron-man-3",
    title: "Iron Man 3",
    year: 2013,
    phase: 2,
    releaseOrder: 7,
    chronologicalOrder: 11,
    poster: "https://m.media-amazon.com/images/M/MV5BMjIzNzM4MDQwN15BMl5BanBnXkFtZTcwNzAyNDYxOQ@@._V1_SX300.jpg",
    posterFallback: "#8b1a00",
    imdb: 7.1,
    description: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    heroes: ["Iron Man", "Pepper Potts", "James Rhodes"],
    infinityStone: null,
    comingSoon: false,
    duration: "2h 10m",
    director: "Shane Black",
    watchOrderNote: null
  },
  {
    id: "thor-dark-world",
    title: "Thor: The Dark World",
    year: 2013,
    phase: 2,
    releaseOrder: 8,
    chronologicalOrder: 12,
    poster: "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg",
    posterFallback: "#1a1a4a",
    imdb: 6.9,
    description: "Thor battles to save Earth and all the Nine Realms from a shadowy enemy that predates the universe itself — and wields the ancient Aether.",
    heroes: ["Thor", "Loki", "Jane Foster"],
    infinityStone: "reality",
    comingSoon: false,
    duration: "1h 52m",
    director: "Alan Taylor",
    watchOrderNote: null
  },
  {
    id: "captain-america-winter-soldier",
    title: "Captain America: The Winter Soldier",
    year: 2014,
    phase: 2,
    releaseOrder: 9,
    chronologicalOrder: 13,
    poster: "https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgwMTE@._V1_SX300.jpg",
    posterFallback: "#1a2a5a",
    imdb: 7.7,
    description: "Steve Rogers struggles to embrace his role in the modern world and battles a new threat from old history — the Soviet assassin known as the Winter Soldier.",
    heroes: ["Captain America", "Black Widow", "Falcon", "Winter Soldier"],
    infinityStone: null,
    comingSoon: false,
    duration: "2h 16m",
    director: "Anthony Russo, Joe Russo",
    watchOrderNote: null
  },
  {
    id: "guardians-galaxy",
    title: "Guardians of the Galaxy",
    year: 2014,
    phase: 2,
    releaseOrder: 10,
    chronologicalOrder: 3,
    poster: "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxNTMx._V1_SX300.jpg",
    posterFallback: "#4a1a8b",
    imdb: 8.0,
    description: "A group of intergalactic criminals must pull together to stop a fanatical warrior from taking control of the universe's most powerful weapon.",
    heroes: ["Star-Lord", "Gamora", "Drax", "Rocket", "Groot"],
    infinityStone: "power",
    comingSoon: false,
    duration: "2h 1m",
    director: "James Gunn",
    watchOrderNote: null
  },
  {
    id: "avengers-age-of-ultron",
    title: "Avengers: Age of Ultron",
    year: 2015,
    phase: 2,
    releaseOrder: 11,
    chronologicalOrder: 14,
    poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOGQ4Ni00NTkyLTgxZTEtZmI3MDEyZmEwMWZhXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    posterFallback: "#2a2a2a",
    imdb: 7.3,
    description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program, things go awry when the sentient AI Ultron emerges and plans to destroy humanity.",
    heroes: ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye", "Scarlet Witch", "Vision"],
    infinityStone: "mind",
    comingSoon: false,
    duration: "2h 21m",
    director: "Joss Whedon",
    watchOrderNote: null
  },
  {
    id: "ant-man",
    title: "Ant-Man",
    year: 2015,
    phase: 2,
    releaseOrder: 12,
    chronologicalOrder: 15,
    poster: "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg",
    posterFallback: "#1a3a1a",
    imdb: 7.3,
    description: "Armed with a super suit that gives him the ability to shrink in scale but increase in strength, con-man Scott Lang must embrace his inner hero to protect a secret that could destroy the world.",
    heroes: ["Ant-Man", "The Wasp", "Hank Pym"],
    infinityStone: null,
    comingSoon: false,
    duration: "1h 57m",
    director: "Peyton Reed",
    watchOrderNote: null
  },
  // ── PHASE 3 ──
  {
    id: "civil-war",
    title: "Captain America: Civil War",
    year: 2016,
    phase: 3,
    releaseOrder: 13,
    chronologicalOrder: 16,
    poster: "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg",
    posterFallback: "#2a1a3a",
    imdb: 7.8,
    description: "Political pressure mounts to install a system of accountability when the Avengers are involved in another catastrophe, causing a rift between Captain America and Iron Man.",
    heroes: ["Captain America", "Iron Man", "Black Widow", "Winter Soldier", "Spider-Man", "Black Panther", "Scarlet Witch"],
    infinityStone: null,
    comingSoon: false,
    duration: "2h 27m",
    director: "Anthony Russo, Joe Russo",
    watchOrderNote: null
  },
  {
    id: "doctor-strange",
    title: "Doctor Strange",
    year: 2016,
    phase: 3,
    releaseOrder: 14,
    chronologicalOrder: 17,
    poster: "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
    posterFallback: "#1a1a5a",
    imdb: 7.5,
    description: "A former neurosurgeon embarks on a journey of healing only to be drawn into the world of the mystic arts. He must act as an Avenger and protect the Eye of Agamotto.",
    heroes: ["Doctor Strange", "Wong", "Ancient One"],
    infinityStone: "time",
    comingSoon: false,
    duration: "1h 55m",
    director: "Scott Derrickson",
    watchOrderNote: null
  },
  {
    id: "guardians-galaxy-2",
    title: "Guardians of the Galaxy Vol. 2",
    year: 2017,
    phase: 3,
    releaseOrder: 15,
    chronologicalOrder: 4,
    poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtYThjOTZiZjhhN2M2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    posterFallback: "#4a1a7a",
    imdb: 7.6,
    description: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his long-lost father, the living planet Ego.",
    heroes: ["Star-Lord", "Gamora", "Drax", "Rocket", "Groot", "Mantis", "Nebula"],
    infinityStone: null,
    comingSoon: false,
    duration: "2h 16m",
    director: "James Gunn",
    watchOrderNote: null
  },
  {
    id: "spider-man-homecoming",
    title: "Spider-Man: Homecoming",
    year: 2017,
    phase: 3,
    releaseOrder: 16,
    chronologicalOrder: 18,
    poster: "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg",
    posterFallback: "#8b1a1a",
    imdb: 7.4,
    description: "Peter Parker tries to balance his life as an ordinary high school student in Queens while fighting crime as his superhero alter ego Spider-Man.",
    heroes: ["Spider-Man", "Iron Man", "Happy Hogan"],
    infinityStone: null,
    comingSoon: false,
    duration: "2h 13m",
    director: "Jon Watts",
    watchOrderNote: null
  },
  {
    id: "thor-ragnarok",
    title: "Thor: Ragnarok",
    year: 2017,
    phase: 3,
    releaseOrder: 17,
    chronologicalOrder: 19,
    poster: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxOTY5MTI@._V1_SX300.jpg",
    posterFallback: "#3a1a6a",
    imdb: 7.9,
    description: "Thor is imprisoned on the planet Sakaar and must race against time to return to Asgard and stop Ragnarök — the destruction of his home — by the ruthless Hela.",
    heroes: ["Thor", "Hulk", "Loki", "Valkyrie"],
    infinityStone: "space",
    comingSoon: false,
    duration: "2h 10m",
    director: "Taika Waititi",
    watchOrderNote: null
  },
  {
    id: "black-panther",
    title: "Black Panther",
    year: 2018,
    phase: 3,
    releaseOrder: 18,
    chronologicalOrder: 20,
    poster: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg",
    posterFallback: "#1a0a2a",
    imdb: 7.3,
    description: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
    heroes: ["Black Panther", "Shuri", "Okoye", "Nakia"],
    infinityStone: null,
    comingSoon: false,
    duration: "2h 14m",
    director: "Ryan Coogler",
    watchOrderNote: null
  },
  {
    id: "infinity-war",
    title: "Avengers: Infinity War",
    year: 2018,
    phase: 3,
    releaseOrder: 19,
    chronologicalOrder: 21,
    poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    posterFallback: "#2a0a3a",
    imdb: 8.4,
    description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    heroes: ["Iron Man", "Thor", "Captain America", "Doctor Strange", "Spider-Man", "Guardians of the Galaxy", "Black Panther"],
    infinityStone: "soul",
    comingSoon: false,
    duration: "2h 29m",
    director: "Anthony Russo, Joe Russo",
    watchOrderNote: null
  },
  {
    id: "ant-man-wasp",
    title: "Ant-Man and the Wasp",
    year: 2018,
    phase: 3,
    releaseOrder: 20,
    chronologicalOrder: 22,
    poster: "https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2YwLWI4NTItMDRkZjkwODVlZTgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    posterFallback: "#1a3a1a",
    imdb: 7.0,
    description: "Scott Lang grapples with the consequences of his choices as a superhero and a father. He joins forces with Hope van Dyne and Hank Pym to discover secrets from the past.",
    heroes: ["Ant-Man", "The Wasp", "Hank Pym"],
    infinityStone: null,
    comingSoon: false,
    duration: "1h 58m",
    director: "Peyton Reed",
    watchOrderNote: null
  },
  {
    id: "captain-marvel",
    title: "Captain Marvel",
    year: 2019,
    phase: 3,
    releaseOrder: 21,
    chronologicalOrder: 2,
    poster: "https://m.media-amazon.com/images/M/MV5BMTE4NTkwODk3OTZeQTJeQWpwZ15BbWU4MDU5NDg3MDIx._V1_SX300.jpg",
    posterFallback: "#1a1a6a",
    imdb: 6.8,
    description: "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
    heroes: ["Captain Marvel", "Nick Fury", "Goose"],
    infinityStone: "space",
    comingSoon: false,
    duration: "2h 4m",
    director: "Anna Boden, Ryan Fleck",
    watchOrderNote: "Set in the 1990s — chronologically second MCU story"
  },
  {
    id: "endgame",
    title: "Avengers: Endgame",
    year: 2019,
    phase: 3,
    releaseOrder: 22,
    chronologicalOrder: 23,
    poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    posterFallback: "#0a0a1a",
    imdb: 8.4,
    description: "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe — whatever it takes.",
    heroes: ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye", "Ant-Man", "Nebula", "Captain Marvel"],
    infinityStone: "soul",
    comingSoon: false,
    duration: "3h 1m",
    director: "Anthony Russo, Joe Russo",
    watchOrderNote: null
  },
  {
    id: "spider-man-far-from-home",
    title: "Spider-Man: Far From Home",
    year: 2019,
    phase: 3,
    releaseOrder: 23,
    chronologicalOrder: 24,
    poster: "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MTEtMThmOWQ1MTBiMzg2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
    posterFallback: "#8b1a00",
    imdb: 7.4,
    description: "Peter Parker's relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission.",
    heroes: ["Spider-Man", "Nick Fury", "Mysterio"],
    infinityStone: null,
    comingSoon: false,
    duration: "2h 9m",
    director: "Jon Watts",
    watchOrderNote: null
  },
  // ── PHASE 4 ──
  {
    id: "black-widow",
    title: "Black Widow",
    year: 2021,
    phase: 4,
    releaseOrder: 24,
    chronologicalOrder: 25,
    poster: "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjU5N2NkMTNhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    posterFallback: "#1a1a1a",
    imdb: 6.7,
    description: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
    heroes: ["Black Widow", "Yelena Belova", "Red Guardian"],
    infinityStone: null,
    comingSoon: false,
    duration: "2h 14m",
    director: "Cate Shortland",
    watchOrderNote: null
  },
  {
    id: "shang-chi",
    title: "Shang-Chi and the Legend of the Ten Rings",
    year: 2021,
    phase: 4,
    releaseOrder: 25,
    chronologicalOrder: 26,
    poster: "https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlMS00NjgwLWZkNjEtYzgwN2U3NmNmMjNiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    posterFallback: "#2a1a00",
    imdb: 7.4,
    description: "Shang-Chi must confront the past he thought he left behind when he is drawn into the Ten Rings organization.",
    heroes: ["Shang-Chi", "Katy", "Xialing", "Wenwu"],
    infinityStone: null,
    comingSoon: false,
    duration: "2h 12m",
    director: "Destin Daniel Cretton",
    watchOrderNote: null
  },
  {
    id: "eternals",
    title: "Eternals",
    year: 2021,
    phase: 4,
    releaseOrder: 26,
    chronologicalOrder: 27,
    poster: "https://m.media-amazon.com/images/M/MV5BZjI4ZDRiZmItMjEwZC00OWNkLWEyOWEtNjNiMzMzMWNiOTZjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    posterFallback: "#1a1a2a",
    imdb: 6.3,
    description: "The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.",
    heroes: ["Sersi", "Ikaris", "Thena", "Ajak", "Druig", "Phastos", "Makkari", "Sprite", "Gilgamesh", "Kingo"],
    infinityStone: null,
    comingSoon: false,
    duration: "2h 37m",
    director: "Chloé Zhao",
    watchOrderNote: null
  },
  {
    id: "spider-man-no-way-home",
    title: "Spider-Man: No Way Home",
    year: 2021,
    phase: 4,
    releaseOrder: 27,
    chronologicalOrder: 28,
    poster: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
    posterFallback: "#8b1a1a",
    imdb: 8.2,
    description: "Peter Parker's identity is revealed. He asks Doctor Strange for help, but the spell tears open the multiverse.",
    heroes: ["Spider-Man", "Doctor Strange", "MJ", "Ned Leeds"],
    infinityStone: "time",
    comingSoon: false,
    duration: "2h 28m",
    director: "Jon Watts",
    watchOrderNote: null
  },
  {
    id: "doctor-strange-multiverse",
    title: "Doctor Strange in the Multiverse of Madness",
    year: 2022,
    phase: 4,
    releaseOrder: 28,
    chronologicalOrder: 29,
    poster: "https://m.media-amazon.com/images/M/MV5BNWM0ZTFiNWMtNmNhMC00MGIwLTk1YTgtNjkxZTFjZGM2ZTZmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    posterFallback: "#1a0a2a",
    imdb: 6.9,
    description: "Doctor Strange teams with a mysterious teenager who possesses the ability to travel between universes, but the trip is dangerous.",
    heroes: ["Doctor Strange", "Scarlet Witch", "Wong", "America Chavez"],
    infinityStone: "time",
    comingSoon: false,
    duration: "2h 6m",
    director: "Sam Raimi",
    watchOrderNote: null
  },
  {
    id: "thor-love-thunder",
    title: "Thor: Love and Thunder",
    year: 2022,
    phase: 4,
    releaseOrder: 29,
    chronologicalOrder: 30,
    poster: "https://m.media-amazon.com/images/M/MV5BYmMxZWJiNjMtMGY5MS00NGZmLTk0YzMtNTc0NDYxZTAyYzVmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    posterFallback: "#1a1a5a",
    imdb: 6.2,
    description: "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster — who has unexpectedly become the Mighty Thor — to fight Gorr the God Butcher.",
    heroes: ["Thor", "Mighty Thor", "Valkyrie", "Korg", "Guardians of the Galaxy"],
    infinityStone: null,
    comingSoon: false,
    duration: "1h 59m",
    director: "Taika Waititi",
    watchOrderNote: null
  },
  {
    id: "black-panther-wakanda-forever",
    title: "Black Panther: Wakanda Forever",
    year: 2022,
    phase: 4,
    releaseOrder: 30,
    chronologicalOrder: 31,
    poster: "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    posterFallback: "#0a0a1a",
    imdb: 6.7,
    description: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa, and Queen Ramonda embraces Shuri as successor.",
    heroes: ["Shuri", "Okoye", "Nakia", "Namor", "Ironheart"],
    infinityStone: null,
    comingSoon: false,
    duration: "2h 41m",
    director: "Ryan Coogler",
    watchOrderNote: null
  },
  // ── PHASE 5 ──
  {
    id: "ant-man-quantumania",
    title: "Ant-Man and the Wasp: Quantumania",
    year: 2023,
    phase: 5,
    releaseOrder: 31,
    chronologicalOrder: 32,
    poster: "https://m.media-amazon.com/images/M/MV5BODZhNzlmOGItYjgxMS00YzM0LWJkN2ItNzViZmZiNWY0OTEzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    posterFallback: "#1a3a1a",
    imdb: 6.1,
    description: "Scott Lang and Hope Van Dyne explore the Quantum Realm with Cassie and Hank Pym. They soon find themselves in a battle against Kang the Conqueror.",
    heroes: ["Ant-Man", "The Wasp", "Hank Pym", "Cassie Lang"],
    infinityStone: null,
    comingSoon: false,
    duration: "2h 4m",
    director: "Peyton Reed",
    watchOrderNote: null
  },
  {
    id: "guardians-galaxy-3",
    title: "Guardians of the Galaxy Vol. 3",
    year: 2023,
    phase: 5,
    releaseOrder: 32,
    chronologicalOrder: 33,
    poster: "https://m.media-amazon.com/images/M/MV5BMDgxOTdjMWctZjYzNy00NGY5LThhOGUtZjZlNmM2YWIzYjFiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    posterFallback: "#4a1a7a",
    imdb: 7.9,
    description: "Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe along with protecting one of their own — and a mission that could mean the end of the Guardians.",
    heroes: ["Star-Lord", "Gamora", "Drax", "Rocket", "Groot", "Mantis", "Nebula", "Adam Warlock"],
    infinityStone: null,
    comingSoon: false,
    duration: "2h 30m",
    director: "James Gunn",
    watchOrderNote: null
  },
  {
    id: "the-marvels",
    title: "The Marvels",
    year: 2023,
    phase: 5,
    releaseOrder: 33,
    chronologicalOrder: 34,
    poster: "https://m.media-amazon.com/images/M/MV5BM2U3YWMzZDgtZTkwNy00YmI3LTgxNzktMzIwZDA0M2YwYzEwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    posterFallback: "#1a1a6a",
    imdb: 5.5,
    description: "Carol Danvers, Kamala Khan, and Monica Rambeau have their powers entangled, and must work together to save the universe.",
    heroes: ["Captain Marvel", "Ms. Marvel", "Monica Rambeau"],
    infinityStone: null,
    comingSoon: false,
    duration: "1h 45m",
    director: "Nia DaCosta",
    watchOrderNote: null
  },
  {
    id: "deadpool-wolverine",
    title: "Deadpool & Wolverine",
    year: 2024,
    phase: 5,
    releaseOrder: 34,
    chronologicalOrder: 35,
    poster: "https://m.media-amazon.com/images/M/MV5BNDZiNWU4ZjItMGQzYy00ZjBhLWI1MjItNzZmMTZkOWIzNjM5XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
    posterFallback: "#8b0000",
    imdb: 7.7,
    description: "Deadpool is recruited by the Time Variance Authority to help fix a multiversal problem, and teams up — reluctantly — with the Wolverine of another timeline.",
    heroes: ["Deadpool", "Wolverine"],
    infinityStone: "time",
    comingSoon: false,
    duration: "2h 8m",
    director: "Shawn Levy",
    watchOrderNote: null
  },
  {
    id: "captain-america-brave-new-world",
    title: "Captain America: Brave New World",
    year: 2025,
    phase: 5,
    releaseOrder: 35,
    chronologicalOrder: 36,
    poster: "https://m.media-amazon.com/images/M/MV5BZmE0MzMzNjAtZmJlNi00YzU3LTk3NjktZjc5ZmIwMzRlNDEzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    posterFallback: "#1a2a5a",
    imdb: 6.0,
    description: "Sam Wilson, the new Captain America, finds himself in the middle of an international incident after a meeting with the newly elected United States president.",
    heroes: ["Captain America", "Red Hulk", "Falcon"],
    infinityStone: null,
    comingSoon: false,
    duration: "1h 58m",
    director: "Julius Onah",
    watchOrderNote: null
  },
  {
    id: "thunderbolts",
    title: "Thunderbolts*",
    year: 2025,
    phase: 5,
    releaseOrder: 36,
    chronologicalOrder: 37,
    poster: "https://m.media-amazon.com/images/M/MV5BOWY5NjYwOWItOTJkYS00NzZhLWE4NTEtNGMzN2QxMzE5YmQ4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    posterFallback: "#1a1a3a",
    imdb: 7.2,
    description: "A team of antiheroes — including Yelena Belova, US Agent, Ghost, and Taskmaster — are recruited for a government mission that brings them face-to-face with Sentry.",
    heroes: ["Yelena Belova", "US Agent", "Ghost", "Bucky Barnes", "Red Guardian", "Taskmaster"],
    infinityStone: null,
    comingSoon: false,
    duration: "2h 7m",
    director: "Jake Schreier",
    watchOrderNote: null
  },
  // ── PHASE 6 (COMING SOON) ──
  {
    id: "fantastic-four",
    title: "The Fantastic Four: First Steps",
    year: 2025,
    phase: 6,
    releaseOrder: 37,
    chronologicalOrder: 5,
    poster: "",
    posterFallback: "#1a1a3a",
    imdb: null,
    description: "Marvel's First Family steps into the spotlight. Set in an idealized retro-futuristic world, the Fantastic Four face a menacing space villain who hungers for worlds.",
    heroes: ["Mr. Fantastic", "Invisible Woman", "Human Torch", "The Thing", "Silver Surfer"],
    infinityStone: null,
    comingSoon: true,
    duration: "TBA",
    director: "Matt Shakman",
    watchOrderNote: null
  },
  {
    id: "avengers-doomsday",
    title: "Avengers: Doomsday",
    year: 2026,
    phase: 6,
    releaseOrder: 38,
    chronologicalOrder: 38,
    poster: "",
    posterFallback: "#1a0000",
    imdb: null,
    description: "The Avengers must unite against the ultimate threat as Kang the Conqueror's most dangerous variant — Doctor Doom — threatens all of existence.",
    heroes: ["Avengers", "Doctor Doom"],
    infinityStone: null,
    comingSoon: true,
    duration: "TBA",
    director: "Anthony Russo, Joe Russo",
    watchOrderNote: null
  },
  {
    id: "avengers-secret-wars",
    title: "Avengers: Secret Wars",
    year: 2027,
    phase: 6,
    releaseOrder: 39,
    chronologicalOrder: 39,
    poster: "",
    posterFallback: "#0a0000",
    imdb: null,
    description: "The multiverse collapses. Heroes from across realities collide in the ultimate Marvel event — the battle that will define what survives and what is left behind.",
    heroes: ["Avengers", "Multiverse Heroes"],
    infinityStone: null,
    comingSoon: true,
    duration: "TBA",
    director: "Anthony Russo, Joe Russo",
    watchOrderNote: null
  }
];

// ── STATE ──────────────────────────────────────────────────────────────────

const state = {
  viewMode: "release",
  activePhase: "all",
  activeStone: null,
  activeHero: "all",
  searchQuery: "",
  modalOpen: null,
  audioPlaying: false
};

function populateHeroDropdown() {
  const heroes = new Set();
  MOVIES.forEach(m => m.heroes.forEach(h => heroes.add(h)));
  const select = document.getElementById("hero-select");
  [...heroes].sort().forEach(hero => {
    const opt = document.createElement("option");
    opt.value = hero;
    opt.textContent = hero.toUpperCase();
    select.appendChild(opt);
  });
}

function updateHudReadout(visibleCount) {
  const stoneLabel = state.activeStone ? ` // STONE: ${state.activeStone.toUpperCase()}` : "";
  const phaseLabel = state.activePhase !== "all" ? ` // PHASE: ${state.activePhase}` : " // PHASE: ALL";
  const modeLabel = state.viewMode === "chronological" ? " // MODE: CHRONO" : " // MODE: RELEASE";
  document.getElementById("hud-readout").textContent =
    `DISPLAYING: ${visibleCount} FILMS${phaseLabel}${stoneLabel}${modeLabel}`;
}

function updateHeroStat() {
  document.getElementById("stat-movies").textContent = MOVIES.filter(m => !m.comingSoon).length;
}

// ── UI ─────────────────────────────────────────────────────────────────────

function esc(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getFilteredMovies() {
  const q = state.searchQuery.toLowerCase();
  return MOVIES
    .filter(m => {
      if (state.activePhase !== "all" && m.phase !== Number(state.activePhase)) return false;
      if (state.activeStone && m.infinityStone !== state.activeStone) return false;
      if (state.activeHero !== "all" && !m.heroes.includes(state.activeHero)) return false;
      if (q && !m.title.toLowerCase().includes(q) &&
               !m.description.toLowerCase().includes(q) &&
               !m.director.toLowerCase().includes(q) &&
               !m.heroes.some(h => h.toLowerCase().includes(q))) return false;
      return true;
    })
    .sort((a, b) => state.viewMode === "chronological"
      ? a.chronologicalOrder - b.chronologicalOrder
      : a.releaseOrder - b.releaseOrder);
}

function getStoneBadgeColor(stone) {
  const map = {
    space: "#00d4ff",
    mind: "#ffe600",
    reality: "#e3000f",
    power: "#7b2fff",
    time: "#00ff88",
    soul: "#ff6b00"
  };
  return map[stone] || "#fff";
}

function buildCardHTML(movie) {
  const stoneBadge = movie.infinityStone
    ? `<span class="stone-badge" style="background:${getStoneBadgeColor(movie.infinityStone)}"></span>` : "";
  const ratingHTML = movie.imdb
    ? `<span class="card-rating">★ ${movie.imdb}</span>` : "";
  const heroTags = movie.heroes.slice(0, 2)
    .map(h => `<span class="hero-tag">${h}</span>`).join("");
  const classifiedStamp = movie.comingSoon
    ? `<div class="classified-stamp">CLASSIFIED</div>` : "";

  let posterHTML;
  if (movie.poster) {
    posterHTML = `<img class="card-poster" src="${movie.poster}" alt="${esc(movie.title)}" loading="lazy"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="card-poster-fallback" style="background:${movie.posterFallback};display:none">${esc(movie.title)}</div>`;
  } else {
    posterHTML = `<div class="card-poster-fallback" style="background:${movie.posterFallback}">${esc(movie.title)}</div>`;
  }

  return `
    <div class="movie-card${movie.comingSoon ? " coming-soon" : ""}" data-id="${movie.id}">
      ${stoneBadge}
      <span class="phase-badge">P${movie.phase}</span>
      ${posterHTML}
      ${classifiedStamp}
      <div class="card-body">
        <div class="card-title">${esc(movie.title)}</div>
        <div class="card-meta">
          <span class="card-year">${esc(movie.year)}</span>
          ${ratingHTML}
        </div>
        <div class="card-heroes">${heroTags}</div>
      </div>
    </div>`;
}

function renderTimeline() {
  const timeline = document.getElementById("timeline");
  const filtered = getFilteredMovies();

  updateHudReadout(filtered.length);

  if (filtered.length === 0) {
    timeline.innerHTML = `<div class="no-results">NO FILMS MATCH CURRENT PARAMETERS</div>`;
    return;
  }

  const phases = {};
  filtered.forEach(m => {
    if (!phases[m.phase]) phases[m.phase] = [];
    phases[m.phase].push(m);
  });

  const phaseNames = {
    1: "PHASE ONE",
    2: "PHASE TWO",
    3: "PHASE THREE",
    4: "PHASE FOUR",
    5: "PHASE FIVE",
    6: "PHASE SIX — COMING SOON"
  };

  timeline.innerHTML = Object.entries(phases)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([phase, movies]) => `
      <div class="phase-section">
        <div class="phase-header">
          <span class="phase-title">${phaseNames[phase] || "PHASE " + phase}</span>
          <div class="phase-line"></div>
          <span class="phase-count">${movies.length} FILM${movies.length !== 1 ? "S" : ""}</span>
        </div>
        <div class="cards-row">
          ${movies.map(buildCardHTML).join("")}
        </div>
      </div>`).join("");

  observeCards();
}

let cardObserver = null;

function observeCards() {
  if (cardObserver) cardObserver.disconnect();
  cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        cardObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".movie-card, .phase-header").forEach(el => {
    if (!el.classList.contains("visible")) cardObserver.observe(el);
  });
}

function wireControls() {
  document.getElementById("search-input").addEventListener("input", e => {
    state.searchQuery = e.target.value;
    renderTimeline();
  });

  document.getElementById("phase-pills").addEventListener("click", e => {
    const pill = e.target.closest(".phase-pill");
    if (!pill) return;
    document.querySelectorAll(".phase-pill").forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    state.activePhase = pill.dataset.phase;
    renderTimeline();
  });

  document.getElementById("hero-select").addEventListener("change", e => {
    state.activeHero = e.target.value;
    renderTimeline();
  });

  document.getElementById("view-toggle").addEventListener("change", e => {
    state.viewMode = e.target.checked ? "chronological" : "release";
    renderTimeline();
  });

  document.getElementById("stones-nav").addEventListener("click", e => {
    const btn = e.target.closest(".stone-btn");
    if (!btn) return;
    document.querySelectorAll(".stone-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const stone = btn.dataset.stone;
    state.activeStone = stone === "all" ? null : stone;
    renderTimeline();
  });

  document.getElementById("timeline").addEventListener("click", e => {
    const card = e.target.closest(".movie-card");
    if (card && !card.classList.contains("coming-soon")) openModal(card.dataset.id);
  });
}

function wire3DTilt() {
  if (navigator.maxTouchPoints > 0) return;

  document.addEventListener("mousemove", e => {
    const card = e.target.closest(".movie-card");
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    card.style.transform = `perspective(600px) rotateY(${dx * 8}deg) rotateX(${-dy * 8}deg) scale(1.04)`;
  });

  document.addEventListener("mouseleave", e => {
    const card = e.target.closest(".movie-card");
    if (card) card.style.transform = "";
  }, true);

  document.getElementById("timeline").addEventListener("mouseleave", e => {
    const card = e.target.closest(".movie-card");
    if (card) card.style.transform = "";
  }, true);
}

function buildRatingRing(rating) {
  if (!rating) return "";
  const r = 20;
  const circ = 2 * Math.PI * r;
  const offset = circ - (rating / 10) * circ;
  return `
    <div class="rating-ring">
      <svg width="52" height="52" viewBox="0 0 52 52">
        <circle class="ring-bg" cx="26" cy="26" r="${r}"/>
        <circle class="ring-fill" cx="26" cy="26" r="${r}"
          stroke-dasharray="${circ.toFixed(2)}" stroke-dashoffset="${offset.toFixed(2)}"/>
      </svg>
      <div class="rating-num">${rating}</div>
    </div>`;
}

function openModal(movieId) {
  const movie = MOVIES.find(m => m.id === movieId);
  if (!movie) return;

  state.modalOpen = movieId;
  document.body.style.overflow = "hidden";

  let posterHTML;
  if (movie.poster) {
    posterHTML = `<img class="modal-poster" src="${movie.poster}" alt="${esc(movie.title)}"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="modal-poster-fallback" style="background:${movie.posterFallback};display:none">${esc(movie.title)}</div>`;
  } else {
    posterHTML = `<div class="modal-poster-fallback" style="background:${movie.posterFallback}">${esc(movie.title)}</div>`;
  }

  const stoneLine = movie.infinityStone
    ? `<div class="modal-stone-badge">
         <span class="modal-stone-gem" style="background:${getStoneBadgeColor(movie.infinityStone)}"></span>
         ${movie.infinityStone.toUpperCase()} STONE
       </div>` : "";

  const heroTags = movie.heroes.map(h => `<span class="modal-hero-tag">${esc(h)}</span>`).join("");
  const ratingHTML = movie.imdb ? buildRatingRing(movie.imdb) : "";
  const watchNote = movie.watchOrderNote
    ? `<div class="modal-watch-note">${esc(movie.watchOrderNote)}</div>` : "";

  document.getElementById("modal-content").innerHTML = `
    <div class="modal-inner">
      <div>${posterHTML}</div>
      <div class="modal-info">
        <div class="modal-phase">PHASE ${movie.phase} // ${movie.year}</div>
        <h2 id="modal-title" class="modal-title">${esc(movie.title)}</h2>
        <div class="modal-meta">
          <span>🎬 ${esc(movie.director)}</span>
          <span>⏱ ${esc(movie.duration)}</span>
        </div>
        <div class="modal-rating-wrap">
          ${ratingHTML}
          ${movie.imdb ? `<span class="modal-rating-label">IMDB RATING</span>` : ""}
        </div>
        <p class="modal-description">${esc(movie.description)}</p>
        <div class="modal-heroes">${heroTags}</div>
        ${stoneLine}
        ${watchNote}
      </div>
    </div>`;

  document.getElementById("modal-overlay").classList.add("open");
}

function closeModal() {
  state.modalOpen = null;
  document.body.style.overflow = "";
  document.getElementById("modal-overlay").classList.remove("open");
}

function wireModal() {
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-overlay").addEventListener("click", e => {
    if (e.target === document.getElementById("modal-overlay")) closeModal();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && state.modalOpen) closeModal();
  });
}

function initParticles() {
  const canvas = document.getElementById("particle-canvas");
  const ctx = canvas.getContext("2d");

  let W, H, stars = [], orbs = [];
  let lastFrame = 0;
  const FRAME_MS = 1000 / 30;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function randomStar() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      alpha: Math.random() * 0.5 + 0.2,
      color: Math.random() > 0.8 ? "#00d4ff" : "#ffffff"
    };
  }

  function randomOrb(i) {
    const colors = [
      "rgba(227,0,15,",
      "rgba(0,212,255,",
      "rgba(240,177,50,",
      "rgba(123,47,255,",
      "rgba(26,111,196,"
    ];
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 120 + 60,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      t: Math.random() * Math.PI * 2,
      ts: (Math.random() * 0.003 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
      color: colors[i % colors.length]
    };
  }

  resize();
  window.addEventListener("resize", resize);

  for (let i = 0; i < 200; i++) stars.push(randomStar());
  for (let i = 0; i < 8; i++) orbs.push(randomOrb(i));

  let running = true;
  let rafId = null;

  function draw(ts) {
    if (!running) return;
    if (ts - lastFrame < FRAME_MS) { rafId = requestAnimationFrame(draw); return; }
    lastFrame = ts;

    ctx.clearRect(0, 0, W, H);

    orbs.forEach(o => {
      o.t += o.ts;
      o.x += Math.sin(o.t) * 0.4 + o.vx;
      o.y += Math.cos(o.t * 0.7) * 0.3 + o.vy;
      if (o.x < -o.r) o.x = W + o.r;
      if (o.x > W + o.r) o.x = -o.r;
      if (o.y < -o.r) o.y = H + o.r;
      if (o.y > H + o.r) o.y = -o.r;

      const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
      g.addColorStop(0, o.color + "0.06)");
      g.addColorStop(1, o.color + "0)");
      ctx.beginPath();
      ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
    });

    stars.forEach(s => {
      s.x += s.vx;
      s.y += s.vy;
      if (s.x < 0) s.x = W; if (s.x > W) s.x = 0;
      if (s.y < 0) s.y = H; if (s.y > H) s.y = 0;

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.globalAlpha = s.alpha;
      ctx.fill();
    });

    ctx.globalAlpha = 1;
    rafId = requestAnimationFrame(draw);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      running = false;
      cancelAnimationFrame(rafId);
    } else {
      running = true;
      rafId = requestAnimationFrame(draw);
    }
  });

  rafId = requestAnimationFrame(draw);
}

function initLoadingScreen() {
  const text = "INITIALIZING STARK NETWORK...";
  const el = document.getElementById("loading-text");
  let i = 0;
  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 60);

  setTimeout(() => {
    document.getElementById("loading-screen").classList.add("hidden");
  }, 2500);
}

function initAudio() {
  const audio = new Audio("https://cdn.pixabay.com/download/audio/2022/11/17/audio_febc508520.mp3");
  audio.loop = true;
  audio.volume = 0.25;

  const fab = document.getElementById("audio-fab");
  fab.addEventListener("click", () => {
    if (state.audioPlaying) {
      audio.pause();
      fab.classList.remove("playing");
    } else {
      audio.play().catch(() => {});
      fab.classList.add("playing");
    }
    state.audioPlaying = !state.audioPlaying;
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden && state.audioPlaying) audio.pause();
    else if (!document.hidden && state.audioPlaying) audio.play().catch(() => {});
  });
}

function flashEasterEgg(message) {
  const overlay = document.getElementById("easter-egg-overlay");
  document.getElementById("easter-egg-text").textContent = message;
  overlay.classList.add("show");
  setTimeout(() => overlay.classList.remove("show"), 2500);
}

function initEasterEggs() {
  const konami = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
  let konamiIdx = 0;
  document.addEventListener("keydown", e => {
    if (e.key === konami[konamiIdx]) {
      konamiIdx++;
      if (konamiIdx === konami.length) {
        konamiIdx = 0;
        flashEasterEgg("⚡ AVENGERS ASSEMBLE ⚡");
      }
    } else {
      konamiIdx = 0;
    }
  });

  let reactorClicks = 0;
  document.getElementById("hud-reactor").addEventListener("click", () => {
    reactorClicks++;
    if (reactorClicks >= 10) {
      reactorClicks = 0;
      flashEasterEgg("J.A.R.V.I.S. ONLINE // WELCOME BACK, MR. STARK");
    }
  });

  document.getElementById("timeline").addEventListener("mouseover", e => {
    const card = e.target.closest(".movie-card");
    if (!card) return;
    const id = card.dataset.id;
    if (id === "infinity-war" || id === "endgame") {
      const siblings = [...card.parentElement.children];
      siblings.forEach((c, i) => {
        if (c !== card) {
          const dir = i % 2 === 0 ? 1 : -1;
          c.style.transition = "transform 0.5s ease";
          c.style.transform = `translateX(${dir * 6}px)`;
        }
      });
    }
  });

  document.getElementById("timeline").addEventListener("mouseout", e => {
    const card = e.target.closest(".movie-card");
    if (!card) return;
    const id = card.dataset.id;
    if (id === "infinity-war" || id === "endgame") {
      [...card.parentElement.children].forEach(c => {
        c.style.transform = "";
      });
    }
  });
}

// ── BOOT ───────────────────────────────────────────────────────────────────

function init() {
  initLoadingScreen();
  initParticles();
  populateHeroDropdown();
  updateHeroStat();
  wireControls();
  wireModal();
  wire3DTilt();
  initAudio();
  initEasterEggs();
  renderTimeline();
}

document.addEventListener("DOMContentLoaded", init);
