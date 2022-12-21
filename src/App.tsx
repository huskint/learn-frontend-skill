import GlobalStyles from './ui/core/GlobalStyles';
import InputContainer from './ui/components/container/InputContainer';
import TextAreaContainer from './ui/components/container/TextAreaContainer';

function App() {
  return (
    <>
      <div>
        <InputContainer />
        <TextAreaContainer />
      </div>
      <GlobalStyles />
    </>
  );
}

export default App;
