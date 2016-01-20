using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PalindromeCheck
{
    class Program
    {
        static void Main(string[] args)
        {
            FunGame buddy = new FunGame();
            buddy.GetInfo();
            buddy.InputWord();
            buddy.FlipWord();
        }
            
    }
}
