function range(start, end, step){
  if (start === undefined || end === undefined || step === undefined || start >end || step < 0){
    var newarr = [];
  } else {
    var newarr = new Array ((Math.round(Math.abs(end - start) / step)) + 1);
    newarr[0] = start;
    for (i = 1; i < newarr.length; i++){
    newarr[i] = start + step;
    start = start + step;
  }

  }
  return newarr;
  }

  console.log(range(0, 10, 2));
  console.log(range(10, 30, 5));
  console.log(range(-5, 2, 3));

