import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
import ButtonUp from '../../Components/ButtonUp/ButtonUp';
import Body from '../../Components/Body/Body';
import Navbars from '../../Components/Navbar/Navbars';

 function MainPage() {

  return (
    <div>
      <Header />    
      <Navbars />
      <Body />
      <ButtonUp />   
      <Footer />
    </div>
  )
}

export default MainPage;