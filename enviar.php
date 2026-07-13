<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nome = htmlspecialchars($_POST["nome"]);
    $email = htmlspecialchars($_POST["email"]);
    $telefone = htmlspecialchars($_POST["telefone"]);
    $mensagem = htmlspecialchars($_POST["mensagem"]);

    $destinatario = "contato@worldbyte.com.br";
    $assunto = "Novo contato pelo site WorldByte";

    $corpo = "
    Você recebeu uma nova mensagem pelo site.

    Nome: $nome

    E-mail: $email

    Telefone: $telefone

    Mensagem:

    $mensagem
    ";

    $headers = "From: WorldByte <noreply@worldbyte.com.br>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if(mail($destinatario, $assunto, $corpo, $headers)){
        header("Location: obrigado.html");
        exit;
    }else{
        echo "Erro ao enviar a mensagem.";
    }

}else{
    header("Location: index.html");
    exit;
}
?>