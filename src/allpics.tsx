import pic_12e__03242 from "./assets/12e__03242.jpg";

import pic_14e__47473 from "./assets/14e__47473.jpg";

const pics = { pic_12e__03242, pic_14e__47473 };
/*
360_F_549697717_fR9v2byjIVLLc6K9bqwKXz2OgCZv1kGG.jpg
522c3599-3d37-483f-b23c-9d925bb064f4-Cinco_de_Mayo.jpg
5cf66a0c7637c1a5a2261ece6f6a4ed9.jpg
712cYUdimaL._AC_SL1500_.jpg
71Vg8dsZpeL._SL1500_.jpg
915ewVBcsHL._AC_SX679_.jpg
A1mpMrJLhBL._AC_SX679_.jpg
cinco-de-mayo-1388918010.jpg
cinco-de-mayo-may-5-holiday-in-mexico-poster-with-grunge-texture-chili-peppers-and-sombrero-cartoon-style-banner-free-vector-1024x417.jpg
download.png
licensed-image.jpeg
shutterstock_1071439994.jpg
sombrero-mexicano-con-borlas-adultos-1__53751.jpg
*/

const picNames = Object.keys(pics);

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
