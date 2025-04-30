import pic_12e__03242 from "./assets/12e__03242.jpg";
import pic_14e__47473 from "./assets/14e__47473.jpg";

const pics = { pic_12e__03242, pic_14e__47473 };

const picNames = Object.keys(pics) as Array<keyof typeof pics>;

function AllPics() {
  return (
    <>
      {picNames.map((name) => (
        <img src={pics[name]} key={name} />
      ))}
    </>
  );
}

export default AllPics;
