import Image from "next/image"
import Navbar from './pages/components/Navbar'
import Container from './pages/components/Container'

export default function Page() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Container />
            </main>
            <footer>
                
            </footer>
        </>
    )
  }