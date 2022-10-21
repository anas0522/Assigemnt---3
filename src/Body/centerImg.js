import main from '../main.png'
import '../App.css';
import Image from "react-bootstrap/Image";
import { Button } from 'react-bootstrap';
function MainImg() {
    return (
        <div>
          <img
            className='w-100 py-1 px-0'
            src={main}
            alt="There's Image Here"
          />
          <div>
          <p className='h4'>Perfume Tips Tricks</p>
          <button type="button" class="btn btn-outline-light">SHOP NOW</button>
          </div>


      </div>
    )
}
export default MainImg;