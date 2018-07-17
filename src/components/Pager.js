import React from 'react';
import { inc, map, pipe } from 'ramda';

import PagerItem from './PagerItem';

const createItems = (total, current, Item) =>
  pipe(
    map(inc),
    map(x => (
      <Item key={x.toString()} active={x === current}>
        {x}
      </Item>
    ))
  );

const Pager = ({ total = 1, current = 1 }) => (
  <div
    style={{ fontFamily: 'HelveticaNeue', display: 'flex', cursor: 'pointer' }}
  >
    <PagerItem>«</PagerItem>
    {createItems(total, current, PagerItem)([...Array(total).keys()])}
    <PagerItem>»</PagerItem>
  </div>
);

export default Pager;
