using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Robot
{
    class NiceRobot: Robot
    {
        public void NiceArms()
        {
            int pleasantArms = arms * 8;
            Console.WriteLine("Do you have a headache? Let me massage your brain with my " + pleasantArms + " arms");
        }
        public void NiceLegs()
        {
            string happyLegs = legs;
            Console.WriteLine("Yes I have nice legs. I am, after all, a nice Robot...");
        }
        public void NiceWeapon()
        {
            string painlessWeapon = weapon;
            Console.WriteLine("This weapon is the color of heaven. Nice, huh??");
        }
        public void NiceTools()
        {
            string goodTool = tools;
            Console.WriteLine("This tool can fix anything.");
        }
    }
}
