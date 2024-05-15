"use client";
import { PaymentTransactionEntity } from "@/entities/payment-transaction.entity";
import { ApiService } from "@/components/ApiService";
import { TableHead } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";

const apiService = new ApiService();

export function TablePaymentTransaction() {
  const [data, setData] = useState<PaymentTransactionEntity[]>([]);
  const [page, setPage] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiService.paymentTransactionGetAll(page, rowsPerPage);
      setData(data.items);
      setTotalRecords(data.totalItems);
    };

    fetchData();
  }, [page, rowsPerPage]);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Transaction ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Amount (USD)</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {/* Slice the data based on the current page and rows per page */}
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.date.toLocaleDateString()}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>
                  {new Intl.NumberFormat(navigator.language, {
                    style: "currency",
                    currency: "USD",
                  }).format(row.amount)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={totalRecords}
        page={page}
        onPageChange={(event, page) => setPage(page)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(event) => handleChangeRowsPerPage(event)}
      />
    </>
  );
}
