

class Player
{

    constructor(name,Level, Region)
    {
        this.name = name;
        this.Level = Level;
        this.Region = Region;
    }

}

class FinderPlayersLobbyManager
{

    constructor(MaxPlayerLobby) {
        this.MaxPlayerInLobby = (MaxPlayerLobby !=="undefined") ? MaxPlayerLobby:10;
        this.Players =[];
    }


    InBounds (Start_A,End_B)
    {
        var array=[];
        this.Players.forEach((element)=>
        {
            if(element.Level>=Start_A && element.Level<=End_B)
            {
                array.push(element)
            }

        });
        return array;
    }

    AddPlayer(Player)
    {
        this.Players.push(Player);
    }

    Check()
    {
        var Link=this;

        if (this.Players.length>=this.MaxPlayerInLobby)
        {
            this.Players.forEach(function (item, i, arr)
            {
                var Array = [];
                Array = Link.InBounds(item.Level - item.Region, item.Level + item.Region);
                if (Array.length >= Link.MaxPlayerInLobby) {
                    Link.Start(Array, item);
                } else {
                    item.Region = item.Region + 1;
                }
            });
            //setTimeout(Link.Check, 200)
            Link.Check();
        }
    }

    Start(Players, Initiator)
    {
        var Link=this;
        console.log(Initiator.Level);
        console.log(Initiator.Region);


        Players.forEach(function(item, i, arr)
        {
            console.log(item.name);
            console.log(item.Level);
            Link.Players.pop(item)

        })
        console.log("Game Start");
        console.log();

    }

}


var MaxLevel=30;
var number =10;
var maxPlayerInLobby = 5;
const FinderLobby = new FinderPlayersLobbyManager(maxPlayerInLobby);

function UnitTest()
{
    for(let x=0;x<=number;x++){
        let Local_Player = new Player("Name", (Math.floor(Math.random()*MaxLevel)),2)
        FinderLobby.AddPlayer(Local_Player);
        //console.log(Local_Player.Level)
    }
    FinderLobby.Check();

}
UnitTest();








