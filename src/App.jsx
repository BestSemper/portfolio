import './App.css'
import { CustomNavbar } from './components/CustomNavbar'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Footer } from './components/Footer'

function App() {
    return (
        <div className="App">
            <title>John Kim</title>
            <div className="page">
                <CustomNavbar />
                <Banner />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default App