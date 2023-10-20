import retro from '../assets/images/image-retro-pcs.jpg';
import laptop from '../assets/images/image-top-laptops.jpg';
import growth from '../assets/images/image-gaming-growth.jpg';

const cards = [
  {
    id: 1,
    src: `${retro}`,
    number: "01",
    head: "Reviving Retro PCs",
    paragraph: "What happens when old PCs are given modern upgrades?",
  },
  {
    id: 2,
    src: `${laptop}`,
    number: "02",
    head: "Top 10 Laptops of 2022",
    paragraph: "Our best picks for various needs and budgets.",
  },
  {
    id: 3,
    src: `${growth}`,
    number: "03",
    head: "The Growth of Gaming",
    paragraph: "How the pandemic has sparked fresh opportunities.",
  }
];

const Bottom = () => {
    return (
      <div className="flex flex-col md:flex-row mt-20 gap-16">
        {cards.map((card) => (
          <div key={card.id} className="flex gap-8">
            
              <img src={card.src} alt="card-image" className=" object-cover h-auto w-24 "/>
            
            <div className=" flex flex-col gap-4">
              <h1 className="text-4xl text-[#c5c6ce] font-semibold">
                {card.number}
              </h1>
              <h3 className="text-lg font-bold text-[#00001a] hover:text-[#f15e50] cursor-pointer">
                {card.head}
              </h3>
              <p className="text-[#5d5f79]">{card.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Bottom;