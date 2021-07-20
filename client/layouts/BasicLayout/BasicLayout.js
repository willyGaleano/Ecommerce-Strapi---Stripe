import React from "react";
import { Container } from "semantic-ui-react";
import classNames from "classnames";
import Header from "../../components/Header";

export default function BasicLayout(props) {
  const { children, className } = props;
  //className="basic-layout"
  return (
    //primero todas las clases que tienen de manera default
    //Despues todas las clases que tengan condicionales
    <Container
      fluid
      className={classNames("basic-layout", {
        //El contenido que llega a className me lo vas a añadir en el className del container
        //siempre en cuando className tenga algun valor
        [className]: className,
      })}
    >
      <Header />
      <Container className="content">{children}</Container>
    </Container>
  );
}
