
const dataArr = [
    {
        id: 1,
        title: '加速NPM',
        time: '2014-08-08',
    },
    {
        id: 2,
        title: '加速NPM',
        time: '2014-08-08',
    },
];




export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                list : dataArr
            })
            // this.render();
        },100);
    }

    componentDidMount() {
    }

    componentWillReceiveProps() {

    }
    componentWillUnmount() {
        console.log('delete');
    }

    render() {
        return (
            <div className="Index" id="myWrap">
                {
                    this.state.list.map(item => {
                        return (
                            <section key={ item.id }>
                                <h3>
                                    <a onClick={() => this.props.history.push({
                                        pathname: "/content",
                                        search: "?id=" + item.id
                                    }) }>{ item.title }</a>
                                    <span> · </span>
                                    { item.time }
                                </h3>
                            </section>
                        );
                    })
                }
               
                <footer id="footer-message">
                    © 2016 Guo Lin. All rights reserved. Powered by 
                    <a target="_blank">Hexo</a>. 
                    <a target="_blank">crisp</a> 
                    theme by 
                    <a target="_blank">
                    Guo Lin</a>.
                </footer>
                
            </div>
        )
    }
}