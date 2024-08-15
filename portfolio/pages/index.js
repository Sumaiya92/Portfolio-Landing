import Header from '../components/Header'
import HomeSection from'../components/HomeSection'
import Footer from'../components/Footer'
import Contact from '@/components/contact';
import About from '@/components/about';
import Services from '@/components/Services';
import Project from '@/components/Project';
import Testimonial from '@/components/Testimonial';
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=' font-poppins  text-black bg-white'>
      <Header/>
      <HomeSection/>
      <About/>
      <Services/>
      <Project></Project>
      <Testimonial/>
      
      <Contact/>
      <Footer/>
    </main>
  );
}
