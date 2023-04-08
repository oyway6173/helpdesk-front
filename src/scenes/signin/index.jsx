import React from "react";
import { Link } from "react-router-dom";
import { login } from "../../services/authService";
import { Paper, Typography } from "@material-ui/core";
import Form from "./common/Form";
import styles from "./common/login.style.css";



class Login extends Form {

    
    state = { data: { email: "", password: "" }, errors: {} };

    doSubmit = async () => {
        try {
            //console.log(this.state.data.email);
            const { data } = await login(this.state.data.email, this.state.data.password);
            console.log(data)
            window.localStorage.setItem("token", JSON.stringify(data));
            window.location = "/";
        } catch (error) {
            const errors = { ...this.state.errors };
            errors.email = error.response.data.email;
            errors.password = error.response.data.password;
            this.setState({ errors });
        }
    };
    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                // className={styles}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100vh',
                  flexDirection: 'column'
                }}
            >
                <Paper elevation={3} className="form">
                    <Typography variant="h6" >
                    Вход
                    </Typography>
                    {this.renderInput("email", "Email", "email")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderSubmitBtn("Войти")}
                </Paper>
                <div style={{ margin: "10px 0" }}>
                    Не знаете данные для входа? <Link to="/signup">Запросить </Link>
                </div>
            </form>
        );
    }
}

export default Login;
