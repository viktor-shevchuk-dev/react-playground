import { Material } from '../Material/Material.component';

export const MaterialList = ({ items, ...otherProps }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <Material item={item} {...otherProps} />
      </li>
    ))}
  </ul>
);
