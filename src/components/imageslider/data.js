import cola from "../../img/my/01.jpg";
import image2 from "../../img/my/02.jpg";
import image3 from "../../img/my/03.jpg";
import image4 from "../../img/my/04.jpg";
import image5 from "../../img/my/05.jpg";

/*
Type: (image): image,

Type: (other): <h1>example</h1>


*/

const data = [
  {
    id: 0,
    boxsize: 1,
    title: "bild1",
    type: "image",
    content: cola
  },
  {
    id: 1,
    boxsize: 1,
    content: "asdf",
    title: "bild2",
    type: "other"
  },
  {
    id: 2,
    content: image3,
    title: "bild3",
    type: "image"
  },
  {
    id: 3,
    content: image4,
    title: "bild4"
  },
  {
    id: 4,
    content: image5,
    title: "bild5"
  }
];

export default data;
