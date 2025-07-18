const main = document.getElementById("counter-grids")

document.getElementById("add-counter").addEventListener("click", addCounter)

function addCounter(){
    const counterContainer = document.createElement("div")
    counterContainer.innerHTML = `<div class="counter-container">
                    <div class="container-actions">
                        <img src="https://img.icons8.com/?size=100&id=11705&format=png&color=FFFFFF" class="icon"/>
                    </div>
                    <h3>Counter 1</h3>
                    <h1>34</h1>
                    <button>Click</button>
                </div>`

    main.appendChild(counterContainer)
}


