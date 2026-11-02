function addCard() {

    // Get input values
    let heading = document.getElementById("heading").value;
    let paragraph = document.getElementById("paragraph").value;
    let subheading = document.getElementById("subheading").value;

    // Check empty inputs
    if (heading === "" || paragraph === "" || subheading === "") {
        alert("Please fill all the fields!");
        return;
    }

    // Create card
    let card = document.createElement("div");
    card.classList.add("card");

    // Create H2
    let h2 = document.createElement("h2");
    h2.textContent = heading;

    // Create P
    let p = document.createElement("p");
    p.textContent = paragraph;

    // Create H3
    let h3 = document.createElement("h3");
    h3.textContent = subheading;

    // Add elements to card
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(h3);

    // Display card
    document.getElementById("cardContainer").appendChild(card);

    // Clear inputs
    document.getElementById("heading").value = "";
    document.getElementById("paragraph").value = "";
    document.getElementById("subheading").value = "";
}