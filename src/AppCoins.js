import MenuBar from "./components/MenuBar";
import { useState, useEffect } from "react";

function SearchResult({ coinInfo, usdRates }) {

    const [inputValue, setInputValue] = useState();
    const [targetId, setTargetId] = useState();
    const [krw, setKrw] = useState(null);

    const onChange = (event) => {
        const changedValue = event.target.value;
        const changedId = event.target.id;
        setInputValue(changedValue);
        setTargetId(changedId);
        if (changedValue === "") {
            setKrw(null);
        } else if (changedId === "targetCoin") {
            setKrw((changedValue * coinInfo.quotes.USD.price * usdRates.usd.krw).toFixed(0));
        } else if (changedId === "usd") {
            setKrw((changedValue * usdRates.usd.krw).toFixed(0));
        } else {
            setKrw(0);
        }
    };

    const onKeyUp = (event) => {
        onChange(event);
    };

    return (
        <div>
            <h3>{`${coinInfo.name} (${coinInfo.symbol})`}</h3>
            <ul>
                <li>1 {coinInfo.symbol} = {coinInfo.quotes.USD.price.toFixed(3)} USD</li>
            </ul>
            <input
                id="targetCoin"
                value={targetId === "targetCoin" ? inputValue : inputValue === "" ? inputValue : (inputValue / coinInfo.quotes.USD.price).toFixed(8)}
                onChange={onChange}
                onKeyUp={onKeyUp}
                type="number"
                placeholder={coinInfo.symbol}
            />
            <label htmlFor="targetCoin"> {coinInfo.symbol}</label>

            <br />
            <span> equals to </span>
            <br />

            <input
                id="usd"
                value={targetId === "usd" ? inputValue : inputValue === "" ? inputValue : (inputValue * coinInfo.quotes.USD.price).toFixed(8)}
                onChange={onChange}
                onKeyUp={onKeyUp}
                type="number"
                placeholder="USD"
            />
            <label htmlFor="usd"> USD</label>
            {krw === null ? null : <span> (≈ {krw} KRW) </span>}
        </div>
    );
}

function AppCoins() {
    const [isLoading, setIsLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [usdRates, setUsdRates] = useState([]);
    const [coinInfo, setCoinInfo] = useState({});

    const requestApi = () => {
        setIsLoading(true);
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then(response => response.json())
            .then(json => {
                setCoins(json);
                console.log(json);
            });

        fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json")
            .then(response => response.json())
            .then(json => {
                setUsdRates(json);
                setIsLoading(false);
                console.log(json);
            });
    };

    useEffect(() => { requestApi(); }, []);

    const onClickRefreshData = () => { requestApi(); };

    const onChangeCoin = (event) => {
        if (event.target.value === "") {
            return;
        }

        const selectedItem = document.querySelector("#coin-list option[value='" + event.target.value + "']");
        let targetId = "";
        if (selectedItem) {
            targetId = selectedItem.id;
        }

        if (targetId) {
            event.target.id = targetId;
        }
        else {
            event.target.id = "no-select";
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const targetInput = event.target.querySelector("input");
        const targetCoin = coins.filter((item) => item.id === targetInput.id);
        console.log(targetCoin);
        if (targetCoin.length > 0) {
            setCoinInfo(targetCoin[0]);
        } else {
            setCoinInfo({});
        }
    };

    return (
        <div>
            <MenuBar />
            <h1>
                The Coins! ({coins.length}) <button onClick={onClickRefreshData}>Refresh Data</button>
            </h1>
            {isLoading
                ? (<h3>Loading Coins ...</h3>)
                : (
                    <div>
                        <form onSubmit={onSubmit}>
                            <label htmlFor="coin-input">Select Coin</label><br />
                            <input
                                onChange={onChangeCoin}
                                type="text"
                                list="coin-list"
                                id="no-select"
                                size="35"
                            />
                            <datalist id="coin-list">
                                {coins.map((coin, idx) => <option id={coin.id} value={`${coin.name} (${coin.symbol})`} key={idx}>{`${coin.name} (${coin.symbol})`}</option>)}
                            </datalist>
                            <button>Search</button>
                        </form>
                        <hr />
                        {Object.keys(coinInfo).length
                            ? <SearchResult coinInfo={coinInfo} usdRates={usdRates} />
                            : "no match"}
                    </div>
                )}
        </div>
    );
}

export default AppCoins;