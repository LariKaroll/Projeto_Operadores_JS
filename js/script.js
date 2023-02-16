function calcular(){
    // Declaração de variável
    
    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;
    var operador = document.getElementById('operador').value;
    var result;
    // Fim da área de declaração

    // algoritmo

    // escolha caso
    switch (operador){
        case 'soma': 
            result = parseInt(x) + parseInt(y);
            break;
        case 'subtração':
            result = x - y;
            break;
        case 'multiplicação':
            result = x * y;
            break;
        case 'divisão':
            result = x / y;
            break;
        default:
            alert('Operação incorreta');
            break;
    }

    alert('Resultado: '+ result );
    
}