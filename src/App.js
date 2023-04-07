import React, { useState } from 'react';
import Header from './components/layout/Header';
import Meals from './components/meals/Meals';
import Cart from './components/cart/Cart';

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
    setIsCartShown(true);
  };

  const hideCartHandler = () => {
    setIsCartShown(false);
  };

  return (
    <React.Fragment>
      <Header onShowCart={showCartHandler} onHideCart={hideCartHandler} />
      {isCartShown && <Cart onClose={hideCartHandler} />}
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
