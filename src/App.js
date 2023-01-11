import './App.css';
import { BrowserRouter,Routes, Route, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const CounterApp = lazy(() => import('./components/counter'));
const PostsView = lazy(() => import('./features/PostsView'))

function App() {
  return (
    <BrowserRouter>
    <div>
      <ul className='navbar'>
        <NavLink to='counter'>Counter</NavLink>
        <NavLink to='post'>View Post</NavLink>
      </ul>
    </div>
    <Suspense fallback={"Loading..."}>
    <Routes>
      <Route path="/*">
      <Route path='counter' element={<CounterApp />} />
      <Route index element={<CounterApp />} />
      <Route path='post' element={<PostsView />} />
      </Route>
    </Routes>
    </Suspense>
    </BrowserRouter>
  );
}

export default App;
