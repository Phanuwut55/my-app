import './App.css';
import Myheader from './Myheader';
import MyFooter from './MyFooter';

function App(){
  return(
    <div>
      <Myheader />
      <div className='My-content'>
        ทดสอบ
      </div>
          
      <MyFooter />
    </div>
  );
}



export default App;
