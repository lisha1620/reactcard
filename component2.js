function Component2(props){
    return(<div className="card">
        <div className="img"><img src="{props.img}"/></div>
        <div className="d">{props.desc}</div>
        <div className="t">{props.title}</div>
    </div>)
}
export default Component2;