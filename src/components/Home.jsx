import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const img1 = "https://www.cnet.com/a/img/resize/bcae6ebae333efd053a1aad485a7bb54b6c2a584/hub/2021/10/23/b4e8daa4-d3c1-4f4c-9a15-d127246205d9/macbook-pro-2021-cnet-review-15.jpg?auto=webp&fit=crop&height=1200&width=1200"
const img2 = "https://m.media-amazon.com/images/I/71TawoxTk6L._UL1500_.jpg"
const img3 = "https://5.imimg.com/data5/YS/RU/SZ/SELLER-3749501/mens-shirts-500x500.jpg"
const img4 = "https://contents.mediadecathlon.com/p1786898/ae17f52b5132f4a4a5d3274ef355188e/p1786898.jpg"
const img5 = "https://m.media-amazon.com/images/I/71UXbfMHImS._UY445_.jpg"
const img6 = "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/wearables/bose_frames_soprano/product_silo_images/soprano_product_page_ec_hero_1200x1022_web_purple_fade.jpg/jcr:content/renditions/cq5dam.web.320.320.jpeg"
const img7 = "https://m.media-amazon.com/images/I/81sV+tiy1wL._SL1500_.jpg"
const img8 = "https://img.freepik.com/premium-vector/heap-books-sketch-library-stack-education-symbol_80590-12797.jpg?w=2000"
const img9 = "https://www.energysistem.com/cdnassets/products/45173/rear_2000.jpg"
const img10 = "https://m.media-amazon.com/images/I/71geVdy6-OS._SX466_.jpg"
const Home = () => {

  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgsrc: img1,
      id: "djnviruedclsximelfuhnrjf",
    },
    {
      name: "Black shoes",
      price: 1600,
      imgsrc: img2,
      id: "frifeodwijdjnviruedclsximelfuhnrjf",
    },
    {
      name: "Shirts",
      price: 500,
      imgsrc: img3,
      id: "frifeod3ghfjdertwijdjnviruedclsximelfuhnrjf",
    },
    {
      name: "Pants",
      price: 600,
      imgsrc: img4,
      id: "frifeodfswd3ghfjdertwijdjnviruedclsximelfuhnrjf",
    },
    {
      name: "Hand Watch",
      price: 2500,
      imgsrc: img5,
      id: "frifeod3ghfjdetghfrtwijviruedcujyhlsximelfuhnrjf",
    },
    {
      name: "Glasses",
      price: 800,
      imgsrc: img6,
      id: "frifeod3ghfjdertwijbhudjnviruedclsximelfuhnrjf",
    },
    {
      name: "Toys",
      price: 2500,
      imgsrc: img7,
      id: "frifeod3ghfjdertwijdjlokjinviruedclsximelfuhnrjf",
    },
    {
      name: "Books",
      price: 500,
      imgsrc: img8,
      id: "frifeosxdd3ghfjdertwijdjnviruedclsximelfuhnrjf",
    },
    {
      name: "Earphones",
      price: 1500,
      imgsrc: img9,
      id: "frifeod3ghfjdertwijdjnvbvciruedclsximelfuhnrjf",
    },
    {
      name: "Smartphones",
      price: 55500,
      imgsrc: img10,
      id: "frifeod3ghfjdertwijdjnviruedclsximelfukijrjf",
    },
  ];

  const dispatch = useDispatch()

  const addToCartHandler = (options) => {
    console.log(options);
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added to Cart");

  }
  return (
    <div className='Home'>
      {productList.map((i) => (
        <Productcard
          key={i.id}
          imgsrc={i.imgsrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  )
};

const Productcard = ({ name, id, price, handler, imgsrc }) => (
  <div className='productCard'>
    <img src={imgsrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgsrc })}>Add to Cart</button>

  </div>
)

export default Home
