import '../App.css';
import Logo from "./elements/Logo";
import Search from "./elements/Search";
import Button from "./elements/Button";
import FilmCard from "./FilmCard";
const HomePage= ()=>{

    return(
        <>
        <div className="hp-background">
            <div className='hp-header'>
                <Logo></Logo>
                <Search ></Search>
                <Button
                text={"DODAJ FILM"}
                link={"/signin"}
                />
                <Button
                text={"Zaloguj się "}
                link={"/signin"}
                /><Button
                text={"Zarejestruj się  "}
                link={"/signup"}
                />

            </div>
            <div className="hp-filmCard">
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