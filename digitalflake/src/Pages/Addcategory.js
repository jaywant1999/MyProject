import "../css/AddCategory.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {

  const navigate= useNavigate();

  const handleBackToCat =()=>{
    navigate('/App/Category');
  }
  return (
    <>
      <div className="addcat-main-div">

        <div className="addcathead">

          <h3 id="heading">
            <FaArrowLeftLong onClick={handleBackToCat} id="arrow"/>
            Add Category
          </h3>

        </div>

        <div className="addcat-div">
            
          <div className="subdiv">
            <label className="addcatlabel">Category Name</label>
            <input className="addcatinput" />
          </div>

          <div className="subdiv">
            <label className="addcatlabel">Description</label>
            <input className="addcatinput" />
          </div>

          <div className="subdiv">
            <label className="addcatlabel">Status</label>
            <input className="addcatinput" />
          </div>

        </div>

        <div id="botbuttons">
          <button className="botbut">Cancle</button>
          <button className="botbut" >Save</button>
        </div>

      </div>
    </>
  );
};

export default AddCategory;
