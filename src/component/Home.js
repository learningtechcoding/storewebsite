import React, { useState } from 'react'
import land0 from '../img/laptop1.png';
import land1 from '../img/laptop2.png';
import land2 from '../img/laptop3.png';

const Home = () => {
    let images = [land0, land1, land2];
    let textdata = [
      [
        <>
          <h1>Old Category</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            dolore omnis, nisi veniam earum est.
          </p>
        </>,
      ],
    ];
    const handleclick = (index) => {
      if (index === 0) {
        setdatag(
          <>
            <h1>Old Category 25% Discount</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              dolore omnis, nisi veniam earum est.
            </p>
          </>
        );
      } else if (index === 1) {
        setdatag(
          <>
            <h1>Old With 30% Discount</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
              perspiciatis. Alias fuga provident ducimus enim accusantium eius
             
            </p>
          </>
        );
      } else if (index === 2) {
        setdatag(
          <>
            <h1>old with 30% Discount</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              dolore omnis, nisi veniam earum est.
            </p>
          </>
        );
      }
    };
    const [textdatag, setdatag] = useState(textdata);
    const [dataimg, setdataimg] = useState(images[0]);
    return (
      <>
        <main>
          <section className="presentation">
            <div className="introduction">
              <div className="intro-text">
                <p>{textdatag} </p>
              </div>
              <div className="cta">
                <button className="cta-select">14 Inch</button>
                <button className="cta-add">Add to Cart</button>
              </div>
            </div>
            <div className="cover">
              <img src={dataimg} alt="Matebook" />
            </div>
            
          </section>
          <div className="laptop-select">
            {images.map((imag, index) => (
              <img
                key={index}
                src={imag}
                onClick={() => {
                  setdataimg(imag);
                  handleclick(index);
                }}
                alt=""
              />
            ))}
          </div>
        </main>
      </>

  )
}

export default Home