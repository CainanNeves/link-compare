import { ComparingForm } from "./components/ComparingForm";
import { Header } from "./components/Header";
import "./styles/global.css";

export default function App() {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="w-full max-w-5xl px-6 flex flex-col mt-16">
        <Header />
        <ComparingForm />
      </div>
    </div>
  );
}
