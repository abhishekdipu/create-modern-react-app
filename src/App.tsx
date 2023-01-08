import ClickCounter from './components/ClickCounter'

export const App = () => {
  return (
    <>
      <h1>React APP running in {process.env.NODE_ENV} </h1>
      <h2>with URL : {process.env.url}</h2>
      <ClickCounter />
    </>
  )
}
