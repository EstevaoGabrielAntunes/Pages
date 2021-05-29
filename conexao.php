<?php

$conexao = mysqli_connect("localhost","root","","banco_formulario");

$conexao->set_charset("utf-8");

if(!$conexao){
    die("erro ao conectar com o banco de dados".
        mysqli_connect_errno()."<br>".
        mysqli_connect_error());
}
if(!mysqli_select_db($conexao, "banco_formulario")){
    die("O banco não existe");
  }
?>