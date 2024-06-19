import './App.css';
import DkvCategoryList from './componets/DkvCategoryList.js';
import { useEffect, useState } from 'react';
import axios from './api/DkvApi.js';
import DkvCategoryFrom from './componets/DkvCategoryForm.js';

function App() {
  const [DkvCategories, setDkvCategories] = useState([]);
  
  const getCategories = async () => {
    try {
      const DkvResponse = await axios.get("DkvCategory");
      setDkvCategories(DkvResponse.data);  
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  const [DkvCategoryIsFrom, setDkvCategoryIsFrom] = useState(false);

  const DkvHandleAddNew = (param) => {
    setDkvCategoryIsFrom(param);

  }

  const DkvHandleCategoryCloseForm = (param) => {
    setDkvCategoryIsFrom(param);
  }

  const DkvHandleCategorySubmit = (param) => {
    let id = DkvCategories[DkvCategories.length - 1].DkvId;
    console.log("ma: ", id);
    param.DkvId = id + 1;
    DkvCategories.push(param);
    setDkvCategories((prev) => {
      return [...prev];
    })
    setDkvCategoryIsFrom(false);
  }

  return (
    <div className="container border my-3">
      <h1>Trương Đình Tuyển Call API</h1>
      <DkvCategoryList renderDkvCateGories={DkvCategories} onAddNew={DkvHandleAddNew} />
      <hr />
      {
        DkvCategoryIsFrom === true ? <DkvCategoryFrom onCloseForm={DkvHandleCategoryCloseForm} onCategorySubmit={DkvHandleCategorySubmit} /> : ""
      }
      
    </div>
  );
}

export default App;