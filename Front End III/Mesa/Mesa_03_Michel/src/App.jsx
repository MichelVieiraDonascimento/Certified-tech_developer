import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>Mesa de trabalho 3</h1>
      </header>
      <body>
        <h2>Lorem ipsum</h2>
        <div id='corpo' > 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae lacus ut ligula mattis mattis. Duis lectus libero, efficitur quis posuere eu, volutpat id leo. Cras sed diam ac tortor pulvinar iaculis at id velit. Maecenas eget tellus ut nunc laoreet dictum. Quisque arcu mauris, accumsan sit amet suscipit vitae, sollicitudin at leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae lacus ut ligula mattis mattis. Duis lectus libero, efficitur quis posuere eu, volutpat id leo. Cras sed diam ac tortor pulvinar iaculis at id velit. Maecenas eget tellus ut nunc laoreet dictum. Quisque arcu mauris, accumsan sit amet suscipit vitae, sollicitudin at leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae lacus ut ligula mattis mattis. Duis lectus libero, efficitur quis posuere eu, volutpat id leo. Cras sed diam ac tortor pulvinar iaculis at id velit. Maecenas eget tellus ut nunc laoreet dictum. Quisque arcu mauris, accumsan sit amet suscipit vitae, sollicitudin at leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae lacus ut ligula mattis mattis. Duis lectus libero, efficitur quis posuere eu, volutpat id leo. Cras sed diam ac tortor pulvinar iaculis at id velit. Maecenas eget tellus ut nunc laoreet dictum. Quisque arcu mauris, accumsan sit amet suscipit vitae, sollicitudin at leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae lacus ut ligula mattis mattis. Duis lectus libero, efficitur quis posuere eu, volutpat id leo. Cras sed diam ac tortor pulvinar iaculis at id velit. Maecenas eget tellus ut nunc laoreet dictum. Quisque arcu mauris, accumsan sit amet suscipit vitae, sollicitudin at leo.</p>
        </div>
        <div id='equipe' >
          <p>Equipe: Michel Vieira</p>
        </div>
      </body>
      <footer>
        <h3>Todos os direitos reservados 2022</h3>
      </footer>


    </div>
  )
}

export default App
