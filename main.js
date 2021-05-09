
import array from './array.js'

    $.getJSON('mock-data.json', function(data) {
        var orderBy = document.getElementById('inputState');
        var inputValue;
        document.getElementById('button-search').onclick = handleClickSearch
        orderBy.onchange = function(e){
          inputValue = e.target.value;
          console.log(inputValue);
        }
        function handleClickSearch() {
            $("#userdata tbody").empty();
            const day = document.getElementById('date-input').value
            console.log(day);
            
            function checkDate(item) {
                if(day === item.due_date){
                    return true
                }else{
                    return false
                }
            }

            data = data.filter(checkDate);
            

            if(inputValue == "value2"){
            data = data.sort(function(a,b) {
                if(Number(a.id) < Number(b.id)) {
                    return 1;
                }
                if(Number(a.id) > Number(b.id)) {
                    return -1
                }
                return 0;
            })
            
          }
          else if(inputValue == "value3"){
            data = data.sort(function(a,b) {
                if(Number(a.id) < Number(b.id)) {
                    return -1;
                }
                if(Number(a.id) > Number(b.id)) {
                    return 1
                }
                return 0;
            })
          }
            $.each( data, function(i, f) {
                var tblRow = "<tr>" + "<td>" + f.id + "</td>" +
                "<td>" + f.description + "</td>" + "<td>" + f.name + "</td>" + "<td>" + f.due_date + "</td>" + "<td>" + f.status + "</td>" + "</tr>"
                $(tblRow).appendTo("#userdata tbody");
            });
        }
        $.each( data, function(i, f) {
            var tblRow = "<tr>" + "<td>" + f.id + "</td>" +
            "<td>" + f.description + "</td>" + "<td>" + f.name + "</td>" + "<td>" + f.due_date + "</td>" + "<td>" + f.status + "</td>" + "</tr>"
            $(tblRow).appendTo("#userdata tbody");
        });
    })
      

    // $.getJSON('mock-data.json')
    //     .then(data => {
    //         var orderBy = document.getElementById('inputState');
    //             var inputValue;
    //             document.getElementById('button-search').onclick = handleClickSearch;
    //             $.each( data, function(i, f) {
    //                 var dateString = moment(f.due_date).format("YYYY-MM-DD");
    //                 f.due_date = dateString;
    //             })
    //             orderBy.onchange = function(e){
    //             inputValue = e.target.value;
    //             console.log(inputValue);
    //             }
    //             function handleClickSearch() {
    //                 $("#userdata tbody").empty();
    //                 const day = document.getElementById('date-input').value
    //                 console.log(day);
                    
    //                 function checkDate(item) {
    //                     if(day === item.due_date){
    //                         return true
    //                     }else{
    //                         return false
    //                     }
    //                 }

    //                 data = data.filter(checkDate);
                    

    //                 if(inputValue == "value2"){
    //                 data = data.sort(function(a,b) {
    //                     if(Number(a.id) < Number(b.id)) {
    //                         return 1;
    //                     }
    //                     if(Number(a.id) > Number(b.id)) {
    //                         return -1
    //                     }
    //                     return 0;
    //                     })
    //                 }
    //               else if(inputValue == "value3"){
    //                 data = data.sort(function(a,b) {
    //                     if(Number(a.id) < Number(b.id)) {
    //                         return -1;
    //                     }
    //                     if(Number(a.id) > Number(b.id)) {
    //                         return 1
    //                     }
    //                     return 0;
    //                     })
    //                 }
    //                 $.each( data, function(i, f) {
    //                     var tblRow = "<tr>" + "<td>" + f.id + "</td>" +
    //                     "<td>" + f.description + "</td>" + "<td>" + f.name + "</td>" + "<td>" + f.due_date + "</td>" + "<td>" + f.status + "</td>" + "</tr>"
    //                     $(tblRow).appendTo("#userdata tbody");
    //                 });
    //         }
    //     $.each( data, function(i, f) {
    //         var tblRow = "<tr>" + "<td>" + f.id + "</td>" +
    //         "<td>" + f.description + "</td>" + "<td>" + f.name + "</td>" + "<td>" + f.due_date + "</td>" + "<td>" + f.status + "</td>" + "</tr>"
    //         $(tblRow).appendTo("#userdata tbody");
    //     });
    // })