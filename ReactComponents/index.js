class ClickMessage extends React.Component {
    constructor(props) {
        super(props);
        //this.clickHandle = this.clickHandle.bind(this);
    }

    clickHandle =(e) => {
        let tip = ReactDOM.findDOMNode(this.refs.tip);
        tip.style.display = tip.style.display === "none" ? "inline-block" : "none"
    };

    render() {
        return <div>
            <button onClick={this.clickHandle}>显示|隐藏</button>
            <span ref="tip">显示和隐藏的数据</span>
        </div>;
    }
}

class ChangeMessage extends React.Component {
    constructor(props) {
        super(props);
        //把this的指向bind给ChangeHandle函数
        //this.ChangeHandle = this.ChangeHandle.bind(this);

        this.state = {
            inputMessage: ""
        };
    }

    ChangeHandle =(e) =>{
        e.stopPropagation();
        e.preventDefault();
        this.setState({
            inputMessage: e.target.value
        })
    };

    render() {
        return <div>
            <input type="text" onChange={this.ChangeHandle}/> <span>{this.state.inputMessage}</span>
        </div>
    }
}

ReactDOM.render(
    <div>
        <ClickMessage/>
        <ChangeMessage/>
    </div>,
    document.getElementById("root")
);