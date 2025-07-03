import { useState } from 'react';
import './App.css';
import { URL } from './Constans';
import Answer from './components/Answer';

function App() {
  const [queary, setqueary] = useState("");
  const [result, setResult] = useState(undefined);
  const payLoad = {
    contents: [
      {
        parts: [{ text: queary}],
      },
    ],
  };
  const askQueary =async () => {
    let response = await fetch(URL,{
       method:"POST",
       body:JSON.stringify(payLoad)
    });
    response = await response.json();
    let dataString = response.candidates[0].content.parts[0].text;
    dataString = dataString.split("* ");
    dataString = dataString.map((item) => item.trim());
    console.log(dataString);
    setResult(dataString);
    
  }

  return (
    <div className="grid grid-cols-5 ">
      <div className="col-span-1 bg-zinc-800 h-screen"></div>
      <div className="col-span-4 bg-zinc-900 h-screen">
        <div className="container h-150 overflow-y-scroll text-ellipsis">
          <div className="text-white text-center">
            {/* {result} */}
            <ul>
              {result &&
                result.map((item, index) => (
                  <li className="text-left">
                    <Answer ans={item} key={index} />
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="bg-zinc-800 w-1/2 m-auto text-white p-2 pr-8 rounded-4xl border-zinc-700 flex ">
          <input
            type="text"
            placeholder="Ask me anything"
            value={queary}
            onChange={(event) => setqueary(event.target.value)}
            className="w-full h-full p-2 outline-none"
          />
          <button onClick={askQueary}>Ask</button>
        </div>
      </div>
    </div>
  );
}

export default App;
