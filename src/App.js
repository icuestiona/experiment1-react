import "./App.css";

const cloudsPicture = new URL("./images/Clouds.jpg", import.meta.url);

function App() {
  return (
    <section className="main-container" alt="pink and blue clouds">
      <div className="clouds-pic">
        <img src={cloudsPicture} />
      </div>
    </section>
  );
}
export default App;
