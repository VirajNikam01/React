import { restaurantList } from "../../utils/restaurantList"


const Search = ()=>{
    return(
      <div className='search'>
          <h3>" We have <span>{restaurantList.length}</span> Restrounts "</h3>
          <input
          type='text'
          placeholder='Search Restraunt'/>
      </div>
    )
  }

  export default Search