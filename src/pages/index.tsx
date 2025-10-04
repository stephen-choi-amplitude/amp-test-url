import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <Link to="/about">About</Link>
      <p>About page is a control</p>
    </div>
  )
}

export default Home