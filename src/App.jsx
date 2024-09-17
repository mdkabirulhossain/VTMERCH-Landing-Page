import './App.css'
import BestSellProduct from './components/BestSellProduct/BestSellProduct'
import Header from './components/Header/Header'
import ShopCollection from './components/ShopCollection/ShopCollection'
import ShopNow from './components/ShopNow/ShopNow'

function App() {
 

  return (
    <>
      <Header/>
      <BestSellProduct></BestSellProduct>
      <ShopNow></ShopNow>
      <ShopCollection></ShopCollection>
    </>
  )
}

export default App
