import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import Modal from "./Modal";
import { server_calls } from "../api/server";
import { useGetData } from "../custom-hooks/FetchData";

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90, hideable: true },
    { field: 'make', headerName: "Make", flex: 1 },
    { field: 'model', headerName: "Model", flex: 1 },
    { field: 'year', headerName: "Year", flex: 1 },
    { field: 'color', headerName: "Color", flex: 1 },
    { field: 'vin', headerName: "Vin", flex: 2 },
]

const DataTable = () => {
  const [open, setOpen ] = useState(false);
  const {carData, getData } = useGetData();
  // TODO: write useGetData hook and selection model state change content
  const [ rowSelectionModel, setRowSelectionModel ] = useState<string[]>([])

  const handleOpen = () => {
    setOpen(true)
  }  

  const handleClose = () => {
    setOpen(false)
  }

  const deleteData = () => {
    server_calls.delete(rowSelectionModel[0]);
    getData();
    console.log(`Row Selection Model: ${rowSelectionModel}`);
    setTimeout( () => { window.location.reload() }, 1000);
  }

  return (
    <>
        {/* Modal */}
        <Modal 
            id={rowSelectionModel}
            open={open}
            onClose={handleClose}
        />

        {/* Buttons section for controlling CRUD */}
        <div className="flex flex-row justify-center">
            <div className="m-3 mt-5 flex justify-start align-items-center text-center font-semibold text-lg">
                <h3>Manage your inventory:</h3>
            </div>
            <div className="flex">
                <div>
                    <button
                      className="p-3 m-3 bg-orange-300 rounded hover:bg-orange-500 hover:text-white"
                      onClick={handleOpen}>
                        Add New Car
                    </button>
                </div>
                    <button
                      className="p-3 m-3 bg-orange-300 rounded hover:bg-orange-500 hover:text-white"
                      onClick={handleOpen}>
                        Update Car Info
                    </button>
                    <button
                      className="p-3 m-3 bg-orange-300 rounded hover:bg-orange-500 hover:text-white"
                      onClick={deleteData}>
                        Delete Car
                    </button>
            </div>
        </div>

        {/* Data Table Section */}
        <div 
          className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"} 
          style={{ height: 400, width: '75%', margin: "auto"}}>
            <h2 className="p-3 bg-orange-300 my-2 rounded">My Cars</h2>
            <DataGrid rows={carData} columns={columns} initialState={{pagination:{paginationModel:{pageSize:5}}}}
              checkboxSelection={true} onRowSelectionModelChange={ (item:any) => {setRowSelectionModel(item)} }/>
        </div>
    </>
  )
}

export default DataTable
