import { Link } from "react-router-dom";
import {useState} from 'react'
import useRestronents from "../../utility/useRestronents";
import RestroCard from "./RestroCard";

const CardBody = () => {
  const[search, setSearch] = useState("")
  const[filteredRestroents, setFilteredRestronents] = useState(null)
  const restronentList = useRestronents();

  if (restronentList === null) {
    return <h1>Loading</h1>;
  }
  const { restaurants } = restronentList?.cards[2]?.card?.card?.gridElements?.infoWithStyle;



  return (
    <div className="lg:mx-10 lg:mt-20">
      {/* <div className="flex justify-center">
        <input type="text"
        value={search}
        onChange={(e)=>(setSearch(e.target.value))}
        className="border border-black outline-none py-1 rounded-tl-xl "
        />
        <button 
        // onClick={()=>(searchRestronents())}
        className="bg-teal-700 text-white rounded-tr-xl px-5 py-1 font-sans text-xl text-center ">search</button>
      </div> */}
      <h1 className="ml-10 text-xl font-bold font-sans">Top restaurant chains in Pune</h1>
      <div className=" flex flex-wrap items-center justify-center gap-5 ">
        {restaurants.map((restronent, i) => (
          <Link to={'restronent/' + restronent.info.id} key={i}><RestroCard info={restronent?.info} /></Link>
        ))}
      </div>
    </div>
  );
};

export default CardBody;
