import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationComponent = () => {
  const [active, setActive] = useState(1);
  const pages = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10, // 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <Pagination>
      <Pagination.First onClick={() => setActive(Math.min(...pages))} />
      <Pagination.Prev onClick={() => setActive(active > 1 ? active - 1 : 1)} />

      {pages.map((number) => (
        <Pagination.Item
          active={number === active}
          onClick={() => setActive(number)}
        >
          {number}
        </Pagination.Item>
      ))}

      <Pagination.Next
        onClick={() => setActive(Math.min(active + 1, pages.length))}
      />
      <Pagination.Last
        onClick={() =>
          setActive(active > pages.length ? active + 1 : pages.length)
        }
      />
    </Pagination>
  );
};

export default PaginationComponent;
