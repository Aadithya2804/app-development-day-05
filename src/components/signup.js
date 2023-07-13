import './signupcss.css';
import Input from '@mui/joy/Input';
function Signuppage()
{
    return(
        <div className="signupdiv">
            <br></br><br></br><br></br><br></br><br></br><br></br>
            
            <h1 id="intro">Welcome Home Toned-Up</h1>
            <br></br><br></br><br></br><br></br>
            <Input placeholder="Type in here…" variant="outlined" color="info" />
            <Input placeholder="Type in here…" variant="outlined" color="success" />
        </div>
    );
}
export default Signuppage;