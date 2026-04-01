function serialno() {
    let allrow = rows.children;

    for (let i = 0; i < allrow.length; i++) {
        let sno = allrow[i].children[0];
        sno.innerText = i + 1;
    }
}

function Amount() {
    let totalValue = 0;
    let all = rows.children
    for (let i = 0; i < all.length; i++) {
        let priceText = all[i].children[2].innerText
        let value = Number(priceText.replace(/[^0-9.]/g, ""))
        totalValue += value;
    }
    total.innerText = "₹" + totalValue;
}
let rows = document.getElementById("rows");
let btn = document.querySelectorAll(".btn")
let names = document.querySelectorAll(".n");
let price = document.querySelectorAll(".price")
let total = document.getElementById("Total")
rows.innerText = "No item added"
rows.style.fontSize = "xx-large"
rows.style.justifyContent = "center"
rows.style.fontWeight = "bold"
let btn1 = document.getElementById("btn")

let addedrow = [];
btn.forEach((btns, index) => {
    btns.addEventListener("click", () => {


        if (rows.innerText == "No item added") {
            rows.innerText = ""
        }

        let new_roww = document.createElement("div")
        new_roww.classList.add("desc-row")

        let sname = document.createElement("div")
        sname.classList.add("sname")
        let sprice = document.createElement("div")
        sprice.classList.add("sp")
        let sno = document.createElement("div")
        sno.classList.add("s_no")
        let servicesname = names[index].innerText;
        let serviceprice = price[index].innerText;
        if (btns.innerText.includes("Add")) {

            sname.innerText = servicesname;
            sprice.innerText = serviceprice;

            btns.innerText = "Remove Item ➖"
            btns.style.backgroundColor = "#b0a3a398";
            btns.style.color = "red";
            new_roww.appendChild(sno)
            new_roww.appendChild(sname)
            new_roww.appendChild(sprice)
            rows.appendChild(new_roww)
            addedrow[index] = new_roww;
            serialno()
            Amount();
        } else {

            if (addedrow[index]) {
                rows.removeChild(addedrow[index])
                addedrow[index] = null;
                btns.style.color = "black"
                serialno()
                Amount()
            }

            btns.innerText = "Add Item ➕"
            btns.style.backgroundColor = "";

            if (rows.children.length === 0) {
                rows.innerText = "No item added";
            }
        }
    })
})
let phone = document.getElementById("phone");
let message = document.getElementById("Message");
let n = document.getElementById("name");
let email = document.getElementById("email");

function validateForm() {
    if (email.value.trim().length >= 10 && n.value.trim().length >= 3) {
        btn1.disabled = false;
        btn1.style.opacity = 1;
    } else {
        btn1.disabled = true;
        btn1.style.opacity = 0.5;
    }
}

email.addEventListener("input", validateForm);
n.addEventListener("input", validateForm);

btn1.addEventListener("click", () => {

    let emailVal = email.value.trim();
    let nameVal = n.value.trim();

    if (emailVal.length < 10 || nameVal.length < 3) {
        message.innerText = "Please enter valid Name and Email!";
        message.style.backgroundColor = "#ed3030";
        message.style.color = "white";
        message.classList.remove("hidden");
        return;
    }

    else if (rows.children.length === 0 || rows.innerText === "No item added") {
        message.innerText = "Please add at least one service!";
        message.style.backgroundColor = "#ed3030";
        message.style.color = "white";
        message.classList.remove("hidden");
        return;
    }
    else{
        sendMail()
        message.innerText = "Thank you! We will get back to you soon.";
        message.style.backgroundColor = "#dcfce7";
        message.style.color = "#166534";
        message.classList.remove = "hidden"
        email.value = ""
        phone.value = ""
        n.value = ""
        rows.innerText = "No Item Added"
        total.innerText = ""
        btn.forEach(btns=>{
            btns.innerText = "Add Item ➕"
            btns.style.color = "black"
        })
        setTimeout(() => {
            message.classList.add("hidden");
        }, 3000);
    }
});