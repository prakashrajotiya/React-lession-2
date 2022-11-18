// created heading with H1 tag
const heading = React.createElement("h1", {}, "Hello World");

// created root for app
const root = ReactDOM.createRoot(document.getElementById("root"));

// bind element in root
root.render(heading);
