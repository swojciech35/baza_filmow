import Logo from "./elements/Logo";
import Search from "./elements/Search";
import Button from "./elements/Button";
import FilmCard from "./FilmCard";
const HomePage= ()=>{

    return(
        <>
        <div style={{background: "linear-gradient(170deg, rgba(9,9,121,1) 0%, rgba(186,186,186,1) 100%)",padding:"3%"}}>
            <div style={{display: "flex",margin:1,alignItems:"center",alignContent:'space-between'}}>
                <Logo></Logo>
                <Search ></Search>
                <Button></Button>

            </div>
            <div style={{flexDirection:"row",display:"flex",alignItems:"center",justifyContent:"space-evenly",marginTop:"1%",flexWrap:"wrap",alignContent:"space-between",paddingBottom:"2%"}}>
                <FilmCard
                    image={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/239px-American_Beaver.jpg"}
                    title={"Przygody Bobra Andrzeja"}
                    opis={"Andrzej to dobry bóbr"}
                    rate={"9/10"}
                />
                <FilmCard
                    image={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/239px-American_Beaver.jpg"}
                    title={"Przygody Bobra Andrzeja"}
                    opis={"Andrzej to dobry bóbr"}
                    rate={"9/10"}
                />
                <FilmCard
                    image={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/239px-American_Beaver.jpg"}
                    title={"Przygody Bobra Andrzeja"}
                    opis={"Andrzej to dobry bóbr"}
                    rate={"9/10"}
                />
                <FilmCard
                    image={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/239px-American_Beaver.jpg"}
                    title={"Przygody Bobra Andrzeja"}
                    opis={"Andrzej to dobry bóbr"}
                    rate={"9/10"}
                />
                <FilmCard
                    image={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/239px-American_Beaver.jpg"}
                    title={"Przygody Bobra Andrzeja"}
                    opis={"Andrzej to dobry bóbr"}
                    rate={"9/10"}
                />
                <FilmCard
                    image={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/239px-American_Beaver.jpg"}
                    title={"Przygody Bobra Andrzeja"}
                    opis={"Andrzej to dobry bóbr"}
                    rate={"9/10"}
                />
                <FilmCard
                    image={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/239px-American_Beaver.jpg"}
                    title={"Przygody Bobra Andrzeja"}
                    opis={"Andrzej to dobry bóbr"}
                    rate={"9/10"}
                />
                <FilmCard
                    image={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/239px-American_Beaver.jpg"}
                    title={"Przygody Bobra Andrzeja"}
                    opis={"Andrzej to dobry bóbr"}
                    rate={"9/10"}
                />
                <FilmCard
                    image={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/239px-American_Beaver.jpg"}
                    title={"Przygody Bobra Andrzeja"}
                    opis={"Andrzej to dobry bóbr"}
                    rate={"9/10"}
                />
                <FilmCard
                    image={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/239px-American_Beaver.jpg"}
                    title={"Przygody Bobra Andrzeja"}
                    opis={"Andrzej to dobry bóbr"}
                    rate={"9/10"}
                />
                <FilmCard
                    image={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/239px-American_Beaver.jpg"}
                    title={"Przygody Bobra Andrzeja"}
                    opis={"Andrzej to dobry bóbr"}
                    rate={"9/10"}
                />
                <FilmCard
                    image={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/239px-American_Beaver.jpg"}
                    title={"Przygody Bobra Andrzeja"}
                    opis={"Andrzej to dobry bóbr"}
                    rate={"9/10"}
                />
            </div>
        </div>
        </>
    );
};
export default HomePage;