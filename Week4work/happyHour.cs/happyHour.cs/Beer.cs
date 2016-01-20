using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace happyHour.cs
{
    public class Beer : Beverage

    {
       
        List<Hops> hops;
        Malt malt;
        Barley barley;
        Yeast yeast;
        List<Extras> extras;
        public Beer(List<Hops> hops, Malt malt, Barley barley, Water water, Yeast yeast, List<Extras> extras )
       {
            this.hops = hops;
            this.malt = malt;
            this.barley = barley;
            base.water = water;
            this.yeast = yeast;
            this.extras = extras;

        }
        public void Brew()
        {
 
        }
        public void carbonate()
        {

        }
    }
}
