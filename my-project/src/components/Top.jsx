import desktop from '../assets/images/image-web-3-desktop.jpg';
import mobile from '../assets/images/image-web-3-mobile.jpg'

const Top = () => {
    return (
      <div className="pt-9 md:pt-16 grid md:grid-cols-3 grid-cols-1 md:grid-rows-2 gap-8">
        <div className=" md:col-span-2 col-span-1 md:order-none order-1">
          <img
            src={desktop}
            alt="Desktop Image"
            className="hidden md:block max-w-full h-full object-cover" // Hide on mobile
          />
          <img
            src={mobile}
            alt="Mobile Image"
            className="block md:hidden w-full h-full object-cover" // Hide on desktop
          />
        </div>
        <div className="bg-[#00001a] pr-3 md:pr-0 md:row-span-2 md:order-none order-3 col-span-1 mt-12 md:mt-0 ">
          <div className="px-4 py-8 md:py-14 md:px-10 w-full h-full flex flex-col justify-between">
            <h1 className="text-[#e9ab53] text-3xl md:text-4xl font-bold mb-8 md:mb-0">
              New
            </h1>
            <div className=" pb-10 border-b-2 border-slate-400">
              <h1 className=" cursor-pointer hover:text-[#e9ab53] text-[#fffdfa] text-lg md:text-xl font-bold">
                Hydrogen VS Electric Cars
              </h1>
              <p className="text-[#c5c6ce] mt-2 md:mt-3 leading-loose md:text-lg">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <div className=" pb-10 border-b-2 border-slate-400 mt-10 md:mt-0">
              <h1 className=" cursor-pointer hover:text-[#e9ab53] text-[#fffdfa] md:text-xl text-lg font-bold">
                The Downsides of AI Artistry
              </h1>
              <p className="text-[#c5c6ce] mt-2 md:mt-3 leading-loose md:text-lg">
                {" "}
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <div className="mt-10 md:mt-0">
              <h1 className=" cursor-pointer hover:text-[#e9ab53] text-[#fffdfa] text-lg md:text-xl font-bold">
                {" "}
                Is VC Funding Drying Up?
              </h1>
              <p className="text-[#c5c6ce] mt-2 md:mt-3 leading-loose md:text-lg">
                {" "}
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
        </div>
        <div className="md:pt-6 md:col-span-2 col-span-1 flex flex-col md:flex-row  md:order-none order-2 ">
          <div className="md:w-1/2">
            <h1 className=" md:leading-normal Very-darkblue text-5xl md:text-7xl font-black text-[#00001a]">
              The Bright Future of Web 3.0?
            </h1>
          </div>
          <div className="md:w-1/2 flex flex-col justify-between">
            <div className="mt-6 md:mt-0">
              <p className="text-[#5d5f79] leading-loose md:pr-8 md:text-lg">
                {" "}
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
            </div>
            <div>
              <button className="px-8 py-4 mt-8 md:mt-0 tracking-widest rounded  font-bold bg-[#f15e50] text-[#fffdfa]  hover:bg-[#00001a] transition-all duration-500 ease-in">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Top;