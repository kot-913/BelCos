
import { CategoryItem } from "../category-item/category-item.component";
import './categories.styles.scss';

export const Categories = ({categories}) => {
    
    return(
        <div className="categories-container">
{categories.map(({ title, imageUrl, id }) => {
  return <CategoryItem key={id} category={{ title, imageUrl }} />;
})}
</div>
    )

}