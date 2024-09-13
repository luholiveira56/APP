// // olá, mundo!
// console.log("olá, mundo!")


// // variáveis - let
// let mensagens = "olá, mundo!"


// // variáveis - const
// const mensagem = "olá, eu"
// {
//     const mensagem = "olá, Mayk!"
//     console.log(mensagem)
// }
// console.log(mensagem);


// // arrays
// let metas = ['mayk', 'alô']
// let metas01 = [2, 'mayk']
// // concatenando valores
// console.log(metas[1] + ", " + metas[0]) 

// let metas03 = {
//     value: 'ler um livro por mês',
//     checked: true,
// }

// let metas02 = [
//     metas03,
//     {
//         value: 'caminhar 20 minutos todos os dias',
//         checked: false
//     }
// ]
// console.log(metas02[1].value);

// // objetos
// let meta = {
//     value: 'ler um livro por mês',
//     address: 2,
//     checked: true,
//     isChecked: () => {
//         console.log(info)
//     }
// }
// console.log(meta.value);

// // function // arrow function
// const criarMeta = () => {}

// // named function
// function criarMetas() {}

// // while
// const start = () => {
//     let count = 0
//     while(count <= 10){
//         console.log(count)
//         count = count + 1
//     }
// }

// start()

// switch
const start = () => {

    while(true){
        let opcao = "sair"
        switch(opcao) {
            case "cadastrar":
                console.log("vamos cadastrar")
                break
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
                return
        }
    }
}

start()