let saleReturns = {
    "salesreturn_id": 4815000000044972,
    "salesreturn_number": "RMA-00001",
    "date": "2015-05-28",
    "reason": "Damage Item",
    "custom_fields": [
        {
            "customfield_id": "46000000012845",
            "value": "Normal"
        }
    ],
    "line_items": [
        {
            "line_item_id": 4815000000044897,
            "item_id": 4815000000044100,
            "name": "Laptop-white/15inch/dell",
            "description": "Just a sample description.",
            "unit": "qty",
            "rate": 122,
            "salesorder_item_id": 4815000000044892,
            "quantity": 3,
            "non_receive_quantity": 2,
            "warehouse_id": 130426000000664020,
            "warehouse_name": "Lulu Hyper Market"
        }
    ],
    "comments": [
        {
            "comment_id": 16115000000097016,
            "salesreturn_id": 4815000000044972,
            "commented_by": "John",
            "comment_type": "string",
            "date": "2015-05-28",
            "date_description": "few seconds ago",
            "time": "2:18 PM",
            "operation_type": "Updated",
            "transaction_id": 1232423434,
            "transaction_type": "salesreturn"
        }
    ],
    "salesreturn_status": "approved",
    "salesorder_id": 4815000000044936,
    "salesorder_number": "SO-00032"
}

let saleDetails ='';

   
    saleDetails += `<tr>

          <td>${saleReturns.salesreturn_id}</td>
          <td>${saleReturns.line_items[0].warehouse_name}</td>
          <td>${saleReturns.line_items[0].name}</td>
          <td>${saleReturns.date}</td>
          <td>${saleReturns.reason}</td>

          <td>

          <select class="form-select" id="statusDropDown">
                <option value="approved" ${saleReturns.salesreturn_status === 'approved'? 'selected':'' }>Approved</option>
                <option value="pending" ${saleReturns.salesreturn_status === 'pending' ? 'selected' : ''}>Pending</option>
                <option value="rejected" ${saleReturns.salesreturn_status === 'rejected' ? 'selected' : ''}>Rejected</option>


          </select>

          </td>
          <td><i class="fa-solid fa-pen-to-square fa-xl"></i></td>
          


    
    </tr>`
 
     
    document.getElementById('tbody').innerHTML = saleDetails;