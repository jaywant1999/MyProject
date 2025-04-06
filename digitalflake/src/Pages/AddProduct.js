import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import '../css/AddProduct.css';

const AddProduct = () => {
  const navigate = useNavigate();

  const handleBackToAddPro = () => {
    navigate('/App/Product');
  };

  return (
    <>
      <div className="addpromain">
        <div className="addprohead">
          <h3 id="heading">
            <FaArrowLeftLong onClick={handleBackToAddPro} id="arrow"/>
            Add Product
          </h3>
        </div>

        <div className="AddProSub">
          
          <div className="Addsubdiv">
            <label className="addcatlabel">Category</label>
            <input className="addcatinput" />
          </div>
          
          <div className="Addsubdiv">
            <label className="addcatlabel">Product Name</label>
            <input className="addcatinput" />
          </div>
          
          <div className="Addsubdiv">
            <label className="addcatlabel">Pack Size</label>
            <input className="addcatinput" />
          </div>
          
          <div className="Addsubdiv">
            <label className="addcatlabel">MRP</label>
            <input className="addcatinput" />
          </div>
          
          <div className="Addsubdiv">
            <label className="addcatlabel">Product Images</label>
            <input className="addcatinput" />
          </div>
          
          <div className="Addsubdiv">
            <label className="addcatlabel">Status</label>
            <input className="addcatinput" />
          </div>

        </div>

        <div id="botbuttons">
          <button className="botbut">Cancle</button>
          <button className="botbut">Save</button>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
