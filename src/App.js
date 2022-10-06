import Slot1 from "./Slot_1";
import Slot2 from "./Slot_2";
import Slot3 from "./Slot_3";
let App = () => {
  return <>
    <h3 className="heading_style" >Welcome To  slot matching game 😊😊 </h3>
    <div className="main_box" >
        <div className="Slot_1" >
        <h4 className="Slot_heading" >🎰SLOT 1</h4>
        <Slot1/>
        </div>
        <div className="Slot_2" >
        <h4 className="Slot_heading" >🎰SLOT 2</h4>
        <Slot2/>
        </div>
        <div className="Slot_3" >
        <h4 className="Slot_heading" >🎰SLOT 3</h4>
        <Slot3/>
        </div>
    </div>
  </>
}

export default App;
