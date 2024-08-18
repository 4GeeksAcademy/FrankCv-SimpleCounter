import React, { useEffect, useState } from "react";
import SecondsCounter from "./SecondsCounter.jsx";
///
const Home = () => {
	const [counter, setCounter] = useState(0);
	const [divValues, setDivValues] = useState([]);
	const [resume, setResume] = useState(true);
	const [reset, setReset] = useState(false);
	const [intervalID, setIntervalID] = useState();
	let b = [...divValues]
	//for digits of secondscounter
	useEffect(() => {
		console.log(resume);
		clearInterval(intervalID)
		let n;
		n = counter
		if (resume === true) {
			const newInterval = setInterval(() => {
				let i = 0;
				let aux = n;
				while (aux > 0 && i < 7) {
					b[i] = aux % 10;
					setDivValues([...b]);
					aux = Math.floor(aux / 10);
					i++;
				}
				n++
				setCounter(n)
			}, 1000)
			setIntervalID(newInterval)
		}
	}, [resume])
	useEffect(() => {
		let n
		n = 0;
		if (reset === true) {
			const newInterval = setInterval(() => {
				let i = 0;
				let aux = n;
				while (aux > 0 && i < 7) {
					b[i] = aux % 10;
					setDivValues([...b]);
					aux = Math.floor(aux / 10);
					i++;
				}
				n++
				setCounter(0)
			}, 1000)
			setIntervalID(newInterval)
			console.log(intervalID)
		}
	}, [reset])
	//trying to stop first counter but doesn't work
	function onStopHandler() {
		setResume(false)
		clearInterval(intervalID)
	}
	//trying to find if input !== 0 so it count until that time but doesn't work
	function onResetHandler() {
		if (reset) {
			clearInterval(intervalID)
			let aux = [...divValues]
			aux = [0, 0, 0, 0, 0, 0]
			setDivValues(aux)
			setReset(false)
		}
		else {
			clearInterval(intervalID)
			setReset(true)
		}

	}
	function onResumeHandler() {
		if (resume) {
			setResume(false)
			clearInterval(intervalID)
		} else {
			setResume(true)
			console.log(2)
		}
	}

	return (
		<div>
			<div className="container-fluid d-flex justify-content-between bg-dark align-items-center position-relative" style={{ height: `120px` }}>
				<div className="container d-flex justify-content-center align-items-center p-1">
					<i className="fa-regular fa-clock fs-1 text-white"></i>
					<SecondsCounter count={divValues[6] === undefined ? 0 : divValues[6]} />
					<SecondsCounter count={divValues[5] === undefined ? 0 : divValues[5]} />
					<SecondsCounter count={divValues[4] === undefined ? 0 : divValues[4]} />
					<SecondsCounter count={divValues[3] === undefined ? 0 : divValues[3]} />
					<SecondsCounter count={divValues[2] === undefined ? 0 : divValues[2]} />
					<SecondsCounter count={divValues[1] === undefined ? 0 : divValues[1]} />
					<SecondsCounter count={divValues[0] === undefined ? 0 : divValues[0]} />
				</div>
			</div>
			<div className="container-fluid d-flex flex-column justify-content-center">
				<div className="container d-flex flex-column justify-content-center" style={{ maxWidth: "250px" }}>
					<span className="input-group-text" id="basic-addon1">Set your time</span>
					<input min="10" type="number" onChange={(e) => setCounter(e.target.value)} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
				</div>

				<div className="container-fluid d-flex justify-content-center align-items-center">
					<button className="btn btn-success me-3" onClick={() => onResumeHandler()}><i className="fa-solid fa-play"></i></button>
					<button className="btn btn-success" onClick={() => onResetHandler()}><i className="fa-solid fa-stop"></i></button>
				</div>
			</div>
		</div>
	);
};

export default Home;
