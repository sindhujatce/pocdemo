import React, { useState ,useEffect} from "react";
import {Upload,Button,Icon} from 'antd';
import "antd/dist/antd.css";
import MaterialTable from "material-table";
import {useSelector,useDispatch} from 'react-redux';
import {onUpload,Delete,Add} from '../action';
import { ExcelRenderer } from "react-excel-renderer";

 export const Tab1=(props)=> {
  const [Rows,setRows]=useState([]);
  //const [total,settotal]=useState(0);
  const columns= [
    { title: "S. No", field: "SerialNo", type: "numeric" },
    { title: "Patient Id", field: "PatientID" },
    { title: "Patient Name", field: "PatientName", type: "string" },
    {
      title: "Age",
      field: "Age",
      type: "numeric"
    },
    { title: "Phone Number", field: "PhoneNumber", type: "numeric" }
  ]

  const dispatch=useDispatch();
    const dataState = useSelector(state=>state.data);
  
    useEffect(()=>{
      console.log("useEffect called");
     // document.title=`total patient is ${total}`
    })
    const handleRowDelete = oldData =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
          dispatch(Delete(oldData));
      }, 600);
    });
    
    
  const  handleRowAdd = newData =>
    new Promise((resolve,reject)=> {
      setTimeout(() => {
        resolve();
          dispatch(Add(newData));
      }, 600);
    });
    
  let newRows = [];
  const fileHandler = fileList => {
    console.log("fileList", fileList);
    let fileObj = fileList;
    //just pass the fileObj as parameter
     ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        resp.rows.slice(1).map((row, index) => {
          if (row && row !== "undefined") {
            newRows.push({
              key: index,
              SerialNo: row[0],
              PatientID: row[1],
              PatientName: row[2],
              Age:row[3],
              Address:row[4],
              PhoneNumber:row[5]
            });
          }
          setRows(newRows);
         // settotal(newRows.length);
        });
          console.log(newRows);
          console.log(dataState);
      }
    });
    return false;
  };
    return (
      <>
         <h1 style={{color:"green"}}>Importing Excel Component</h1>
        <div>
          <Upload
            name="file"
            beforeUpload={fileHandler}
            multiple={false}>
            <Button type="primary" style={{color:"black"}}>
              <Icon type="upload" /> Click to Upload Excel File
            </Button>
          </Upload>
          <Button type="primary" style={{marginLeft:"250px"},{marginTop:"10px"}}
            onClick={()=>dispatch(onUpload(Rows))}>Import</Button>
        </div>
        <div style={{ marginTop: 20 }}>
        <MaterialTable
          title="Tab 1"
          columns={columns}
          data={dataState}
          editable={{
            onRowAdd: handleRowAdd,
            onRowUpdate: props.onRowUpdate,
            onRowDelete: handleRowDelete
          }}/>
        </div>
      </>
    );
  }
