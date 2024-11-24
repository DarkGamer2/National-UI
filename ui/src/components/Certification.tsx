import ClassroomImage from "../assets/images/instructor-ddc500px.jpg";
const Certification = () => {
  return (
    <div className="flex mx-2">
      <img src={ClassroomImage} alt="dvd_image" />
      <div>
        <h1 className="text-center font-bold my-2">GET CERTIFIED TODAY!</h1>
        <span className="mx-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
          illum quasi a voluptate pariatur itaque officiis similique sint eum
          distinctio maiores temporibus deleniti animi laboriosam maxime,
          accusantium modi. Sequi, cumque!
        </span>
        <div className="text-center">
          <button className="bg-blue-600 text-white px-4 py-4 border-none rounded-md my-3">
            More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certification;
