import React from 'react';
import {useState} from 'react';
import {TextField, InputAdornment,FormControl,Button} from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";


const Login = () => {
    const history = useHistory();
    const [userName, setuserName] = useState('');

    const doLogin = event => {
        history.push({
            pathname: '/messenger',
            username: userName
        });
    }


    return (
        <div className="login">
            <FormControl>
                <TextField
                    required 
                    variant="outlined"
                    id="input-with-icon-textfield"
                    label="Enter your user name"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <PersonOutlineIcon />
                        </InputAdornment>),
                    }}
                    value={userName}
                    onChange={event => setuserName(event.target.value)}
                    
                />
                 
            </FormControl>
            {/* <div className="login__loginButton">
                <Button variant="contained" 
                    color="secondary" 
                    type="submit" 
                    startIcon={<PersonIcon />}
                    to={`/messenger/${userName}`}
                    renderAs={Link}
                >Login</Button>
            </div> */}

            <Link to={`/messenger/${userName}`} className="login__link">
                {/* <PersonIcon /> */}
                <img className="login__image" src="data:image/png;base64,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"
                    alt=""/>
            </Link>

            {/* <Link to={`/messenger/${userName}`}>
                <Button renderAs="button" 
                    disabled={!userName}
                    variant="contained" 
                    color="secondary" 
                    type="submit" 
                    startIcon={<PersonIcon />}>
                    Login
                </Button>
            </Link> */}
            
        </div>
    )
}

export default Login
