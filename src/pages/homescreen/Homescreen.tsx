"use client";
import { Box, Card, Grid } from "@mui/material";
import LoginPage from "../../components/LoginPage";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { PieChart } from "react-minimal-pie-chart";
import { FormEvent, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { MuiColorInput } from "mui-color-input";

interface Expense {
  title: string;
  value: number;
  color: string;
}
export default function Homescreen() {
  const [expensesList, setExpensesList] = useState<Expense[]>([]);

  const [value, setValue] = useState("#ff32ff");

  const handleExpenses = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const title = data.get("typeExpense");
    const expenses = data.get("expenses");

    const newTitle = typeof title === "string" ? title : "";
    const newValue = typeof expenses === "string" ? +expenses : 0;

    setExpensesList((currentExpenses) => [
      ...currentExpenses,
      { title: newTitle, value: newValue, color: value },
    ]);
  };

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box padding={"3rem"} maxWidth={"1600px"}>
        <Box padding={"3rem"} display={"flex"} justifyContent={"space-between"}>
          <Grid sx={{ padding: "2rem" }}>
            <Typography variant={"h1"}>Welcome Back!</Typography>
            <Typography variant={"body1"}>
              Please sign in to see your finances
            </Typography>
          </Grid>
          <Grid>
            <LoginPage />
          </Grid>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Card
            component="form"
            sx={{ padding: "2rem", marginRight: "2rem" }}
            onSubmit={handleExpenses}
            noValidate
          >
            <Typography variant={"h3"}>Your expenses</Typography>
            <TextField
              margin="normal"
              id="typeExpense"
              label="Enter your type of expense..."
              name="typeExpense"
              fullWidth
              autoFocus
              required
            />
            <TextField
              margin="normal"
              required
              id="expenses"
              label="Enter your expenses in CHF..."
              name="expenses"
              fullWidth
              autoFocus
            />
            <MuiColorInput
              fullWidth
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
            <Button sx={{ marginTop: "1rem" }} type="submit" fullWidth>
              Add Entry
            </Button>
          </Card>
          <Card sx={{ padding: "2rem", width: "100%" }}>
            <Box display={"flex"}>
              <PieChart animationDuration={1} animate data={expensesList} />
              <Box marginLeft={"2rem"} width={"20rem"}>
                <Typography variant={"h6"}>List of your expenses:</Typography>
                {expensesList.map((expenseItem) => (
                  <Typography key={expenseItem.title} variant={"body1"}>
                    {expenseItem.title} {expenseItem.value}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
