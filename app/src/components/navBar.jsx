
function navBar() {
  return (
    <div>
      <nav className="flex justify-between px-4 items-center h-[50px]">
        <div>
          <h1>Weather Forecast</h1>
        </div>
        <div className="flex gap-4">
        <p>Home</p>
        <p>Contact</p>
        <p>Services</p>
        </div>
        <div>
            <input type="text" placeholder="search..." />
        </div>
      </nav>
      <hr />
    </div>
  )
}

export default navBar
