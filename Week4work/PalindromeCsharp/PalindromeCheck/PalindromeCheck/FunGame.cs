using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PalindromeCheck
{
    class FunGame
    {
       
        public void GetInfo()        //First method to Print user's name and age
        {
            Console.WriteLine("Enter your name");
            string userName =  Console.ReadLine();
            Console.WriteLine("Enter your age");
            string age = Console.ReadLine();
            Console.WriteLine("{0}{1}", userName, age);
        }
        public void InputWord()       // Second method to get word input
        {
            Console.WriteLine("Enter a word to check if it's a palindrome");
            string testWord = Console.ReadLine();
            Console.WriteLine();
        }
        public void FlipWord()
        {

        }

        

    }
}
