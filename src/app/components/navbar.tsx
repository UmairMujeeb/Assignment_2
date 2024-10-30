import Link from "next/link";

// const Navbar = () => {
    export default function Navbar () {
        return (
          <nav className="container bg-[#252B42] w-[1322] h-[91] justify-center text-center left-[59] absolute " id="check">
            <div className="nav-light w-[1322] h-[91] justify-between flex items-center absolute">
              <button>
                <div className="nav-brand w-[187] h-[58] top-[17] left-[136] text-left absolute flex items-start "> 
                 <h3 className="brandName w-[152] h-[32] top-[13] font-montserrat text-2xl font-bold leading-8 tracking-[0.1px] text-right text-white absolute" >BrandName</h3>
            </div>
             </button>
    
          <div className="navbar-collapse w-[815] h-[58] top-[16] left-[364] absolute flex items-center ">
            <ul className="navbar-nav flex text-white text-cssm font-montserrat font-bold w-[275] h-[24] top-[17] gap-[21] items-center justify-end"> 
              <li className="w-[43] h-[24]"><Link href="/">Home</Link></li> 
              <li className="w-[59] h-[24]"><Link href="product">Product</Link></li>
              <li className="w-[52] h-[24]"><Link href="pricing">Pricing</Link></li>
              <li className="w-[58] h-[24]"><Link href="contact">Contact</Link></li>
            </ul> 
                     {/* login */}
            <div className="Nvabar-nav-login left-[626] gap-[45] w-[189] h-[52] top-[3] absolute grid grid-cols-2 justify-center items-center cursor-pointer" > 
              <a className="login-tag w-[41] h-[22] text-white text-right hover:bg-slate-400 relative cursor-pointer">
                <button className="login-text font-montserrat text-sm font-bold leading-5 tracking-[0.2] text-right cursor-pointer">Login</button>
              </a>
          
              {/* signup */}
              <ul className="joinus-nav w-[214] h-[52] absolute text-right">
                <button className="Button w-[110] h-[52] py-[15]	px-[25] gap-4 rounded-l-lg bg-[#23A6F0]">
                 <li className="button-text w-[60] h-[22] font-montserrat font-bold text-sm	leading-5 text-left tracking-[0.2]">JOIN US</li></button>
              </ul>
            </div>
    
    
          </div>
    
        </div>
     
        <label className="nav-toggler w-[24] h-[13.71] top-[39] pl-[1298] fixed text-xl cursor-pointer hover:text-white">
    
          <input type="checkbox" value="" className="sr-only peer w-[24] h-[13.71] mt-[50] left-[1298]  " id="check"/>
    
          <span>...</span>
    
        
    
          </label>
    
          </nav>
        );
      };