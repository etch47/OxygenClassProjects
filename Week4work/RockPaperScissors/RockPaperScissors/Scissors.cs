using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RockPaperScissors
{
    public class Scissors : Game
    {
        public void scissorsSlaysPaper()
        {
            string scissorsBeatPaper = "SCISSORS cuts PAPER";
            Console.WriteLine(scissorsBeatPaper);
            
        }
        public void scissorsSlaysLizard()
        {
            string scissorsBeatLizard = "SCISSORS snips LIZARD ";
            Console.WriteLine(scissorsBeatLizard);
        }
    }
}
