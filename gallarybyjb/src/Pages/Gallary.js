import React, { useState } from 'react';
import '../CSS/Gallary.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
 
import I1 from "../Images/1.jpg";
import I2 from "../Images/5.jpg";
import I3 from "../Images/3.jpg";
import I4 from "../Images/4.jpg";
import I5 from "../Images/5.jpg";
import I6 from "../Images/6.jpg";
import I7 from "../Images/7.jpg";
import I8 from "../Images/8.jpg";
import I9 from "../Images/9.jpg";
import I10 from "../Images/10.jpg";
import I11 from "../Images/11.jpg";
import I12 from "../Images/12.jpg";

const imageSources = [
  I1, I2, I3, I4, I5, I6, I7, I8, I9, I10, I11, I12
];

const Gallary = () => {
  const [index, setIndex] = useState(-1);  

  const slides = imageSources.map((src) => ({ src }));

  return (
    <div className="gallery">
      {imageSources.map((src, i) => (
        <div key={i} className="gallery-item" onClick={() => setIndex(i)}>
          <img src={src} alt={`Image ${i + 1}`} />
        </div>
      ))}

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        index={index}
        animation={{ zoom: 400 }}
      />
    </div>
  );
};

export default Gallary;
