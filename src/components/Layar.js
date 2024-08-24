import "./Layar.css";

function Layar(props){
    return(
        <>
        <div className={props.cName}>
            <img alt="layarimg" src={props.layarIMG} />
            <div className="layar-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>
                    {props.buttonText}
                </a>
            </div>
        </div>
        </>
    );
}

export default Layar;