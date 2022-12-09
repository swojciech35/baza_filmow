import Star from './elements/star.png'
const FilmCard= (props)=>{

    return(
        <div style={{flexDirection:'column',display:"flex",marginTop:"2%",borderWidth:2,borderStyle:"solid",backgroundColor:"#696969",padding:3}}>
            <img src={props.image} alt="image" width="239" height="240" />
            <p><strong>{props.title}</strong></p>
            <a>{props.opis}</a>
            <div style={{flexDirection:'row'}}>
            <img src={Star} alt="gwaizda" width="35" height="35"/>
            {props.rate}
            </div>
        </div>
    );
};
export default FilmCard;