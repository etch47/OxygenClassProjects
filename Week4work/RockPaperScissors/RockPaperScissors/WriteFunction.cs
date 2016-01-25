using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace RockPaperScissors
{
    public class WriteText
    {
        public static void RPSwriter()
        {
            string path = "C:\\RPSGameTextFile.txt";
            if (!File.Exists(path))
            {
                string createText = "Rock Paper Scissors textfile check" + Environment.NewLine;
                File.WriteAllText("C:\\RPSGameTextFile.txt", createText, Encoding.UTF8);

            }

            string appendRPSText = "" + Environment.NewLine;
            File.AppendAllText("C:\\RPSGameTextFile.txt", appendRPSText, Encoding.UTF8);

            string readRPSText = File.ReadAllText("C:\\RPSGameTextFile.txt");
            Console.WriteLine(readRPSText);
        }
    }

}

