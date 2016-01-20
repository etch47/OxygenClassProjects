using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Robot
{
    class ComplicatedRobot : Robot

    {
        public void ComplicatedArms()
        {
            int complexArms = arms * 16;
            int manyComplexArms = complexArms * 10;
            Console.WriteLine("I have " + complexArms + " arms. I can get complicated and make " + manyComplexArms + " arms if you need them.");
        }
        public void ComplicatedLegs()
        {
            string complexLegs = legs;
            Console.WriteLine("My legs are a complicated mass of ball bearings");
        }
        public void ComplicatedWeapon()
        {
            string complexWeapon = weapon;
            Console.WriteLine("My complex weapon defeats you by confusing you.");
        }
        public void ComplicatedTool()
        {
            string complexTool = tools;
            Console.WriteLine("Your multi tool needs to be scrapped and turned into tuna cans. My complicated tools will fix anything.");
        }
    }
}
