import Expenses from './components/Expenses';


function App() {

  const expenses = [
    {
      id : "e1",
      title : "title1",
      amount : "123.12",
      date : new Date(2022,1,30)
    },
    {
      id : "e2",
      title : "title2",
      amount : "123.13",
      date : new Date(2022,1,29)
    },
    {
      id : "e3",
      title : "title3",
      amount : "123.33",
      date : new Date(2022,1,28)
    },
    {
      id : "e4",
      title : "title4",
      amount : "123.14",
      date : new Date(2022,1,27)
    }
  ];


  return (
    <div>
      <h2>lets get started!!!</h2>
      <Expenses items = {expenses}></Expenses>
    </div>
  );
}

export default App;
