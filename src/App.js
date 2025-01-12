import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [boxCount, setBoxCount] = useState(0);
    const [breakStarted, setBreakStarted] = useState(false);
    const [legendaryCount, setLegendaryCount] = useState(0);
    const [enchantedCount, setEnchantedCount] = useState(0);

    const resetCounter = () => {
        setBoxCount(0);
        setBreakStarted(false);
        setLegendaryCount(0);
        setEnchantedCount(0)
    }

    const resetBreak = () => {
        setLegendaryCount(0);
        setEnchantedCount(0);
    }


    return (
        <div className="App">
            <header className="App-header">
                <h1>Professor Dan's Legendary Counter</h1>
                <div>
                    {!breakStarted && (
                        <div>
                            <p>How many boxes in this break?</p>
                            <input type="number"
                                   style={{marginBottom: "16px", fontWeight: "bold", fontSize: "16px", padding: "16px"}}
                                   value={boxCount} onChange={(e) => setBoxCount(e.target.value)}/>
                            <div className={"button"} onClick={() => setBreakStarted(true)}>Start counter</div>
                        </div>
                    )}
                    <div>
                        {breakStarted && (
                            <div>
                                <p>Boxes: {boxCount}</p>
                                <p>Guaranteed legendaries: {boxCount * 3}</p>
                                <div style={{display: "flex", gap: "16px", justifyContent: "center"}}>
                                    <div>
                                        <div className={"button"}
                                             onClick={() => setLegendaryCount(legendaryCount + 1)}>Add Legendary
                                        </div>
                                        <div className={"button"}
                                             onClick={() => setLegendaryCount(legendaryCount - 1)}>Remove Legendary
                                        </div>
                                    </div>
                                    <div>
                                        <div className={"button"}
                                             onClick={() => setEnchantedCount(enchantedCount + 1)}>Add Enchanted
                                        </div>
                                        <div className={"button"}
                                             onClick={() => setEnchantedCount(enchantedCount - 1)}>Remove Enchanted
                                        </div>
                                    </div>
                                </div>
                                <p>Legendary Count: {legendaryCount}</p>
                                <p>Enchanted Count: {enchantedCount}</p>
                                <div>
                                    <div className={"button"} onClick={() => resetBreak()}>Reset Break</div>
                                    <div className={"button"} onClick={() => resetCounter()}>End Break</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
