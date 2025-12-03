import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import List from "./List";
import Students from "./Students";

function App() {
  return (
    <>
    
    <Header/>
    <List/>
    <Students name="Anush" age={28} isStudent="true"/>
    <Students name="Ram" age={500} isStudent="false"/>
    <Card/>
    <Card/>
    <Card/>
    <Footer/>
    
    </>
  );
}

export default App;
