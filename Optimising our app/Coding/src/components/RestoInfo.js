import  useRestroMenu from '../utils/useRestroMenu' 
import { useParams } from "react-router-dom";
import Shimmer from './Shimmer'

const RestoInfo = () => {
  const { id } = useParams();
const menu = useRestroMenu(id)

  if (menu == null) return <Shimmer/>

  return (
    <div className="resto-info">
      <h1>
        Id to fetch Data : <b>{id}</b>
      </h1>
      <h2>{menu.name}</h2>
    </div>
  );
};

export default RestoInfo;
