// import data from '../data';
import { Link } from 'react-router-dom';
import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';

//-- Create a reducer function.
//-- It has 2 parameters:
//--   1. current state
//--   2. acction that change the state and create a new state
const reducer = (state, action) => {
  switch(action.type) {
    //-- Send ajax request to backend.
    //-- Return a new state: keep the values of the previous state, only update
    //--   'loading' value.
    //-- 'loading' is set to true to show a loading box in UI
    case 'FETCH_REQUEST':
      return {...state, loading: true};
    case 'FETCH_SUCCESS':
      //-- payload is the data return from backend (the products)
      return {...state, products: action.payload, loading: false};
    case 'FETCH_FAIL':
      return {...state, loading: false, error: action.payload};
    default:
      //-- else just return the current state
      return state;
  }
};

function HomeScreen() {
  // const [products, setProducts] = useState([]);

  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    loading: true,
    error: '',
    products: []
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });

      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
      // setProducts(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Featured Products</h1>
        <div className='products'>
          {
            loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              products.map( (product) =>
                <div className='product' key={product.slug}>
                  <Link to={`/product/${product.slug}`}>
                    <img src={product.image} alt={product.name} />
                  </Link>
                  <div className='product-info'>
                    <Link to={`/product/${product.slug}`}>
                      <p>{product.name}</p>
                    </Link>
                    <p><strong>${product.price}</strong></p>
                    <button>Add to cart</button>
                  </div>
                </div>
              )
            )
          }
        </div>  
    </div>
  );
}

export default HomeScreen;