class MessageClick extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            name: 0
        };

    }

    clickHandle = (e) => {
        e.stopPropagation();
        e.preventDefault();
        let tip = ReactDOM.findDOMNode(this.refs.tip);
        if (tip.style.display === "none") {
            tip.style.display = "inline-block";
        } else {
            tip.style.display = "none"
        }
        let bn = this.state.name;

        this.setState({
            name: ++bn
        })
    };

    render() {
        return <div>
            <div className="wrap">
                <div className="header"> <button className="btn" onClick={this.clickHandle}>按钮</button>
                    <span className="show" ref="tip">{this.state.name}</span></div>
                <div className="down">
                    <div className="left">
                        flex布局
                    </div>
                    <div className="main">
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                        <p>高度自动适应</p>
                    </div>
                </div>
                <div className="footer">

                </div>
            </div>

        </div>
    }
}

//箭头函数不会创建自身的this上下文，this就指向组件实例。建议就用箭头函数，代码会精简很多
//ES6不在需要getInitialState方法，而是直接在constructor中直接用this.state即可，更加方便。
class MessageChange extends React.Component {
    constructor(prop) {
        super(prop);

    }

    changeHandle = (e) => {
        e.stopPropagation();
        e.preventDefault();

    };

    render() {
        return <div>
            {/*<input onChange={this.changeHandle} type="text"/>*/}
            {/*<span>{this.state.inputMessage}</span>*/}
        </div>
    }
}

ReactDOM.render(
    <div>
        <MessageClick/>
        <MessageChange/>
    </div>,
    document.getElementById("app")
);