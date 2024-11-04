import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { memo, useEffect, useState } from "react";
import { khoaHoc, manga, thieuNhi, vanHoc } from "../../component/data";
import { Link } from "react-router-dom";

export type cateType = { id: number; name: string };

const MenuHover = ({ content }: { content: string }) => {
  const [data, setData] = useState<cateType[]>([]);
  useEffect(() => {
    switch (content) {
      case "Văn học":
        setData(vanHoc);
        break;
      case "Thiếu nhi":
        setData(thieuNhi);
        break;
      case "Manga":
        setData(manga);
        break;
      case "Khoa học":
        setData(khoaHoc);
        break;
      default:
        setData([{ id: 0, name: "" }]);
    }
  }, [content]);
  return (
    <Box className="menu">
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        {" "}
        {content}
      </Typography>
      <Box className="list-menu">
        <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(data).map((item, index) => (
            <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
              <Link to={`/${item.name}`}>{item.name}</Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default memo(MenuHover);
