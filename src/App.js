import React, { useState } from 'react';
import './App.css'

const App = () => {

    //Valores en texto
    const [currently, setCurrently] = useState("");

    const [cubeQuantityState, setcubeQuantityState] = useState("");
    const [BenefitsState, setBenefitsState] = useState("");
    const [bigsState, setbigsState] = useState("");
    const [midiumState, setmidiumState] = useState("");
    const [littleState, setlittleState] = useState("");

    var time = 2000;
    var cubeQuantity = 6000;
    var Benefits = 0;
    var bigs = 0;
    var midium = 0;
    var little = 0;

    setcubeQuantityState(cubeQuantity);
    setBenefitsState(Benefits);
    setbigsState(bigs);
    setmidiumState(midium);
    setlittleState(little);

    function getRandomArbitrary(min, max) {
        return parseInt(Math.random() * (max - min) + min);
    }


    const initial = () => {
        let num = getRandomArbitrary(0, 20);

        if (num === 0) {
            setCurrently("No ha entrado nadie.");
        } else {
            setCurrently(`Entraron ${num} personas`);
            setTimeout(() => questioningPrice(num), time);
        }
    }

    const questioningPrice = (num) => {
        let num1 = getRandomArbitrary(0, num);
        if (num1 === 0) {
            setCurrently(`Nadie se tuvo a preguntar.`);
        } else {
            setCurrently(`De las ${num} personas, ${num1} se detuvieron a preguntar`);
            setTimeout(() => saleQuantity(num1), time);
        }
    }

    const saleQuantity = (num) => {
        let num1 = getRandomArbitrary(0, num);
        const socialClass = calculateClass(num1);
        if (num1 === 0) {
            setCurrently(`De las personas que preguntaron, ninguno compró`);
        } else {
            setCurrently(`De las ${num} personas que preguntaron, ${num1} compraron.`);
            console.log(`${socialClass.lower},${socialClass.middle},${socialClass.upper}`);
        }
    }

    const calculateClass = (peopleQuantity = 0) => {
        let lower = 0;
        let middle = 0;
        let upper = 0;

        for (let i = peopleQuantity; i > 0; i--) {
            let randomNumber = getRandomArbitrary(0, 100);
            if (randomNumber >= 0 && randomNumber <= 33) {
                lower++;
            }
            else if (randomNumber >= 34 && randomNumber <= 66) {
                middle++;
            } else {
                upper++;
            }
        }
        return { lower, middle, upper };
    }

    const generateSale = () => {

    }

    return (
        <>
            <div className="container">
                <form>
                    <input type="text" value={`${currently}`} /><br /><br />

                    <input type="text" value={`Beneficios: ${currently}`} /><br />
                    <input type="text" value={`Grandes: `} /><br />
                    <input type="text" value={`Medianos: `} /><br />
                    <input type="text" value={`Pequeños: `} /><br />
                    <input type="text" value={`Propinas: `} /><br />
                    <br />

                </form>

                <div className="keypad">
                    <button className="highlight" onClick={initial} id='clear'>Iniciar</button>
                </div>

            </div>
        </>
    );
}

export default App;