import './App.css';
import HeaderOne from './componentes/HeaderOne.jsx';
import HeaderTwo from './componentes/HeaderTwo.jsx';
import NewArticle from './componentes/Articles.jsx';
import Aside from './componentes/Aside.jsx';
import AnotherPost from './componentes/AnotherPost.jsx';
import Footer from './componentes/Footer.jsx';
import Data from './componentes/data.json'
import DataPost from './componentes/dataPost.json'
import DataImg from './componentes/dataImg.json'

export default function App() {
  return (
    <>
      <HeaderOne />
      <div className="container">
        <HeaderTwo />
        <main className='content'>
          {Data.map((data) => (
            <NewArticle title={data.title} text1={data.text1} text2={data.text2} text3={data.text3} />
          ))}
        </main>
        <aside className="sidebar">
          {DataImg.map((data) => (
            <Aside className="sidebar" img={data.img} text={data.text} />
          ))}
        </aside>
        {DataPost.map((data) => (
          <AnotherPost post={data.post} />
        ))}
        <Footer />
      </div>
    </>
  )
}
