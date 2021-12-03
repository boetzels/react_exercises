import BtnSlider from './BtnSlider';
import ImageSliderData from "./ImageSliderData"
import { useState, useRef } from "react";

function ImageSlider(props) {
  const [active, setActive] = useState(false);
  const [contentHeight, setContentHeight] = useState("0px");

  const accordionContent = useRef(null);

  const toggleAccordion = () => {
    setActive(!active);
    setContentHeight((!active ? accordionContent.current.scrollHeight : 0)+'px');
  };

  const fillColor = "#fff";
  
  return (
    <div key={ props.i } className="imageSlider">
      { ImageSliderData.map((obj, index) => {
        return (
          <div key={ obj.id } className="slide">
            <img
              src={ process.env.PUBLIC_URL + '/img/nz'+(index+1)+'.jpg' }
            />
          </div>
        )
      }) }
      <BtnSlider
        className="chevron left"
        width={ 20 }
        fill={ fillColor }
      />
      <BtnSlider
        className="chevron"
        width={ 20 }
        fill={ fillColor }
      />
    </div>
  );
}

export default ImageSlider;
