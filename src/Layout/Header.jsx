import logo from "../images/react.png"

function MainHeader(){
    return (
        <div className="pt-3 py-1 pl-2" style={{backgroundColor: "black"}}>
            <img src={logo} style={{height:"35px", verticalAlign:"top"}}></img>
            <span className="h2 pt-4 text-white-50">REACT COURSE</span>
        </div>
    )
}
const SubHeaderStyle = {
    color: "blueviolet",
    backgroundColor: "lightgrey",
};
function SubHeader(){
    return <p style={SubHeaderStyle} className="text-center">This is an exiting course</p>
}
const Header = () =>{
    return(
        <div>
            <MainHeader />
            <SubHeader />
        </div>

    );
}

export default Header;