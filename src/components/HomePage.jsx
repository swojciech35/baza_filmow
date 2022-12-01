import Logo from "./elements/Logo";
import Search from "./elements/Search";
import Button from "./elements/Button";
const HomePage= ()=>{

    return(
        <><div style={{display: "flex",margin:1,alignItems:"center",alignContent:'space-between'}}>
            
            <Logo></Logo>
            <Search ></Search>
            <Button></Button>
           
        </div></>
    );
};
export default HomePage;