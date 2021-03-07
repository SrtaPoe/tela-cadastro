class Validator {
    constructor() {
        this.validations = [
            'data-min-length',
        ]
    }

    //iniciar a validação de todos os campos
    validate(form) {


        //pega os inputs
        let inputs = form.getElementsByTagaName('input');


        //HTMLCollections --> array
        let inputsArray = [...inputs];


        //loops nos inputs e validação mediante ao que for encontrado
        inputsArray.forEach(function(input) {
            //loop em todas as validações existentes
            for(let i = 0; this.validation.length > i; i++) {
                //verifica se a validação atual existe no input
                if(input.getAttribute(this.validation[i]) != null) {
                    

                    //limpando a string para virar um método
                    let method = this.validations[i].replace('data', '').replace('-', '');

                    //invoca o método
                    this[method](input, value);
                }
            }
        }, this);
    }

    //verifica se um input tem um número minimo de caracteres
    minlength(input, minValue) {
        let inputLength = input.value.length;
        let errorMessage = 'o campo precisa de pelo menos ${minValue} caracteres';
        if(inputLength < minValue) {
            this.printMessage(input, errorMessage);
        }
    }
//método que imprime a mensagem de erro
    printMessage( input, msg) {
        let template = document.querySelector('.error-validation').cloneNode(true);
        template.textContent = msg;
        let inputParent = input.parentNode;
        template.classicList.remove('template');
        inputParent.appendChild(template);
    }
}




let form = document.getElementById("register-form")
let submit = document.getElementById("btn-submit")


let validator = new Validator();

//evento que dispara as valiações
submit.addEventListener('click', function(e) {

    e.preventDefault();

    console.log('funcionou');
})