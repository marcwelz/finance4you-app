"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import { palette } from "@/data/CustomTheme";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ backgroundColor: palette.primary.main }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Finance4you
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button color="primary" variant="outlined">
            Startseite
          </Button>
          <Button variant="contained">Übersicht</Button>
          <Button variant="contained">Ausgaben</Button>
          <Button variant="contained">Mein Profil</Button>
        </Box>
        <IconButton size="large" edge="end" color="inherit" aria-label="search">
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
