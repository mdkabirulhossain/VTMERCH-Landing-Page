import './App.css'
import Believe from './components/Believe/Believe'
import BestSellProduct from './components/BestSellProduct/BestSellProduct'
import FutureLooks from './components/FutureLooks/FutureLooks'
import Header from './components/Header/Header'
import NewArrival from './components/NewArrival/NewArrival'
import ProductMonth from './components/ProductMonth/ProductMonth'
import ShopCollection from './components/ShopCollection/ShopCollection'
import ShopNow from './components/ShopNow/ShopNow'

function App() {
 

  return (
    <>
      <Header/>
      <BestSellProduct></BestSellProduct>
      <ShopNow></ShopNow>
      <ShopCollection></ShopCollection>
      <NewArrival></NewArrival>
      <FutureLooks></FutureLooks>
      <Believe></Believe>
      <ProductMonth></ProductMonth>
    </>
  )
}

export default App
