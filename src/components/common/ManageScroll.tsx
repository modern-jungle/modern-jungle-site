import { RouteComponentProps } from "@reach/router";
import { Component } from "react";

export default class ManageScroll extends Component<RouteComponentProps> {
  private next: number | null = null;

  componentWillMount() {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }

  UNSAFE_componentWillUpdate(nextProps: RouteComponentProps) {
    const {
      location: { key }
    } = nextProps;

    const position = sessionStorage.getItem(key);

    sessionStorage.setItem(this.props.location.key, String(window.scrollY));

    if (position) {
      this.next = +position;
    } else {
      this.next = null;
    }
  }

  componentDidUpdate() {
    if (this.next === null) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, this.next);
    }
  }

  render(): null {
    return null;
  }
}
