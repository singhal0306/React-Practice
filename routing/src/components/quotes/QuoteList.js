import { Fragment } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
  const navigate = useNavigate();
  const params = useParams()
  console.log(params)
  // new URLSearchParams();

  const changeSortingHandler =() =>{
    navigate('/quotes?sort=asc')
  }
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort Ascending</button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
