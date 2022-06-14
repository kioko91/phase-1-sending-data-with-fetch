function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        }),
    })
        .then(resp => resp.json())
        .then(obj => {
            console.log(obj);
            const p = document.createElement("p");
            p.textContent = obj.id;
            document.body.appendChild(p)
        })
        .catch(err => {
            const p = document.createElement("p");
            p.textContent = err.message;
            document.body.appendChild(p)
        })
}
