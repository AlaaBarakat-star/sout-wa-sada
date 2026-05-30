import{Link}from"react-router-dom";

function NavBar(){
    return(
    <nav className="navbar">
        <h2 className="logo">صوت وصدى</h2>
    <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/artists">Artists</Link>
        <Link to="/Mood">Mood</Link>
        <Link to="/poetry">Poetry</Link>
        <Link to="/quiz">Quiz</Link>
    </div>
    </nav>);
}
export default NavBar;