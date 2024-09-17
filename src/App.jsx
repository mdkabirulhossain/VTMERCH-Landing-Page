import './App.css'
import BestSellProduct from './components/BestSellProduct/BestSellProduct'
import FutureLooks from './components/FutureLooks/FutureLooks'
import Header from './components/Header/Header'
import NewArrival from './components/NewArrival/NewArrival'
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
    </>
  )
}

export default App
