import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {books: state.books};
};

const BooksList = ({ books }) => (
  <ul className="list-group list-group-flush">
    {books.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps) (BooksList);

export default List;