function Prato(props) {
    const { img, title, descricao} = props;

    return (
        <div style={{ width:182, hidden: 210, backgroundColor: "#EFEFEF"  }}  className="prato">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <p>{descricao}</p>


        </div>
    );

}

export default Prato;