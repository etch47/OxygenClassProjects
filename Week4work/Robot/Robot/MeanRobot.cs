using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Robot
{
    class MeanRobot : Robot
    {
        public void MeanArms()
        {
            int scaryArms = arms * 2;
            Console.WriteLine("I will smash you with my " + scaryArms + " arms.");
        }
        public void MeanLegs()
        {
            string heavyLegs = legs;
            Console.WriteLine("I will stomp you with my heavy legs.");
        }
        public void MeanWeapon()
        {
            string nastyWeapon = weapon;
            Console.WriteLine("My weapon goes 'ACK ACK ACK ACK ACK'");
        }
        public void MeanTools()
        {
            string loudTools = tools;
            Console.WriteLine("This loud tool sounds very menacing.");
        }

    }
}
