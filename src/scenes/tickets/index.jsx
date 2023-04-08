import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTickets } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { Link } from 'react-router-dom';


const Tickets = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.1 },
    { 
        field: "number", 
        headerName: "Номер обращения",
        cellClassName: "ticket-column--cell",
        renderCell: (params) => (
            <Link to={`/ticket/${params.value}`} style={{ color: `${colors.greenAccent[400]}` }}>{params.value}</Link>
          ) 
    },
    {
      field: "customer",
      headerName: "Инициатор",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: (params) => (
        <Link to={`/user/${params.value}`} style={{ color: `${colors.greenAccent[400]}` }}>{params.value}</Link>
      )
    },
    {
      field: "summary",
      headerName: "Заголовок",
      type: "text",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Статус",
      flex: 1,
    },
    {
      field: "priority",
      headerName: "Приоритет",
      flex: 1,
    },
    {
      field: "asignee",
      headerName: "Исполнитель",
      flex: 1,
      renderCell: (params) => (
        <Link to={`/user/${params.value}`} style={{ color: `${colors.greenAccent[400]}` }}>{params.value}</Link>
      ) 
    },
    {
      field: "dep",
      headerName: "Департамент",
      flex: 1,
      renderCell: (params) => (
        <Link to={`/dep/${params.value}`} style={{ color: `${colors.greenAccent[400]}` }}>{params.value}</Link>
      ) 
    },
    
  ];


//ZJIpwxU6azZT5Tn67rH0m4QfNms

  return (
    <Box m="20px">
      <Header
        title="Обращения"
        subtitle="Управление заявками"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataTickets}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Tickets;
