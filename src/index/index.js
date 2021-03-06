import './index.scss';
import './styles/infoBox.scss';
import { InfoBox } from './scripts/infoBox';

const infoBoxData = [
   {
       title: "Time to Share: 6 for $3.99*",
       img: "https://i.postimg.cc/jS6Tfsn2/comp-plate-promo1.png",
       description: "Ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
       note: "* Odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
       productUrl: "/products/promo1.html"
   },
   {
       title: "Rise 'n shine",
       img: "https://i.postimg.cc/wB6pcSDV/comp-plate-promo2.png",
       description: "Dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
       note: "* Accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
       productUrl: "/products/promo2.html"
   },
   {
       title: "PM Snackers: Brownie Bites",
       img: "https://i.postimg.cc/rpQLhQJL/comp-plate-promo3.png",
       description: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
       note: "* Vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
       productUrl: "/products/promo3.html"
   },
   {
       title: "PM Snackers: Brownie Bites new",
       img: "https://i.postimg.cc/QtCZv14K/comp-plate-promo4.png",
       description: "Sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
       note: "* Eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
       productUrl: "/products/promo4.html"
   }
]

new InfoBox(document.querySelector('#firstBox'), infoBoxData);




