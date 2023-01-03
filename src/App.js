import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { uiActions } from './store/ui-slice';

let isInitial = true;

function App() {
 const showCart = useSelector((state) => state.ui.cartIsVisible)
 const cart = useSelector((state) => state.cart);
 const notification = useSelector(state => state.ui.notification)
 const dispatch = useDispatch();

 useEffect(()=>{
  const sendCartData = async () =>{
    dispatch(uiActions.showNotification({
      status:'pending',
      title:'sending...',
      message:'Sending cart data!'
    }))
  const response =  await fetch(`https://redux-cart-658ee-default-rtdb.firebaseio.com/cart.json`,{
    method:"PUT",
    body: JSON.stringify(cart),
  })

  if(!response.ok){
      throw new Error('sending cart data failed');

     
  }

  // const responseData = await response.json();
  dispatch(uiActions.showNotification({
    status:'succes',
    title:'success...',
    message:'sent cart data successfully'
  }))
  }

  if(isInitial){
isInitial = false;
return;
  }

  sendCartData().catch((err)=>{
    dispatch(uiActions.showNotification({
      status:'error',
      title:'Error...',
      message:'Sending cart data failed'
    }))
  })
  
 },[cart, dispatch])

  return (

    <>
    {notification && <Notification title={notification.title} status={notification.status} message = {notification.message} />}
    <Layout>
     {showCart && <Cart />}
      <Products />
    </Layout>
    </> 
  );
}

export default App;
