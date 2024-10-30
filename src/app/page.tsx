export default function HomePage() {
  return (
    
    <div className="Home-tag bg-[#252B42] w-[1540] h-[1132] bg-fixed text-center items-center flex flex-col pr-[200px] font-montserrat">
      <div className=" bg-[#252B42] w-[701px] h-[1028x] left-[197px] py-[80px] mt-[104] gap-80 flex flex-col text-center items-center">
        <div className="main-content relative w-[699] h-[496] py-[40px] gap-10 pt-10	pb-10	 font-bold ml-[440px] items-center">
          <h5 className="heading-tag text-[#35A6F0] font-montserrat font-bold w-[77] h-[24] text-base	tracking-widest	 ml-[210px] rounded-lg text-center"> Welcome </h5>
          <h1 className="headline-tag w-[542] h-[160]  font-montserrat font-bold text-6xl	mt-7 leading-[80px] tracking-[0.2px] text-white flex items-center ">  Selling on the <br /> internet like a pro </h1>
          <h4 className="sub-headline w-[536] h-[60] font-montserrat font-normal text-xl leading-[30px] tracking-[0.2px] flex text-center text-white   mt-5    justify-end pr-[60px]">
          We know how large objects will act, but things on a small scale just do not act that way. </h4>
        <div className="CTA-btn w-[365] h-[52] gap-2.5 flex space-x-4 mt-[40px] ml-[85px]">
             <button className="btn-1 w-[193] h-[52] bg-[#23A6F0] py-[15]	px-[40]	gap-2.5 rounded hover:bg-blue-500">
              <span className="btn1-text w-[113] h-[22] font-montserrat font-bold text-sm	 tracking-[0.2px] flex text-center items-center  text-white "> Get Quote Now </span>
             </button>
             
             <button className=" btn-2 border w-[162] h-[52] rounded-[1px] py-4	px-10	gap-2.5	border-[#23a6f0] hover:bg-slate-800">
              <span className="btn2-text w-[82] h-[22] font-montserrat font-bold text-sm	tracking-[0.2px] flex text-center items-center text-[#35A6F0] "> Learn More </span>
             </button>
          </div>
        </div>
      </div>

      <div className="row-2 w-[1046] h-[292] gap-8	flex flex-row ml-[280px] transition-all ease-in-out">
        <div className="col-md-4-1 w-[328] h-[292] ">
          <div className="card-1 w-[328] h-[292] py-9	px-10	gap-5 border shadow-2xl border-[#23A6F0] bg-white">
          <div className="fixed-width w-[70] h-[76] rounded-xl py-[22px] px-[19] gap-2.5 bg-[#FFDCD1] "></div>
          <h5 className="feature-title-1 w-[135] h-[24] font-montserrat font-bold text-base tracking-[0.1px]   text-[#252b42] mt-[20px] text-left">training Courses</h5>
          <div className="fixed-width/height-1 w-[50] h-[2] bg-[#E74040] mt-[20px]"></div>
          <p className="paragraph-1 w-[222] h-[60] font-normal text-sm tracking-[0.2px] text-[#737373]   text-left mt-[20px]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
        </div>
      </div>

      <div className="col-md-4-2 w-[329] h-[292]">
         <div className="card-2 w-[328] h-[292] py-9	px-10	gap-5	 bg-[#ffff] ">
         <div className="fixed-width-2 w-[70] h-[76] rounded-xl	py-[22px] px-[19] gap-2.5 bg-[#B9EAA8] "></div>
         <h5 className="feature-title-2 w-[168] h-[24] font-montserrat font-bold text-base tracking-[0.1px]  text-[#252B42] mt-[20px] text-left ">2,769 online courses</h5>
         <div className="fixed-width/height-2 w-[50] h-[2] bg-[#E74040] mt-[20px]"></div>
         <p className="paragraph-2 w-[222px] h-[60px] font-montserrat font-normal text-[#737373] text-sm tracking-[0.2px] text-left mt-[20px]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
      </div>

    </div>


      <div className="col-md-4-3 w-[329] h-[292]">
        <div className="card-3 w-[328] h-[292] py-9	px-10 gap-5	bg-[#23A6F0]">
        <div className="fixed-width-3 w-[70] h-[76] rounded-xl	py-[22px] px-[19] gap-2.5 bg-[#ffff]"></div>
        <h5 className="feature-title-3 w-[135] h-[24] font-montserrat font-bold  text-base tracking-[0.1px]   text-white mt-[20px] text-left ">training Courses</h5>
        <div className="fixed-width/height-3 w-[50] h-[2] bg-white mt-[20px]"></div>
        <p className="paragraph-3 w-[222] h-[60] font-montserrat font-normal text-sm tracking-[0.2px] text-[#ffff]  text-left mt-[20px]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
      </div>
    </div>
    </div>
    </div>
  );
}