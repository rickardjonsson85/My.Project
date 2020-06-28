export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        {" "}
        <Router history={history}>
          {" "}
          <Switch>
            {" "}
            <Route
              path="/"
              exact
              render={(props) => <HomePage {...props} />}
            />{" "}
            <Route path="/mental" render={(props) => <Mental {...props} />} />{" "}
            <Route
              path="/brotherhood"
              render={(props) => <Brotherhood {...props} />}
            />{" "}
          </Switch>{" "}
        </Router>{" "}
      </React.Fragment>
    );
  }
}
