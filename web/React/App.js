const { Component } = React;

const { HashRouter, Route, Link } = ReactRouterDOM;

function App() {
  return (
    <HashRouter>
      <div>
        <Route exact path="/Home" component={Home} />
        {/* <Route path="/createproduct" component={ProductCreate} /> */}
      </div>
    </HashRouter>
  );
}
