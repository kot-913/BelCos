import { Categories } from "./components/categories/categories.component";
import "./categories.styles.scss";

function App() {
  let categories = [
    {
      id: 1,
      title: "Decorative cosmetics",
      imageUrl: "/img/1.jpg",
    },
    {
      id: 2,
      title: "Face care",
      imageUrl: "/img/2.jpg",
    },
    {
      id: 3,
      title: "Body care",
      imageUrl: "/img/3.jpg",
    },
    {
      id: 4,
      title: "Baby care",
      imageUrl: "/img/4.jpg",
    },
    {
      id: 5,
      title: "Solar protection",
      imageUrl: "/img/5.jpg",
    },
  ];

  return <Categories categories={categories} />;
}

export default App;
