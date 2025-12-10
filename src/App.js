import Card from "./Card";
import Counter from "./Counter";
import Example from "./Example";
import Example1 from "./Example1";
import Footer from "./Footer";
import Header from "./Header";
import List from "./List";
import Students from "./Students";

function App() {
  return (
    <>
    <Example1/>
      <Example />
      <Counter />
      <Header />
      <List />
      <Students name="Anush" age={28} isStudent="true" />
      <Students name="Ram" age={500} isStudent="false" />
      <Card />
      <Card />
      <Card />
      <Footer />

    </>
  );
}

export default App;
