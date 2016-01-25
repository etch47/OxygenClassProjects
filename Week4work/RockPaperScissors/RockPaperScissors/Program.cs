using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace RockPaperScissors
{
    class Program
    {
        static void Main(string[] args)
        {
            
            Game RPSGame = new Game();
//RPSGame.endGame();
            RPSGame.ComputerChoice();
            RPSGame.PlayerChoice();
            RPSGame.RPSGameResult();
            RPSGame.EnumerateCompTurn();
            RPSGame.EnumeratePlayerTurn();
           
            
            
            
            
           

           

        }
    }
}
