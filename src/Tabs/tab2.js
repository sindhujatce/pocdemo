import React from "react";
import MaterialTable from "material-table";
import {useSelector} from 'react-redux';
export const Tab2 =(props)=> {
  const datastate=useSelector(state=>state.data);
      const columns= [
        {
          title: "S. No",
          field: "SerialNo",
          type: "numeric",
          editable: "never"
        },
        { title: "Patient Id", field: "PatientID", editable: "never" },
        {
          title: "Patient Name",
          field: "PatientName",
          type: "string",
          editable: "never"
        },
        {
          title: "Age",
          field: "Age",
          type: "numeric",
          editable: "never"
        },
        {
          title: "Phone Number",
          field: "PhoneNumber",
          type: "numeric",
          editable: "never"
        },
        {
          title: "Doctor Name",
          field: "DoctorName",
          type: "string"
        },
        {
          title: "Disease",
          field: "Disease",
          type: "string"
        },
        {
          title: "Joining Date",
          field: "JoiningDate",
          type: "date"
        },
        {
          title: "Medication",
          field: "Medication",
          type: "string"
        }
      ];
    return (
      <>
        <div style={{ marginTop: 20 }}>
        <MaterialTable
        title="Tab 2"
        columns={columns}
        data={datastate}
        editable={{
          onRowUpdate: props.onRowUpdate
        }}
      />
        </div>
      </>
    );
  }
