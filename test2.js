function btn01(){
  var base_x = 5;
  var base_y = 20;
  var width = 530;
  var height = 10;

  var recodeLen = 10;

  var con = document.getElementById("content1");

  var content = '<table class="table table-striped table-bordered">'
  for (var i = 0; i < recodeLen; i++) {
    content += '<tr>';
    content += '<td>' + i + '</td>';
    content += '<td><canvas id="myCanvas' + (i+1) + '" width="600" height="30"></canvas></td>';
    content += '</tr>';
  }
  content += '</table>'
  $("#content1").html(content);
  for (var i = 0; i < recodeLen; i++) {
    const canvas = document.getElementById('myCanvas' + (i+1) );
    var ctx = canvas.getContext('2d');
    chartDraw(ctx, base_x, base_y, width, height);
    // chartBar(ctx, base_x, base_y, width, height, usage_time_list);
  }
}


// function chartBar(ctx, base_x, base_y, width, height, usage_time_list){
//     ctx.beginPath();
//     var bar_color = 'rgba(85, 240, 187, 0.75';
//     ctx.fillStyle = bar_color;
//     for(var i = 0 ; i <usage_time_list.length; i++){
//         var one_session = usage_time_list[i]
//         if(one_session).length != 2{
//             continue;
//         }
//         var start =  one_session[0][0] + (one_session[0][i]/60);
//         var start_x = start * (width / 24);
//         var end = one_session[1][0] + (one_session[1][1]/ 60);
//         var end_x = end * (width / 24);
//         ctx.fillRect(base_x - start_x, base_y, end_x - start_x, height);
//     }
// };



function chartDraw(ctx, base_x, base_y, width, height){
  ctx.strokeStyle = "#bbb";
  ctx.fillStyle = "aaa";
  ctx.font = "13px 'verdana'";
  ctx.beginPath();
  ctx.moveTo(base_x, base_y + height);
  ctx.lineTo(base_x + width, base_y + height);
  ctx.closePath();
  ctx.stroke();
  for(var i = 0 ; i <= 24; i++){


      ctx.beginPath();
      if(i % 3 === 0){
          ctx.moveTo(base_x + (width/24 * i), base_y - 7);
          ctx.lineTo(base_x + (width/24 * i), base_y + height);
      }else{
          ctx.moveTo(base_x + (width / 24 * i), base_y - 3);
          ctx.lineTo(base_x + (width / 24 * i), base_y + height);
      }
      ctx.closePath();
      ctx.stroke();
      if (i % 3 === 0){
          ctx.fillStyle = "#333";
      }else{
          ctx.fillStyle = "#aaa";
      }
      var j = 3;
      if(i / 10 >= 1){
          j = 6;
      }
      if(i % 3 === 0){
          ctx.fillText(''+ i, base_x + (width / 24 * i )-j, base_y - 10);
      }
  }
}
