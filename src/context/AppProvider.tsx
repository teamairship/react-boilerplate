import React, { Component } from "react";

export const AppContext = React.createContext<AppContextState>(
  {} as AppContextState
);

export type AppContextState = {
  loggedIn: boolean;
};

class AppProvider extends Component<{}, AppContextState> {
  state: AppContextState = {
    loggedIn: false
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
