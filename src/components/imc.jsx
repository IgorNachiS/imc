import { useState } from "react";
import "./imc.css"; 

const CalculadoraIMC = () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState(""); 
  const [imc, setImc] = useState(null);
  const [erro, setErro] = useState(""); 

  
  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (!peso || !altura || peso <= 0 || altura <= 0) {
      setErro("Por favor, insira valores válidos para peso e altura.");
      setImc(null); 
      return;
    }

   
    const imcCalculado = peso / (altura * altura);
    setImc(imcCalculado.toFixed(2));
    setErro(""); 
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Calculadora de IMC</h1>
        <div className="input-field">
          <input
            type="number"
            placeholder="Peso (kg)"
            required
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            type="number"
            placeholder="Altura (m)"
            required
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>
        <button type="submit">Calcular IMC</button>

        {erro && <p className="error-message">{erro}</p>}
        {imc && <p className="success-message">Seu IMC é: {imc}</p>}
      </form>
    </div>
  );
};

export default CalculadoraIMC;
