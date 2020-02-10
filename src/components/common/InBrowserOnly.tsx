import { Component } from "react";

export default class InBrowserOnly extends Component {
  state = { mounted: false };
  componentDidMount() {
    this.setState({ mounted: true });
  }
  render() {
    if (!this.state.mounted) return null;
    return this.props.children;
  }
}
