import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import Catalog from './Catalog.json';

const ItemsContainer = (props) => {
  const {importAllImages} = props;

  let items = Catalog;

  return (
    <div className="item-map">
      {items.map((item) => {
        return (
          <Link key={item.title} to={`/shoppingpage/${item.title}`}>
            <Item item={item} key={item.title} importAllImages={importAllImages} />
          </Link>
        );
      })}
    </div>
  );
};

export default ItemsContainer;