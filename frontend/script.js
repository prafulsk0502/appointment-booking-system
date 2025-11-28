document.getElementById("bookingForm").addEventListener("submit", async function(e){
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        reason: document.getElementById("reason").value
    };

    const res = await fetch("http://localhost:5000/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const result = await res.json();
    document.getElementById("response").innerText = result.message;
});
