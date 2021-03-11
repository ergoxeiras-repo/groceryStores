let checkboxes = document.querySelectorAll(".checkboxes");
let savedValues = JSON.parse(localStorage.getItem("savedValues")) || {};
const filterChoices = JSON.parse(localStorage.getItem("filterChoices")) || {
  offerType: [],
  storeName: []
};

console.log(document.cookie);

window.addEventListener("load", function(){
  for(savedValue in savedValues){
    document.querySelector(`#${savedValue}`).checked = true;
  }
})

for(let checkbox of checkboxes) {
  checkbox.addEventListener("click", function(){
    if(checkbox.checked){
      console.log(`the ${checkbox.id} has been checked`);
      savedValues[checkbox.id] = true;
      document.cookie = `${checkbox.id} = ${encodeURIComponent(checkbox.value)}`;
      console.log("cookie was created");
    } else{
       savedValues[checkbox.id] = undefined;
       const pathname = window.location.pathname.split("/");
       const path = pathname.slice(0, pathname.length - 1).join("/");
       document.cookie = `${checkbox.id} =; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`;
       console.log("cookie was deleted");
    }
    localStorage.setItem("savedValues", JSON.stringify(savedValues));
    localStorage.setItem("filterChoices", JSON.stringify(filterChoices));
  })
}


console.log("Local")
console.log(localStorage.savedValues);





// // Avoid scoping issues by encapsulating code inside anonymous function
// (function() {
//   // variable to store our current state
//   var cbstate;
  
//   // bind to the onload event
//   window.addEventListener('load', function() {
//     // Get the current state from localstorage
//     // State is stored as a JSON string
//     cbstate = JSON.parse(localStorage['CBState'] || '{}');
  
//     // Loop through state array and restore checked 
//     // state for matching elements
//     for(var i in cbstate) {
//       var el = document.querySelector('input[name="' + i + '"]');
//       if (el) el.checked = true;
//     }
  
//     // Get all checkboxes that you want to monitor state for
//     var cb = document.getElementsByClassName('checkboxes');
  
//     // Loop through results and ...
//     for(var i = 0; i < cb.length; i++) {
  
//       //bind click event handler
//       cb[i].addEventListener('click', function(evt) {
//         // If checkboxe is checked then save to state
//         if (this.checked) {
//           cbstate[this.name] = true;
//         }
    
//     // Else remove from state
//         else if (cbstate[this.name]) {
//           delete cbstate[this.name];
//         }
    
//     // Persist state
//         localStorage.CBState = JSON.stringify(cbstate);
//       });
//     }
//   });
// })();

// (function() {
//     // variable to store our current state
//     var cbstate;
    
//     // bind to the onload event
//     window.addEventListener('load', function() {
//       // Get the current state from localstorage
//       // State is stored as a JSON string
//       cbstate = JSON.parse(localStorage['CBState'] || '{}');
    
//       // Loop through state array and restore checked 
//       // state for matching elements
//       for(var i in cbstate) {
//         var el = document.querySelector('input[name="' + i + '"]');
//         if (el) el.checked = true;
//       }
    
//       // Get all checkboxes that you want to monitor state for
//       var cb = document.getElementsByClassName('checkboxes');
    
//       // Loop through results and ...
//       for(var i = 0; i < cb.length; i++) {
    
//         //bind click event handler
//         cb[i].addEventListener('click', function(evt) {
//           // If checkbox is checked then save to state
//           if (this.checked) {
//             cbstate[this.name] = true;
//             document.cookie = `${this.name} = ${encodeURIComponent(this.value)}`;
//             console.log("cookie was created");
//             console.log(document.cookie);
//           }  
      
          
//       // Else remove from state
//           else if (cbstate[this.name]) {
//             delete cbstate[this.name];
//             console.log("cookie is about to delete");
            // const pathname = window.location.pathname.split("/");
            // const path = pathname.slice(0, pathname.length - 1).join("/");
            // document.cookie = `${this.name} =; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`;
            // console.log("cookie was deleted");
//             console.log(document.cookie);
//           }
      
