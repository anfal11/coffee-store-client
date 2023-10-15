import{AiOutlineEye , AiOutlineEdit, AiOutlineDelete} from 'react-icons/ai'
import PropTypes from 'prop-types';

const CoffeeCard = ({ coffee }) => {
  // eslint-disable-next-line no-unused-vars
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  return (
    <div className="">
      <div className="card h-[200px] card-side bg-[#ECEAE3] shadow-xl">
        <figure>
          <img src={photo} alt="coffee" />
        </figure>
        <div className="flex justify-between items-center w-full pr-10">
        <div>
          <h2><span className="text-[#1B1A1A] text-xs lg:text-sm font-Raleway font-semibold">Name: </span><span className="text-[#5C5B5B] text-xs lg:text-sm font-Raleway">{name}</span></h2>
          <p><span className="text-[#1B1A1A] text-xs lg:text-sm font-Raleway font-semibold">Chef: </span><span className="text-[#5C5B5B] text-xs lg:text-sm font-Raleway">{chef}</span></p>
          <p><span className="text-[#1B1A1A] text-xs lg:text-sm font-Raleway font-semibold">Category: </span><span className="text-[#5C5B5B] text-xs lg:text-sm font-Raleway">{category}</span></p>
          <p><span className="text-[#1B1A1A] text-xs lg:text-sm font-Raleway font-semibold">Taste: </span><span className="text-[#5C5B5B] text-xs lg:text-sm font-Raleway">{taste}</span></p>
          </div>
            <div className="btn-group btn-group-vertical space-y-4">
              <button className="btn bg-[#D2B48C] text-white text-xl"><AiOutlineEye></AiOutlineEye></button>
              <button className="btn bg-[#3C393B] text-white text-xl"><AiOutlineEdit></AiOutlineEdit></button>
              <button className="btn bg-[#EA4744] text-white text-xl"><AiOutlineDelete></AiOutlineDelete></button>
       
          </div>
        
        </div>

      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object.isRequired,
  };
export default CoffeeCard;
