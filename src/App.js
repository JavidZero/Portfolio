import React, { useEffect, useState } from 'react';
import './App.css';

/* Components */
import Loading from './components/loading/Loading';
import Navigation from './components/navigation/Navigation';
import Banner from './components/banner/Banner';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data.eng);
      });
    
    }, []);
    
  useEffect(()=>{
      if(resumeData){
        setLoading(false);
      }
  }, [resumeData])

  if(loading) {
    return <Loading />
  }

  return (
    <div className="app">
        <Navigation data={resumeData.menu} />
        <Banner data={resumeData.main} />
        <Resume data={resumeData.resume}/>
        <Portfolio data={resumeData.portfolio} />
        <Contact data={resumeData.main} />
        <Footer data={resumeData.main} />
    </div>
  );
}

export default App;
