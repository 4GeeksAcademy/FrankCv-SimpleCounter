import React, { useState } from "react";
import SecondsCounter from "./SecondsCounter.jsx";
///
const Home = (props) => {
	// const repeat = Array.from({ length: 7 }, (_, index) => (<SecondsCounter key={index} count={props.count} />))
	let a = props.count;
	let divValue = [0, 0, 0, 0, 0, 0, 0];
	let i = 0;
	while (a > 0 && i < 7) {
		divValue[i] = a % 10;
		a = Math.floor(a / 10);
		i++;
	}
	// Math.floor((props.count % 10000000) / 1000000)
	// Math.floor((props.count % 1000000) / 100000)
	// Math.floor((props.count % 100000) / 10000)
	// Math.floor((props.count % 10000) / 1000)
	// Math.floor((props.count % 1000) / 100)
	// Math.floor((props.count % 100) / 10)
	return (
		<div className="container-fluid d-flex justify-content-start bg-dark align-items-center position-relative" style={{ height: `120px` }}>
			<i className="fa-regular fa-clock fs-1 text-white position-absolut"></i>
			<SecondsCounter count={divValue[6]} />
			<SecondsCounter count={divValue[5]} />
			<SecondsCounter count={divValue[4]} />
			<SecondsCounter count={divValue[3]} />
			<SecondsCounter count={divValue[2]} />
			<SecondsCounter count={divValue[1]} />
			<SecondsCounter count={divValue[0]} />
			<div className="input-group mb-3">
				<span className="input-group-text" id="basic-addon1">@</span>
				<input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
			</div>
		</div>


	);
};

export default Home;
