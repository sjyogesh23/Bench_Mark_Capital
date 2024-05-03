import React, { useEffect, useRef } from "react";

function CardScroller({ images }) {
  const logosRef = useRef(null);

  useEffect(() => {
    const copy = logosRef.current.cloneNode(true);
    logosRef.current.parentNode.appendChild(copy);
  }, []);

  return (
    <div
      style={{
        overflow: "hidden",
        padding: "60px 0",
        whiteSpace: "nowrap",
        position: "relative",
      }}
      className="logos rounded-md bg-gray-800"
    >
      <style>
        {`
          .logos:before,
          .logos:after {
            position: absolute;
            top: 0;
            width: 50px;
            height: 100%;
            content: "";
            z-index: 2;
          }

          .logos:before {
            left: 0;
            background: linear-gradient(to left, rgba(255, 255, 255, 0), #545454);
          }

          .logos:after {
            right: 0;
            background: linear-gradient(to right, rgba(255, 255, 255, 0), #545454);
          }

          .logos:hover .logos-slide {
            animation-play-state: paused;
          }

          .logos-slide {
            display: inline-block;
            animation: 15s slide infinite linear;
          }

          .logos-slide img {
            display: inline-block;
            height: 50px;
            margin: 0 80px;
          }

          @keyframes slide {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
      <div className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold">
        Our Partners
      </div>
      <div className="logos-slide mt-4" ref={logosRef}>
        {images.map((image, index) => (
          <img key={index} src={image.url} alt={image.alt} />
        ))}
      </div>
    </div>
  );
}

export default CardScroller;
