function RestartButton () {
    
    return(
        <button className="btn restart" onClick={() => window.location.reload()}>
            Restart Game
            </button>
    )
}

export default RestartButton