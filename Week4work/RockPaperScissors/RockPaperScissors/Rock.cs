using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RockPaperScissors
{
    public class Rock
    {
        public void rockSlaysScissors()
        {
            string rockBeatScissors = "ROCK smashes SCISSORS";
            Console.WriteLine(rockBeatScissors);
        }
        public void rockSlaysLizard()
        {
            string rockBeatLizard = "ROCK flattens LIZARD";
            Console.WriteLine(rockBeatLizard);
        }
    }          
}
