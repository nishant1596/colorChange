function nishColorChange(context,timing,inf,...args) {
  $argLength=arguments.length;
  console.log($this);
  // while(true){
  $inf=''
  if ($inf==='linear') {
    $inf='linear'
  }
  for($i=0;$i<$argLength;$i++){
    $this.animate({
      "color":args[$i]
    },timing,$inf,function () {
      nishColorChange(context,timing,inf,...args)
    });
  }
}

$(document).ready(function() {
  $("#nishant").click(function () {
    $this=$(this);
    // console.log($this);
    nishColorChange($this,1000,"linear","blue","black","white");
  });
});
