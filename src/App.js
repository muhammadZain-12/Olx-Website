import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React from "react";
import Navbar from "./Component/Navbar";
import SelectLabels from "./Component/drowDown";
import Carousel from "./Component/Coraousel";
import MediaCard from "./Component/Card";
// import innercarimage from "../Images/innercarimage";
import Footer from "./Component/Footer";
import AppStoreIcon from "./Images/AppStoreIcon.svg";
import AppGallery from "./Images/AppGallery.svg";
import GogglePlay from "./Images/GooglePlay.svg";
import facebook from "./Images/facebookIcon.svg";
import Twitter from "./Images/twitterIcon.svg";
import instagram from "./Images/instaIcon.svg";
import youtube from "./Images/youtubeIcon.svg";
import { Category } from "@mui/icons-material";

function App() {
  let category = [
    {
      motorcycle: {
        x1: (
          <MediaCard
            price="140,000"
            text="Motor Cycle Honda Cd 125 Model 2022"
            image={require("./Images/MotorCycleImage.jpg")}
          />
        ),
        x2: (
          <MediaCard
            price="140,000"
            text="Motor Cycle Honda Cd 125 Model 2022"
            image={require("./Images/MotorCycleImage.jpg")}
          />
        ),
        x3: (
          <MediaCard
            price="140,000"
            text="Motor Cycle Honda Cd 125 Model 2022"
            image={require("./Images/MotorCycleImage.jpg")}
          />
        ),
        x4: (
          <MediaCard
            price="140,000"
            text="Motor Cycle Honda Cd 125 Model 2022"
            image={require("./Images/MotorCycleImage.jpg")}
          />
        ),
      },
      car: {
        c1: (
          <MediaCard
            price="11,50,000"
            text="Model 2018 Toyota Altis 1.6 automatic"
            image={require("./Images/innercarimage.jpg")}
          />
        ),
        c2: (
          <MediaCard
            price="11,50,000"
            text="Model 2018 Toyota Altis 1.6 automatic"
            image={require("./Images/innercarimage.jpg")}
          />
        ),
        c3: (
          <MediaCard
            price="11,50,000"
            text="Model 2018 Toyota Altis 1.6 automatic"
            image={require("./Images/innercarimage.jpg")}
          />
        ),
        c4: (
          <MediaCard
            price="11,50,000"
            text="Model 2018 Toyota Altis 1.6 automatic"
            image={require("./Images/innercarimage.jpg")}
          />
        ),
      },
      garment: {
        g1: (
          <MediaCard
            price="12,000"
            text="cardigan, clother, grey, random, clothes, menswear"
            image={require("./Images/clothesImage.jpg")}
          />
        ),
        g2: (
          <MediaCard
            price="12,000"
            text="cardigan, clother, grey, random, clothes, menswear"
            image={require("./Images/clothesImage.jpg")}
          />
        ),
        g3: (
          <MediaCard
            price="12,000"
            text="cardigan, clother, grey, random, clothes, menswear"
            image={require("./Images/clothesImage.jpg")}
          />
        ),
        g4: (
          <MediaCard
            price="12,000"
            text="cardigan, clother, grey, random, clothes, menswear"
            image={require("./Images/clothesImage.jpg")}
          />
        ),
      },
      mobiles: {
        m1: (
          <MediaCard
            price="32,500"
            text="HUAWEI PHONE MODEL H7 PRO"
            image={require("./Images/mobilePhoneImages.webp")}
          />
        ),
        m2: (
          <MediaCard
            price="32,500"
            text="HUAWEI PHONE MODEL H7 PRO"
            image={require("./Images/mobilePhoneImages.webp")}
          />
        ),
        m3: (
          <MediaCard
            price="32,500"
            text="HUAWEI PHONE MODEL H7 PRO"
            image={require("./Images/mobilePhoneImages.webp")}
          />
        ),
        m4: (
          <MediaCard
            price="32,500"
            text="HUAWEI PHONE MODEL H7 PRO"
            image={require("./Images/mobilePhoneImages.webp")}
          />
        ),
      },
    },
  ];

  const [data, setData] = React.useState([
    {
      name: "Iphone 13",
      category: "mobile",
      price: 100000,
      img: require("./Images/mobilePhoneImages.webp"),
    },
    {
      name: "Corola",
      category: "car",
      price: 9099090,
      img:require("./Images/mobilePhoneImages.webp"),
    },
    {
      name: "Garment",
      category: "Garment",
      price: 9099090,
      img: require("./Images/mobilePhoneImages.webp"),
    },
    {
      name: "Bike",
      category: "Bike",
      price: 9099090,
      img: require("./Images/mobilePhoneImages.webp"),
    },
    {
      name: "Corola",
      category: "car",
      price: 9099090,
      img: require("./Images/mobilePhoneImages.webp"),
    },
    {
      name: "Corola",
      category: "car",
      price: 9099090,
      img: require("./Images/mobilePhoneImages.webp"),
    },
    {
      name: "Corola",
      category: "car",
      price: 9099090,
      img: require("./Images/mobilePhoneImages.webp"),
    },
    {
      name: "Corola",
      category: "car",
      price: 9099090,
      img: require("./Images/mobilePhoneImages.webp"),
    },
    {
      name: "Corola",
      category: "car",
      price: 9099090,
      img: require("./Images/mobilePhoneImages.webp"),
    },
    {
      name: "Corola",
      category: "car",
      price: 9099090,
      img: require("./Images/mobilePhoneImages.webp"),
    },    {
      name: "Corola",
      category: "car",
      price: 9099090,
      img: require("./Images/mobilePhoneImages.webp"),
    },
    {
      name: "Corola",
      category: "car",
      price: 9099090,
      img: require("./Images/mobilePhoneImages.webp"),
    },
  ]);

  const [searchData, setSearchData] = React.useState([]);

  let categories = category.map((e, i) => {
    return Object.values(e);
  });

  console.log(categories, "vvvvv");
  let ctg = Object.keys(categories);
  let model = Object.values(categories);
  console.log(ctg);
  console.log(model);

  const onSearch = (value) => {
    // search krlena
    setSearchData(value);
  };
  return (
    <div className="App">
      <Navbar onSearch={onSearch} data={data} />

      <div id="container1">
        <div id="inner-div">
          <span>
            <SelectLabels />
          </span>

          <div id="link-div">
            <span>Mobile Phones</span>
            <span>Cars</span>
            <span>Motor Cycle</span>
            <span>Houses</span>
            <span>TV-Vedio-Audio</span>
            <span>Tablets</span>
            <span>Land & Plots</span>
          </div>
        </div>
      </div>

      <Carousel />
      <h1 className="mt-3">Fresh Recommendation</h1>
      <div id="card-div">
        <div className="col-12 d-flex flex-wrap">
          {searchData.length
            ? searchData.map((item) => (
                <div className="col-3">
                  <MediaCard
                    price={item.price}
                    text={item.name}
                    image={item.img}
                  />
                </div>
              ))
            : data.map((item) => (
                <div className="col-3">
                  <MediaCard
                    price={item.price}
                    text={item.name}
                    image={item.img}
                  />
                </div>
              ))}
          {/* <div className="col-3">
            {" "}
            <MediaCard
              price="11,50,000"
              text="Model 2018 Toyota Altis 1.6 automatic"
              image={require("./Images/innercarimage.jpg")}
            />{" "}
          </div>
          <div className="col-3">
            {" "}
            <MediaCard
              price="12,000"
              text="cardigan, clother, grey, random, clothes, menswear"
              image={require("./Images/clothesImage.jpg")}
            />{" "}
          </div>
          <div className="col-3">
            {" "}
            <MediaCard
              price="32,500"
              text="HUAWEI PHONE MODEL H7 PRO"
              image={require("./Images/mobilePhoneImages.webp")}
            />{" "}
          </div>
          <div className="col-3">
            {" "}
            <MediaCard
              price="140,000"
              text="Motor Cycle Honda Cd 125 Model 2022"
              image={require("./Images/MotorCycleImage.jpg")}
            />{" "}
          </div> */}
        </div>
        <div className="col-12 d-flex">
          {/* <div className="col-3">
            {" "}
            <MediaCard
              price="140,000"
              text="Motor Cycle Honda Cd 125 Model 2022"
              image={require("./Images/MotorCycleImage.jpg")}
            />{" "}
          </div> */}
          {/* <div className="col-3">
            {" "}
            <MediaCard
              price="32,500"
              text="HUAWEI PHONE MODEL H7 PRO"
              image={require("./Images/mobilePhoneImages.webp")}
            />{" "}
          </div> */}
          {/* <div className="col-3">
            {" "}
            <MediaCard
              price="12,000"
              text="cardigan, clother, grey, random, clothes, menswear"
              image={require("./Images/clothesImage.jpg")}
            />{" "}
          </div> */}
          {/* <div className="col-3">
            {" "}
            <MediaCard
              price="11,50,000"
              text="Model 2018 Toyota Altis 1.6 automatic"
              image={require("./Images/innercarimage.jpg")}
            />{" "}
          </div> */}
        {/* </div> */}
        {/* <div className="col-12 d-flex">
          <div className="col-3">
            {" "}
            <MediaCard
              price="32,500"
              text="HUAWEI PHONE MODEL H7 PRO"
              image={require("./Images/mobilePhoneImages.webp")}
            />{" "}
          </div> */}
          {/* <div className="col-3">
            {" "}
            <MediaCard
              price="11,50,000"
              text="Model 2018 Toyota Altis 1.6 automatic"
              image={require("./Images/innercarimage.jpg")}
            />{" "}
          </div>
          <div className="col-3">
            {" "}
            <MediaCard
              price="140,000"
              text="Motor Cycle Honda Cd 125 Model 2022"
              image={require("./Images/MotorCycleImage.jpg")}
            />{" "}
          </div> */}
          {/* <div className="col-3">
            {" "}
            <MediaCard
              price="12,000"
              text="cardigan, clother, grey, random, clothes, menswear"
              image={require("./Images/clothesImage.jpg")}
            />{" "}
          </div>
        </div>
        <div className="col-12 d-flex">
          <div className="col-3">
            {" "}
            <MediaCard
              price="12,000"
              text="cardigan, clother, grey, random, clothes, menswear"
              image={require("./Images/clothesImage.jpg")}
            />{" "}
          </div> */}
          {/* <div className="col-3">
            {" "}
            <MediaCard
              price="140,000"
              text="Motor Cycle Honda Cd 125 Model 2022"
              image={require("./Images/MotorCycleImage.jpg")}
            />{" "}
          </div>
          <div className="col-3">
            {" "}
            <MediaCard
              price="11,50,000"
              text="Model 2018 Toyota Altis 1.6 automatic"
              image={require("./Images/innercarimage.jpg")}
            />{" "}
          </div> */}
          {/* <div className="col-3">
            {" "}
            <MediaCard
              price="32,500"
              text="HUAWEI PHONE MODEL H7 PRO"
              image={require("./Images/mobilePhoneImages.webp")}
            />{" "}
          </div> */}
        </div>
      </div>

      <div className="footer">
        <div className="inner-footer-div">
          <div>
            <Footer src={require("./Images/mobileImage.webp")} />
          </div>
          <div id="icon-div">
            <p id="footer-para">GET YOUR APP TODAY</p>
            <div id="div-icon">
              <img id="img1" src={AppStoreIcon} width="150" alt="" />
              <img src={AppGallery} width="150" alt="" />
              <img src={GogglePlay} width="150" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div id="table-div">
        <div className="table-div">
          <div className="table">
            <div className="inner-table">
              <div>
                <span>Popular Categories</span>
                <ul>
                  <li>cars</li>
                  <li>Flat for rent</li>
                  <li>Mobile phones</li>
                  <li>Jobs</li>
                </ul>
              </div>
              <div>
                <span>Trending Searches</span>
                <ul>
                  <li>Bikes</li>
                  <li>Wathches</li>
                  <li>Books</li>
                  <li>Dogs</li>
                </ul>
              </div>
              <div>
                <span>About Us</span>
                <ul>
                  <li>About EMPG</li>
                  <li>OLX Blog</li>
                  <li>Contact Us</li>
                  <li>OLX for Businesses</li>
                </ul>
              </div>
              <div>
                <span>OLX</span>
                <ul>
                  <li>Help</li>
                  <li>Sitemap</li>
                  <li>Term of use</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="feedBack">
            <div className="feedBack-content">
              <div className="feedback-content-data">
                <span>FOLLOW US</span>
                <div id="image">
                  <img src={facebook} width="30px" alt="" />
                  <img src={Twitter} alt="" width="30px" />
                  <img src={youtube} alt="" width="30px" />
                  <img src={instagram} alt="" width="30px" />
                </div>
                <div className="d-flex feedbackIcon">
                  <img src={AppStoreIcon} alt="" width="100px" />
                  <img src={AppGallery} alt="" width="100px" />
                  <img src={GogglePlay} alt="" width="100px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="foot-container">
        <div id="foot-content">
          <span>Free Classified in pakistan . &#169 2006-2022 OLX</span>
        </div>
      </div>
    </div>
  );
}

export default App;
