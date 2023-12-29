import { Route, Link, Switch, Router, useRoute } from "wouter";
import makeCachedMatcher from "wouter/matcher";
import { pathToRegexp, Key } from "path-to-regexp";

import { DayOne } from "./components/Days/DayOne/DayOne";

import "./styles.css";

/*
 * This function specifies how strings like /app/:users/:items* are
 * transformed into regular expressions.
 *
 * Note that it is just a wrapper around `pathToRegexp`, which uses a
 * slighly different convetion of returning the array of keys.
 *
 * @param {string} path — a path like "/:foo/:bar"
 * @return {{ keys: [], regexp: RegExp }}
 */
const convertPathToRegexp = (path: string): { keys: Key[]; regexp: RegExp } => {
  const keys: Key[] = [];

  // we use original pathToRegexp package here with keys
  const regexp = pathToRegexp(path, keys);
  return { keys, regexp };
};

// signature of the matcher fn: (pattern, path) => [success, params]
const customMatcher = makeCachedMatcher(convertPathToRegexp);

const ActiveLink = (props: { href: string; children: React.ReactNode }) => {
  const [isActive] = useRoute(props.href);
  return (
    <Link {...props}>
      <a href="/" className={isActive ? "active" : ""}>
        {props.children}
      </a>
    </Link>
  );
};

const App = () => {
  return (
    <Router matcher={customMatcher}>
      <div className="App">
        <nav>
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/day-one">Day One</ActiveLink>
        </nav>

        <main>
          <Switch>
            <Route path="/">Welcome!</Route>

            <Route path="/day-one">
              <DayOne />
            </Route>
            <Route path="/:anything*">
              <center>
                <b>404:</b> {`Sorry, this page isn't ready yet!`}
              </center>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
