import Logo from "../../component/Logo/Logo";
import Navlist from "../../component/Navlist/Navlist"
function Header() {
    return (
        <header>

            <div className="container">
                <div className="row">
                    <Logo />
                    <Navlist />
                </div>
            </div>
        </header>
    )
}
export default Header;