//       // Persist state
//           localStorage.CBState = JSON.stringify(cbstate);
//         });
//       }
//     });
//   })();






// // (function() {
// //   // variable to store our current state
// //   var cbstate;
  
// //   // bind to the onload event
// //   window.addEventListener('load', function() {
// //     // Get the current state from localstorage
// //     // State is stored as a JSON string
// //     cbstate = JSON.parse(localStorage['CBState'] || '{}');
  
// //     // Loop through state array and restore checked 
// //     // state for matching elements
// //     for(var i in cbstate) {
// //       var el = document.querySelector('input[name="' + i + '"]');
// //       if (el){
// //         el.checked = true;
// //         console.log(`${el} was checked`);
// //       } else {
// //         console.log("no checkboxes were selected");
// //       }
// //     }
  
// //     // Get all checkboxes that you want to monitor state for
// //     var cb = document.getElementsByClassName('save-cb-state');
// //     console.log("cb array is");
// //     console.log(cb);  
  
// //     // Loop through results and ...
// //     for(var i = 0; i < cb.length; i++) {
  
// //       //bind click event handler
// //       cb[i].addEventListener('click', function(evt) {
// //         // If checkboxe is checked then save to state
// //         if (this.checked) {
// //           cbstate[this.name] = true;
// //           console.log(`${this.name} was added`)
// //         }
    
// //     // Else remove from state
// //         else if (cbstate[this.name]) {
// //           delete cbstate[this.name];
// //           console.log(`${this.name} was deleted`)
// //         }
// //         console.log("cb state is");
// //         console.log(cbstate);  
    
// //     // Persist state
// //         localStorage.CBState = JSON.stringify(cbstate);
// //       });
// //     }
// //   });
// // })();


// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>JS Bin</title>
// </head>
// <body>
//   <div>
//     <label for="">
//       <input id="cb1" class="checkboxes" type="checkbox" name="test" value="test1">Checkbox1
//     </label>
//     <label for="">
//       <input id="cb2" class="checkboxes" type="checkbox" name="test" value="test2">Checkbox2
//     </label>
//     <label for="">
//       <input id="cb3" class="checkboxes" type="checkbox" name="test" value="test3">Checkbox3
//     </label>
//   </div>
// </body>
// </html>

// let checkboxes = document.querySelectorAll(".checkboxes");
// let savedValues = JSON.parse(localStorage.getItem("savedValues")) || {};

// window.addEventListener("load", function(){
//   for(savedValue in savedValues){
//     document.querySelector(`#${savedValue}`).checked = true;
//   }
// })

// for(let checkbox of checkboxes) {
//   checkbox.addEventListener("click", function(){
//     if(checkbox.checked){
//       console.log(`the ${checkbox.id} has been checked`);
//       savedValues[checkbox.id] = true;
//     } else{
//        savedValues[checkbox.id] = undefined;
//     }
//     localStorage.setItem("savedValues", JSON.stringify(savedValues));
//   })
// }


// console.log("Local")
// console.log(localStorage.savedValues);

// // In order not to delete parameters from req.query, we make a new object and not a copy
// const queryCopy = {...req.query};
// const excludedFields = ["page", "sort"];
// excludedFields.forEach(el => delete queryCopy[el])
// const page = parseInt(req.query.page || 1); 
// const sort = req.query.sort || "discountPrice";
// const itemsPerPage = 10;
// const offerTypes = await Offers.aggregate([
//     { $group: { _id: "$offerType" } },
//     { $sort: { "_id": 1 } }
// ]);
// const storeNames = await Offers.aggregate([
//     { $group: { _id: "$storeName" } },
//     { $sort: { "_id": 1 } }
// ]); 

// let totalProducts = await Offers.find(queryCopy).countDocuments();
// console.log(`totalProducts= ${totalProducts}`);
// console.log(`queryCopy`);
// console.log(queryCopy);
// console.log(`page= ${page}`);
// console.log(`itemsPerPage= ${itemsPerPage}`);
// let products = await Offers.find(queryCopy)
//         .skip((page - 1) * itemsPerPage)
//         .limit(itemsPerPage) 
//         .sort(sort);