(function() {
    // variable to store our current state
    var cbstate;
    
    // bind to the onload event
    window.addEventListener('load', function() {
      // Get the current state from localstorage
      // State is stored as a JSON string
      cbstate = JSON.parse(localStorage['CBState'] || '{}');
    
      // Loop through state array and restore checked 
      // state for matching elements
      for(var i in cbstate) {
        var el = document.querySelector('input[name="' + i + '"]');
        if (el) el.checked = true;
      }
    
      // Get all checkboxes that you want to monitor state for
      var cb = document.getElementsByClassName('save-cb-state');
    
      // Loop through results and ...
      for(var i = 0; i < cb.length; i++) {
    
        //bind click event handler
        cb[i].addEventListener('click', function(evt) {
          // If checkbox is checked then save to state
          if (this.checked) {
            cbstate[this.name] = true;
            document.cookie = `${this.name} = ${encodeURIComponent(this.value)}`;
            console.log("cookie was created");
            console.log(document.cookie);
          }  
      
          
      // Else remove from state
          else if (cbstate[this.name]) {
            delete cbstate[this.name];
            console.log("cookie is about to delete");
            const pathname = window.location.pathname.split("/");
            const path = pathname.slice(0, pathname.length - 1).join("/");
            document.cookie = `${this.name} =; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`;
            console.log("cookie was deleted");
            console.log(document.cookie);
          }
      
      // Persist state
          localStorage.CBState = JSON.stringify(cbstate);
        });
      }
    });
  })();






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
//       if (el){
//         el.checked = true;
//         console.log(`${el} was checked`);
//       } else {
//         console.log("no checkboxes were selected");
//       }
//     }
  
//     // Get all checkboxes that you want to monitor state for
//     var cb = document.getElementsByClassName('save-cb-state');
//     console.log("cb array is");
//     console.log(cb);  
  
//     // Loop through results and ...
//     for(var i = 0; i < cb.length; i++) {
  
//       //bind click event handler
//       cb[i].addEventListener('click', function(evt) {
//         // If checkboxe is checked then save to state
//         if (this.checked) {
//           cbstate[this.name] = true;
//           console.log(`${this.name} was added`)
//         }
    
//     // Else remove from state
//         else if (cbstate[this.name]) {
//           delete cbstate[this.name];
//           console.log(`${this.name} was deleted`)
//         }
//         console.log("cb state is");
//         console.log(cbstate);  
    
//     // Persist state
//         localStorage.CBState = JSON.stringify(cbstate);
//       });
//     }
//   });
// })();