// ===============================
// LOCAL STORAGE SETUP
// ===============================
let students = JSON.parse(localStorage.getItem("students")) || [];
let seats = JSON.parse(localStorage.getItem("seats")) || {};

// Save to storage
function saveData() {
    localStorage.setItem("students", JSON.stringify(students));
    localStorage.setItem("seats", JSON.stringify(seats));
}

// ===============================
// ADD STUDENT
// ===============================
function addStudent() {
    let name = document.getElementById("studentName").value;
    let phone = document.getElementById("studentPhone").value;
    let fee = document.getElementById("studentFee").value;

    if (!name || !phone || !fee) {
        alert("Please fill all details!");
        return;
    }

    students.push({ name, phone, fee });
    saveData();
    updateStudentList();

    document.getElementById("studentName").value = "";
    document.getElementById("studentPhone").value = "";
    document.getElementById("studentFee").value = "";

    alert("Student Added!");
}

// ===============================
// ALLOT SEAT
// ===============================
function allotSeat() {
    let seatNo = document.getElementById("seatNumber").value;
    let name = document.getElementById("seatStudent").value;

    if (!seatNo || !name) {
        alert("Enter seat no & student name!");
        return;
    }

    seats[seatNo] = name;
    saveData();

    alert("Seat Allotted!");
}

// ===============================
// EMPTY SEAT
// ===============================
function emptySeat() {
    let seatNo = document.getElementById("seatNumber").value;

    if (!seatNo) {
        alert("Enter seat number!");
        return;
    }

    delete seats[seatNo];
    saveData();

    alert("Seat Emptied!");
}

// ===============================
// SEARCH / ENQUIRY
// ===============================
function searchData() {
    let q = document.getElementById("searchInput").value.toLowerCase();
    let resultBox = document.getElementById("searchResult");

    if (!q) {
        resultBox.innerText = "Please enter something to search";
        return;
    }

    // Check in seats
    if (seats[q]) {
        resultBox.innerText = `Seat ${q} → ${seats[q]}`;
        return