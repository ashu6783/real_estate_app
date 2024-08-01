import { useContext } from 'react'
import SearchBar from '../../components/searchbar/SearchBar'
import './homepage.scss'
import { AuthContext } from '../../context/AuthContext'

function HomePage() {
  const {currentUser}=useContext(AuthContext)
  console.log(currentUser)
  return (
    <div className='homepage'>
      <div className="textContainer">
        <div className="wrapper">
        <h1 className='title'>
            Find Real Estate & Get Your Dream Place!
        </h1>
        <p>
        Welcome to AshuEstate and Co., where your dream home becomes a reality.
         We specialize in connecting you with the perfect property, 
         tailored to your unique needs and lifestyle.
        </p>
        <SearchBar/>
        <div className="boxes">
            <div className="box">
                <h1>16+</h1>
                <h2>Years of Experience</h2>
            </div>
            <div className="box">
                <h1>200</h1>
                <h2>Awards Gained</h2>
            </div>
            <div className="box">
                <h1>2000+</h1>
                <h2>Property ready</h2>
            </div>
        </div>
      </div>
      </div>
      <div className="imgContainer">
        <img src="/bgg.png" alt="" />
        <img src="/bg2.png" alt="" />
        
      </div>
    </div>
  )
}

export default HomePage
