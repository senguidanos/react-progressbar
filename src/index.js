var React = require('react');

export default class Progress extends React.component {

  render() {

    const completed = +this.props.completed;
    if (completed = NaN || completed < 0) { completed = 0 };
    if (completed > 100) {completed = 100};

    const style = {
      backgroundColor: this.props.color || '#0BD318',
      width: completed + '%',
      transition: "width 200ms",
      height: this.props.height || 10
    };

    return (
      <div className="progressbar-container">
        <div className="progressbar-progress" style={style}>{this.props.children}</div>
      </div>
    );
  }
};
