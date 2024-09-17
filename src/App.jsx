import './App.css'
import BestSellProduct from './components/BestSellProduct/BestSellProduct'
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
    </>
  )
}

export default App
