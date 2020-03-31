import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios';

import './styles.css';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import { makeStyles } from '@material-ui/core/styles';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import api from '../../services/api';



class PostRegister extends Component {

  state = {
    rsocial: '',
    cnpj: '',
    cep: '',
    municipio: '',
    uf: '',
    logradouro: '',
    bairro: '',
    number: '',
    complement: '',
    tell:'',
    email: '',
    password: '',
  }
  
  // async componentDidMount() {
  //   const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  //   let cnpj = '45987005000198'

  //   const response = await axios.get(`${proxyUrl}https://www.receitaws.com.br/v1/cnpj/${cnpj}`)

  //   console.log(response.data);
  // }




   changeCNPJ = async e =>{
    let value = e.target.value;

    this.setState({ cnpj: value }, async ()  => {

      if(value.length === 14){
        console.log("ok")

        const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        const url = await axios.get(`${proxyUrl}https://www.receitaws.com.br/v1/cnpj/${value}`)


        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        this.setState({
          nome:data.nome,
          uf:data.uf,
          bairro:data.bairro,
          logradouro:data.logradouro,
          municipio:data.municipio,
        
        })
      }
      
      
    })
  }
 
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post()
  }





  render() {

    const { cnpj, email, password} = this.state
          
    
    return(
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">

          <Avatar className="avatar">{/* <LockOutlinedIcon /> */}</Avatar>

          <Typography component="h1" variant="h5">
            Cadastre-se
          </Typography>

          <form className="form" noValidate onSubmit={this.submitHandler}>
            <Grid container spacing={2}>
              {/* RAZÃO SOCIAL */}

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="rsocial"
                  label="Razão Social"
                  type="rsocial"
                  name="rsocial"
                  autoComplete="rsocial"
                  value={this.state.nome}
                  onChange={this.changeCNPJ}
                />
              </Grid>

              {/* CNPJ */}

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="cnpj"
                  name="cnpj"
                  variant="outlined"
                  required
                  fullWidth
                  id="cnpj"
                  label="CNPJ"
                  autoFocus
                  value={cnpj}
                  onChange={this.changeCNPJ}
                />
              </Grid>

              {/* CEP */}

              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="cep"
                  label="CEP"
                  name="cep"
                  autoComplete="cep"
                  value={this.state.cep}
                  onChange={this.changeCNPJ}
                />
              </Grid>

              {/* CIDADE */}

              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="city"
                  label="Cidade"
                  name="city"
                  autoComplete="city"
                  value={this.state.municipio}
                  onChange={this.changeCNPJ}
                />
              </Grid>

              {/* ESTADO */}

              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="state"
                  label="UF"
                  name="state"
                  autoComplete="state"
                  value={this.state.uf}
                  onChange={this.changeCPNJ}
                />
              </Grid>

              {/* RUA */}

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="street"
                  label="Rua"
                  name="street"
                  autoComplete="street"
                  value={this.state.logradouro}
                  onChange={this.changeHandler}
                />
              </Grid>

              {/* BAIRRO */}

              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="neighborhood"
                  label="Bairro"
                  name="neighborhood"
                  autoComplete="neighborhood"
                  value={this.state.bairro}
                  onChange={this.changeHandler}
                />
              </Grid>

              {/* NUMERO */}

              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="number"
                  label="Número"
                  name="number"
                  autoComplete="number"
                  value={cnpj.numero}
                  onChange={this.changeHandler}
                />
              </Grid>

              {/* COMPLEMENTO */}

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="complement"
                  label="Complemento"
                  name="complement"
                  autoComplete="complement"
                  value={cnpj.complemento}
                  onChange={this.changeHandler}
                />
              </Grid>

              {/* TELEFONE */}

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="tell"
                  label="Telefone"
                  type="tell"
                  name="tell"
                  autoComplete="tell"
                  value={cnpj.telefone}
                  onChange={this.changeHandler}
                />
              </Grid>

              {/* EMAIL */}

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="E-mail"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={this.changeHandler}
                />
              </Grid>

              {/* SENHA */}

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={this.changeHandler}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
            >
              {' '}
              Login{' '}
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  já tem uma conta? Realizar login
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      
    )
  }
}

export default PostRegister;

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}










