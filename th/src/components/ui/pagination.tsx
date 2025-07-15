import * as React from "react";
import Link from "next/link";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "@/assets/scss/components/_pagination.scss";

const Pagination = () => {
  const [sort, setSort] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  return (
    <div className="pagination-block " data-aos="fade-up">
      <div className="pagination-label">
        <div className="title">
          จำนวนทั้งหมด <span>30</span> รายการ
        </div>
      </div>
      <div className="pagination">
        <ul className="item-list">
          <li className="pagination-nav">
            <Link className="link" href="#" title="page...">
              <span className="feather icon-chevrons-left"></span>
            </Link>
          </li>
          <li className="pagination-nav">
            <Link className="link" href="#" title="page...">
              <span className="feather icon-chevron-left"></span>
            </Link>
          </li>
          <li className="active">
            <Link className="link" href="#" title="page...">
              1
            </Link>
          </li>
          <li>
            <Link className="link" href="#" title="page...">
              2
            </Link>
          </li>
          <li>
            <Link className="link" href="#" title="page...">
              3
            </Link>
          </li>
          <li>
            <Link className="link" href="#" title="page...">
              4
            </Link>
          </li>
          <li>
            <Link className="link" href="#" title="page...">
              5
            </Link>
          </li>
          <li className="jumpPage">
            <div className="select-box">
              <FormControl className="select-control" fullWidth>
                <InputLabel id="demo-simple-select-label">ไปหน้า</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sort}
                  label="Age"
                  onChange={handleChange}
                  IconComponent={() => <KeyboardArrowDownIcon />}
                >
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                </Select>
              </FormControl>
            </div>
          </li>
          <li className="pagination-nav">
            <a className="link" href="#" title="page...">
              <span className="feather icon-chevron-right"></span>
            </a>
          </li>
          <li className="pagination-nav">
            <a className="link" href="#" title="page...">
              <span className="feather icon-chevrons-right"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
