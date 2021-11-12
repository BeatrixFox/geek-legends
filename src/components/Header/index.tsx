import { FaUser, FaStore } from "react-icons/fa";
import { GrMultimedia } from "react-icons/gr";
import { Container, AvatarContainer } from "./styles";
import Select from "react-select";
import { Link, useHistory, useLocation } from "react-router-dom";

interface LocationTypes {
    pathname: string;
}
interface PathProps {
    location: LocationTypes;
}

const Header = () => {
    const pagesList = {
        dashboard: "Dashboard",
        geekStore: "Geek Stores",
        multimedia: "Multimedias",
        myGeekStore: "My Geek Stores",
        myMultimedias: "My Multimedias",
        myPersona: "My Personas",
        myXFilesGeek: "My X-Files Geek",
        persona: "Persona",
    };
    const location = useLocation<PathProps>();
    const history = useHistory();

    const optionsSet = [
        { value: "/mypersona", label: "My Personas" },
        { value: "/myxfilegeek", label: "My X-File Geek" },
        { value: "/mymultimedia", label: "My Multimedia" },
        { value: "/mygeekstore", label: "My Geek Stores" },
    ];

    const handleSelectDestination = (data: any) => {
        history.push(data);
    };

    return (
        <>
            <Container>
                <Link to="/dashboard">
                    <AvatarContainer />
                </Link>

                <div>
                    <h1 className="pageLocation">
                        {location.pathname === "/dasboard"
                            ? pagesList.dashboard
                            : location.pathname === "/geekstore"
                            ? pagesList.geekStore
                            : location.pathname === "/multimedia"
                            ? pagesList.multimedia
                            : location.pathname === "/mygeekstore"
                            ? pagesList.myGeekStore
                            : location.pathname === "/mymultimedia"
                            ? pagesList.myMultimedias
                            : location.pathname === "/mypersona"
                            ? pagesList.myPersona
                            : location.pathname === "/myxfilegeek"
                            ? pagesList.myXFilesGeek
                            : pagesList.persona}
                    </h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/mypersona">
                                <FaUser />
                            </Link>
                        </li>
                        <li>
                            <Link to="/mygeekstore">
                                <FaStore />
                            </Link>
                        </li>
                        <li>
                            <Link to="/mymultimedia">
                                <GrMultimedia />
                            </Link>
                        </li>
                    </ul>
                </nav>

                <Select
                    className="select"
                    options={optionsSet}
                    isClearable
                    placeholder="escolha a página"
                    onChange={(e) => handleSelectDestination(e?.value)}
                />
            </Container>
        </>
    );
};

export default Header;
