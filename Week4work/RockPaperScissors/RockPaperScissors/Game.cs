using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RockPaperScissors
{
    public class Game
    {

        enum handShape { Rock, Paper, Scissors, Spock, Lizard };
        public int computerScore;
        public int playerScore;
        Rock rock = new Rock();
        Paper paper = new Paper();
        Scissors scissors = new Scissors();
        Spock spock = new Spock();
        Lizard lizard = new Lizard();
        WriteText writeFunction = new WriteText();



        // public void endGame()
        //      {
        //     string endRPS = ("");
        //     while (endRPS != ("exit"))
        //     {
        //        Console.WriteLine("Type exit to quit");
        //     }   
        //  }



        public int ComputerChoice()
        {
            Random ComputerRandomChoice = new Random();
            int compHand = ComputerRandomChoice.Next(1, 6);
            Console.WriteLine(compHand);
            return compHand;
        }



        public int PlayerChoice()
        {
            Console.WriteLine("Player, Choose ROCK, PAPER, SCISSORS, SPOCK or LIZARD");
            Console.WriteLine("  ROCK = 1     PAPER = 2     SCISSORS = 3     SPOCK = 4      LIZARD = 5");
            int PersonHand = int.Parse(Console.ReadLine());
            Console.WriteLine(PersonHand);
            return PersonHand;

        }

        public void EnumeratePlayerTurn()
        {
            if (PlayerChoice() == 1)
            {
                Enum.GetName(typeof(handShape), 0);
                Console.WriteLine("Player picks ROCK");

            }
            else if (PlayerChoice() == 2)
            {
                Enum.GetName(typeof(handShape), 1);
                Console.WriteLine("Player picks SCISSORS");
            }
            else if (PlayerChoice() == 3)
            {
                Enum.GetName(typeof(handShape), 2);
                Console.WriteLine("Player picks PAPER");
            }
            else if (PlayerChoice() == 4)
            {
                Enum.GetName(typeof(handShape), 3);
                Console.WriteLine("Player picks SPOCK");
            }
            else if (PlayerChoice() == 5)
            {
                Enum.GetName(typeof(handShape), 4);
                Console.WriteLine("Player picks LIZARD");
            }
        }
        public void EnumerateCompTurn()
        {
            if (ComputerChoice() == 1)
            {
                Enum.GetName(typeof(handShape), 0);
                Console.WriteLine("Computer picks ROCK");
            }
            else if (ComputerChoice() == 2)
            {
                Enum.GetName(typeof(handShape), 1);
                Console.WriteLine("Computer picks SCISSORS");
            }
            else if (ComputerChoice() == 3)
            {
                Enum.GetName(typeof(handShape), 2);
                Console.WriteLine("Computer picks PAPER");
            }
            else if (ComputerChoice() == 4)
            {
                Enum.GetName(typeof(handShape), 3);
                Console.WriteLine("Computer picks SPOCK");
            }
            else if (ComputerChoice() == 5)
            {
                Enum.GetName(typeof(handShape), 4);
                Console.WriteLine("Computer picks LIZARD");
            }
        }
        public void RPSGameResultTie()
        {
            if (ComputerChoice() == 1 && PlayerChoice() == 1 || ComputerChoice() == 2 && PlayerChoice() == 2
            || ComputerChoice() == 3 && PlayerChoice() == 3 || ComputerChoice() == 4 && PlayerChoice() == 4
            || ComputerChoice() == 5 && PlayerChoice() == 5)
            {
                Console.WriteLine("You both chose the same thing. Try again");
                //WriteFunction to text document?
            }
        }
        public void RPSGameCompResult()
        {
            if (ComputerChoice() == 2 && PlayerChoice() == 1)

            {
                paper.paperSlaysRock();
            }
            else if (ComputerChoice() == 4 && PlayerChoice() == 1)
            {
                spock.spockSlaysRock();
            }

            else if (ComputerChoice() == 3 && PlayerChoice() == 2)
            {
                scissors.scissorsSlaysPaper();
            }
            else if (ComputerChoice() == 4 && PlayerChoice() == 2)
            {
                lizard.lizardSlaysPaper();
            }
            else if (ComputerChoice() == 1 && PlayerChoice() == 3)
            {
                rock.rockSlaysScissors();
            }
            else if (ComputerChoice() == 5 && PlayerChoice() == 3)
            {
                spock.spockSlaysScissors();
            }
            else if (ComputerChoice() == 2 && PlayerChoice() == 4)
            {
                paper.paperSlaysSpock();
            }
            else if (ComputerChoice() == 5 && PlayerChoice() == 4)
            {
                lizard.lizardSlaysSpock();
            }

            else if (ComputerChoice() == 3 && PlayerChoice() == 5)
            {
                scissors.scissorsSlaysLizard();
            }
            else if (ComputerChoice() == 1 && PlayerChoice() == 5)
            {
                rock.rockSlaysLizard();
            }
        }
        public void RPSGamePlayerResult()
        {
            if (PlayerChoice() == 2 || PlayerChoice() == 4 && ComputerChoice() == 1
            || PlayerChoice() == 3 || PlayerChoice() == 4 && ComputerChoice() == 2
            || PlayerChoice() == 1 || PlayerChoice() == 5 && ComputerChoice() == 3
            || PlayerChoice() == 2 || PlayerChoice() == 5 && ComputerChoice() == 4
            || PlayerChoice() == 3 || PlayerChoice() == 1 && ComputerChoice() == 5)
            {
                Console.WriteLine("Player Wins");
                // WriteFunction to text document?
            }
        }

        //else if (ComputerChoice() == 2 || ComputerChoice() == 4 && PlayerChoice() == 1
        //|| ComputerChoice() == 3 || ComputerChoice() == 4 && PlayerChoice() == 2
        //|| ComputerChoice() == 1 || ComputerChoice() == 5 && PlayerChoice() == 3
        // || ComputerChoice() == 2 || ComputerChoice() == 5 && PlayerChoice() == 4
        // || ComputerChoice() == 3 || ComputerChoice() == 1 && PlayerChoice() == 5)
        // {
        // Console.WriteLine("Computer Wins");
        // WriteFunction to text document?

        //}







    } 

}





//  public void printComputerChoice()
//  {
//      string compPrint = EnumerateCompTurn;
//      Console.WriteLine(compPrint);      
//

