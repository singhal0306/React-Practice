import { Route, Routes, Navigate, useParams } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import NewQuotes from './pages/NewQuotes';
import QuoteDetails from './pages/QuoteDetails';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';
import Comments from './components/comments/Comments';

function App() {
  const params = useParams();
  return (
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate to="/quotes" />}></Route>
          <Route path='/quotes' element={<AllQuotes />}></Route>
          <Route path='/quotes/:quoteId' element={<QuoteDetails />}></Route>
          <Route path={`/quotes/${params.quoteId}/comments`} element={<Comments />}></Route>
          <Route path='/new-quote' element={<NewQuotes />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Layout>
  );
}

export default App;