import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const PaymentMethodPopup = ({ onClose }) => {

  const navigate = useNavigate();

  return (
    <div>
      <div className=" bg-gray-200 flex items-center justify-center">
        <div className="w-full mx-auto bg-white shadow-lg p-5 text-gray-700">
          <div className="mb-10">
            <h1 className="text-center font-bold text-xl uppercase">
              Secure payment info
            </h1>
          </div>
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
            <div>
              <input
                className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[#b78944] transition-colors"
                placeholder="John Smith"
                type="text"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Card number</label>
            <div>
              <input
                className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[#b78944] transition-colors"
                placeholder="0000 0000 0000 0000"
                type="text"
              />
            </div>
          </div>
          <div className="mb-3 -mx-2 flex items-end">
            <div className="px-2 w-1/2">
              <label className="font-bold text-sm mb-2 ml-1">
                Expiration date
              </label>
              <div>
                <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[#b78944] transition-colors cursor-pointer">
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>
            </div>
            <div className="px-2 w-1/2">
              <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[#b78944] transition-colors cursor-pointer">
                <option value="2020">2023</option>
                <option value="2021">2024</option>
                <option value="2022">2025</option>
                <option value="2023">2026</option>
                <option value="2024">2027</option>
                <option value="2025">2028</option>
                <option value="2026">2029</option>
                <option value="2027">2030</option>
                <option value="2028">2031</option>
                <option value="2029">2032</option>
              </select>
            </div>
          </div>
          <div className="mb-10">
            <label className="font-bold text-sm mb-2 ml-1">Security code</label>
            <div>
              <input
                className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[#b78944] transition-colors"
                placeholder="000"
                type="text"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={()=> navigate("/")} className="block w-full max-w-xs mx-auto bg-[#b78944] hover:bg-[#8a652e]  text-white rounded-lg px-3 py-3 font-semibold">
              <i className="mdi mdi-lock-outline mr-1"></i> PAY NOW
            </button>
            <button
              className="block w-full max-w-xs mx-auto bg-black hover:bg-gray-900 text-white rounded-lg px-3 py-3 font-semibold"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodPopup;

PaymentMethodPopup.propTypes = {
  onClose: PropTypes.object.isRequired,
};
