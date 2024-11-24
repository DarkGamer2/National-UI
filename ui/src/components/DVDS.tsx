import React from "react";
import DVDImage from ".././assets/images/DVD.jpeg";
const DVDS = () => {
  return (
    <div className="flex mx-2">
      <img src={DVDImage} alt="dvd_image" />
      <div>
        <h1>DVDS ON SALE</h1>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
          illum quasi a voluptate pariatur itaque officiis similique sint eum
          distinctio maiores temporibus deleniti animi laboriosam maxime,
          accusantium modi. Sequi, cumque!
        </span>
      </div>
    </div>
  );
};

export default DVDS;
