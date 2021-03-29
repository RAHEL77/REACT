
import TextLorem from './components/Hooks/TextLorem';
function App() {
  const str =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ';

  return (
    <div className="App">
      <TextLorem str={str} lenghtOf={60} />
    </div>
  );
}

export default App;






