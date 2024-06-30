
{/* <div class="parent"> */}
	{/* <div className="child"> */}
		{/* <h1></h1> */}
		{/* <h2></h2> */}
	{/* </div> */}
	{/* <div className="child2"> */}
		{/* <div className="div"> */}
			{/*<h1>hey i m h1</h1>}
		{/* </div> */}
	{/* </div> */}
{/* </div> */}


const parent = React.createElement("div", {class:"parent"},
	[
		React.createElement("div",{class:"child"},
		[React.createElement("h1",{},"Hey I m h1 tag"),React.createElement("h2",{},"hey i h2 tag")]
	),
	React.createElement("div",{class:"child2"},React.createElement("div",{},React.createElement("h1",{},"Hey i m also h1 tag")))
])

console.log(parent)










// const head = React.createElement(
	// "h1",
	//  {id:"head"},
	//  "Hello world from react"
	// )
	// console.log(head)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

