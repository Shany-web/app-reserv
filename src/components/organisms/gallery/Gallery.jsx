import estilo1 from "../../../assets/gallery/estilo1.png";
import estilo2 from "../../../assets/gallery/estilo2.png";
import estilo3 from "../../../assets/gallery/estilo3.png";
import estilo4 from "../../../assets/gallery/estilo4.png";
import estilo5 from "../../../assets/gallery/estilo5.png";
import estilo6 from "../../../assets/gallery/estilo6.png";
import pedicureImg from "../../../assets/pedicureImg.png";
import "./Gallery.css";

const images = [
  {
    id: 1,
    image: estilo1,
  },
  {
    id: 2,
    image: estilo2,
  },
  {
    id: 3,
    image: estilo3,
  },
  {
    id: 4,
    image: estilo4,
  },
  {
    id: 5,
    image: estilo5,
  },
  {
    id: 6,
    image: estilo6,
  },
  {
    id: 7,
    image: pedicureImg,
    desc: "...",
  },
  {
    id: 5,
    image: estilo5,
  },
  {
    id: 1,
    image: estilo1,
  },
  {
    id: 2,
    image: estilo2,
  },
];

const Gallery = () => {
  return (
    <div className="img-section container">
      {images.map((foto) => (
        <img key={foto.id} src={foto.image} alt={foto.desc} />
      ))}
    </div>
  );
};

export default Gallery;
