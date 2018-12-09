
const getDate = {
    text : `
        <h5>helloworld</h5>
    `
}

export default class extends React.Component {

    render() {
        return (
            <div className="Content" dangerouslySetInnerHTML = {{__html:getDate.text}}>
            </div>
        )
    }
}