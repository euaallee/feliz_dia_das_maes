import StoryCarousel from "./components/StoryCarousel"
import { SpotifyPlayer } from "./components/SpotifyPlayer"


function App() {

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="mt-6 mb-6 w-full max-w-md">
        <SpotifyPlayer />
      </div>
      <h1 className="text-3xl font-bold text-pink-400 mb-4">Feliz Dia das Mães 💖</h1>
      <StoryCarousel />
      <div className="mt-6 w-full max-w-md">
        <p className="bg-pink-100/70 text-pink-700 p-4 text-start text-base font-medium rounded-2xl shadow-lg">
          Mãe,
          <br/>
          <br/>
          Neste Dia das Mães, quero te lembrar o quanto você é essencial na minha vida.
          Você é força, carinho, acolhimento e amor incondicional.
          Cada gesto seu moldou quem eu sou, e por isso sou eternamente grato.
          Te amo mais do que palavras podem dizer.
          Feliz Dia das Mães! 💖
        </p>
      </div>
    </div>
  )
}

export default App
