import { useState } from "react";

export function ComparingForm() {
  const [texto1, setTexto1] = useState("");
  const [texto2, setTexto2] = useState("");
  const [found, setFound] = useState(0);
  const [notFound, setNotFound] = useState(0);
  const [array1, setArray1] = useState<Array<String>>([]);
  const [array3, setArray3] = useState<Array<String>>([]);

  return (
    <form className="w-full flex flex-col justify-center gap-4">
      <label
        htmlFor="text"
        className="flex w-full font-semibold leading-tight justify-center"
      >
        Compara links entre formulario google e submetidos no GERE.
      </label>
      <div className="w-full h-full flex justify-center gap-2">
        <div className="flex flex-col w-full">
          <label htmlFor="text" className="flex justify-center">
            ID`s no GERE
          </label>
          <textarea
            rows={6}
            className="w-full resize-y rounded-lg bg-slate-200"
            value={texto1}
            autoFocus
            onChange={(event) => setTexto1(event.target.value)}
          ></textarea>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="text" className="flex justify-center">
            Links na Planilha
          </label>
          <textarea
            rows={6}
            className="w-full resize-y rounded-lg bg-slate-200"
            value={texto2}
            onChange={(event) => setTexto2(event.target.value)}
          ></textarea>
        </div>
      </div>
      <button
        type="button"
        className="rounded-lg p-4 flex bg-green-600 items-center justify-center gap-3"
        onClick={() => {
          // const tex1 = texto1.split("\n");
          // const tex2 = texto2.split("\n");

          ///
          const tex2 = texto2.split("\nhttps://drive.google.com/open?id=");
          const tex1 = texto1.split("\n");

          ///
          console.log(tex1, tex2);
          var achado = 0;
          var naoachado = 0;
          var array2 = [""];
          var array4 = [""];
          tex1.forEach((a) => {
            if (a !== "") {
              let b = a.split("\t");
              if (tex2.find((e) => e === b[0])) {
                array4.push(a);
                achado += 1;
              } else {
                array2.push(a);
                naoachado += 1;
              }
            }
            setFound(achado);
            setNotFound(naoachado);
          });
          // console.log(tex2);
          setArray1(array2);
          setArray3(array4);
        }}
      >
        Iniciar
      </button>
      <div>
        <p>Achados = {found}</p>
        <div>
          {array3.map((e) => {
            let a = e.split("\t");
            return <li>https://drive.google.com/open?id={a[0]}</li>;
          })}
        </div>
        <p>Nomes em ordem?</p>
        <div>
          {array3.map((e) => {
            let a = e.split("\t");
            return <li>{a[1]}</li>;
          })}
        </div>
        <p>Não achados = {notFound}</p>
        <div>
          {array1.map((e) => (
            <li>{e}</li>
          ))}
        </div>
      </div>
    </form>
  );
}
