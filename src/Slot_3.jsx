function Slot3(){
  let values = ["😊", "🤣", "😒"]
  let random_1 = values[Math.floor(Math.random() * values.length)];
  let random_2 = values[Math.floor(Math.random() * values.length)];
  let random_3 = values[Math.floor(Math.random() * values.length)];
  let check = " "

  if (random_1 === random_2 && random_2 === random_3 ){
    check = "They are same";
  }
  else{
    check = "They are not same";
  }
  return <>
    <p>{random_1}</p>
        <p>{random_2}</p>
        <p>{random_3}</p>
        <p className="Text_style">{check}</p>
  </>

}
export default Slot3;