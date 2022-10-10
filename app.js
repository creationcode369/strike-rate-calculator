const  calstrike =()=>{
  let runs = document.getElementById("runs").value;
  let balls = document.getElementById("balls").value;
  // let name =
  // document.getElementById('name').value
  let strikerate = (runs / balls) * 100;

  console.log(runs);
 
  document.getElementById(
    "showdata"
  ).innerHTML = Math.round(strikerate);
};
