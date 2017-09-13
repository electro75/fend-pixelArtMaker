$(function(){
    var column,row,color;
    color=$('#colorPicker').val();

//adding eventListners
    $('#submitButton').on('click',function(evt){
      evt.preventDefault();
      makeGrid(row,column);
    });
    $('#colorPicker').on('change',function(){
      color=$(this).val();
    });
    $('#add_column').on('click',function(){
      addColumn();
    });
    $('#add_row').on('click',function(){
      addRow();
    });
    $("#remove_column").on('click',function(){
      removeColumn();
    });
    $('#remove_row').on('click',function(){
      removeRow();
    });

//using event delegations for targets that don't yet exist
    $('#pixel_canvas').on('mouseenter','td',function(){
      $(this).toggleClass('active');
    }).on('mouseleave','td',function(){
      $(this).toggleClass('active');
    });
    $('#pixel_canvas').on('click','td',function(){
      $(this).css('background',color);
      });

//functions
//constructing the grid
    function makeGrid(){
        $('#pixel_canvas').children().remove();
        row=$('#input_height').val();
        column=$('#input_width').val();
        var i=0;
        while(i<row){
            $('#pixel_canvas').append('<tr></tr>');
            for(var j=0;j<column;j++){
                $('tr').last().append('<td></td>');
              }
              i++;
          }
        }
//adding a single column
      function addColumn(){
        $('tr').append('<td></td>');
        column++;
      }
//adding a single row    
      function addRow(){
        $('#pixel_canvas').append('<tr></tr>');
        var newRow=$('#pixel_canvas').children().last();
        for(var i=0;i<column;i++){
            newRow.append('<td></td>');
        }
        row++;
      }
//removing a single column    
      function removeColumn(){
        var i=0;
        var iRow=$('#pixel_canvas').children().first();
        while(i<row){
          iRow.children().last().remove();
          iRow=iRow.next();
          i++;
        }
        column--;
      }
//removing a single row    
      function removeRow(){
        $('#pixel_canvas').children().last().remove();
        row--;
      }
  });
