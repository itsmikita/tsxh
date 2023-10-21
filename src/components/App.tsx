import tsxh from "@/pragma"

export const App = () => {
  let clicks = 0
  const getMessage = () => `I have been clicked ${ clicks } time${ clicks++ === 1 ? '' : 's' }`
  let display = <span>{ getMessage() }</span>
  return <>
    <div class="app">
      <button>{ display }</button>
    </div>
  </>
}

