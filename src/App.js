import React from 'react';
import {ShoppingCart} from "./views/ShoppingCart";
import GlobalRouter from "./routes/GlobalRouter";

function App() {

  return (
      <ShoppingCart>
          <GlobalRouter></GlobalRouter>
      </ShoppingCart>
  );
}

export default App;
