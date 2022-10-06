function Slot1() {
  let values = ["😊", "🤣", "😒"];
  let random_1 = values[Math.floor(Math.random() * values.length)];
  let random_2 = values[Math.floor(Math.random() * values.length)];
  let random_3 = values[Math.floor(Math.random() * values.length)];
  let check_1 = " ";
  if (random_1 === random_2 && random_2 === random_3 ){
    check_1 = "They are same";
  }
  else{
    check_1 = "They are not same";
  }
  return (
    <>
      <p>{random_1}</p>
      <p>{random_2}</p>
      <p>{random_3}</p>
      <p className="Text_style">{check_1}</p>
    </>
  );
}

export default Slot1;
