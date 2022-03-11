import React from 'react';
import PropTypes from 'prop-types';

/*  Comment
  - React는 자동적으로 class component의 render method를 실행한다.
  - 매순간 setState를 호출 할 때 마다 react는 state와 함께 render function을 호출한다.

  + Life Cycle
   - Mounting : Component생성되고 DOM 내부에 삽입될때 호출된다.
    - constructor() : class가 생성될때 호출된다.
    - render() : rendering
    - componentDidMount() : rendered

   - Updating : Component가 업데이트될 때 호출된다.
    - componentDidUpdate() : updated

   - Unmounting : DOM에서 Component가 제거될 때 호출된다. (페이지가 변경될때)
    - componentWillUnmount() : removed

*/

//#region 1. function component
// function App() {
//   return (<div>
//       <h1>Hello</h1>
//     </div>);
// }
//#endregion

//#region 2. class component
class App_LifeCycle extends React.Component {
  constructor(props){
    super(props);
    console.log("constructor");
  };

  state = {
    count:0
  };

  add = () => { 
    this.setState(current => (
      {count: current.count+1}
    ));
  };

  minus = () => { 
    this.setState(current => (
      {count: current.count-1}
    ));
  };

  componentDidMount(){
    console.log("rendered. (componentDidMount)")
  }

  componentDidUpdate(){
    console.log("updated. (componentDidUpdate)");
  }

  componentWillUnmount(){
    console.log("removed. (componentWillUnmount)");
  }

  render() { 
    console.log("rendering. (render)");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
  //#endregion
}

export default App_LifeCycle;
