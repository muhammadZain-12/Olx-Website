import "../App.css";
import Image from "./Image";
import olxImage from "../Images/olx.png";
import Inputdropdown from "./Inputdropdown";
import SearchBox from "./searchbox";
import sellImage from "../Images/sell image.svg";
import addButton from "../Images/addbutton.svg";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BusinessIcon from "@mui/icons-material/Business";
function Navbar(props) {
  return (
    <div id="container">
      <div className="container">
        <div className="upper-container">
          <span id="span1">
            {" "}
            <Image className="name" alt="sdasdasdasda" />
          </span>
          <div className="d-flex" id="car-icon">
            <span>
              <DirectionsCarIcon />
            </span>
            <h6>Motors</h6>
          </div>
          <div className="d-flex" id="car-icon">
            <span>
              <BusinessIcon />
            </span>
            <h6>PROPERTY</h6>
          </div>
        </div>
        <div className="bottom-container">
          <img src={olxImage} className="image2" alt="" />

          <Inputdropdown className="inputDrop" />
          <SearchBox
            onSearch={props.onSearch}
            data={props.data}
            className="search"
          />

          <button id="login-btn"> Login </button>
          <button id="btn-1">
            <img src={sellImage} alt="" />
            <div id="img-div">
              <img src={addButton} alt="" />
              <span id="sellspan">SELL</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
