import '../css/Accordion.css';
import Chevron from './Chevron';
import { useState, useRef } from "react";

function Accordion(props) {
  const [active, setActive] = useState(false);
  const [contentHeight, setContentHeight] = useState("0px");

  const accordionContent = useRef(null);

  const toggleAccordion = () => {
    setActive(!active);
    setContentHeight((!active ? accordionContent.current.scrollHeight : 0)+'px');
  };
  
  return (
    <div key={ props.i } className="App AccordionSection">
        <header className={ active ? "active" : "" } onClick={ () => toggleAccordion() }>
          { props.title }
          <Chevron
            className={ active ? "chevron rotate" : "chevron" }
            width={ 20 }
            fill={ "#eee" }
          />
        </header>
        <span ref={ accordionContent } style={{maxHeight:`${contentHeight}`}}>
          <p>{ props.content }</p>
        </span>
    </div>
  );
}

export default Accordion;
