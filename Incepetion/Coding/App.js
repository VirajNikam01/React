var parent = React.createElement('div', {id:"parent"}, [
    React.createElement('div',{id:"child1"}, [
        React.createElement('h1', {id:"heading"}, "Heading from child one"),
        React.createElement('h2', {id:"heading"}, "h2 from child one")
    ]),

    React.createElement('div', {id:"child2"},[
        React.createElement('h1',{id:"heading"}, "Heading from child two")
    ])
])

var root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)