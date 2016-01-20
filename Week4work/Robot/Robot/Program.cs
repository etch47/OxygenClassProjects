using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Robot
{
    class Program
    {
        static void Main(string[] args)
        {
            MeanRobot meany = new MeanRobot();
            meany.MeanArms();
            meany.MeanLegs();
            meany.MeanWeapon();
            meany.MeanTools();

            NiceRobot angel = new NiceRobot();
            angel.NiceArms();
            angel.NiceLegs();
            angel.NiceWeapon();
            angel.NiceTools();

            ComplicatedRobot Joe = new ComplicatedRobot();
            Joe.ComplicatedArms();
            Joe.ComplicatedLegs();
            Joe.ComplicatedWeapon();
            Joe.ComplicatedTool();

        }
    }
}
