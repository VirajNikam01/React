import RestronantCard from "./RestronantCard"
import {restaurantList} from "../../utils/restaurantList"

const CardContainer = ()=>{
    return(
      <div className='card-container'>
        {restaurantList.map((resto)=>(
          <RestronantCard key={resto.data.id} data = {resto.data}/>
        ))}
      </div>
    )
  }

  export default CardContainer;