import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import { Container, Content, Row } from './styles';

const App = () => {
  const initialState = { firstNumber: '0', currentNumber: '0', operation: '' };
  const [state, setState] = useState(initialState);

  const handleOnClear = () => setState(initialState);

  const handleAddNumber = (num) => {
    setState((prev) => ({
      ...prev,
      currentNumber: prev.currentNumber === '0' ? num : prev.currentNumber + num,
    }));
  };

  const handleOperation = (operator) => {
    if (state.operation && state.currentNumber !== '0') {
      handleEquals();
    }
    setState({
      ...state,
      firstNumber: state.currentNumber,
      currentNumber: '0',
      operation: operator,
    });
  };

  const calculateResult = () => {
    const { firstNumber, currentNumber, operation } = state;
    const num1 = Number(firstNumber);
    const num2 = Number(currentNumber);

    switch (operation) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case 'x':
        return num1 * num2;
      case '/':
        return num2 === 0 ? 'Error' : num1 / num2;
      default:
        return currentNumber;
    }
  };

  const handleEquals = () => {
    const result = calculateResult();
    setState({ firstNumber: '0', currentNumber: String(result), operation: '' });
  };

  return (
    <Container>
      <Content>
        <Input value={state.currentNumber} />
        <Row>
          <Button label="x" onClick={() => handleOperation('x')} />
          <Button label="÷" onClick={() => handleOperation('/')} />
          <Button label="C" onClick={handleOnClear} />
          <Button label="=" onClick={handleEquals} />
        </Row>

        <Row>
          {['7', '8', '9'].map((num) => (
            <Button key={num} label={num} onClick={() => handleAddNumber(num)} />
          ))}
          <Button label="-" onClick={() => handleOperation('-')} />
        </Row>

        <Row>
          {['4', '5', '6'].map((num) => (
            <Button key={num} label={num} onClick={() => handleAddNumber(num)} />
          ))}
          <Button label="+" onClick={() => handleOperation('+')} />
        </Row>

        <Row>
          {['1', '2', '3'].map((num) => (
            <Button key={num} label={num} onClick={() => handleAddNumber(num)} />
          ))}
          <Button label="0" onClick={() => handleAddNumber('0')} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;


// Código do desafio abaixo!

/*

import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import { Container, Content, Row } from './styles';



const App = () => {
  const[currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operations, setOperation] = useState('');
    const handleOnClear = () =>{
      setCurrentNumber('0')
      setFirstNumber('0')
      setOperation('')
    };
    const handleAddNumber = (num) =>{
        setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
    }

    const handleSumNumbers = () =>{
      if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
      }else{
        const sum = Number(firstNumber) + Number(currentNumber);
        setCurrentNumber(String(sum))
        setOperation('')
      }
    }

    const  handleDecNumbers = () =>{
      if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
      }else{
        const sum = Number(firstNumber) - Number(currentNumber);
        setCurrentNumber(String(sum))
        setOperation('')
      }
    }

    const  handleMultiNumbers = () =>{
      if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('x')
      }else{
        const sum = Number(firstNumber) * Number(currentNumber);
        setCurrentNumber(String(sum))
        setOperation('')
      }
    }

    const  handleDivNumbers = () =>{
      if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')
      }else{
        const sum = Number(firstNumber) / Number(currentNumber);
        setCurrentNumber(String(sum))
        setOperation('')
      }
    }

    const handleEquals = () =>{
      if(firstNumber !== '0' && operations !== '' && currentNumber !== '0'){
          switch(operations){
            case '+':
              handleSumNumbers();
              break;
              case '-':
              handleDecNumbers();
              break;
              case 'x':
              handleMultiNumbers();
              break;
              case '/':
              handleDivNumbers();
              break;
              default: break;
          }
      }
    }
  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
           <Button label="x" onClick={handleMultiNumbers}/>
           <Button label="÷" onClick={handleDivNumbers}/>
           <Button label="C" onClick={handleOnClear}/>
           <Button label="=" onClick={handleEquals}/>
        </Row>

        <Row>
           <Button label="7" onClick={() => handleAddNumber('7')}/>
           <Button label="8" onClick={() => handleAddNumber('8')}/>
           <Button label="9" onClick={() => handleAddNumber('9')}/>
           <Button label="-" onClick={handleDecNumbers}/>
        </Row>

        <Row>
           <Button label="4" onClick={() => handleAddNumber('4')}/>
           <Button label="5" onClick={() => handleAddNumber('5')}/>
           <Button label="6" onClick={() => handleAddNumber('6')}/>
           <Button label="+" onClick={handleSumNumbers}/>
        </Row>

        <Row>
           <Button label="1" onClick={() => handleAddNumber('1')}/>
           <Button label="2" onClick={() => handleAddNumber('2')}/>
           <Button label="3" onClick={() => handleAddNumber('3')}/>
           <Button label="0" onClick={() => handleAddNumber('0')}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;


*/