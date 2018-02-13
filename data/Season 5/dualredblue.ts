/// <reference path="../tpp-data.ts" />

const dualBlue = {
    RunName: "Dual Blue",
    ColorPrimary: "#2246a6",
    ColorSecondary: "#63a5ff",
    Duration: "255d",
    StartDate: "2018-02-13T01:22:00Z",
    HostName: "XXWWNN\u03c0",
    HostImage: "img/trainers/red/green.png",
    //HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
    BaseGame: "Red",
    Region: "Kanto",
    Class: "dual-run shared-dex",
    Events: [
        { Group: "Badges", Name: "Boulder Badge", Image: "img/badges/boulder.png", Time: "0d 5h 31m", Attempts: 2 },
        { Group: "Badges", Name: "Cascade Badge", Image: "img/badges/cascade.png", Time: "", Attempts: 0 },
        { Group: "Badges", Name: "Thunder Badge", Image: "img/badges/thunder.png", Time: "", Attempts: 0 },
        { Group: "Badges", Name: "Rainbow Badge", Image: "img/badges/rainbow.png", Time: "", Attempts: 0 },
        { Group: "Badges", Name: "Soul Badge", Image: "img/badges/soul.png", Time: "", Attempts: 0 },
        { Group: "Badges", Name: "Marsh Badge", Image: "img/badges/marsh.png", Time: "", Attempts: 0 },
        { Group: "Badges", Name: "Volcano Badge", Image: "img/badges/volcano.png", Time: "", Attempts: 0 },
        { Group: "Badges", Name: "Earth Badge", Image: "img/badges/earth.png", Time: "", Attempts: 0 },
        { Group: "Elite Four", Name: "Lorelei", Image: "img/trainers/red/lorelei.png", Time: "", Attempts: 0 },
        { Group: "Elite Four", Name: "Bruno", Image: "img/trainers/red/bruno.png", Time: "", Attempts: 0 },
        { Group: "Elite Four", Name: "Agatha", Image: "img/trainers/red/agatha.png", Time: "", Attempts: 0 },
        { Group: "Elite Four", Name: "Lance", Image: "img/trainers/red/lance.png", Time: "", Attempts: 0 },
        { Group: "Champions", Name: "Blue", Image: "img/trainers/red/blue.png", Time: "", Attempts: 0 },
        <TPP.HallOfFame>{
            Group: "Hall of Fame", Name: "Hall of Fame", Time: "", Attempts: 0, Party: [
            ],
            Image: "img/ribbons/champion.png"
        },
    ]
};

const dualRed = {
    RunName: "Dual Red",
    ColorPrimary: "#cc6b5b",
    ColorSecondary: "#ff8484",
    Duration: "255d",
    StartDate: "2018-02-13T01:22:00Z",
    HostName: "(((",
    HostImage: "img/trainers/red/red.png",
    //HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
    BaseGame: "Red",
    Region: "Kanto",
    Class: "dual-run shared-dex",
    Events: [
        { Group: "Badges", Name: "Boulder Badge", Image: "img/badges/boulder.png", Time: "0d 5h 27m", Attempts: 1 },
        { Group: "Badges", Name: "Cascade Badge", Image: "img/badges/cascade.png", Time: "12h21m", Attempts: 0 },
        { Group: "Badges", Name: "Thunder Badge", Image: "img/badges/thunder.png", Time: "", Attempts: 0 },
        { Group: "Badges", Name: "Rainbow Badge", Image: "img/badges/rainbow.png", Time: "", Attempts: 0 },
        { Group: "Badges", Name: "Soul Badge", Image: "img/badges/soul.png", Time: "", Attempts: 0 },
        { Group: "Badges", Name: "Marsh Badge", Image: "img/badges/marsh.png", Time: "", Attempts: 0 },
        { Group: "Badges", Name: "Volcano Badge", Image: "img/badges/volcano.png", Time: "", Attempts: 0 },
        { Group: "Badges", Name: "Earth Badge", Image: "img/badges/earth.png", Time: "", Attempts: 0 },
        { Group: "Elite Four", Name: "Lorelei", Image: "img/trainers/red/lorelei.png", Time: "", Attempts: 0 },
        { Group: "Elite Four", Name: "Bruno", Image: "img/trainers/red/bruno.png", Time: "", Attempts: 0 },
        { Group: "Elite Four", Name: "Agatha", Image: "img/trainers/red/agatha.png", Time: "", Attempts: 0 },
        { Group: "Elite Four", Name: "Lance", Image: "img/trainers/red/lance.png", Time: "", Attempts: 0 },
        { Group: "Champions", Name: "Blue", Image: "img/trainers/red/blue.png", Time: "", Attempts: 0 },
        <TPP.HallOfFame>{
            Group: "Hall of Fame", Name: "Hall of Fame", Time: "", Attempts: 0, Party: [
            ],
            Image: "img/ribbons/champion.png"
        },
    ]
};
[
    { "Group": "Pokemon", "Name": "Charmander", "Time": "0d 0h 4m" },
    { "Group": "Pokemon", "Name": "Bulbasaur", "Time": "0d 0h 11m" },
    { "Group": "Pokemon", "Name": "NidoranF", "Time": "0d 2h 14m" },
    { "Group": "Pokemon", "Name": "Spearow", "Time": "0d 2h 18m" },
    { "Group": "Pokemon", "Name": "Pikachu", "Time": "0d 3h 48m" },
    { "Group": "Pokemon", "Name": "Ivysaur", "Time": "0d 5h 28m" },
    { "Group": "Pokemon", "Name": "Charmeleon", "Time": "0d 6h 33m" },
    { "Group": "Pokemon", "Name": "Clefairy", "Time": "0d 6h 45m" },
    { "Group": "Pokemon", "Name": "Paras", "Time": "0d 6h 51m" },
    { "Group": "Pokemon", "Name": "Ekans", "Time": "0d 11h 57m" },
].forEach((p: any) => {
    dualBlue.Events.push(p);
    dualRed.Events.push(p);
});


Season5.Runs.push(dualBlue, dualRed);
