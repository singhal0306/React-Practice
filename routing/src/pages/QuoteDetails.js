import React from 'react'
import { useParams, Routes, Route, Link } from 'react-router-dom';
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is Fun!' },
    { id: 'q2', author: 'Suryansh', text: 'Learning React is Fun!' },
]

export default function QuoteDetails() {
    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

    if(!quote){
        return <p>No Quote Found!</p>
    }
    return (
        <React.Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <div className="centered">
                <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>Load comments</Link>
            </div>
            <Routes>
                <Route path={`/quotes/${params.quoteId}/comments`} element={<Comments />}></Route>
            </Routes>
        </React.Fragment>
    )
}
