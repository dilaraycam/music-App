import Home from '../components/Home';
import Song from '../components/Songs/Song';
import Contact from '../components/Contact';
import Profile from '../components/Profile';
import SongDetail from '../components/Songs/SongDetail';
import NotFound from  '../components/base/NotFound';
import Search from "../components/Search";

const links=[
    {link:"/", title:"Home Page", component:Home ,isExact:true,isLink:true},
    {link: "/search" , title: "Arama",component:Search,isExact:false, isLink:false},
    {link:"/allsongs", title:"All Songs",component:Song, isExact:true,isLink:true},
    {link:"/allsongs/:songID", title:"Song Detail",component:SongDetail, isExact:false,isLink:false},
    {link:"/contact", title:"Contact", component:Contact ,isExact:false,isLink:true},
    {link:"/profile/dilaray-cam", title:"Profile",component:Profile, isExact:false,isLink:true},
    {link:"/404", title:"404",component:NotFound, isExact:false,isLink:false}
]

export default links