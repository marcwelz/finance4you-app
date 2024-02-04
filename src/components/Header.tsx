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
      <Toolbar sx={{ backgroundColor: palette.primary.mutedSageGreen }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Finance4you
        </Typography>
        <Box marginLeft={"3rem"}>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
