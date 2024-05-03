import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselContainer({ items }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {items.map((item, idx) => (
        <Carousel.Item key={idx}>
          <img
            src={item.image}
            alt={item.alt}
            className="h-[80vh] w-full object-cover rounded-md"
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselContainer;
