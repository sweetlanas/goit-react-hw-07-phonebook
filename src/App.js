import "./App.css";
import PhoneBookList from "./components/PhoneBookList/PhoneBookList";
import PhoneBookForm from "./components/PhoneBookForm/PhoneBookForm";
import PhonebookFilter from "./components/PhoneBookFilter/PhoneBookFilter";

function App() {
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <PhoneBookForm />
      <h2>Contacts</h2>
      <PhonebookFilter />
      <PhoneBookList />
    </div>
  );
}

export default App;
