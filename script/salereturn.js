async function getData() {
  const data = await fetch('return.json');
  const returnData = await data.json();

  // Fetch the sales return details
  let saleDetails = '';

  returnData.forEach(item => {
    saleDetails += `<tr>
      <td>${item.salesreturn_id}</td>
      <td>${item.line_items[0].warehouse_name}</td>
      <td>${item.line_items[0].name}</td>
      <td>${item.date}</td>
      <td>${item.reason}</td>
      <td>
        <select class="form-select" id="statusDropDown">
          <option value="approved" ${item.salesreturn_status === 'approved' ? 'selected' : ''}>Approved</option>
          <option value="pending" ${item.salesreturn_status === 'pending' ? 'selected' : ''}>Pending</option>
          <option value="rejected" ${item.salesreturn_status === 'rejected' ? 'selected' : ''}>Rejected</option>
        </select>
      </td>
      <!-- Update this part to pass the current item dynamically -->
      <td onclick='eyeView(${JSON.stringify(item)})'><i class="fa-solid fa-pen-to-square fa-xl"></i></td>
    </tr>`;
  });

  document.getElementById('tbody').innerHTML = saleDetails;
}

// Details modal View Box
function eyeView(item) {
  let displayDiv = document.getElementById("displayDiv");
  let mainContent = document.getElementById("mainContent"); // Select the content to blur

  displayDiv.innerHTML = '';

  let employeDiv = document.createElement("div");
  employeDiv.classList.add('popup');

  // Adding the 'open-popup' class to the created popup element
  employeDiv.classList.add('open-popup');

  // Set the content inside the popup
  employeDiv.innerHTML = `
  <div class="returnDiv">
     <h5>Sales Return ID <br> <input value=" ${item.salesreturn_id}" disabled></h5>
    <h5>Warehouse Name <br> <input value=" ${item.line_items[0].warehouse_name} "disabled></h5>
    <h5>Item Name <br> <input value=" ${item.line_items[0].name}" disabled></h5>
    <h5>Date <br> <input value=" ${item.date}" disabled></h5>
    <h5>Reason <br> <input value=" ${item.reason}" disabled></h5>
    <h5>Qty <br> <input value=" ${item.line_items[0].quantity}" disabled></h5>
    <h5>Sales Status<br> <input value=" ${item.salesreturn_status}" disabled></h5>
    <h5>Price <br> <input value=" ${item.line_items[0].rate}" disabled></h5>
    <h5>Sales Order Id <br> <input value=" ${item.salesorder_id}" disabled></h5>
     <h5>Sales Order Number <br> <input value=" ${item.salesorder_number}" disabled></h5>
   
     <br>
  </div>
   
     <div class="close">
        <button class="closeBtn" onclick="closePopup()">Close</button>
     </div>
    
  `;

  displayDiv.appendChild(employeDiv);

  setTimeout(() => {
    employeDiv.classList.add('open-popup'); // Add 'open-popup' class after a tiny delay
    mainContent.classList.add('blurred'); // Add the blur effect to the main content
  }, 10);
}

function closePopup() {
  // Find the active popup and remove the 'open-popup' class
  let activePopup = document.querySelector('.popup.open-popup');
  let mainContent = document.getElementById("mainContent");
  if (activePopup) {
    activePopup.classList.remove('open-popup');
    mainContent.classList.remove('blurred');

    setTimeout(() => {
      activePopup.remove(); // Remove element after transition completes
    }, 400);
  }
}
