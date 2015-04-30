var btn_rolar = document.getElementById("rolar");

btn_rolar.addEventListener("click",
                           function (e) {
                                "use strict";
                                var strResultado = "";
                                var strSoma = "";
                                var vlResultado = 0;
                                for (var i = 1; i<=document.getElementById("quantidadeD4").value; i++){
                                    var numero = Math.ceil(Math.random() * 4);
                                    vlResultado += numero;
                                    strResultado += strSoma + numero;
                                    strSoma = " + ";                                    
                                }
                                for (i = 1; i<=document.getElementById("quantidadeD6").value; i++){
                                    var numero = Math.ceil(Math.random() * 6);
                                    vlResultado += numero;
                                    strResultado += strSoma + numero;
                                    strSoma = " + ";                                    
                                }
                                for (i = 1; i<=document.getElementById("quantidadeD8").value; i++){
                                    var numero = Math.ceil(Math.random() * 8);
                                    vlResultado += numero;
                                    strResultado += strSoma + numero;
                                    strSoma = " + ";                                    
                                }
                                for (i = 1; i<=document.getElementById("quantidadeD10").value; i++){
                                    var numero = Math.ceil(Math.random() * 10);
                                    vlResultado += numero;
                                    strResultado += strSoma + numero;
                                    strSoma = " + ";                                    
                                }
                                for(i = 1; i<=document.getElementById("quantidadeD12").value; i++){
                                    var numero = Math.ceil(Math.random() * 12);
                                    vlResultado += numero;
                                    strResultado += strSoma + numero;
                                    strSoma = " + ";                                    
                                }
                                for(i = 1; i<=document.getElementById("quantidadeD20").value; i++){
                                    var numero = Math.ceil(Math.random() * 20);
                                    vlResultado += numero;
                                    strResultado += strSoma + numero;
                                    strSoma = " + ";                                    
                                }
                                if(vlResultado > 0)
                                {                                    
                                    var resultado = document.createElement("p");
                                    resultado.innerHTML = strResultado + " = " + vlResultado;
                                    var divResultado = document.getElementById("resultado");
                                    divResultado.parentElement.className = divResultado.parentElement.className.replace("oculto","");
                                    divResultado.appendChild(resultado);
                                    vlResultado = 0;
                                    strResultado = "";
                                    strSoma = "";
                                }
                           },
                           false);
 